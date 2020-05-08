package com.resumewebsitebuilder.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private String instituteName;
	
	@Column(name = "currentlyPersuing")
	private Boolean currentStatus;
	
	@Column(name = "completionYear_expectedYear")
	private String completionYear;
	
	@Column(name = "completionMonth_expectedMonth")
	private String completionMonth;
	
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getInstituteName() {
		return instituteName;
	}

	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}

	public Boolean getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(Boolean currentStatus) {
		this.currentStatus = currentStatus;
	}

	public String getCompletionYear() {
		return completionYear;
	}

	public void setCompletionYear(String completionYear) {
		this.completionYear = completionYear;
	}

	public String getCompletionMonth() {
		return completionMonth;
	}

	public void setCompletionMonth(String completionMonth) {
		this.completionMonth = completionMonth;
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
