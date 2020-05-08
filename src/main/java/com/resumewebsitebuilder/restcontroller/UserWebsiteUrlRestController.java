package com.resumewebsitebuilder.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.model.UserWebsiteUrl;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.repositories.UserWebsiteUrlRepository;

@RestController
public class UserWebsiteUrlRestController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserWebsiteUrlRepository userWebsiteUrlRepository;
	
	@PostMapping("/saveUserUrl/{uId}")
	public UserWebsiteUrl saveUserWebsiteUrl(@RequestBody UserWebsiteUrl userWebsiteUrl, @PathVariable("uId") Long userId) {
		
		userWebsiteUrl = userWebsiteUrlRepository.save(userWebsiteUrl);
		
		User user = userRepository.getOne(userId);
	
		user.setWebsiteUrl(userWebsiteUrl);
		
		userRepository.save(user);
		System.out.println(userWebsiteUrl.getUrl());
		return userWebsiteUrl;
		
	}
	
	@GetMapping("/getUserUrl/{uId}")
	public UserWebsiteUrl getUserWebsiteUrl(@PathVariable("uId") Long userId) {
		
		return userRepository.getUserWebsiteUrl(userId);
		
	}
	
	@PostMapping("/checkIfUrlExists")
	public Boolean checkIfUrlExists(@RequestBody String url) {
		
		UserWebsiteUrl userWebsiteUrl = userWebsiteUrlRepository.checkIfUrlExists(url);
		
		if(userWebsiteUrl!=null)
			return true;
		
		return false;
	}
}
