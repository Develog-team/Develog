package com.develog.domain.oauth.oauthCodeRequest;

import com.develog.domain.oauth.OauthType;

public interface AuthCodeRequestUrlProvider {

    OauthType support();
    String getUrl();
}
