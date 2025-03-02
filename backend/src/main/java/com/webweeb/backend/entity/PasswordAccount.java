package com.webweeb.backend.entity;import com.webweeb.backend.enums.PasswordStrength;import jakarta.persistence.*;import lombok.*;import java.util.ArrayList;import java.util.List;@EqualsAndHashCode(callSuper = true)@Entity@Data@AllArgsConstructor@NoArgsConstructor@Builder@Table(name = "\"Accounts\"")public class PasswordAccount extends BaseEntity {    @Column(nullable = false)    private String title;    @Column(nullable = false)    private String username;    @Column(nullable = false)    private String password;    @Column    private String url;    @Column    private String notes;    @Column    @Enumerated(EnumType.STRING)    private PasswordStrength strength;    private String complexity;    private boolean reused;    @Column    private String icon;    @Column    private String color;    @OneToMany(mappedBy = "passwordAccount", fetch = FetchType.LAZY)    private List<PasswordHistory> passwordHistories = new ArrayList<>();    @ManyToOne(fetch = FetchType.LAZY)    @JoinColumn(name = "user_id", referencedColumnName = "id")    private User user;}