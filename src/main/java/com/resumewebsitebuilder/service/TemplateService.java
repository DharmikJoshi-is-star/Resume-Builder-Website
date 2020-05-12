package com.resumewebsitebuilder.service;

import java.util.ArrayList;
import java.util.List;

import com.resumewebsitebuilder.model.Certification;
import com.resumewebsitebuilder.model.Course;
import com.resumewebsitebuilder.model.Graduation;
import com.resumewebsitebuilder.model.JobInternship;
import com.resumewebsitebuilder.model.OtherSkill;
import com.resumewebsitebuilder.model.Project;
import com.resumewebsitebuilder.model.TechnicalSkill;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.model.Volunteer;

public class TemplateService {
   
	public User setupUserAccordingToView(User user)throws NullPointerException {
		List<Integer> indexList = new ArrayList<Integer>();
		
		if(user.getEducation()!=null) {
			List<Graduation> graduations = user.getEducation().getGraduations();
			indexList = new ArrayList<Integer>();
			
			for (Graduation graduation : graduations) {
				if(!graduation.getView()) {
					indexList.add( graduations.indexOf(graduation) );
				}
			}
			
			for (int index : indexList) {
				graduations.remove(index);
			}
			
			user.getEducation().setGraduations(graduations);
			
			
			List<Course> courses = user.getEducation().getCourses();
			indexList = new ArrayList<Integer>();
			
			for (Course course : courses) {
				if(!course.getView()) {
					indexList.add( courses.indexOf(course) );
				}
			}
			
			for (int index : indexList) {
				courses.remove(index);
			}
			
			user.getEducation().setCourses(courses);
			
			
			List<Certification> certifications = user.getEducation().getCertification();
			indexList = new ArrayList<Integer>();
			
			for (Certification certification : certifications) {
				if(!certification.getView()) {
					indexList.add( certifications.indexOf(certification) );
				}
			}
			
			for (int index : indexList) {
				certifications.remove(index);
			}
			
			user.getEducation().setCertification(certifications);
			
		}
		
		if(user.getSkill()!=null) {
			List<TechnicalSkill> technicalSkills = user.getSkill().getTechnicalSkills();
			indexList = new ArrayList<Integer>();
			
			for (TechnicalSkill technicalSkill : technicalSkills) {
				if(!technicalSkill.getView()) {
					indexList.add( technicalSkills.indexOf(technicalSkill) );
				}
			}
			
			for (int index : indexList) {
				technicalSkills.remove(index);
			}
			
			user.getSkill().setTechnicalSkills(technicalSkills);
			
			
			List<OtherSkill> otherSkills = user.getSkill().getOtherSkills();
			indexList = new ArrayList<Integer>();
			
			for (OtherSkill otherSkill : otherSkills) {
				if(!otherSkill.getView()) {
					indexList.add( otherSkills.indexOf(otherSkill) );
				}
			}
			
			for (int index : indexList) {
				otherSkills.remove(index);
			}
			
			user.getSkill().setOtherSkills(otherSkills);
			
		}
		
		
		if(user.getWorkExperience()!=null) {
			
			List<JobInternship> jobInternships = user.getWorkExperience().getJobInternships();
			indexList = new ArrayList<Integer>();
			
			for (JobInternship jobInternship : jobInternships) {
				if(!jobInternship.getView()) {
					indexList.add( jobInternships.indexOf(jobInternship) );
				}
			}
			
			for (int index : indexList) {
				jobInternships.remove(index);
			}
			
			user.getWorkExperience().setJobInternships(jobInternships);
			
			
			List<Volunteer> volunteers = user.getWorkExperience().getVolunteers();
			indexList = new ArrayList<Integer>();
			
			for (Volunteer volunteer : volunteers) {
				if(!volunteer.getView()) {
					indexList.add( volunteers.indexOf(volunteer) );
				}
			}
			
			for (int index : indexList) {
				volunteers.remove(index);
			}
			
			user.getWorkExperience().setVolunteers(volunteers);
			
			
			List<Project> projects = user.getWorkExperience().getProjects();
			indexList = new ArrayList<Integer>();
			
			for (Project project : projects) {
				if(!project.getView()) {
					indexList.add( projects.indexOf(project) );
				}
			}
			
			for (int index : indexList) {
				projects.remove(index);
			}
			
			user.getWorkExperience().setProjects(projects);
			
		}
		
		
		
		return user;
		
	}
	
}
