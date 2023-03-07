package com.example.springbootbe.controller.admin;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbe.exception.StorageFileNotFoundException;
import com.example.springbootbe.model.User;
import com.example.springbootbe.payload.request.ChangeInformationRequest;
import com.example.springbootbe.payload.response.MessageResponse;
import com.example.springbootbe.service.StorageService;
import com.example.springbootbe.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "api/accounts")
public class AccountController {

	@Autowired
	private UserService userService;

	@Autowired
	private StorageService storageService;

	@PostMapping(value = "/change-information")
	public ResponseEntity<?> changeInformation(@RequestBody ChangeInformationRequest changeInformationRequest) {
		User user = userService.findByUserName(changeInformationRequest.getUserName()).get();
		user.setFirstName(changeInformationRequest.getFirstName());
		user.setLastName(changeInformationRequest.getLastName());
		user.setAddress(changeInformationRequest.getAddress());
		user.setBirthDay(changeInformationRequest.getBirthDay());
		user.setGender(changeInformationRequest.getGender());
		if (!changeInformationRequest.getFile().isEmpty()) {
			UUID uuid = UUID.randomUUID();
			String uuidString = uuid.toString();
			user.setAvatar(storageService.getStorageFilename(changeInformationRequest.getFile(), uuidString));
			storageService.store(changeInformationRequest.getFile(), user.getAvatar());
		}
		Optional<User> userOld = userService.saveOrUpdate(user);
		return ResponseEntity.status(HttpStatus.OK)
				.body(new MessageResponse("Changed user " + userOld.get().getUserName()
						+ " information successfully. Please log in again"));
	}

	@GetMapping(value = "/images/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serveFile(@PathVariable String filename) {
		Resource file = storageService.loadAsResource(filename);
		return ResponseEntity.ok().header("Content-Disposition", "attachment; filename=\"" + file.getFilename() + "\"")
				.body(file);
	}

	@ExceptionHandler(StorageFileNotFoundException.class)
	public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
		return ResponseEntity.notFound().build();
	}

}