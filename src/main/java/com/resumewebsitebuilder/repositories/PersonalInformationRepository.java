package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.PersonalInformation;

public interface PersonalInformationRepository extends JpaRepository<PersonalInformation, Long>{

}
