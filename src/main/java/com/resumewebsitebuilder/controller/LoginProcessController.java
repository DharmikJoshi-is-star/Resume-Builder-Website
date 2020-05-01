package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.service.LoginProcessService;

@Controller
public class LoginProcessController {

	private LoginProcessService loginProcessService = new LoginProcessService();
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/loginProcess")
	public String loginProcess(Model model, HttpServletRequest request, HttpSession session) {
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		if( userRepository.checkCredentials(username, password)!=null ) {
			Long userId = userRepository.getUserId(username, password);
			session.setAttribute("userId", userId);
			return "redirect:/template";
		}else {
			return "redirect:/";
		}
		
		
		
	}
	
}
