package com.example.springbootbe.payload.response;

import java.util.Date;

import com.example.springbootbe.model.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

	private String firstName;
	private String lastName;
	private String address;
	private Date birthDay;
	private Boolean gender;
	private String imgSrc;
	private String username;

	public UserResponse(User user) {
		this.firstName = user.getFirstName() != null ? user.getFirstName() : "";
		this.lastName = user.getLastName() != null ? user.getLastName() : "";
		this.address = user.getAddress() != null ? user.getAddress() : "";
		this.birthDay = user.getBirthDay() != null ? user.getBirthDay() : new Date();
		this.gender = user.getGender();
		this.imgSrc = user.getAvatar();
		this.username = user.getUserName();
	}

}
