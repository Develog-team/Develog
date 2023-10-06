package com.develog.oauth.oauthCodeRequest;

import com.develog.oauth.OauthType;

public interface AuthCodeRequestUrlProvider {

    OauthType support();
    String getUrl();
}
