package com.resumewebsitebuilder.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashBoardController {

	@GetMapping("/dashboard")
	public String dashboard(HttpSession session, Model model) {
		
		Long userId = (Long) session.getAttribute("userId");
		
		if(userId!=null) {
			model.addAttribute("userId", userId);
			return "dashboard";
		}
		
		return "redirect:/error";
	
	}
	
}
