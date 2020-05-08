package com.resumewebsitebuilder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Template {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String templateName;

	private String description;
	
	private String demoPath;
	
	private String livePath;
	
	private String imagePath;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTemplateName() {
		return templateName;
	}

	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDemoPath() {
		return demoPath;
	}

	public void setDemoPath(String demoPath) {
		this.demoPath = demoPath;
	}

	public String getLivePath() {
		return livePath;
	}

	public void setLivePath(String livePath) {
		this.livePath = livePath;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	
	
	
}
