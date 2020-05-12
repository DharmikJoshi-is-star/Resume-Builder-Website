package com.resumewebsitebuilder.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.resumewebsitebuilder.model.PredefinedState;

public interface PredefinedStateRepository extends JpaRepository<PredefinedState, Long>{

	@Query("Select state from PredefinedState state where state.country_id=?1")
	List<PredefinedState> getStatesByCountryId(Long cId);

}
