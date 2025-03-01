package com.webweeb.backend.service;

import com.webweeb.backend.dto.PasswordAccountDTO;
import com.webweeb.backend.dto.PasswordHistoryDTO;
import com.webweeb.backend.entity.PasswordAccount;
import com.webweeb.backend.entity.PasswordHistory;
import com.webweeb.backend.entity.User;
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

    @Transactional
    public PasswordAccountDTO createAccount(PasswordAccountDTO passwordAccountDTO) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        PasswordAccount passwordAccount = modelMapper.map(passwordAccountDTO, PasswordAccount.class);
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

    @Transactional
    public List<PasswordAccountDTO> bulkCreateAccounts(List<PasswordAccountDTO> passwordAccountDTOs) {
        String authUsername = userService.getAuthenticatedUsername();
        User user = userRepo.findByUsernameOrEmail(authUsername, authUsername)
                .orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        List<PasswordAccount> passwordAccounts = passwordAccountDTOs.stream()
                .map(dto -> modelMapper.map(dto, PasswordAccount.class))
                .toList();

        for (PasswordAccount passwordAccount : passwordAccounts) {
            try {
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
            passwordAccountRepo.save(savedAccount);
        }

        return savedAccounts.stream()
                .map(this::mapFromEntity)
                .toList();
    }

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

        PasswordAccount savedAccount = passwordAccountRepo.save(existingAccount);
        return mapFromEntity(savedAccount);
    }

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
                if (!decryptedCurrentPassword.equals(dto.getPassword())) {
                    PasswordHistory history = PasswordHistory.builder()
                            .changeDate(LocalDateTime.now())
                            .password(existingAccount.getPassword())
                            .passwordAccount(existingAccount)
                            .build();
                    passwordHistoryRepo.save(history);
                    existingAccount.getPasswordHistories().add(history);
                }

                existingAccount.setUsername(dto.getUsername());
                String encryptedPassword = EncryptionUtil.encrypt(dto.getPassword(), user.getSecretKey());
                existingAccount.setPassword(encryptedPassword);
                existingAccount.setUser(user);

            } catch (Exception e) {
                log.info("Error encrypting password", e);
                throw new AppException("Error encrypting password", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        List<PasswordAccount> savedAccounts = passwordAccountRepo.saveAll(existingAccounts);
        return savedAccounts.stream()
                .map(this::mapFromEntity)
                .toList();
    }

    public PasswordAccountDTO getAccount(UUID id) {
        PasswordAccount passwordAccount = passwordAccountRepo.findById(id)
                .orElseThrow(() -> new AppException("Account not found", HttpStatus.NOT_FOUND));
        return mapFromEntity(passwordAccount);
    }

    public List<PasswordAccountDTO> getAccounts() {
        return passwordAccountRepo.findByUser_Username(userService.getAuthenticatedUsername()).stream()
                .map(this::mapFromEntity)
                .toList();
    }

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
        return passwordAccountDTO;
    }
}
