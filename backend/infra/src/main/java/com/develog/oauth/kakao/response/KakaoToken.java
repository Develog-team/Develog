package com.develog.oauth.kakao.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;


@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public record KakaoToken(
        String tokenType,
        String accessToken,
        String idToken,
        Integer expiresIn,
        String refreshToken,
        Integer refreshTokenExpiresIn,
        String scope
) {
}
//
//@Data
//public class KakaoToken {
//
//    private String tokenType;
//    private String accessToken;
//    private String idToken;
//    private Integer expiresIn;
//    private String refreshToken;
//    private Integer refreshTokenExpiresIn;
//    private String scope;
//
//}