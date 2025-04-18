package com.webweeb.backend.repository;

import com.webweeb.backend.entity.PasswordGenerator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;


public interface PasswordGeneratorRepo extends JpaRepository<PasswordGenerator, UUID> {
    Optional<PasswordGenerator> findByUser_Username(String userUsername);
}
