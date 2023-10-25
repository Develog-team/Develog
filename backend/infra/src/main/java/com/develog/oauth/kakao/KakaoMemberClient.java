package com.develog.oauth.kakao;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthType;
import com.develog.oauth.kakao.config.KakaoAuthConfig;
import com.develog.oauth.kakao.response.KakaoMemberResponse;
import com.develog.oauth.kakao.response.KakaoToken;
import com.develog.domain.oauth.memberClient.OauthMemberClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Component
@RequiredArgsConstructor
public class KakaoMemberClient implements OauthMemberClient {

    private final KakaoApiClient kakaoApiClient;
    private final KakaoAuthConfig authConfig;

    @Override
    public OauthType support() {
        return OauthType.KAKAO;
    }

    @Override
    public OauthMember findMember(String code) {
        KakaoToken token = kakaoApiClient.fetchToken(makeRequestTokenParam(code));
        KakaoMemberResponse memberResponse = kakaoApiClient.fetchMember("Bearer " + token.getAccessToken());
        return memberResponse.toEntity();
    }

    private MultiValueMap<String, String> makeRequestTokenParam(String code){
        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("code", code);
        param.add("client_id", authConfig.getClientId());
        param.add("client_secret", authConfig.getClientSecret());
        param.add("redirect_uri", authConfig.getRedirectUri());
        param.add("grant_type", authConfig.getAuthorizationGrantType());
        return param;
    }
}
