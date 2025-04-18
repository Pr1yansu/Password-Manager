package com.webweeb.backend.dto;import com.fasterxml.jackson.annotation.JsonInclude;import com.fasterxml.jackson.annotation.JsonProperty;import jakarta.validation.constraints.Email;import jakarta.validation.constraints.NotBlank;import jakarta.validation.constraints.Pattern;import jakarta.validation.constraints.Size;import lombok.*;/** * UserDTO is a Data Transfer Object that represents a user in the system. * It contains information about the user, including username, password, * email, IP address, user agent, device information, and security status. */@EqualsAndHashCode(callSuper = true)@Data@Builder@AllArgsConstructor@NoArgsConstructor@JsonInclude(JsonInclude.Include.NON_NULL)public class UserDTO extends BaseDTO {    @NotBlank(message = "Username is required")    @Size(min = 3, max = 30, message = "Username must be between 3 and 30 characters")    @Pattern(regexp = "^[a-zA-Z0-9_]+$", message = "Username can only contain letters, numbers, and underscores")    private String username;    private String profilePicture;    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)    @NotBlank(message = "Password is required")    @Size(min = 8, max = 64, message = "Password must be between 8 and 64 characters")    @Pattern(            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$",            message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"    )    private String password;    @NotBlank(message = "Email is required")    @Email(message = "Invalid email format")    @Size(max = 100, message = "Email must not exceed 100 characters")    private String email;    @NotBlank(message = "IP address is required")    @Pattern(            regexp = "^([0-9]{1,3}\\.){3}[0-9]{1,3}$",            message = "Invalid IP address format"    )    private String ipAddress;    @NotBlank(message = "User agent is required")    private String userAgent;    @NotBlank(message = "Device name is required")    @Size(max = 50, message = "Device name must not exceed 50 characters")    private String deviceName;    @NotBlank(message = "Device type is required")    @Pattern(            regexp = "^(Mobile|Laptop|Tablet|Desktop|Other)$",            message = "Device type must be Mobile, Tablet, Desktop, or Other"    )    private String deviceType;    @NotBlank(message = "OS name is required")    @Size(max = 50, message = "OS name must not exceed 50 characters")    private String osName;    @NotBlank(message = "OS version is required")    @Size(max = 50, message = "OS version must not exceed 50 characters")    private String osVersion;    @NotBlank(message = "Browser name is required")    @Size(max = 50, message = "Browser name must not exceed 50 characters")    private String browserName;    @NotBlank(message = "Browser version is required")    @Size(max = 50, message = "Browser version must not exceed 50 characters")    private String browserVersion;    @NotBlank(message = "Location is required")    private String location;    @JsonProperty(access = JsonProperty.Access.READ_ONLY)    private boolean enabled;    @JsonProperty(access = JsonProperty.Access.READ_ONLY)    private boolean accountNonExpired;    @JsonProperty(access = JsonProperty.Access.READ_ONLY)    private boolean accountNonLocked;    @JsonProperty(access = JsonProperty.Access.READ_ONLY)    private boolean credentialsNonExpired;}