package com.resumewebsitebuilder.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.resumewebsitebuilder.model"})  
@EnableJpaRepositories(basePackages = {"com.resumewebsitebuilder.repositories"})
@SpringBootApplication(scanBasePackages = {"com.resumewebsitebuilder.controller","com.resumewebsitebuilder.restcontroller"})
public class ResumeWebsiteBuilderApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResumeWebsiteBuilderApplication.class, args);
	}

}
