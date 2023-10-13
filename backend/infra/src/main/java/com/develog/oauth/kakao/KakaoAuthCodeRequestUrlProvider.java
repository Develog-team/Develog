package com.develog.oauth.kakao;

import com.develog.oauth.OauthType;
import com.develog.oauth.kakao.config.KakaoAuthConfig;
import com.develog.oauth.kakao.config.KakaoProviderConfig;
import com.develog.oauth.oauthCodeRequest.AuthCodeRequestUrlProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KakaoAuthCodeRequestUrlProvider implements AuthCodeRequestUrlProvider {

    private final KakaoProviderConfig providerConfig;

    @Override
    public OauthType support() {
        return OauthType.KAKAO;
    }

    @Override
    public String getUrl() {
        return providerConfig.getAuthorizationUri();
    }
}
