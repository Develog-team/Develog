package com.develog.application.auth.oauth;

import lombok.Getter;

@Getter
public class AuthResponse {

    private final String token;
    private final String refreshToken;
    private final String name;
    private final String picture;

    public AuthResponse(String token, String refreshToken, String name, String picture){
        this.token = token;
        this.refreshToken = refreshToken;
        this.name = name;
        this.picture = picture;
    }

}
