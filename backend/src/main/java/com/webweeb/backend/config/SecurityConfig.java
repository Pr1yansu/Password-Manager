package com.webweeb.backend.config;import com.webweeb.backend.exception.CustomAuthenticationEntryPoint;import com.webweeb.backend.security.JwtAuthenticationFilter;import lombok.RequiredArgsConstructor;import org.springframework.beans.factory.annotation.Autowired;import org.springframework.beans.factory.annotation.Value;import org.springframework.context.annotation.Bean;import org.springframework.context.annotation.Configuration;import org.springframework.context.annotation.Lazy;import org.springframework.security.authentication.AuthenticationManager;import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;import org.springframework.security.config.annotation.web.builders.HttpSecurity;import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;import org.springframework.security.config.http.SessionCreationPolicy;import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;import org.springframework.security.crypto.password.PasswordEncoder;import org.springframework.security.web.SecurityFilterChain;import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;import org.springframework.web.cors.CorsConfiguration;import org.springframework.web.cors.CorsConfigurationSource;import org.springframework.web.cors.UrlBasedCorsConfigurationSource;import java.util.List;@Configuration@RequiredArgsConstructorpublic class SecurityConfig {    @Autowired    @Lazy    private JwtAuthenticationFilter jwtAuthenticationFilter;    @Autowired    private CustomAuthenticationEntryPoint customAuthenticationEntryPoint;    @Value("${cors.allowed.origins}")    private String allowedOrigins;    @Value("${cors.allowed.methods}")    private String allowedMethods;    @Value("${cors.allowed.headers}")    private String allowedHeaders;    @Value("${cors.exposed.headers}")    private String exposedHeaders;    @Value("${cors.allowed.credentials}")    private boolean allowCredentials;    @Value("${cors.max.age}")    private long maxAge;    @Bean    public CorsConfigurationSource corsConfigurationSource() {        CorsConfiguration corsConfiguration = new CorsConfiguration();        corsConfiguration.setAllowedOrigins(List.of(allowedOrigins));        corsConfiguration.setAllowedMethods(List.of(allowedMethods));        corsConfiguration.setAllowedHeaders(List.of(allowedHeaders));        corsConfiguration.setExposedHeaders(List.of(exposedHeaders));        corsConfiguration.setAllowCredentials(allowCredentials);        corsConfiguration.setMaxAge(maxAge);        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();        source.registerCorsConfiguration("/**", corsConfiguration);        return source;    }    @Bean    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {        httpSecurity                .csrf(AbstractHttpConfigurer::disable)                .cors(cors -> cors.configurationSource(corsConfigurationSource()))                .authorizeHttpRequests(                        auth -> auth                                .requestMatchers("/v3/api-docs/**").permitAll()                                .requestMatchers("/swagger-ui/**").permitAll()                                .requestMatchers("/api/auth/**").permitAll()                                .requestMatchers("/api/admin/**").hasRole("ADMIN")                                .requestMatchers("/api/user/**").hasRole("USER")                                .anyRequest().authenticated()                ).sessionManagement(                        sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)                ).addFilterBefore(                        jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class                ).exceptionHandling(                        exceptionHandling -> exceptionHandling.authenticationEntryPoint(customAuthenticationEntryPoint)                );        return httpSecurity.build();    }    @Bean    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)            throws Exception {        return authenticationConfiguration.getAuthenticationManager();    }    @Bean    public PasswordEncoder passwordEncoder() {        return new BCryptPasswordEncoder();    }}