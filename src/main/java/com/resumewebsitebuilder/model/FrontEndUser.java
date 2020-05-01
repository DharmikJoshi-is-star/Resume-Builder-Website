package com.resumewebsitebuilder.model;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

public class FrontEndUser {

	private Long id;
	
	private String name;
	
	private String username;
	
	private String password;
	
	private String mail;
	
	private Template template;
	
	private FrontEndPersonalInformation personalInformation;
	
	private ContactInformation contactInformation;
	
	private SocialInformation socialInformation;
	
	private List<Graduation> graduations;
	
	private List<FrontEndCourse> courses;
	
	private List<FrontEndCertificate> certifications;
	
	private List<TechnicalSkill> technicalSkills;
	
	private List<OtherSkill> otherSkills;
	
	private List<FrontEndJobInternship> jobInternships;
	
	private List<FrontEndVolunteer> volunteers;
	
	private List<FrontEndProject> projects;

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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public Template getTemplate() {
		return template;
	}

	public void setTemplate(Template template) {
		this.template = template;
	}

	public FrontEndPersonalInformation getPersonalInformation() {
		return personalInformation;
	}

	public void setPersonalInformation(FrontEndPersonalInformation personalInformation) {
		this.personalInformation = personalInformation;
	}

	public ContactInformation getContactInformation() {
		return contactInformation;
	}

	public void setContactInformation(ContactInformation contactInformation) {
		this.contactInformation = contactInformation;
	}

	public List<Graduation> getGraduations() {
		return graduations;
	}

	public void setGraduations(List<Graduation> graduations) {
		this.graduations = graduations;
	}

	public List<FrontEndCourse> getCourses() {
		return courses;
	}

	public void setCourses(List<FrontEndCourse> courses) {
		this.courses = courses;
	}

	public List<FrontEndCertificate> getCertifications() {
		return certifications;
	}

	public void setCertifications(List<FrontEndCertificate> certifications) {
		this.certifications = certifications;
	}

	public List<TechnicalSkill> getTechnicalSkills() {
		return technicalSkills;
	}

	public void setTechnicalSkills(List<TechnicalSkill> technicalSkills) {
		this.technicalSkills = technicalSkills;
	}

	public List<OtherSkill> getOtherSkills() {
		return otherSkills;
	}

	public void setOtherSkills(List<OtherSkill> otherSkills) {
		this.otherSkills = otherSkills;
	}

	public List<FrontEndJobInternship> getJobInternships() {
		return jobInternships;
	}

	public void setJobInternships(List<FrontEndJobInternship> jobInternships) {
		this.jobInternships = jobInternships;
	}

	public List<FrontEndVolunteer> getVolunteers() {
		return volunteers;
	}

	public void setVolunteers(List<FrontEndVolunteer> volunteers) {
		this.volunteers = volunteers;
	}

	public List<FrontEndProject> getProjects() {
		return projects;
	}

	public void setProjects(List<FrontEndProject> projects) {
		this.projects = projects;
	}

	public SocialInformation getSocialInformation() {
		return socialInformation;
	}

	public void setSocialInformation(SocialInformation socialInformation) {
		this.socialInformation = socialInformation;
	}
	
	
		
}
