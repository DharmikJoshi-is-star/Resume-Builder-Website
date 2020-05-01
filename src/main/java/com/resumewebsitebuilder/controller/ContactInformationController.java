package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContactInformationController {

	@GetMapping("contact")
	public String contactInformation(Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("userId");
		
		if(userId!=null) {
			model.addAttribute("userId", userId);
			return "contact_information";
		}else {
			return "redirect:/error";
		}
		
		
	}
	
}
