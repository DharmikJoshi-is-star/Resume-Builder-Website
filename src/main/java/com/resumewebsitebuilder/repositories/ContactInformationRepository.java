package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.ContactInformation;

public interface ContactInformationRepository extends JpaRepository<ContactInformation, Long>{

}
