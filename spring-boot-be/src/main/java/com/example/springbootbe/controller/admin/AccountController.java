package com.example.springbootbe.controller.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbe.model.User;
import com.example.springbootbe.payload.request.ChangeInformationRequest;
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
	public ResponseEntity<?> changeInformation(@RequestBody ChangeInformationRequest ChangeInformationRequest) {
		User user = userService.findByUserName(ChangeInformationRequest.getUserName()).get();
		user.setFirstName(ChangeInformationRequest.getFirstName());
		user.setLastName(ChangeInformationRequest.getLastName());
		user.setAddress(ChangeInformationRequest.getAddress());
		user.setBirthDay(ChangeInformationRequest.getBirthDay());
		user.setGender(ChangeInformationRequest.getGender());
		return ResponseEntity.status(HttpStatus.OK).body("");
	}

}