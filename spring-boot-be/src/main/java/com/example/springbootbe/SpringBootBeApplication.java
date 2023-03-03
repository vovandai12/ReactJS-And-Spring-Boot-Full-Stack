package com.example.springbootbe;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.springbootbe.service.StorageService;

@SpringBootApplication
public class SpringBootBeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootBeApplication.class, args);
		// System.out.println("url " +
		// CryptionAES.encrypt(
		// "jdbc:sqlserver://localhost;databaseName=ReactSpringBootFullStackExample;encrypt=true;trustServerCertificate=true;sslProtocol=TLSv1.2",
		// "reactSpringBootFullStackExample"));
		// System.out.println("userName " + CryptionAES.encrypt("sa",
		// "reactSpringBootFullStackExample"));
		// System.out.println("pass " + CryptionAES.encrypt("sa",
		// "reactSpringBootFullStackExample"));
	}

	@Resource
	private StorageService storageService;

	@Override
	public void run(String... args) throws Exception {
		storageService.init();
	}

}
