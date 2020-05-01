package com.resumewebsitebuilder.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.resumewebsitebuilder.repositories.UserRepository;

public class LoginProcessService {

	@Autowired
	UserRepository userRepository;
	
	public boolean checkCredentials(String username, String password) {
		Long uid = new Long("0");
		userRepository.getOne(uid);
		uid = userRepository.checkCredentials(username, password);
		if(uid!=null)
			return true;
		else
			return false;
	}

	public Long getUserId(String username, String password) {
		return userRepository.getUserId(username, password);
	}

}
