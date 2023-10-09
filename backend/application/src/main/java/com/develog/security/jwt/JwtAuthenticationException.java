package com.develog.security.jwt;
// JwtAuthenticationException
public class JwtAuthenticationException extends RuntimeException {
    public JwtAuthenticationException(String msg) {
        super(msg);
    }
}