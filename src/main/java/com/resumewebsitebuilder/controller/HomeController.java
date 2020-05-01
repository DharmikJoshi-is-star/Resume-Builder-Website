package com.resumewebsitebuilder.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/appName")
    public String homePage(Model model) {
        model.addAttribute("appName", "Dharmik");
        return "home";
    }
	
	@GetMapping("/hey")
    public String activity(Model model) {
        model.addAttribute("appName", "yes");
        return "home";
    }
	
	@GetMapping("/welcome")
	public String welcome(Model model) {
		return "test";
	}
	
}
