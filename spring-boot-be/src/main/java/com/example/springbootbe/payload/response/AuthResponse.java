package com.example.springbootbe.payload.response;

import com.example.springbootbe.common.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
	private String token;
	private String username;
	private Role role;
	private String message;
}
