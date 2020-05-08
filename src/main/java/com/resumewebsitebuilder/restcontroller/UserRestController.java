package com.resumewebsitebuilder.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.service.UserService;

@RestController
public class UserRestController {

	private UserService userService;
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/addUser")
	public Long addUser(@RequestBody User user) {
		user =  userService.addUser(user);
		return user.getId();
	}
	
	@PostMapping("/checkIfUsernameExists")
	public Boolean checkIfUsernameExists(@RequestBody String username) {
		
		User user = userRepository.checkIfUsernameExists(username);
		
		if(user!=null) {
			return true;
		}
		
		return false;
	}
	
}
