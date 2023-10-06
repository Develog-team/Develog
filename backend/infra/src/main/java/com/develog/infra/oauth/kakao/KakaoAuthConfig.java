package com.develog.infra.oauth.kakao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@Getter
@AllArgsConstructor
@ConfigurationProperties(prefix = "oauth.kakao")
public class KakaoAuthConfig {

    private String clientId;
    private String clientSecret;
    private String redirectUri;
    private String authorizationGrantType;
    private String clientAuthenticationMethod;

    private String authorizationUri;
    private String tokenUri;
    private String userInfoUrl;
    private String userNameAttribute;

}