package com.develog.oauth.kakao;

import com.develog.oauth.OauthMember;
import com.develog.oauth.OauthType;
import com.develog.oauth.memberClient.OauthMemberClient;
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
