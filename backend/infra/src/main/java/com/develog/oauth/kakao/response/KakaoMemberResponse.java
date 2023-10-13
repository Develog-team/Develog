package com.develog.oauth.kakao.response;

import com.develog.oauth.OauthMember;

public class KakaoMemberResponse {

    public OauthMember toEntity(){
        return new OauthMember();
    }
}
