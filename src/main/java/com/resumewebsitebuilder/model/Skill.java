package com.resumewebsitebuilder.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToMany(orphanRemoval = true, cascade = CascadeType.REMOVE)
	private List<TechnicalSkill> technicalSkills;
	
	@OneToMany(orphanRemoval = true, cascade = CascadeType.REMOVE)
	private List<OtherSkill> otherSkills;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	
}
