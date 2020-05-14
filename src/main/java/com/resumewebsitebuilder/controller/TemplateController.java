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
import com.resumewebsitebuilder.service.TemplateService;
import com.resumewebsitebuilder.service.convertToFrontEndUser;

@Controller
public class TemplateController {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserWebsiteUrlRepository userWebsiteUrlRepository;
	
	private convertToFrontEndUser converter = new convertToFrontEndUser();
	
	private TemplateService templateService = new TemplateService();
	
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
		
		user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			System.out.println("Name: "+fronEndUser.getName());
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return user.getTemplate().getLivePath();
	}
	
	@GetMapping("/testTemplate2")
	public String testTemplate2(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template1/index";
	}
	
	@GetMapping("/testTemplate3")
	public String testTemplate3(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template3/index";
	}
	
	@GetMapping("/testTemplate4")
	public String testTemplate4(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template4/index";
	}
	
	@GetMapping("/testTemplate5")
	public String testTemplate5(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template5/index";
	}
	
	@GetMapping("/testTemplate6")
	public String testTemplate6(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template6/index";
	}
	
	@GetMapping("/testTemplate7")
	public String testTemplate7(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template7/index";
	}
	
	@GetMapping("/testTemplate8")
	public String testTemplate8(Model model) {
		
		//User user = userRepository.getUserIdFromuserUserUrl(url);
		
		//user = templateService.setupUserAccordingToView(user);
		
		//User user = userRepository.getOne(new Long("1"));
		
		User user = userRepository.getOne(new Long("1"));
		
		//user = templateService.setupUserAccordingToView(user);
		
		FrontEndUser fronEndUser;
		try {
			fronEndUser = converter.convertUserToFrontEnd(user);
			
			model.addAttribute("user", fronEndUser);
			
		} catch (SQLException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "template_folder/template8/index";
	}
	
}
