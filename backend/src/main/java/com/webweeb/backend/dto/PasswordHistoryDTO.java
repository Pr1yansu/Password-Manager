package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.time.LocalDateTime;

/**
 * PasswordHistoryDTO is a Data Transfer Object that represents the history of a password change.
 * It contains information about the date and time of the change and the password used.
 */
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PasswordHistoryDTO extends BaseDTO {
    private LocalDateTime changeDate;
    private String password;
}

