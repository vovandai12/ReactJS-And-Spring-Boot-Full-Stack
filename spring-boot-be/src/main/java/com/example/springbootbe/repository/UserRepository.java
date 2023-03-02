package com.example.springbootbe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springbootbe.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByUserName(String userName);

    Boolean existsByUserName(String username);

    Boolean existsByEmail(String email);

}