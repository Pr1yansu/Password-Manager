package com.webweeb.backend.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class AppException extends RuntimeException {
    private final HttpStatus status;

    /**
     * Constructor for AppException.
     *
     * @param message the detail message
     * @param status  the HTTP status
     */
    public AppException(String message, HttpStatus status) {
        super(message);
        this.status = status;
    }
}
