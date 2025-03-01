package com.webweeb.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PasswordAccountDTO extends BaseDTO {

    @NotBlank(message = "Name cannot be blank")
    private String username;
    @NotBlank(message = "Password cannot be blank")
    private String password;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<PasswordHistoryDTO> passwordHistories;

}
