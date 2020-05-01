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

import com.resumewebsitebuilder.model.Certification;
import com.resumewebsitebuilder.model.Course;
import com.resumewebsitebuilder.model.Education;
import com.resumewebsitebuilder.model.FrontEndCertificate;
import com.resumewebsitebuilder.model.FrontEndCourse;
import com.resumewebsitebuilder.model.Graduation;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.CertificateRepository;
import com.resumewebsitebuilder.repositories.CourseRepository;
import com.resumewebsitebuilder.repositories.EducationRepository;
import com.resumewebsitebuilder.repositories.GraduationRepository;
import com.resumewebsitebuilder.repositories.UserRepository;
import com.resumewebsitebuilder.service.CertificateService;
import com.resumewebsitebuilder.service.CourseService;


@RestController
public class EducationRestController {

	private CourseService courseService = new CourseService();
	
	private CertificateService certificateService = new CertificateService();
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	EducationRepository educationRepository;
	
	@Autowired
	GraduationRepository graduationRepository;
	
	@Autowired
	CourseRepository courseRepository;
	
	@Autowired
	CertificateRepository certificateRepository;
	
	@PostMapping("/saveGraduation/{uId}")
	public Graduation saveGraduation(@RequestBody Graduation graduation , @PathVariable("uId") Long uId) {
		
		System.out.println(graduation.getType());
		
		graduation = graduationRepository.save(graduation);
		
		User user = userRepository.getOne(uId);
		Education education = user.getEducation();
		
		if(education==null) {
			education = new Education();
			education = educationRepository.save(education);
		}
		
		List<Graduation> graduations = education.getGraduations();
		
		if(graduations==null) {
			graduations = new ArrayList<Graduation>();
		}
		
		graduations.add(graduation);
		
		education.setGraduations(graduations);
		
		user.setEducation(education);
		
		userRepository.save(user);
		
		return graduation;
	}
	
	@PostMapping("/editSaveGraduation")
	public Graduation editSaveGraduation(@RequestBody Graduation graduation) {
		return graduationRepository.save(graduation);
	}
	
	@GetMapping("/getGraduation/{graduationId}")
	public Graduation getGraduation(@PathVariable("graduationId") Long graduationId) {
		return graduationRepository.getOne(graduationId);
	}
	
	@DeleteMapping("/deleteGraduation/{graduationId}")
	public void deleteGraduation(@PathVariable("graduationId") Long graduationId) {
		graduationRepository.deleteById(graduationId);
	}
	
	@GetMapping("/getAllGraduations/{userId}")
	public List<Graduation> getAllGraduations(@PathVariable("userId") Long userId) {
		
		List<Graduation> graduations = userRepository.getAllGraduations(userId);
		
		return graduations;
	}
	
	@PostMapping("/saveCourse/{uId}")
	public Long saveCourse(@RequestBody FrontEndCourse frontEndCourse, @PathVariable("uId") Long uId) {
		
		try {
			
			Course course = courseService.convertFrontEndCourseToBackEndCourse(frontEndCourse);
			course = courseRepository.save(course);
			
			User user = userRepository.getOne(uId);
			Education education = user.getEducation();
			
			if(education==null) {
				education = new Education();
				education = educationRepository.save(education);
			}
			
			List<Course> courses = education.getCourses();
			
			if(courses==null) {
				courses = new ArrayList<Course>();
			}
			  
			courses.add(course);
			
			education.setCourses(courses);
			
			user.setEducation(education);
			
			userRepository.save(user);
			
			return course.getId();
			
		} catch (IOException  e) {
			 
			return null;
		}
		
	}
	
	@PostMapping("/editSaveCourse")
	public Long editSaveCourse(@RequestBody FrontEndCourse frontEndCourse) {
		Course course;
		try {
			course = courseService.convertFrontEndCourseToBackEndCourse(frontEndCourse);
			course = courseRepository.save(course);
			System.out.println(course.getId());
			return course.getId();
		} catch (IOException  e) {
			// TODO Auto-generated catch block
			return null;
		}
		
	}
	
	@GetMapping("/getCourse/{courseId}")
	public FrontEndCourse getCourse(@PathVariable("courseId") Long courseId) {
		Course course = courseRepository.getOne(courseId);
		try {
			return courseService.convertBackEndCourseToFrontEndCourse(course);
		} catch (IOException | SQLException e) {
			return null;
		}
	}
	
	@DeleteMapping("/deleteCourse/{courseId}")
	public void deleteCourse(@PathVariable("courseId") Long courseId) {
		courseRepository.deleteById(courseId);
	}
	
	@GetMapping("/getAllCourses/{userId}")
	public List<FrontEndCourse> getAllCourses(@PathVariable("userId") Long userId) {
		
		List<Course> courses = userRepository.getAllCourses(userId);
		
		List<FrontEndCourse> frontEndCourses = new ArrayList<FrontEndCourse>();
		
		try {
			
			for (Course course : courses) {
				frontEndCourses.add(courseService.convertBackEndCourseToFrontEndCourse(course));
			}
			
			return frontEndCourses;
			
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}

	@PostMapping("/saveCertification/{uId}")
	public Long saveCertification(@RequestBody FrontEndCertificate frontEndCertificate , @PathVariable("uId") Long uId) {
		
		try {
			
			Certification certification = certificateService.convertFrontEndCertificateToBackEndCertificate(frontEndCertificate);
			certification = certificateRepository.save(certification);
			
			User user = userRepository.getOne(uId);
			Education education = user.getEducation();
			
			if(education==null) {
				education = new Education();
				education = educationRepository.save(education);
			}
			
			List<Certification> certifications =  education.getCertification();
			
			if(certification==null) {
				certifications = new ArrayList<Certification>();
			}
			
			certifications.add(certification);
			
			education.setCertification(certifications);
			
			user.setEducation(education);
			
			userRepository.save(user);
			
			return certification.getId();
			
		} catch (IOException  e) {
			return null;
		}
		
	}
	
	@PostMapping("/editSaveCertification")
	public Long editSaveCertification(@RequestBody FrontEndCertificate frontEndCertificate) {
		Certification certification;
		try {
			certification = certificateService.convertFrontEndCertificateToBackEndCertificate(frontEndCertificate);
			certification = certificateRepository.save(certification);
			return certification.getId();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			return null;
		}
		
	}
	
	@GetMapping("/getCertification/{certificationId}")
	public FrontEndCertificate getCertification(@PathVariable("certificationId") Long certificationId) {
		Certification certification = certificateRepository.getOne(certificationId);
		try {
			return certificateService.convertBackEndCertificateToFrontEndCertificate(certification);
		} catch (IOException | SQLException e) {
			return null;
		}
	}
	
	@DeleteMapping("/deleteCertification/{certificationId}")
	public void deleteCertification(@PathVariable("certificationId") Long certificationId) {
		certificateRepository.deleteById(certificationId);
	}
	
	@GetMapping("/getAllCertifications/{userId}")
	public List<FrontEndCertificate> getAllCertifications(@PathVariable("userId") Long userId) {
		
		List<Certification> certifications = userRepository.getAllCertifications(userId);
		
		List<FrontEndCertificate> frontEndCertifications = new ArrayList<FrontEndCertificate>();
		
		try {
			
			for (Certification certification : certifications) {
				frontEndCertifications.add(certificateService.convertBackEndCertificateToFrontEndCertificate(certification));
			}
			
			return frontEndCertifications;
			
		} catch (IOException | SQLException e) {
			return null;
		}
		
	}
		

	
}
