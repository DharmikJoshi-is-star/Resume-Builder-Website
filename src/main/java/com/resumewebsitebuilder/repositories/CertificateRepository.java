package com.resumewebsitebuilder.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resumewebsitebuilder.model.Certification;

public interface CertificateRepository extends JpaRepository<Certification, Long>{

}
