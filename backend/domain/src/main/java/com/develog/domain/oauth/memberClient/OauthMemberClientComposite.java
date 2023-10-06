package com.develog.domain.oauth.memberClient;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthType;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class OauthMemberClientComposite {

    private final Map<OauthType, OauthMemberClient> clientsByType;

    public OauthMemberClientComposite(List<OauthMemberClient> clients){
        clientsByType = clients.stream().collect(Collectors.toMap(OauthMemberClient::support, Function.identity()));
    }

    public OauthMember findOauthMember(OauthType type, String code){
        return clientsByType.get(type).findMember(code);
    }
}
