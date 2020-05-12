package com.resumewebsitebuilder.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.PredefinedCity;
import com.resumewebsitebuilder.model.PredefinedCountry;
import com.resumewebsitebuilder.model.PredefinedCourse;
import com.resumewebsitebuilder.model.PredefinedFieldOfStudy;
import com.resumewebsitebuilder.model.PredefinedJobTitle;
import com.resumewebsitebuilder.model.PredefinedSkill;
import com.resumewebsitebuilder.model.PredefinedState;
import com.resumewebsitebuilder.repositories.PredefinedCityRepository;
import com.resumewebsitebuilder.repositories.PredefinedCountryRepository;
import com.resumewebsitebuilder.repositories.PredefinedCourseRepository;
import com.resumewebsitebuilder.repositories.PredefinedFieldOfStudyRepository;
import com.resumewebsitebuilder.repositories.PredefinedJobTitleRepository;
import com.resumewebsitebuilder.repositories.PredefinedSkillRespository;
import com.resumewebsitebuilder.repositories.PredefinedStateRepository;

@RestController
public class PredefinedDataRestController {

	@Autowired
	private PredefinedCityRepository predefinedCityRepository;
	
	@Autowired
	private PredefinedStateRepository predefinedStateRepository;
	
	@Autowired
	private PredefinedCountryRepository predefinedCountryRepository;
	
	@Autowired
	private PredefinedCourseRepository predefinedCourseRepository;
	
	@Autowired
	private PredefinedSkillRespository predefinedSkillRespository;
	
	@Autowired
	private PredefinedFieldOfStudyRepository predefinedFieldOfStudyRepository;
	
	@Autowired
	private PredefinedJobTitleRepository predefinedJobTitleRepository;
	
	
	@GetMapping("/getAllSkill")
	public List<PredefinedSkill> getAllSkill() {
		return predefinedSkillRespository.findAll();
	}
	
	@GetMapping("/getAllCourse")
	public List<PredefinedCourse> getAllCourse() {
		return predefinedCourseRepository.findAll();
	}
	
	@GetMapping("/getAllJobTitle")
	public List<PredefinedJobTitle> getAllJobTitle() {
		return predefinedJobTitleRepository.findAll();
	}
	
	@GetMapping("/getAllFieldOfStudy")
	public List<PredefinedFieldOfStudy> getAllFieldOfStudy() {
		return predefinedFieldOfStudyRepository.findAll();
	}
	
	@GetMapping("/getAllCountry")
	public List<PredefinedCountry> getAllCountry() {
		return predefinedCountryRepository.findAll();
	}
	
	@GetMapping("/getStatesByCountryId/{cId}")
	public List<PredefinedState> getStatesByCountryId(@PathVariable("cId") Long cId){
		return predefinedStateRepository.getStatesByCountryId(cId);
	}
	
	@GetMapping("/getCitiesByStateId/{sId}")
	public List<PredefinedCity> getCitiesByStateId(@PathVariable("sId") Long sId){
		return predefinedCityRepository.getStatesByStateId(sId);
	}
	
}
