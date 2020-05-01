package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
