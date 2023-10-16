package com.develog.oauth.kakao;

import com.develog.oauth.OauthType;
import com.develog.oauth.kakao.config.KakaoAuthConfig;
import com.develog.oauth.kakao.config.KakaoProviderConfig;
import com.develog.oauth.oauthCodeRequest.AuthCodeRequestUrlProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
@RequiredArgsConstructor
public class KakaoAuthCodeRequestUrlProvider implements AuthCodeRequestUrlProvider {

    private final KakaoProviderConfig providerConfig;
    private final KakaoAuthConfig authConfig;

    @Override
    public OauthType support() {
        return OauthType.KAKAO;
    }

    @Override
    public String getUrl() {
        return UriComponentsBuilder
                .fromUriString(providerConfig.getAuthorizationUri())
                .queryParam("response_type", "code")
                .queryParam("client_id", authConfig.getClientId())
                .queryParam("redirect_uri", authConfig.getRedirectUri())
                .toUriString();
    }
}
