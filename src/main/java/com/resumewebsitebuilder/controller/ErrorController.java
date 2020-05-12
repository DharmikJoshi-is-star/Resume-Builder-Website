package com.resumewebsitebuilder.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller 
public class ErrorController {

	@GetMapping("/error")
	public String error() {   
		return "error";
	}
}
