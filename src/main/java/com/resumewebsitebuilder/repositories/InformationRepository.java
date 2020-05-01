package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Information;

public interface InformationRepository extends JpaRepository<Information, Long>{

}
