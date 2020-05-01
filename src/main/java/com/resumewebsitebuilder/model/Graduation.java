package com.resumewebsitebuilder.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Graduation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "typeofeducation")
	private String type;
	
	private String universityName;
	
	private String country;
	
	private String state;
	
	private String city;
	
	@Column(name = "degree_program")
	private String degree;
	
	private String filedOfStudy;
	
	@Column(name = "averageGrade_Percentage")
	private String grade;
	
	@Column(name = "currentlyPersuing")
	private Boolean currentStatus;
	
	@Column(name = "completionYear_expectedYear")
	private String completionYear;
	
	@Column(name = "completionMonth_expectedMonth")
	private String completionMonth;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUniversityName() {
		return universityName;
	}

	public void setUniversityName(String universityName) {
		this.universityName = universityName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getFiledOfStudy() {
		return filedOfStudy;
	}

	public void setFiledOfStudy(String filedOfStudy) {
		this.filedOfStudy = filedOfStudy;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
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
	
	
}
