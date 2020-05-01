package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

}
