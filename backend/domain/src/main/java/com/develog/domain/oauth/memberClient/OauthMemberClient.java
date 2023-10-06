package com.develog.domain.oauth.memberClient;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthType;

public interface OauthMemberClient {

    OauthType support();
    OauthMember findMember(String code);
}
