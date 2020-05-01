package com.resumewebsitebuilder.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Base64;

import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.beans.factory.annotation.Autowired;

import com.resumewebsitebuilder.model.FrontEndPersonalInformation;
import com.resumewebsitebuilder.model.Information;
import com.resumewebsitebuilder.model.PersonalInformation;
import com.resumewebsitebuilder.model.User;
import com.resumewebsitebuilder.repositories.PersonalInformationRepository;
import com.resumewebsitebuilder.repositories.UserRepository;

public class PersonalInformationService {

	private BlobToBase64EncoderAndDecoder converter = new BlobToBase64EncoderAndDecoder();
	
	public FrontEndPersonalInformation convertBackEndPersonalInfoToFrontEndPersonalInfo(
			PersonalInformation personalInformation) throws SQLException, IOException {
		
		FrontEndPersonalInformation frontEndPersonalInformation = new FrontEndPersonalInformation();
		frontEndPersonalInformation.setId( personalInformation.getId() );
		frontEndPersonalInformation.setName( personalInformation.getName() );
		frontEndPersonalInformation.setPicture( converter.convertBlobToBase64( personalInformation.getPicture() ) );
		frontEndPersonalInformation.setSummary( personalInformation.getSummary() );
		frontEndPersonalInformation.setTitle( personalInformation.getTitle() );
		frontEndPersonalInformation.setTypePicture( personalInformation.getTypePicture() );
		    
		
		return frontEndPersonalInformation;
	}

	public PersonalInformation convertFrontEndPersonalInfoToBackEndPersonalInfo(
			FrontEndPersonalInformation frontEndPersonalInformation) throws IOException {
		
	    PersonalInformation personalInformation = new PersonalInformation();
	    personalInformation.setId( frontEndPersonalInformation.getId() );
	    personalInformation.setName( frontEndPersonalInformation.getName() );
	    personalInformation.setPicture( converter.convertBase64ToBlob( frontEndPersonalInformation.getPicture().toString() , frontEndPersonalInformation.getTypePicture()) );
	    personalInformation.setSummary( frontEndPersonalInformation.getSummary() );
	    personalInformation.setTitle( frontEndPersonalInformation.getTitle() );
	    personalInformation.setTypePicture( personalInformation.getTypePicture() );
	    
		return personalInformation;
	}

	
	
}
