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
public class PasswordAccountDTO extends BaseDTO {

    @NotBlank(message = "Title cannot be blank")
    private String title;
    @NotBlank(message = "Name cannot be blank")
    private String username;
    @NotBlank(message = "Password cannot be blank")
    private String password;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private PasswordStrength strength;
    private String url;
    private String notes;
    private String icon;
    private String color;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private PasswordSecurityDTO security;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<PasswordHistoryDTO> passwordHistories;

}

