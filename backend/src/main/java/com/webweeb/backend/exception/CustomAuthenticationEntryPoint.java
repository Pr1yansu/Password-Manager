package com.webweeb.backend.exception;import com.fasterxml.jackson.databind.ObjectMapper;import com.webweeb.backend.response.ApiResponse;import jakarta.servlet.http.HttpServletRequest;import jakarta.servlet.http.HttpServletResponse;import org.springframework.http.HttpStatus;import org.springframework.http.MediaType;import org.springframework.security.core.AuthenticationException;import org.springframework.security.web.AuthenticationEntryPoint;import org.springframework.stereotype.Component;import java.io.IOException;import java.io.OutputStream;import java.time.Instant;@Component("customAuthenticationEntryPoint")public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {    /**     * This method is called when an unauthenticated user tries to access a protected resource.     * It sends a 401 Unauthorized response with a custom error message.     *     * @param request       the HttpServletRequest     * @param response      the HttpServletResponse     * @param authException the AuthenticationException     * @throws IOException if an input or output exception occurs     */    @Override    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException)            throws IOException {        // Create API response for unauthorized access        ApiResponse<Object> apiResponse = ApiResponse.builder()                .success(false)                .message("Unauthorized access - Authentication required")                .status(HttpStatus.UNAUTHORIZED)                .timestamp(Instant.now())                .data(null)                .build();        response.setStatus(HttpStatus.UNAUTHORIZED.value());        response.setContentType(MediaType.APPLICATION_JSON_VALUE);        OutputStream responseOutputStream = response.getOutputStream();        ObjectMapper objectMapper = new ObjectMapper();        objectMapper.writeValue(responseOutputStream, apiResponse);        responseOutputStream.flush();    }}