package com.resumewebsitebuilder.controller;

import java.sql.Blob;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PersonalInformationController {

	@GetMapping("/personal")
	public String personalInformation(Model model, HttpSession session) {
		
		Long userId = (Long) session.getAttribute("userId");
		Blob blob ;
		System.out.println("userId: "+userId);
		
		if(userId==null)
			return "redirect:/error";
		else {
			model.addAttribute("userId", userId);
			return "personal_information";
		}
		
	}
	
	
}
