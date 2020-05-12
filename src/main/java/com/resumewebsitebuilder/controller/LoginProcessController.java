package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.service.LoginProcessService;

@Controller
public class LoginProcessController {

	private LoginProcessService loginProcessService = new LoginProcessService();
	
	@Autowired
	UserRepository userRepository;
	
	
	@GetMapping("login-process/{id}")
	public String login_with_otp(@PathVariable("id") Long userId, HttpSession session) {
		
		System.out.println("session: "+session);
		System.out.println("userId: "+userId);
		
		if( userId!=0 ) {
		
			session.setAttribute("userId", userId);
			return "redirect:/dashboard";
		}else {
			return "redirect:/";
		}
		
	}
	
}
