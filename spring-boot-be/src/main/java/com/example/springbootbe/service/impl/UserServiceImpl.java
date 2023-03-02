package com.example.springbootbe.service.impl;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootbe.model.User;
import com.example.springbootbe.repository.UserRepository;
import com.example.springbootbe.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> saveOrUpdate(User user) {
        User userOld = userRepository.save(user);
        return Optional.of(userOld);
    }

    @Override
    public Optional<User> findByUserName(String userName) {
        if (userName.equals(""))
            return Optional.empty();
        return userRepository.findByUserName(userName);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Boolean existsByUserName(String userName) {
        return userRepository.existsByUserName(userName);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public void deleteById(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public void updateLastLoginDate(User user) {
        user.setLastLoginDate(new Date());
        userRepository.save(user);
    }

    @Override
    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }

}