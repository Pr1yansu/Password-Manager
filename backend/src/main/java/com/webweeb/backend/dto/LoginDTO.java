package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

/**
 * Data Transfer Object (DTO) for user login information.
 * This class is used to transfer login data between the client and server.
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LoginDTO extends BaseDTO {
    @NotBlank(message = "Username or email is required")
    private String usernameOrEmail;

    @NotBlank(message = "Password is required")
    private String password;

    @NotBlank(message = "IP address is required")
    @Pattern(
            regexp = "^([0-9]{1,3}\\.){3}[0-9]{1,3}$",
            message = "Invalid IP address format"
    )
    private String ipAddress;

    @NotBlank(message = "User agent is required")
    private String userAgent;

    @NotBlank(message = "Device name is required")
    @Size(max = 50, message = "Device name must not exceed 50 characters")
    private String deviceName;

    @NotBlank(message = "Device type is required")
    @Pattern(
            regexp = "^(Mobile|Laptop|Tablet|Desktop|Other)$",
            message = "Device type must be Mobile, Tablet, Desktop, or Other"
    )
    private String deviceType;

    @NotBlank(message = "OS name is required")
    @Size(max = 50, message = "OS name must not exceed 50 characters")
    private String osName;

    @NotBlank(message = "OS version is required")
    @Size(max = 50, message = "OS version must not exceed 50 characters")
    private String osVersion;

    @NotBlank(message = "Browser name is required")
    @Size(max = 50, message = "Browser name must not exceed 50 characters")
    private String browserName;

    @NotBlank(message = "Browser version is required")
    @Size(max = 50, message = "Browser version must not exceed 50 characters")
    private String browserVersion;

    @NotBlank(message = "Location is required")
    private String location;
}
