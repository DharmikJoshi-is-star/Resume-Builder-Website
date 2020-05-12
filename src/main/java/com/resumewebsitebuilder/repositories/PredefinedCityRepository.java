package com.resumewebsitebuilder.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.resumewebsitebuilder.model.PredefinedCity;

public interface PredefinedCityRepository extends JpaRepository<PredefinedCity, Long>{

	@Query("Select city from PredefinedCity city where city.state_id=?1")
	List<PredefinedCity> getStatesByStateId(Long sId);

}
