package com.example.springbootbe.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.springbootbe.model.User;
import com.example.springbootbe.payload.response.ListResponse;
import com.example.springbootbe.service.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping(value = "")
	public ResponseEntity<ListResponse<User>> findAll() {
		ListResponse<User> data = new ListResponse<>();
		data.setData(userService.findAll());
		return ResponseEntity.status(HttpStatus.OK).body(data);
	}

}