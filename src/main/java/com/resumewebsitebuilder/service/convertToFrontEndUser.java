package com.resumewebsitebuilder.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.resumewebsitebuilder.model.Certification;
import com.resumewebsitebuilder.model.Course;
import com.resumewebsitebuilder.model.FrontEndCertificate;
import com.resumewebsitebuilder.model.FrontEndCourse;
import com.resumewebsitebuilder.model.FrontEndJobInternship;
import com.resumewebsitebuilder.model.FrontEndProject;
import com.resumewebsitebuilder.model.FrontEndUser;
import com.resumewebsitebuilder.model.FrontEndVolunteer;
import com.resumewebsitebuilder.model.JobInternship;
import com.resumewebsitebuilder.model.Project;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.model.Volunteer;

public class convertToFrontEndUser {

	private PersonalInformationService personalInformationService = new PersonalInformationService();
	
	private JobInternshipService jobInternshipService = new JobInternshipService();

	private CourseService courseService = new CourseService();
	
	private CertificateService certificateService = new CertificateService();
	
	private VolunteerService volunteerService = new VolunteerService();
	
	private ProjectService projectService = new ProjectService();
	
	public FrontEndUser convertUserToFrontEnd(User user) throws SQLException, IOException {
		
		FrontEndUser frontEndUser = new FrontEndUser();
		
		frontEndUser.setId(user.getId());
		frontEndUser.setName(user.getName());
		frontEndUser.setMail(user.getMail());
		frontEndUser.setPassword(user.getPassword());
		frontEndUser.setTemplate(user.getTemplate());
		
		if(user.getInformation()!=null) {
			
			frontEndUser.setContactInformation(user.getInformation().getContactInformation());
			
			frontEndUser.setPersonalInformation( 
													personalInformationService.convertBackEndPersonalInfoToFrontEndPersonalInfo( 
															user.getInformation().getPersonalInformation() 
													) 
												);
			
			frontEndUser.getPersonalInformation().setPicture( "data:image/png;base64,"+frontEndUser.getPersonalInformation().getPicture() );
			
			frontEndUser.setSocialInformation( user.getInformation().getSocialInformation() );
			
		}
		
		if(user.getEducation()!=null) {
			frontEndUser.setGraduations( user.getEducation().getGraduations() );
			
			List<FrontEndCourse> courses = new ArrayList<FrontEndCourse>(); 
			for (Course course : user.getEducation().getCourses()) {
				
				FrontEndCourse c = courseService.convertBackEndCourseToFrontEndCourse( course );
				
				c.setAttachment( "data:application/pdf;base64,"+c.getAttachment() );
				
				courses.add(c);
			}
			frontEndUser.setCourses(courses);
			
			List<FrontEndCertificate> certifications = new ArrayList<FrontEndCertificate>();
			for (Certification certificate : user.getEducation().getCertification()) {
			
				FrontEndCertificate c =  certificateService.convertBackEndCertificateToFrontEndCertificate( certificate );
				
				c.setAttachment( "data:application/pdf;base64,"+c.getAttachment() );
				
				certifications.add(c);
			}
			frontEndUser.setCertifications(certifications);
			
		}
		
		if(user.getSkill()!=null) {
			
			frontEndUser.setTechnicalSkills( user.getSkill().getTechnicalSkills() );
			
			frontEndUser.setOtherSkills( user.getSkill().getOtherSkills() );
			
		}
		
		if(user.getWorkExperience()!=null) {
			List<FrontEndJobInternship> jobInternships = new ArrayList<FrontEndJobInternship>();
			for (JobInternship jobInternship : user.getWorkExperience().getJobInternships()) {
			
				FrontEndJobInternship j = jobInternshipService.BackEndJobInternshipToFrontEndJobInternship(jobInternship);
			
				j.setAttachment( "data:application/pdf;base64,"+j.getAttachment() );
				
				jobInternships.add(j);
				
			}
			frontEndUser.setJobInternships(jobInternships);
			
			List<FrontEndVolunteer> volunteers = new ArrayList<FrontEndVolunteer>();
			for (Volunteer volunteer : user.getWorkExperience().getVolunteers()) {
				
				FrontEndVolunteer v =  volunteerService.BackEndVolunteerToFrontEndVolunteer(volunteer);
			
				v.setAttachment( "data:application/pdf;base64,"+v.getAttachment() );
				
				volunteers.add(v);
			}
			frontEndUser.setVolunteers(volunteers);
			
			List<FrontEndProject> projects = new ArrayList<FrontEndProject>();
			for (Project project : user.getWorkExperience().getProjects()) {
				
				FrontEndProject p = projectService.BackEndProjectToFrontEndProject(project);
			
				p.setAttachment( "data:image/png;base64,"+p.getAttachment() );
				
				projects.add(p);
			}
			frontEndUser.setProjects(projects);
			
		}
		
		
		
		return frontEndUser;
	}
	
}
