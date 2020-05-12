package com.resumewebsitebuilder.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PredefinedCourse {

	@Id
	String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
