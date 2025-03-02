package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.webweeb.backend.enums.PasswordStrength;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
