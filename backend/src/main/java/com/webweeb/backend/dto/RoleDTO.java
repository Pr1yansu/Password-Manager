package com.webweeb.backend.dto;import lombok.*;/** * RoleDTO is a Data Transfer Object that represents a role in the system. * It contains information about the role, including its name. */@Getter@Setter@Builder@AllArgsConstructor@NoArgsConstructorpublic class RoleDTO extends BaseDTO {    private String name;}