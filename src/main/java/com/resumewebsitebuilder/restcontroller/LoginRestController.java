package com.resumewebsitebuilder.restcontroller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.OTP;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.OTPRepository;
import com.resumewebsitebuilder.repositories.UserRepository;

@RestController
public class LoginRestController {

	@Autowired
	private OTPRepository oTPRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/verifyLoginOtp")
	public Long verifyLoginOtp(@RequestBody String otpCode) {
		
		System.out.println(otpCode);
		OTP otp = oTPRepository.getOtp(otpCode);
		
		System.out.println(otp);
		
		System.out.println(oTPRepository.getOtp(otpCode).getEmail());
		
		if(otp!=null) {
			System.out.println(otp.getEmail());
			
			if(otp.getEmail()!=null) {
				oTPRepository.deleteById(otp.getId());
				return userRepository.getUserIdFromMail(otp.getEmail());
			}
			
		}
		
		return new Long("0");
		
	}
	
	@PostMapping("/verifyLoginCredentials")
	public Long verifyLoginCredentials(@RequestBody User user) {
		
		String username = user.getUsername();
		String password = user.getPassword();
		
		if( userRepository.checkCredentials(username, password)!=null ) {
			Long userId = userRepository.getUserId(username, password);
			
			if(userId!=null)
				return userId;
			
			return new Long("0");
		}else {
			return new Long("0");
		}
		
	}
	
}
