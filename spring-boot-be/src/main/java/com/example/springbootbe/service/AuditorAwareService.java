package com.example.springbootbe.service;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;

import com.example.springbootbe.model.User;

public class AuditorAwareService implements AuditorAware<User> {

	@Override
	public Optional<User> getCurrentAuditor() {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

}
