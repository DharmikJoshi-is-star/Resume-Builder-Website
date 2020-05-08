package com.resumewebsitebuilder.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Certification {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "certificateTitle")
	private String title;
	
	private String instituteName;
	
	@Column(name = "certificationYear")
	private String year;
	
	@Column(name = "certificationMonth")
	private String month;
	
	@Lob
	private Blob attachment;
	
	private String typeOfAttachment;
	
	private String url;

	@Column(name = "view" ,nullable = false, columnDefinition = "boolean default true")
	private Boolean view = true;
	 
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getInstituteName() {
		return instituteName;
	}

	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public Blob getAttachment() {
		return attachment;
	}

	public void setAttachment(Blob attachment) {
		this.attachment = attachment;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTypeOfAttachment() {
		return typeOfAttachment;
	}

	public void setTypeOfAttachment(String typeOfAttachment) {
		this.typeOfAttachment = typeOfAttachment;
	}

	public Boolean getView() {
		return view;
	}

	public void setView(Boolean view) {
		this.view = view;
	}
	
	
}
