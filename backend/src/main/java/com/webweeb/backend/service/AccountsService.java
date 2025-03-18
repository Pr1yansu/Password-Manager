package com.webweeb.backend.service;

import com.webweeb.backend.dto.PasswordAccountDTO;
import com.webweeb.backend.dto.PasswordHistoryDTO;
import com.webweeb.backend.dto.PasswordSecurityDTO;
import com.webweeb.backend.entity.PasswordAccount;
import com.webweeb.backend.entity.PasswordHistory;
import com.webweeb.backend.entity.User;
import com.webweeb.backend.enums.PasswordStrength;
import com.webweeb.backend.exception.AppException;
import com.webweeb.backend.repository.PasswordAccountRepo;
import com.webweeb.backend.repository.PasswordHistoryRepo;
import com.webweeb.backend.repository.UserRepo;
import com.webweeb.backend.utils.EncryptionUtil;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
public class AccountsService {

    @Autowired
    private PasswordAccountRepo passwordAccountRepo;
    @Autowired
    private PasswordHistoryRepo passwordHistoryRepo;
    @Autowired
    private UserService userService;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UserRepo userRepo;

    /**
     * Creates a new password account.
     *
     * @param passwordAccountDTO the DTO containing account details
     * @return the created PasswordAccountDTO
     */
    @Transactional
    public PasswordAccountDTO createAccount(PasswordAccountDTO passwordAccountDTO) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        boolean isReused = passwordAccountRepo.existsByPasswordAndUserId(passwordAccountDTO.getPassword(), user.getId());

        PasswordAccount passwordAccount = modelMapper.map(passwordAccountDTO, PasswordAccount.class);
        passwordAccount.setStrength(calculatePasswordStrength(passwordAccount.getPassword()));
        passwordAccount.setReused(isReused);
        passwordAccount.setComplexity(checkComplexity(passwordAccountDTO.getPassword()));
        passwordAccount.setUser(user);

        try {
            String encryptedPassword = EncryptionUtil.encrypt(passwordAccount.getPassword(), user.getSecretKey());
            passwordAccount.setPassword(encryptedPassword);
        } catch (Exception e) {
            log.error("Error encrypting password", e);
            throw new AppException("Error encrypting password", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        PasswordAccount savedAccount = passwordAccountRepo.save(passwordAccount);

        PasswordHistory initialHistory = PasswordHistory.builder()
                .changeDate(LocalDateTime.now())
                .password(savedAccount.getPassword())
                .passwordAccount(savedAccount)
                .build();
        passwordHistoryRepo.save(initialHistory);
        savedAccount.getPasswordHistories().add(initialHistory);
        passwordAccountRepo.save(savedAccount);

        return mapFromEntity(savedAccount);
    }

    /**
     * Updates an existing password account.
     *
     * @param passwordAccountDTO the DTO containing updated account details
     * @param id                 the ID of the account to update
     * @return the updated PasswordAccountDTO
     */
    @Transactional
    public PasswordAccountDTO updateAccount(PasswordAccountDTO passwordAccountDTO, UUID id) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        PasswordAccount existingAccount = passwordAccountRepo.findById(id)
                .orElseThrow(() -> new AppException("Account not found", HttpStatus.NOT_FOUND));

        try {
            String decryptedCurrentPassword = EncryptionUtil.decrypt(existingAccount.getPassword(), user.getSecretKey());
            if (!decryptedCurrentPassword.equals(passwordAccountDTO.getPassword())) {
                PasswordHistory history = PasswordHistory.builder()
                        .changeDate(LocalDateTime.now())
                        .password(existingAccount.getPassword())
                        .passwordAccount(existingAccount)
                        .build();
                passwordHistoryRepo.save(history);
                existingAccount.getPasswordHistories().add(history);
            }

            existingAccount.setUsername(passwordAccountDTO.getUsername());
            String encryptedPassword = EncryptionUtil.encrypt(passwordAccountDTO.getPassword(), user.getSecretKey());
            existingAccount.setPassword(encryptedPassword);
            existingAccount.setUser(user);

        } catch (Exception e) {
            log.info("Error encrypting password", e);
            throw new AppException("Error encrypting password", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (!existingAccount.getPassword().equals(passwordAccountDTO.getPassword())) {
            existingAccount.setStrength(calculatePasswordStrength(passwordAccountDTO.getPassword()));
            existingAccount.setComplexity(checkComplexity(passwordAccountDTO.getPassword()));
            existingAccount.setReused(passwordAccountRepo.existsByPasswordAndUserId(passwordAccountDTO.getPassword(), user.getId()));
            existingAccount.setStrength(calculatePasswordStrength(passwordAccountDTO.getPassword()));
        }

        PasswordAccount savedAccount = passwordAccountRepo.save(existingAccount);
        return mapFromEntity(savedAccount);
    }

    /**
     * Bulk creates password accounts.
     *
     * @param passwordAccountDTOs the list of DTOs containing account details
     * @return the list of created PasswordAccountDTOs
     */
    @Transactional
    public List<PasswordAccountDTO> bulkCreateAccounts(List<PasswordAccountDTO> passwordAccountDTOs) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        List<PasswordAccount> passwordAccounts = passwordAccountDTOs.stream()
                .map(dto -> modelMapper.map(dto, PasswordAccount.class))
                .toList();

        for (PasswordAccount passwordAccount : passwordAccounts) {
            // Set strength, complexity, and reuse flag using the plain password.
            passwordAccount.setStrength(calculatePasswordStrength(passwordAccount.getPassword()));
            passwordAccount.setComplexity(checkComplexity(passwordAccount.getPassword()));
            boolean isReused = passwordAccountRepo.existsByPasswordAndUserId(passwordAccount.getPassword(), user.getId());
            passwordAccount.setReused(isReused);

            try {
                // Encrypt the password after computing metrics.
                String encryptedPassword = EncryptionUtil.encrypt(passwordAccount.getPassword(), user.getSecretKey());
                passwordAccount.setPassword(encryptedPassword);
            } catch (Exception e) {
                log.error("Error encrypting password", e);
                throw new AppException("Error encrypting password", HttpStatus.INTERNAL_SERVER_ERROR);
            }
            passwordAccount.setUser(user);
        }

        List<PasswordAccount> savedAccounts = passwordAccountRepo.saveAll(passwordAccounts);

        for (PasswordAccount savedAccount : savedAccounts) {
            PasswordHistory initialHistory = PasswordHistory.builder()
                    .changeDate(LocalDateTime.now())
                    .password(savedAccount.getPassword())
                    .passwordAccount(savedAccount)
                    .build();
            passwordHistoryRepo.save(initialHistory);
            savedAccount.getPasswordHistories().add(initialHistory);
            // Save again if necessary to update the history list.
            passwordAccountRepo.save(savedAccount);
        }

        return savedAccounts.stream()
                .map(this::mapFromEntity)
                .toList();
    }

    /**
     * Bulk updates password accounts.
     *
     * @param passwordAccountDTOs the list of DTOs containing updated account details
     * @return the list of updated PasswordAccountDTOs
     */
    @Transactional
    public List<PasswordAccountDTO> bulkUpdateAccounts(List<PasswordAccountDTO> passwordAccountDTOs) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        List<PasswordAccount> existingAccounts = passwordAccountRepo.findAllById(
                passwordAccountDTOs.stream().map(PasswordAccountDTO::getId).toList()
        );

        if (existingAccounts.size() != passwordAccountDTOs.size()) {
            throw new AppException("Some accounts not found", HttpStatus.NOT_FOUND);
        }

        for (int i = 0; i < existingAccounts.size(); i++) {
            PasswordAccount existingAccount = existingAccounts.get(i);
            PasswordAccountDTO dto = passwordAccountDTOs.get(i);

            try {
                String decryptedCurrentPassword = EncryptionUtil.decrypt(existingAccount.getPassword(), user.getSecretKey());
                boolean passwordChanged = !decryptedCurrentPassword.equals(dto.getPassword());
                if (passwordChanged) {
                    // Save history if the password has changed.
                    PasswordHistory history = PasswordHistory.builder()
                            .changeDate(LocalDateTime.now())
                            .password(existingAccount.getPassword())
                            .passwordAccount(existingAccount)
                            .build();
                    passwordHistoryRepo.save(history);
                    existingAccount.getPasswordHistories().add(history);

                    // Update strength, complexity, and reuse flag based on the new plain text password.
                    existingAccount.setStrength(calculatePasswordStrength(dto.getPassword()));
                    existingAccount.setComplexity(checkComplexity(dto.getPassword()));
                    boolean isReused = passwordAccountRepo.existsByPasswordAndUserId(dto.getPassword(), user.getId());
                    existingAccount.setReused(isReused);
                }
                // Update username and encrypt the new password.
                existingAccount.setUsername(dto.getUsername());
                String encryptedPassword = EncryptionUtil.encrypt(dto.getPassword(), user.getSecretKey());
                existingAccount.setPassword(encryptedPassword);
                existingAccount.setUser(user);

            } catch (Exception e) {
                log.error("Error encrypting password", e);
                throw new AppException("Error encrypting password", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        List<PasswordAccount> savedAccounts = passwordAccountRepo.saveAll(existingAccounts);
        return savedAccounts.stream()
                .map(this::mapFromEntity)
                .toList();
    }

    /**
     * Retrieves a password account by its ID.
     *
     * @param id the ID of the account
     * @return the PasswordAccountDTO
     */
    public PasswordAccountDTO getAccount(UUID id) {
        PasswordAccount passwordAccount = passwordAccountRepo.findById(id)
                .orElseThrow(() -> new AppException("Account not found", HttpStatus.NOT_FOUND));
        return mapFromEntity(passwordAccount);
    }

    /**
     * Retrieves all password accounts for the authenticated user.
     *
     * @return the list of PasswordAccountDTOs
     */
    public List<PasswordAccountDTO> getAccounts() {
        return passwordAccountRepo.findByUser_Username(userService.getAuthenticatedUsername()).stream()
                .map(this::mapFromEntity)
                .toList();
    }

    /**
     * Deletes a password account by its ID.
     *
     * @param ids the ID of the account
     * @return the deleted PasswordAccountDTO
     */
    @Transactional
    public List<PasswordAccountDTO> bulkDelete(List<UUID> ids) {
        List<PasswordAccount> accountsToDelete = passwordAccountRepo.findAllById(ids);

        if (accountsToDelete.isEmpty()) {
            throw new AppException("No accounts found for the provided IDs", HttpStatus.NOT_FOUND);
        }

        accountsToDelete.forEach(account -> {
            passwordHistoryRepo.deleteAllByPasswordAccountId(account.getId());
        });

        passwordAccountRepo.deleteAll(accountsToDelete);

        return accountsToDelete.stream()
                .map(this::mapFromEntity)
                .toList();
    }

    /**
     * Retrieves a list of all password accounts.
     *
     * @return the list of PasswordAccountDTOs
     */
    public List<PasswordAccountDTO> scanForWeakPasswords() {
        List<PasswordAccount> accounts = passwordAccountRepo.findByUser_Username(userService.getAuthenticatedUsername());
        return accounts.stream()
                .filter(account -> account.getStrength() == PasswordStrength.WEAK)
                .map(this::mapFromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Retrieves a list of all password accounts with reused passwords.
     *
     * @return the list of PasswordAccountDTOs
     */
    public List<PasswordAccountDTO> scanForReusedPasswords() {
        List<PasswordAccount> accounts = passwordAccountRepo.findByUser_Username(userService.getAuthenticatedUsername());
        return accounts.stream()
                .filter(PasswordAccount::isReused)
                .map(this::mapFromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Maps a PasswordAccount entity to a PasswordAccountDTO.
     *
     * @param passwordAccount the PasswordAccount entity
     * @return the PasswordAccountDTO
     */
    public PasswordAccountDTO mapFromEntity(PasswordAccount passwordAccount) {
        PasswordAccountDTO passwordAccountDTO = modelMapper.map(passwordAccount, PasswordAccountDTO.class);
        try {
            String decryptedPassword = EncryptionUtil.decrypt(passwordAccount.getPassword(), passwordAccount.getUser().getSecretKey());
            passwordAccountDTO.setPassword(decryptedPassword);
        } catch (Exception e) {
            throw new AppException("Error decrypting account password", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        List<PasswordHistoryDTO> passwordHistoryDTOs = passwordAccount.getPasswordHistories().stream()
                .map(history -> {
                    PasswordHistoryDTO dto = modelMapper.map(history, PasswordHistoryDTO.class);
                    try {
                        String decryptedHistoryPassword = EncryptionUtil.decrypt(history.getPassword(), passwordAccount.getUser().getSecretKey());
                        dto.setPassword(decryptedHistoryPassword);
                    } catch (Exception e) {
                        dto.setPassword("Error decrypting");
                    }
                    return dto;
                })
                .toList();
        passwordAccountDTO.setPasswordHistories(passwordHistoryDTOs);
        passwordAccountDTO.setSecurity(PasswordSecurityDTO.builder()
                .strength(passwordAccount.getStrength())
                .complexity(passwordAccount.getComplexity())
                .reused(passwordAccount.isReused())
                .passwordAge(calculatePasswordAge(passwordAccount))
                .build());
        return passwordAccountDTO;
    }

    /**
     * Calculates the strength of a password.
     *
     * @param password the password to evaluate
     * @return the PasswordStrength enum value
     */
    private PasswordStrength calculatePasswordStrength(String password) {
        if (password.length() < 8) {
            return PasswordStrength.WEAK;
        }
        if (password.matches(".*[A-Z].*") && password.matches(".*[a-z].*") && password.matches(".*\\d.*")) {
            return PasswordStrength.STRONG;
        }
        return PasswordStrength.MEDIUM;
    }

    /**
     * Checks the complexity of a password.
     *
     * @param password the password to evaluate
     * @return a string describing the complexity
     */
    private String checkComplexity(String password) {
        StringBuilder complexity = new StringBuilder();
        if (password.length() < 8) {
            complexity.append("Length: Weak, ");
        } else if (password.length() < 12) {
            complexity.append("Length: Medium, ");
        } else {
            complexity.append("Length: Strong, ");
        }
        if (!password.matches(".*[A-Z].*")) {
            complexity.append("Uppercase: Weak, ");
        } else {
            complexity.append("Uppercase: Strong, ");
        }
        if (!password.matches(".*[a-z].*")) {
            complexity.append("Lowercase: Weak, ");
        } else {
            complexity.append("Lowercase: Strong, ");
        }
        if (!password.matches(".*\\d.*")) {
            complexity.append("Digit: Weak, ");
        } else {
            complexity.append("Digit: Strong, ");
        }
        if (!password.matches(".*[@#$%^&+=!].*")) {
            complexity.append("Special Character: Weak");
        } else {
            complexity.append("Special Character: Strong");
        }
        return complexity.toString();
    }

    /**
     * Calculates the age of a password.
     *
     * @param passwordAccount the PasswordAccount entity
     * @return the age of the password in days
     */
    private long calculatePasswordAge(PasswordAccount passwordAccount) {
        LocalDateTime lastUpdated = passwordAccount.getUpdatedAt() != null ? passwordAccount.getUpdatedAt() : passwordAccount.getCreatedAt();
        return lastUpdated != null ? LocalDateTime.now().toLocalDate().toEpochDay() - lastUpdated.toLocalDate().toEpochDay() : 0;
    }
}
