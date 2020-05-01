package com.resumewebsitebuilder.controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import com.resumewebsitebuilder.model.FrontEndUser;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.model.UserWebsiteUrl;
import com.resumewebsitebuilder.repositories.TemplateRepository;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.repositories.UserWebsiteUrlRepository;
import com.resumewebsitebuilder.service.convertToFrontEndUser;

@Controller
public class TemplateController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserWebsiteUrlRepository userWebsiteUrlRepository;
	
	private convertToFrontEndUser converter = new convertToFrontEndUser();
	
	@GetMapping("/template")
	public String showTemplate(Model model,HttpSession session) {
		
		Long userId = (Long) session.getAttribute("userId");
		
		if(userId==null)
			return "redirect:/error";
		else {
			model.addAttribute("userId", userId);
			return "template";
		}
		
	}

	@GetMapping("/view")
	public String view(Model model, @RequestParam("id") String url) {
		
		//System.out.println(url);
		
		//UserWebsiteUrl w = userWebsiteUrlRepository.getIdFromUrl(url);
		//System.out.println(w);
		User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//User user = userRepository.getOne(new Long("1"));
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return user.getTemplate().getTemplateName();
	}
	
}
