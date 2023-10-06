package com.develog.oauth.memberClient;

import com.develog.oauth.OauthMember;
import com.develog.oauth.OauthType;

public interface OauthMemberClient {

    OauthType support();
    OauthMember findMember(String code);
}
