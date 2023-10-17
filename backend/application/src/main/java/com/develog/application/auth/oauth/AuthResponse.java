package com.develog.application.auth.oauth;

import lombok.Getter;

@Getter
public class AuthResponse {

    private final String token;
    private final String refreshToken;
    private final String name;
    private final String id;

    public AuthResponse(String token, String refreshToken, String name, String id){
        this.token = token;
        this.refreshToken = refreshToken;
        this.name = name;
        this.id = id;
    }

}
