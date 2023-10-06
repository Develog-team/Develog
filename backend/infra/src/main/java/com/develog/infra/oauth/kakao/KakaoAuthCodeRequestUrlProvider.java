package com.develog.infra.oauth.kakao;

import com.develog.domain.oauth.OauthType;
import com.develog.domain.oauth.oauthCodeRequest.AuthCodeRequestUrlProvider;
import org.springframework.stereotype.Component;

@Component
public class KakaoAuthCodeRequestUrlProvider implements AuthCodeRequestUrlProvider {

    public KakaoAuthCodeRequestUrlProvider(KakaoAuthConfig config){
        this.config = config;
    }

    private final KakaoAuthConfig config;

    @Override
    public OauthType support() {
        return OauthType.KAKAO;
    }

    @Override
    public String getUrl() {
        return config.getAuthorizationUri();
    }
}
