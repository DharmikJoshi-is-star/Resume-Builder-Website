package com.resumewebsitebuilder.model;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "volunteer")
public class Volunteer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "role")
	private String role;
	
	@Column(name = "organizationName")
	private String organization;
	
	private String startMonth;
	
	private String startYear;
	
	@Column(name = "currentlyWorkHere")
	private Boolean currentStatus;
	
	private String endMonth;
	
	private String endYear;
	
	@Column(name = "describeYourWork")
	private String description;
	
	@Lob
	private Blob attachment;

	private String typeOfAttachment;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Blob getAttachment() {
		return attachment;
	}

	public void setAttachment(Blob attachment) {
		this.attachment = attachment;
	}

	public String getTypeOfAttachment() {
		return typeOfAttachment;
	}

	public void setTypeOfAttachment(String typeOfAttachment) {
		this.typeOfAttachment = typeOfAttachment;
	}
	
	
}
