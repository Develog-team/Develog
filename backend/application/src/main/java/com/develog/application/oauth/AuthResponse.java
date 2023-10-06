package com.develog.application.oauth;

import lombok.Getter;

@Getter
public class AuthResponse {

    private final String token;
    private final String name;
    private final String id;

    public AuthResponse(String token, String name, String id){
        this.token = token;
        this.name = name;
        this.id = id;
    }

}
