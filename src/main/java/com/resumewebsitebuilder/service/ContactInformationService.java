package com.resumewebsitebuilder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.resumewebsitebuilder.model.ContactInformation;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.ContactInformationRepository;
import com.resumewebsitebuilder.repositories.UserRepository;


public class ContactInformationService {

	@Autowired
	ContactInformationRepository contactInformationRepository;

	@Autowired
	UserRepository userRepository;
	
	public ContactInformation addContactInformation(ContactInformation contactInformation, Long userId) {
		
		
		User user = userRepository.getOne(userId);
		
		contactInformation.setId(new Long("0"));
		ContactInformation contactInformationOfUser = contactInformationRepository.save(contactInformation);
		
		user.getInformation().setContactInformation(contactInformationOfUser);
		
		userRepository.save(user);
		
		return contactInformationOfUser;
	}
	
	
	
}
