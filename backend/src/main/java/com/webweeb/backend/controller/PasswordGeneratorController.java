package com.webweeb.backend.controller;import com.webweeb.backend.dto.PasswordGeneratorDTO;import com.webweeb.backend.response.ApiResponse;import com.webweeb.backend.service.PasswordGeneratorService;import io.swagger.v3.oas.annotations.tags.Tag;import jakarta.validation.Valid;import lombok.extern.slf4j.Slf4j;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.http.HttpStatus;import org.springframework.http.ResponseEntity;import org.springframework.web.bind.annotation.*;@Slf4j@RestController@RequestMapping("/api/password-generator")@Tag(name = "Login History", description = "Endpoints for managing user login history")public class PasswordGeneratorController {    @Autowired    private PasswordGeneratorService passwordGeneratorService;    /**     * Endpoint to generate a password based on the provided criteria.     *     * @param passwordGeneratorDTO DTO containing the criteria for password generation.     * @return ResponseEntity with the generated password.     */    @PostMapping("/generate")    public ResponseEntity<Object> getCurrentUserLoginHistory(@RequestBody @Valid PasswordGeneratorDTO passwordGeneratorDTO) {        String password = passwordGeneratorService.generatePassword(passwordGeneratorDTO);        return ResponseEntity.ok(ApiResponse.success(password, "Password generated successfully"));    }    /**     * Endpoint to get the password generator settings for the current user.     *     * @return ResponseEntity with the password generator settings.     */    @PatchMapping("/update")    public ResponseEntity<Object> updatePassword(@RequestBody @Valid PasswordGeneratorDTO passwordGeneratorDTO) {        boolean status = passwordGeneratorService.upsertPasswordGenerator(passwordGeneratorDTO);        if (!status) {            return ResponseEntity.badRequest().body(ApiResponse.error("Failed to update password", HttpStatus.BAD_REQUEST));        }        return ResponseEntity.ok(ApiResponse.success("Password updated successfully"));    }}