package com.webweeb.backend.repository;

import com.webweeb.backend.entity.PasswordHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PasswordHistoryRepo extends JpaRepository<PasswordHistory, UUID> {
    void deleteAllByPasswordAccountId(UUID id);
}
