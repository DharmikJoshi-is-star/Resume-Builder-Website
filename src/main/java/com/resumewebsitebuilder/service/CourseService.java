package com.resumewebsitebuilder.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

import org.hibernate.engine.jdbc.BlobProxy;

import com.resumewebsitebuilder.model.Course;
import com.resumewebsitebuilder.model.FrontEndCourse;
import com.resumewebsitebuilder.model.FrontEndPersonalInformation;
import com.resumewebsitebuilder.model.PersonalInformation;

public class CourseService {

	private BlobToBase64EncoderAndDecoder converter = new BlobToBase64EncoderAndDecoder();
	
	public Course convertFrontEndCourseToBackEndCourse(FrontEndCourse frontEndCourse, Course course) throws IOException {
		
	    course.setId( frontEndCourse.getId() );
	    course.setName( frontEndCourse.getName() );
	    course.setInstituteName( frontEndCourse.getInstituteName() );
	    course.setCompletionMonth( frontEndCourse.getCompletionMonth() );
	    course.setCompletionYear( frontEndCourse.getCompletionYear() );
	    course.setAttachment( converter.convertBase64ToBlob(frontEndCourse.getAttachment().toString(), frontEndCourse.getTypeOfAttachment().toString()) );
	    course.setCurrentStatus( frontEndCourse.getCurrentStatus() );
	    course.setTypeOfAttachment( frontEndCourse.getTypeOfAttachment() );
	    course.setUrl( frontEndCourse.getUrl() );
	    //course.setView( frontEndCourse.getView() );
	    
		return course;
	}
	
	public FrontEndCourse convertBackEndCourseToFrontEndCourse(Course course) throws IOException, SQLException {
		
		FrontEndCourse frontEndCourse = new FrontEndCourse();
	
		frontEndCourse.setId( course.getId() );
		frontEndCourse.setName( course.getName() );
		frontEndCourse.setInstituteName( course.getInstituteName() );
		frontEndCourse.setCompletionMonth( course.getCompletionMonth() );
		frontEndCourse.setCompletionYear( course.getCompletionYear() );
		frontEndCourse.setAttachment( converter.convertBlobToBase64(course.getAttachment()) );
		frontEndCourse.setCurrentStatus( course.getCurrentStatus() );
		frontEndCourse.setTypeOfAttachment( course.getTypeOfAttachment() );
		frontEndCourse.setUrl( course.getUrl() );
	    frontEndCourse.setView( course.getView() );
		
		return frontEndCourse;
	}


}
