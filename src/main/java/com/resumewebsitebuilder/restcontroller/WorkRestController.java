package com.resumewebsitebuilder.restcontroller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resumewebsitebuilder.model.FrontEndJobInternship;
import com.resumewebsitebuilder.model.FrontEndProject;
import com.resumewebsitebuilder.model.FrontEndVolunteer;
import com.resumewebsitebuilder.model.JobInternship;
import com.resumewebsitebuilder.model.Project;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.model.Volunteer;
import com.resumewebsitebuilder.model.WorkExperience;
import com.resumewebsitebuilder.repositories.JobInternshipRepository;
import com.resumewebsitebuilder.repositories.ProjectRepository;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.repositories.VolunteerRepository;
import com.resumewebsitebuilder.repositories.WorkExperienceRepository;
import com.resumewebsitebuilder.service.JobInternshipService;
import com.resumewebsitebuilder.service.ProjectService;
import com.resumewebsitebuilder.service.VolunteerService;


@RestController
public class WorkRestController {

	private JobInternshipService jobInternshipService = new JobInternshipService();
	
	private VolunteerService volunteerService = new VolunteerService();
	
	private ProjectService projectService = new ProjectService();
	
	@Autowired
	WorkExperienceRepository workExperienceRepository;
	
	@Autowired
	JobInternshipRepository jobInternshipRepository;
	
	@Autowired
	VolunteerRepository volunteerRepository;
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/saveJobInternship/{uId}")
	public Long saveJobInternship(@RequestBody FrontEndJobInternship frontEndJobInternship, @PathVariable("uId") Long userId) {
		
		try {
			
				JobInternship jobInternship = jobInternshipService.FrontEndJobInternshipToBackEndJobInternship(frontEndJobInternship, new JobInternship());
				jobInternship = jobInternshipRepository.save(jobInternship);
				
				User user = userRepository.getOne(userId);
				
				WorkExperience workExperience = user.getWorkExperience();
				
				if(workExperience==null) {
					workExperience = new WorkExperience();
					workExperience = workExperienceRepository.save(workExperience);
				}
				
				List<JobInternship> jobInternships = workExperience.getJobInternships();
				
				if(jobInternships==null) {
					jobInternships = new ArrayList<JobInternship>();
				}
				
				jobInternships.add(jobInternship);
				
				workExperience.setJobInternships(jobInternships);
				
				user.setWorkExperience(workExperience);
				
				userRepository.save(user);
				
				return jobInternship.getId();
			
		} catch (IOException e) {
			
			return null;
		}
		
	}
	
	@PostMapping("/editSaveJobInternship")
	public Long editSaveJobInternship(@RequestBody FrontEndJobInternship frontEndJobInternship) {
		
		JobInternship jobInternship;
		try {
			jobInternship = jobInternshipService.FrontEndJobInternshipToBackEndJobInternship(frontEndJobInternship,jobInternshipRepository.getOne(frontEndJobInternship.getId()));
			jobInternship = jobInternshipRepository.save(jobInternship);
			return jobInternship.getId();
		} catch (IOException e) {
			return null;
		}
			
	}
	
	@GetMapping("/getJobInternship/{jobInternshipId}")
	public FrontEndJobInternship getJobInternship(@PathVariable("jobInternshipId") Long jobInternshipId) {
		
		JobInternship jobInternship = jobInternshipRepository.getOne(jobInternshipId);
		try {
			return jobInternshipService.BackEndJobInternshipToFrontEndJobInternship(jobInternship);
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}
	
	@DeleteMapping("/deleteJobInternship/{jobInternshipId}")
	public void deleteJobInternship(@PathVariable("jobInternshipId") Long jobInternshipId) {
		jobInternshipRepository.deleteById(jobInternshipId);
	}
	
	@GetMapping("/getAllJobInternship/{uId}")
	public List<FrontEndJobInternship> getAllJobInternship(@PathVariable("uId") Long userId){
		
			try {
				
					List<JobInternship> jobInternships = userRepository.getAllJobInternship(userId);
					List<FrontEndJobInternship> fronEndJobInternships = new ArrayList<FrontEndJobInternship>();
					
					for (JobInternship jobInternship : jobInternships) {
					
						fronEndJobInternships.add( jobInternshipService.BackEndJobInternshipToFrontEndJobInternship(jobInternship) );
					
					}
					
					return fronEndJobInternships;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}
	
	@PostMapping("/saveVolunteer/{uId}")
	public Long saveVolunteer(@RequestBody FrontEndVolunteer fronEndVolunteer, @PathVariable("uId") Long userId) {
		
		try {
			
				Volunteer volunteer = volunteerService.FrontEndVolunteerToBackEndVolunteer(fronEndVolunteer, new Volunteer());
				
				volunteer = volunteerRepository.save(volunteer);
				
				User user = userRepository.getOne(userId);
				
				WorkExperience workExperience = user.getWorkExperience();
				
				if(workExperience==null) {
					workExperience = new WorkExperience();
					workExperience = workExperienceRepository.save(workExperience);
				}
				
				List<Volunteer> volunteers = workExperience.getVolunteers();
				
				if(volunteers==null) {
					volunteers = new ArrayList<Volunteer>();
				}
				
				volunteers.add(volunteer);
				
				workExperience.setVolunteers(volunteers);
				
				user.setWorkExperience(workExperience);
				
				userRepository.save(user);
				
				return volunteer.getId();
			
		} catch (IOException e) {
			
			return null;
		}
		
	}
	
	@PostMapping("/editSaveVolunteer")
	public Long editSaveJobVolunteer(@RequestBody FrontEndVolunteer frontEndVolunteer) {
		
		Volunteer volunteer;
		try {
			volunteer = volunteerService.FrontEndVolunteerToBackEndVolunteer(frontEndVolunteer, volunteerRepository.getOne( frontEndVolunteer.getId() ));
			volunteer = volunteerRepository.save(volunteer);
			
			return volunteer.getId();
		} catch (IOException e) {
			return null;
		}
			
	}
	
	@GetMapping("/getVolunteer/{volunteerId}")
	public FrontEndVolunteer getVolunteer(@PathVariable("volunteerId") Long volunteerId) {
		
		Volunteer volunteer = volunteerRepository.getOne(volunteerId);
		try {
			return volunteerService.BackEndVolunteerToFrontEndVolunteer(volunteer);
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}
	
	@DeleteMapping("/deleteVolunteer/{volunteerId}")
	public void deleteVolunteer(@PathVariable("volunteerId") Long volunteerId) {
		volunteerRepository.deleteById(volunteerId);
	}
	
	@GetMapping("/getAllVolunteer/{uId}")
	public List<FrontEndVolunteer> getAllVolunteer(@PathVariable("uId") Long userId){
		
			try {
				
					List<Volunteer> volunteers = userRepository.getAllVolunteers(userId);
					List<FrontEndVolunteer> frontEndVolunteers = new ArrayList<FrontEndVolunteer>();
					
					for (Volunteer volunteer : volunteers) {
					
						frontEndVolunteers.add( volunteerService.BackEndVolunteerToFrontEndVolunteer(volunteer) );
					
					}
					
					return frontEndVolunteers;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}
	

	@PostMapping("/saveProject/{uId}")
	public Long saveProject(@RequestBody FrontEndProject fronEndProject, @PathVariable("uId") Long userId) {
		
		try {
			
				Project project = projectService.FrontEndProjectToBackEndProject(fronEndProject, new Project());
				
				project = projectRepository.save(project);
				
				User user = userRepository.getOne(userId);
				
				WorkExperience workExperience = user.getWorkExperience();
				
				if(workExperience==null) {
					workExperience = new WorkExperience();
					workExperience = workExperienceRepository.save(workExperience);
				}
				
				List<Project> projects = workExperience.getProjects();
				
				if(projects==null) {
					projects = new ArrayList<Project>();
				}
				
				projects.add(project);
				
				workExperience.setProjects(projects);
				
				user.setWorkExperience(workExperience);
				
				userRepository.save(user);
				
				return project.getId();
			
		} catch (IOException e) {
			
			return null;
		}
		
	}
	
	@PostMapping("/editSaveProject")
	public Long editSaveProject(@RequestBody FrontEndProject frontEndProject) {
		
		Project project;
		try {
			project = projectService.FrontEndProjectToBackEndProject(frontEndProject, projectRepository.getOne( frontEndProject.getId() ));
			project = projectRepository.save(project);
			
			return project.getId();
		} catch (IOException e) {
			return null;
		}
			
	}
	
	@GetMapping("/getProject/{projectId}")
	public FrontEndProject getProject(@PathVariable("projectId") Long projectId) {
		
		Project project = projectRepository.getOne(projectId);
		try {
			return projectService.BackEndProjectToFrontEndProject(project);
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}
	
	@DeleteMapping("/deleteProject/{projectId}")
	public void deleteProject(@PathVariable("projectId") Long projectId) {
		projectRepository.deleteById(projectId);
	}
	
	@GetMapping("/getAllProject/{uId}")
	public List<FrontEndProject> getAllProject(@PathVariable("uId") Long userId){
		
			try {
				
					List<Project> projects = userRepository.getAllProjects(userId);
					List<FrontEndProject> frontEndProjects = new ArrayList<FrontEndProject>();
					
					for (Project Project : projects) {
					
						frontEndProjects.add( projectService.BackEndProjectToFrontEndProject(Project) );
					
					}
					
					return frontEndProjects;
				
			} catch (IOException | SQLException e) {
		
				return null;
			}
		
	}

	
}
