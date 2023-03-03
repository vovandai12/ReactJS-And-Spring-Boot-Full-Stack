package com.example.springbootbe.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.springbootbe.model.User;
import com.example.springbootbe.repository.UserRepository;
import com.example.springbootbe.service.CustomUserDetailsService;

@Service
public class CustomUserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException("Not find user:" + userName);
        }
        return new CustomUserDetailsService(user.get());
    }

}
