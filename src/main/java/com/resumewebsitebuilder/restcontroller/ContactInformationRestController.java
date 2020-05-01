package com.resumewebsitebuilder.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.ContactInformation;
import com.resumewebsitebuilder.model.Information;
import com.resumewebsitebuilder.model.SocialInformation;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.ContactInformationRepository;
import com.resumewebsitebuilder.repositories.InformationRepository;
import com.resumewebsitebuilder.repositories.SocialInformationRepository;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.service.ContactInformationService;

@RestController
public class ContactInformationRestController {

	private ContactInformationService contactInformationService = new ContactInformationService();
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ContactInformationRepository contactInformationRepository;
	
	@Autowired 
	InformationRepository informationRepository;
	
	@Autowired
	SocialInformationRepository socialInformationRepository;
	
	@PostMapping("/saveContactInformation/{uid}")
	public ContactInformation saveContactInformation(@RequestBody ContactInformation contactInformation , @PathVariable("uid") Long userId) {
		
		System.out.println("contact: "+contactInformation.getMail());
		
		User user = userRepository.getOne(userId);
		
		Information userInformation = user.getInformation();
		
		if(userInformation==null) {
			userInformation = new Information();
			userInformation = informationRepository.save(userInformation);
		}
		
		ContactInformation contactInformationOfUser = contactInformationRepository.save(contactInformation);
		
		userInformation.setContactInformation(contactInformationOfUser);
		user.setInformation(userInformation);
		userRepository.save(user);
		
		return contactInformationOfUser;
		
	}
	
	@GetMapping("/getContactInformation/{uid}")
	public ContactInformation getContactInformation(@PathVariable("uid") Long userId) {
		
		ContactInformation contactInformationOfUser = userRepository.getContactInformation(userId);
		
		if(contactInformationOfUser!=null)
			System.out.println(contactInformationOfUser.getMail());
		
		return contactInformationOfUser;
	}
	
	@PostMapping("/saveSocialInformation/{uid}")
	public SocialInformation saveSocialInformation(@RequestBody SocialInformation socialInformation , @PathVariable("uid") Long userId) {
		
		System.out.println("contact: "+socialInformation.getFacebookUrl());
		
		User user = userRepository.getOne(userId);
		
		Information userInformation = user.getInformation();
		
		if(userInformation==null) {
			userInformation = new Information();
			userInformation = informationRepository.save(userInformation);
		}
		
		SocialInformation socialInformationOfUser = socialInformationRepository.save(socialInformation);
		
		userInformation.setSocialInformation(socialInformationOfUser);
		user.setInformation(userInformation);
		userRepository.save(user);
		
		return socialInformationOfUser;
		
	}
	
	@GetMapping("/getSocialInformation/{uid}")
	public SocialInformation getSocialInformation(@PathVariable("uid") Long userId) {
		
		SocialInformation socialInformationOfUser = userRepository.getSocialInformation(userId);
		
		if(socialInformationOfUser!=null)
			System.out.println(socialInformationOfUser.getFacebookUrl());
		
		return socialInformationOfUser;
	}
	
	
	
	
}
