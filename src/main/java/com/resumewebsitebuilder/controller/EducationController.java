package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EducationController {

	@GetMapping("education")
	public String education(Model model, HttpSession session) {
		
		Long userId = (Long) session.getAttribute("userId");
		
		if(userId!=null) {
			model.addAttribute("userId", userId);
			return "education";
		}else {
			return "redirect:/error";
		}
			
		
	}
}
