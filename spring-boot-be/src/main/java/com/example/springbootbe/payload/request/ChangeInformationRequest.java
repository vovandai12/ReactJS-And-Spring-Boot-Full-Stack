package com.example.springbootbe.payload.request;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChangeInformationRequest {

	private String userName;
	private String firstName;
	private String lastName;
	private String address;
	private Date birthDay;
	private Boolean gender;
	private MultipartFile file;

}
