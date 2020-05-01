package com.resumewebsitebuilder.service;

import java.io.IOException;
import java.sql.SQLException;

import com.resumewebsitebuilder.model.FrontEndVolunteer;
import com.resumewebsitebuilder.model.Volunteer;

public class VolunteerService {

	private BlobToBase64EncoderAndDecoder converter = new BlobToBase64EncoderAndDecoder();

	public Volunteer FrontEndVolunteerToBackEndVolunteer(FrontEndVolunteer frontEndVolunteer) throws IOException {
		
		Volunteer volunteer = new Volunteer();
		
		volunteer.setId( frontEndVolunteer.getId() );
		volunteer.setRole( frontEndVolunteer.getRole() );
		volunteer.setOrganization( frontEndVolunteer.getOrganization() );
		volunteer.setStartMonth( frontEndVolunteer.getStartMonth() );
		volunteer.setStartYear( frontEndVolunteer.getStartYear() );
		volunteer.setCurrentStatus( frontEndVolunteer.getCurrentStatus() );
		volunteer.setEndMonth( frontEndVolunteer.getEndMonth() );
		volunteer.setEndYear( frontEndVolunteer.getEndYear() );
		volunteer.setDescription( frontEndVolunteer.getDescription() );
		volunteer.setAttachment( converter.convertBase64ToBlob( frontEndVolunteer.getAttachment().toString() , frontEndVolunteer.getTypeOfAttachment()) );
		volunteer.setTypeOfAttachment( frontEndVolunteer.getTypeOfAttachment() );
		
		return volunteer;
		
	}
	
	public FrontEndVolunteer BackEndVolunteerToFrontEndVolunteer(Volunteer volunteer) throws IOException, SQLException {
		
		FrontEndVolunteer frontEndVolunteer = new FrontEndVolunteer();
		
		frontEndVolunteer.setId( volunteer.getId() );
		frontEndVolunteer.setRole( volunteer.getRole() );
		frontEndVolunteer.setOrganization( volunteer.getOrganization() );
		frontEndVolunteer.setStartMonth( volunteer.getStartMonth() );
		frontEndVolunteer.setStartYear( volunteer.getStartYear() );
		frontEndVolunteer.setCurrentStatus( volunteer.getCurrentStatus() );
		frontEndVolunteer.setEndMonth( volunteer.getEndMonth() );
		frontEndVolunteer.setEndYear( volunteer.getEndYear() );
		frontEndVolunteer.setDescription( volunteer.getDescription() );
		frontEndVolunteer.setAttachment( converter.convertBlobToBase64( volunteer.getAttachment() ));
		frontEndVolunteer.setTypeOfAttachment( volunteer.getTypeOfAttachment() );
		
		return frontEndVolunteer;
		
	}
	
}
