package com.resumewebsitebuilder.model;

public class FrontEndProject {

	private Long id;
	
	private String name;
	
	private String startMonth;
	
	private String startYear;
	
	private Boolean currentStatus;
	
	private String endMonth;
	
	private String endYear;
	
	private String company;
	
	private String description;
	
	private String projectUrl;
	
	private String sourceUrl;
	
	private String attachment;

	private String typeOfAttachment;

	private Boolean view;
	
	public Boolean getView() {
		return view;
	}

	public void setView(Boolean view) {
		this.view = view;
	}
	
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

	public String getStartMonth() {
		return startMonth;
	}

	public void setStartMonth(String startMonth) {
		this.startMonth = startMonth;
	}

	public String getStartYear() {
		return startYear;
	}

	public void setStartYear(String startYear) {
		this.startYear = startYear;
	}

	public Boolean getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(Boolean currentStatus) {
		this.currentStatus = currentStatus;
	}

	public String getEndMonth() {
		return endMonth;
	}

	public void setEndMonth(String endMonth) {
		this.endMonth = endMonth;
	}

	public String getEndYear() {
		return endYear;
	}

	public void setEndYear(String endYear) {
		this.endYear = endYear;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProjectUrl() {
		return projectUrl;
	}

	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}

	public String getSourceUrl() {
		return sourceUrl;
	}

	public void setSourceUrl(String sourceUrl) {
		this.sourceUrl = sourceUrl;
	}

	public String getAttachment() {
		return attachment;
	}

	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}

	public String getTypeOfAttachment() {
		return typeOfAttachment;
	}

	public void setTypeOfAttachment(String typeOfAttachment) {
		this.typeOfAttachment = typeOfAttachment;
	}

	
}
