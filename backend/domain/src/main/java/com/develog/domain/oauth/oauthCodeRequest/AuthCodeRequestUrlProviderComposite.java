package com.develog.domain.oauth.oauthCodeRequest;

import com.develog.domain.oauth.OauthType;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Set;
import java.util.function.Function;

import static java.util.stream.Collectors.toMap;


@Component
public class AuthCodeRequestUrlProviderComposite {

    private final Map<OauthType, AuthCodeRequestUrlProvider> providersByType;

    public AuthCodeRequestUrlProviderComposite(Set<AuthCodeRequestUrlProvider> providers){
        providersByType = providers.stream().collect(toMap(AuthCodeRequestUrlProvider::support, Function.identity()));
    }

    public String getOauthCodeRequestUrl(OauthType type){
        return providersByType.get(type).getUrl();
    }
}
