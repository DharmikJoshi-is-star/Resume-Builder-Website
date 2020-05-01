package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Long>{

}
