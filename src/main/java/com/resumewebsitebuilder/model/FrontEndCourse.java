package com.resumewebsitebuilder.model;

public class FrontEndCourse {

	private Long id;
	
	private String name;
	
	private String instituteName;
	
	private Boolean currentStatus;
	
	private String completionYear;
	
	private String completionMonth;
	
	private String attachment;
	
	private String typeOfAttachment;
	
	private String url;

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

	public String getAttachment() {
		return attachment;
	}

	public void setAttachment(String attachment) {
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
	
	
}
