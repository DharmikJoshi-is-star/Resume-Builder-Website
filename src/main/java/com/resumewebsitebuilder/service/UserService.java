package com.resumewebsitebuilder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.UserRepository;


public class UserService {

	@Autowired
	UserRepository userRepository;

	public User addUser(User user) {
		user.setId(new Long("0"));
		return userRepository.save(user);
	}
	
}
