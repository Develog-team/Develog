package com.develog.security.exception;

import lombok.Getter;
import org.springframework.security.core.AuthenticationException;

@Getter
public class UserNotFoundException extends AuthenticationException {
    private String email;
    private String name;

    public UserNotFoundException(String email, String name) {
        super("User not found: " + email);
        this.email = email;
        this.name = name;
    }
}