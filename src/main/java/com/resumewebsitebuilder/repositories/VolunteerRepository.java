package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Volunteer;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{

}
