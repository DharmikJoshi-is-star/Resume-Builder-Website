package com.resumewebsitebuilder.restcontroller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.Certification;
import com.resumewebsitebuilder.model.Course;
import com.resumewebsitebuilder.model.FrontEndCertificate;
import com.resumewebsitebuilder.model.FrontEndCourse;
import com.resumewebsitebuilder.model.FrontEndJobInternship;
import com.resumewebsitebuilder.model.FrontEndProject;
import com.resumewebsitebuilder.model.FrontEndVolunteer;
import com.resumewebsitebuilder.model.Graduation;
import com.resumewebsitebuilder.model.JobInternship;
import com.resumewebsitebuilder.model.OtherSkill;
import com.resumewebsitebuilder.model.Project;
import com.resumewebsitebuilder.model.TechnicalSkill;
import com.resumewebsitebuilder.model.Volunteer;
import com.resumewebsitebuilder.repositories.CertificateRepository;
import com.resumewebsitebuilder.repositories.CourseRepository;
import com.resumewebsitebuilder.repositories.EducationRepository;
import com.resumewebsitebuilder.repositories.GraduationRepository;
import com.resumewebsitebuilder.repositories.JobInternshipRepository;
import com.resumewebsitebuilder.repositories.OtherSkillRepository;
import com.resumewebsitebuilder.repositories.ProjectRepository;
import com.resumewebsitebuilder.repositories.TechnicalSkillRepository;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.repositories.VolunteerRepository;
import com.resumewebsitebuilder.service.CertificateService;
import com.resumewebsitebuilder.service.CourseService;
import com.resumewebsitebuilder.service.JobInternshipService;
import com.resumewebsitebuilder.service.ProjectService;
import com.resumewebsitebuilder.service.VolunteerService;

@RestController
public class DashBoardRestController {


	private CourseService courseService = new CourseService();
	
	private CertificateService certificateService = new CertificateService();
	
	private JobInternshipService jobInternshipService = new JobInternshipService();
	
	private VolunteerService volunteerService = new VolunteerService();
	
	private ProjectService projectService = new ProjectService();
	
	@Autowired
	GraduationRepository graduationRepository;
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	CertificateRepository certificateRepository;
	
	@Autowired
	JobInternshipRepository jobInternshipRepository;
	
	@Autowired
	VolunteerRepository volunteerRepository;
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Autowired
	TechnicalSkillRepository technicalSkillRepository;
	
	@Autowired
	OtherSkillRepository otherSkillRepository;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	EducationRepository educationRepository;
	
	@PostMapping("/changeViewGraduation/{graduationId}")
	public Long changeViewGraduation(@PathVariable("graduationId") Long graduationId) {
		
		Graduation graduation = graduationRepository.getOne(graduationId);
		
		if(graduation!=null) {
			Boolean view = graduation.getView();
			
			if(view==true) {
				graduation.setView(false);
				graduation = graduationRepository.save(graduation);
				System.out.println("hello1 : "+graduation.getId());
				return graduation.getId();
			}else {
				graduation.setView(true);
				graduation = graduationRepository.save(graduation);
				System.out.println("hello2: "+graduation.getId());
				return graduation.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@PostMapping("/changeViewCourse/{courseId}")
	public Long changeViewCourse(@PathVariable("courseId") Long courseId) {
		
		Course course = courseRepository.getOne(courseId);
		
		if(course!=null) {
			Boolean view = course.getView();
			
			if(view==true) {
				course.setView(false);
				course = courseRepository.save(course);
				System.out.println("hello1 : "+course.getId());
				return course.getId();
			}else {
				course.setView(true);
				course = courseRepository.save(course);
				System.out.println("hello2: "+course.getId());
				return course.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@PostMapping("/changeViewCertification/{certificateId}")
	public Long changeViewCertification(@PathVariable("certificateId") Long certificateId) {
		
		Certification certification = certificateRepository.getOne(certificateId);
		
		if(certification!=null) {
			Boolean view = certification.getView();
			
			if(view==true) {
				certification.setView(false);
				certification = certificateRepository.save(certification);
				System.out.println("hello1 : "+certification.getId());
				return certification.getId();
			}else {
				certification.setView(true);
				certification = certificateRepository.save(certification);
				System.out.println("hello2: "+certification.getId());
				return certification.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@PostMapping("/changeViewJobInternship/{jobInternshipId}")
	public Long changeViewJobInternship(@PathVariable("jobInternshipId") Long jobInternshipId) {
		
		JobInternship jobInternship = jobInternshipRepository.getOne(jobInternshipId);
		
		if(jobInternship!=null) {
			Boolean view = jobInternship.getView();
			
			if(view==true) {
				jobInternship.setView(false);
				jobInternship = jobInternshipRepository.save(jobInternship);
				System.out.println("hello1 : "+jobInternship.getId());
				return jobInternship.getId();
			}else {
				jobInternship.setView(true);
				jobInternship = jobInternshipRepository.save(jobInternship);
				System.out.println("hello2: "+jobInternship.getId());
				return jobInternship.getId();
			}
		 
		}
		
		return null;
		
	}

	@PostMapping("/changeViewVolunteer/{volunteerId}")
	public Long changeViewVolunteer(@PathVariable("volunteerId") Long volunteerId) {
		
		Volunteer volunteer = volunteerRepository.getOne(volunteerId);
		
		if(volunteer!=null) {
			Boolean view = volunteer.getView();
			
			if(view==true) {
				volunteer.setView(false);
				volunteer = volunteerRepository.save(volunteer);
				System.out.println("hello1 : "+volunteer.getId());
				return volunteer.getId();
			}else {
				volunteer.setView(true);
				volunteer = volunteerRepository.save(volunteer);
				System.out.println("hello2: "+volunteer.getId());
				return volunteer.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@PostMapping("/changeViewProject/{projectId}")
	public Long changeViewProject(@PathVariable("projectId") Long projectId) {
		
		Project project = projectRepository.getOne(projectId);
		
		if(project!=null) {
			Boolean view = project.getView();
			
			if(view==true) {
				project.setView(false);
				project = projectRepository.save(project);
				System.out.println("hello1 : "+project.getId());
				return project.getId();
			}else {
				project.setView(true);
				project = projectRepository.save(project);
				System.out.println("hello2: "+project.getId());
				return project.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@PostMapping("/changeViewTechnicalSkill/{technicalSkillId}")
	public Long changeViewTechnicalSkill(@PathVariable("technicalSkillId") Long technicalSkillId) {
		
		TechnicalSkill technicalSkill = technicalSkillRepository.getOne(technicalSkillId);
		
		if(technicalSkill!=null) {
			Boolean view = technicalSkill.getView();
			
			if(view==true) {
				technicalSkill.setView(false);
				technicalSkill = technicalSkillRepository.save(technicalSkill);
				System.out.println("hello1 : "+technicalSkill.getId());
				return technicalSkill.getId();
			}else {
				technicalSkill.setView(true);
				technicalSkill = technicalSkillRepository.save(technicalSkill);
				System.out.println("hello2: "+technicalSkill.getId());
				return technicalSkill.getId();
			}
		 
		}
		
		return null;
		
	}
	
	
	@PostMapping("/changeViewOtherSkill/{otherSkillId}")
	public Long changeViewOtherSkill(@PathVariable("otherSkillId") Long otherSkillId) {
		
		OtherSkill otherSkill = otherSkillRepository.getOne(otherSkillId);
		
		if(otherSkill!=null) {
			Boolean view = otherSkill.getView();
			
			if(view==true) {
				otherSkill.setView(false);
				otherSkill = otherSkillRepository.save(otherSkill);
				System.out.println("hello1 : "+otherSkill.getId());
				return otherSkill.getId();
			}else {
				otherSkill.setView(true);
				otherSkill = otherSkillRepository.save(otherSkill);
				System.out.println("hello2: "+otherSkill.getId());
				return otherSkill.getId();
			}
		 
		}
		
		return null;
		
	}
	
	@GetMapping("/getAllCoursesDashboard/{userId}")
	public List<FrontEndCourse> getAllCourses(@PathVariable("userId") Long userId) {
		
		List<Course> courses = userRepository.getAllCourses(userId);
		
		List<FrontEndCourse> frontEndCourses = new ArrayList<FrontEndCourse>();
		
		try {
			
			for (Course course : courses) {
				course.setAttachment(null);
				frontEndCourses.add(courseService.convertBackEndCourseToFrontEndCourse(course));
			}
			
			return frontEndCourses;
			
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}

	
	@GetMapping("/getAllCertificationsDashboard/{userId}")
	public List<FrontEndCertificate> getAllCertifications(@PathVariable("userId") Long userId) {
		
		List<Certification> certifications = userRepository.getAllCertifications(userId);
		
		List<FrontEndCertificate> frontEndCertifications = new ArrayList<FrontEndCertificate>();
		
		try {
			
			for (Certification certification : certifications) {
				certification.setAttachment(null);
				frontEndCertifications.add(certificateService.convertBackEndCertificateToFrontEndCertificate(certification));
			}
			
			return frontEndCertifications;
			
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}
	
	@GetMapping("/getAllJobInternshipDashboard/{uId}")
	public List<FrontEndJobInternship> getAllJobInternship(@PathVariable("uId") Long userId){
		
			try {
				
					List<JobInternship> jobInternships = userRepository.getAllJobInternship(userId);
					List<FrontEndJobInternship> fronEndJobInternships = new ArrayList<FrontEndJobInternship>();
					
					for (JobInternship jobInternship : jobInternships) {
					
						jobInternship.setAttachment(null);
						fronEndJobInternships.add( jobInternshipService.BackEndJobInternshipToFrontEndJobInternship(jobInternship) );
					
					}
					
					return fronEndJobInternships;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}
	
	@GetMapping("/getAllVolunteerDashboard/{uId}")
	public List<FrontEndVolunteer> getAllVolunteer(@PathVariable("uId") Long userId){
		
			try {
				
					List<Volunteer> volunteers = userRepository.getAllVolunteers(userId);
					List<FrontEndVolunteer> frontEndVolunteers = new ArrayList<FrontEndVolunteer>();
					
					for (Volunteer volunteer : volunteers) {
						
						volunteer.setAttachment(null);
						frontEndVolunteers.add( volunteerService.BackEndVolunteerToFrontEndVolunteer(volunteer) );
					
					}
					
					return frontEndVolunteers;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}
	
	
	@GetMapping("/getAllProjectDashboard/{uId}")
	public List<FrontEndProject> getAllProject(@PathVariable("uId") Long userId){
		
			try {
				
					List<Project> projects = userRepository.getAllProjects(userId);
					List<FrontEndProject> frontEndProjects = new ArrayList<FrontEndProject>();
					
					for (Project project : projects) {
						
						project.setAttachment(null);
						frontEndProjects.add( projectService.BackEndProjectToFrontEndProject(project) );
					
					}
					
					return frontEndProjects;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}

}
