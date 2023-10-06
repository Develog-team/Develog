package com.develog.infra.oauth.kakao;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthType;
import com.develog.domain.oauth.memberClient.OauthMemberClient;
import org.springframework.stereotype.Component;

@Component
public class KakaoMemberClient implements OauthMemberClient {

    @Override
    public OauthType support() {
        return null;
    }

    @Override
    public OauthMember findMember(String code) {
        return null;
    }
}
