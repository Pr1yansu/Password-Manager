package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.webweeb.backend.enums.PasswordStrength;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

/**
 * PasswordAccountDTO is a Data Transfer Object that represents a password account.
 * It contains information about the password account, including the title, username,
 * password, strength, URL, notes, icon, color, security information, and password histories.
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PasswordGeneratorDTO extends BaseDTO {
    @NotBlank(message = "Title cannot be blank")
    private Long characterLength;
    private Boolean includeUppercase;
    private Boolean includeLowercase;
    private Boolean includeNumbers;
    private Boolean includeSpecialCharacters;
    private Boolean avoidAmbiguousCharacters;
    private Boolean avoidRepetitiveCharacters;
    private Boolean avoidSequentialCharacters;
    private Boolean avoidCommonWords;
    private Boolean avoidCommonPhrases;
    private Boolean avoidKeyboardPatterns;
    private Boolean avoidPersonalInformation;
    private Boolean avoidContextualWords;
}

