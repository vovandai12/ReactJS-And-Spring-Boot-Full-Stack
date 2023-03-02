package com.example.springbootbe.datadefault;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.example.springbootbe.config.CryptionAES;

@Configuration
public class Run implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {
        // System.out.println("url " +
        // CryptionAES.encrypt(
        // "jdbc:sqlserver://localhost;databaseName=ReactSpringBootFullStackExample;encrypt=true;trustServerCertificate=true;sslProtocol=TLSv1.2",
        // "reactSpringBootFullStackExample"));
        // System.out.println("userName " + CryptionAES.encrypt("sa",
        // "reactSpringBootFullStackExample"));
        // System.out.println("pass " + CryptionAES.encrypt("sa",
        // "reactSpringBootFullStackExample"));
    }

}
