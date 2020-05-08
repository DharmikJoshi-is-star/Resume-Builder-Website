package com.resumewebsitebuilder.controller;

import javax.websocket.server.PathParam;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SignupController {

	@GetMapping("/sign-up")
	public String signUp(@PathParam("mail") String mail, Model model) {
		model.addAttribute("mail", mail);
		return "signup";
	}
	
	
	@GetMapping("/emailVerification")
	public String emailVerification() {
		return "email_verification";
	}
	
	
	
}
