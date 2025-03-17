package com.webweeb.backend.controller;

import com.webweeb.backend.dto.PasswordAccountDTO;
import com.webweeb.backend.response.ApiResponse;
import com.webweeb.backend.service.AccountsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

@Slf4j
@RestController
@RequestMapping("/api/accounts")
@Tag(name = "Accounts", description = "API for managing password accounts")
public class AccountsController {

    private final AccountsService accountsService;

    @Autowired
    public AccountsController(AccountsService accountsService) {
        this.accountsService = accountsService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<PasswordAccountDTO>> getAccountById(@PathVariable UUID id) {
        PasswordAccountDTO account = accountsService.getAccount(id);
        return ResponseEntity.ok(ApiResponse.success(account, "Account retrieved successfully"));
    }

    @GetMapping
    public ResponseEntity<Object> getAllAccounts() {
        List<PasswordAccountDTO> accounts = accountsService.getAccounts();
        return ResponseEntity.ok(ApiResponse.success(accounts, "Accounts retrieved successfully"));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<PasswordAccountDTO>> createAccount(@RequestBody @Valid PasswordAccountDTO accountDTO) {
        PasswordAccountDTO createdAccount = accountsService.createAccount(accountDTO);
        return ResponseEntity.ok(ApiResponse.success(createdAccount, "Account created successfully"));
    }

    @PostMapping("/bulk")
    public ResponseEntity<Object> bulkCreate(@RequestBody @Valid List<PasswordAccountDTO> accountDTOs) {
        List<PasswordAccountDTO> createdAccounts = accountsService.bulkCreateAccounts(accountDTOs);
        return ResponseEntity.ok(ApiResponse.success(createdAccounts, "Accounts created successfully"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<PasswordAccountDTO>> updateAccount(@PathVariable UUID id, @RequestBody @Valid PasswordAccountDTO accountDTO) {
        PasswordAccountDTO updatedAccount = accountsService.updateAccount(accountDTO, id);
        return ResponseEntity.ok(ApiResponse.success(updatedAccount, "Account updated successfully"));
    }

    @PutMapping("/bulk")
    public ResponseEntity<Object> bulkUpdate(@RequestBody @Valid List<PasswordAccountDTO> accountDTOs) {
        List<PasswordAccountDTO> updatedAccounts = accountsService.bulkUpdateAccounts(accountDTOs);
        return ResponseEntity.ok(ApiResponse.success(updatedAccounts, "Accounts updated successfully"));
    }

    @DeleteMapping
    public ResponseEntity<Object> bulkDelete(@RequestParam String ids) {
        List<UUID> id = Stream.of(ids.split(",")).map(UUID::fromString).toList();
        List<PasswordAccountDTO> deletedAccounts = accountsService.bulkDelete(id);
        return ResponseEntity.ok(ApiResponse.success(deletedAccounts, "Accounts deleted successfully"));
    }
}
