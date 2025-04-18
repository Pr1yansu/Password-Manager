package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.webweeb.backend.enums.PasswordStrength;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * PasswordSecurityDTO is a Data Transfer Object that represents the security information of a password.
 * It contains information about the password's strength, complexity, whether it has been reused,
 * and the age of the password.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PasswordSecurityDTO {

    private PasswordStrength strength;
    private String complexity;
    private boolean reused;
    private long passwordAge;

}
