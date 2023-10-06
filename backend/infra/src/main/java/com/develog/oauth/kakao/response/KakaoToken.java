package com.develog.oauth.kakao.response;

import lombok.Data;

@Data
public class KakaoToken {

    private String tokenType;
    private String accessToken;
    private String idToken;
    private Integer expiresIn;
    private String refreshToken;
    private Integer refreshTokenExpiresIn;
    private String scope;

}