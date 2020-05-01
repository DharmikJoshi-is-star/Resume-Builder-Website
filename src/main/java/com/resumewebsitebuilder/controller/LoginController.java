package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
  
	@GetMapping("/")
	public String showIndex(Model model) {
		model.addAttribute("messgage","welcome");
		return "login";  
	}
	
	@GetMapping("/login")
	public String showLogin(Model model) {
		model.addAttribute("messgage","welcome");
		return "login";  
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("userId", null);
		return "redirect:/";
	}
}
