package com.resumewebsitebuilder.service;

import java.io.IOException;
import java.sql.SQLException;

import com.resumewebsitebuilder.model.FrontEndProject;
import com.resumewebsitebuilder.model.Project;

public class ProjectService {

	private BlobToBase64EncoderAndDecoder converter = new BlobToBase64EncoderAndDecoder();
	
	public Project FrontEndProjectToBackEndProject( FrontEndProject frontEndProject ) throws IOException{
		
		Project project = new Project();
		
		project.setId( frontEndProject.getId() );
		project.setName( frontEndProject.getName() );
		project.setCompany( frontEndProject.getCompany() );
		project.setStartMonth( frontEndProject.getStartMonth() );
		project.setStartYear( frontEndProject.getStartYear() );
		project.setCurrentStatus( frontEndProject.getCurrentStatus() );
		project.setEndMonth( frontEndProject.getEndMonth() );
		project.setEndYear( frontEndProject.getEndYear() );
		project.setDescription( frontEndProject.getDescription() );
		project.setAttachment( converter.convertBase64ToBlob(frontEndProject.getAttachment(), frontEndProject.getTypeOfAttachment()) );
		project.setTypeOfAttachment( frontEndProject.getTypeOfAttachment() );
		project.setProjectUrl( frontEndProject.getProjectUrl() );
		project.setSourceUrl( frontEndProject.getSourceUrl() );
		
		return project;
	}
	
	public FrontEndProject BackEndProjectToFrontEndProject( Project project ) throws IOException, SQLException{
		
		FrontEndProject frontEndProject = new FrontEndProject();
		
		frontEndProject.setId( project.getId() );
		frontEndProject.setName( project.getName() );
		frontEndProject.setCompany( project.getCompany() );
		frontEndProject.setStartMonth( project.getStartMonth() );
		frontEndProject.setStartYear( project.getStartYear() );
		frontEndProject.setCurrentStatus( project.getCurrentStatus() );
		frontEndProject.setEndMonth( project.getEndMonth() );
		frontEndProject.setEndYear( project.getEndYear() );
		frontEndProject.setDescription( project.getDescription() );
		frontEndProject.setAttachment( converter.convertBlobToBase64(project.getAttachment()));
		frontEndProject.setTypeOfAttachment( project.getTypeOfAttachment() );
		frontEndProject.setProjectUrl( project.getProjectUrl() );
		frontEndProject.setSourceUrl( project.getSourceUrl() );
		
		return frontEndProject;
	}

	
	
}
