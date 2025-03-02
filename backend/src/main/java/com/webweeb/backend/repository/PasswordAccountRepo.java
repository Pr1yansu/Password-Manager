package com.webweeb.backend.repository;

import com.webweeb.backend.entity.PasswordAccount;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;


public interface PasswordAccountRepo extends JpaRepository<PasswordAccount, UUID> {
    List<PasswordAccount> findByUser_Username(String username);

    boolean existsByPasswordAndUserId(@NotBlank(message = "Password cannot be blank") String password, UUID id);
}
