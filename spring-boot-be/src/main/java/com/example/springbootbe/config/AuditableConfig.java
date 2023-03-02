package com.example.springbootbe.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.example.springbootbe.model.User;
import com.example.springbootbe.service.AuditorAwareService;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class AuditableConfig {

	@Bean
	AuditorAware<User> auditorProvider() {
		return new AuditorAwareService();
	}
}