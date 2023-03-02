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

import com.example.springbootbe.common.Role;
import com.example.springbootbe.model.User;
import com.example.springbootbe.payload.request.RegisterRequest;
import com.example.springbootbe.payload.response.MessageResponse;
import com.example.springbootbe.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "api/auth")
public class AuthController {

	@Autowired
	private UserService userService;

	@PostMapping(value = "/register")
	public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
		if (userService.existsByUserName(registerRequest.getUserName())) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(new MessageResponse("Login name has been used!"));
		}
		if (userService.existsByEmail(registerRequest.getEmail())) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Email has been used!"));
		}
		User user = new User();
		user.setUserName(registerRequest.getEmail());
		user.setEmail(registerRequest.getEmail());
		user.setPassword(registerRequest.getPassword());
		user.setLogin(true);
		user.setRole(Role.ROLE_ADMIN);
		Optional<User> userOld = userService.saveOrUpdate(user);
		if (userOld.isEmpty())
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new MessageResponse("INTERNAL_SERVER_ERROR"));
		return ResponseEntity.status(HttpStatus.OK)
				.body(new MessageResponse(
						userOld.get().getUserName() + " registered successfully. Please login to continue!"));
	}

}