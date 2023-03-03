package com.example.springbootbe.controller.admin;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbe.common.Role;
import com.example.springbootbe.component.JwtTokenProvider;
import com.example.springbootbe.model.User;
import com.example.springbootbe.payload.request.LoginRequest;
import com.example.springbootbe.payload.request.RegisterRequest;
import com.example.springbootbe.payload.response.AuthResponse;
import com.example.springbootbe.payload.response.MessageResponse;
import com.example.springbootbe.service.CustomUserDetailsService;
import com.example.springbootbe.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "api/auth")
public class AuthController {

	@Autowired
	private UserService userService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider tokenProvider;

	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		CustomUserDetailsService userDetails = (CustomUserDetailsService) authentication.getPrincipal();
		String jwt = tokenProvider.generateJwtToken(authentication);
		userService.updateLastLoginDate(userDetails.getUser());
		return ResponseEntity.status(HttpStatus.OK)
				.body(new AuthResponse(jwt, userDetails.getUser().getUserName(), userDetails.getUser().getRole(),
						userDetails.getUser().getUserName() + " login successfully!"));
	}

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
		user.setUserName(registerRequest.getUserName());
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