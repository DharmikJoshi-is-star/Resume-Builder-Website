package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Template;

public interface TemplateRepository extends JpaRepository<Template, Long>{

}
