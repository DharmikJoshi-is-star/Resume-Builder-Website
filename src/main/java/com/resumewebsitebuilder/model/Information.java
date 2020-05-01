package com.resumewebsitebuilder.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Information {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne
	private ContactInformation contactInformation;
	
	@OneToOne
	private PersonalInformation personalInformation;
	
	@OneToOne
	private SocialInformation socialInformation;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ContactInformation getContactInformation() {
		return contactInformation;
	}

	public void setContactInformation(ContactInformation contactInformation) {
		this.contactInformation = contactInformation;
	}

	public PersonalInformation getPersonalInformation() {
		return personalInformation;
	}

	public void setPersonalInformation(PersonalInformation personalInformation) {
		this.personalInformation = personalInformation;
	}

	public SocialInformation getSocialInformation() {
		return socialInformation;
	}

	public void setSocialInformation(SocialInformation socialInformation) {
		this.socialInformation = socialInformation;
	}
	
	
}
