package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Education;

public interface EducationRepository extends JpaRepository<Education, Long>{

}
