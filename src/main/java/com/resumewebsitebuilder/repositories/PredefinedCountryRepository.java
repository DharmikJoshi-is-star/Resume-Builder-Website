package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.PredefinedCountry;

public interface PredefinedCountryRepository extends JpaRepository<PredefinedCountry, Long>{

}
