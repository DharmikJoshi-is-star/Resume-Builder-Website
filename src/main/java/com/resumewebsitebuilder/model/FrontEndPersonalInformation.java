package com.resumewebsitebuilder.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

public class FrontEndPersonalInformation {

	private Long id;
	
	private String name;
	
	private String title;
	
	private String summary;
	
	private String picture;

	private String typePicture;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}


	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getTypePicture() {
		return typePicture;
	}

	public void setTypePicture(String typePicture) {
		this.typePicture = typePicture;
	}
	
	
}
