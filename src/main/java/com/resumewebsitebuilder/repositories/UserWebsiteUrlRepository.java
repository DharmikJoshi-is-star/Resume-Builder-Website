package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.resumewebsitebuilder.model.UserWebsiteUrl;

public interface UserWebsiteUrlRepository extends JpaRepository<UserWebsiteUrl, Long>{

	@Query("select userWebsiteUrl from UserWebsiteUrl userWebsiteUrl where userWebsiteUrl.url=?1")
	UserWebsiteUrl getIdFromUrl(String url);

}
