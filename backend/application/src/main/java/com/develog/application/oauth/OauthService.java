package com.develog.application.oauth;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthMemberRepository;
import com.develog.domain.oauth.OauthType;
import com.develog.domain.oauth.memberClient.OauthMemberClientComposite;
import com.develog.domain.oauth.oauthCodeRequest.AuthCodeRequestUrlProviderComposite;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OauthService {

    private final AuthCodeRequestUrlProviderComposite authCodeRequestUrlProviderComposite;
    private final OauthMemberClientComposite oauthMemberClientComposite;
    private final OauthMemberRepository  oauthMemberRepository;

    public String getOauthCodeRequestPageUrl(OauthType type){
        return authCodeRequestUrlProviderComposite.getOauthCodeRequestUrl(type);
    }

    public AuthResponse login(OauthType type, String code) {
        OauthMember member = oauthMemberClientComposite.findOauthMember(type, code);
        OauthMember saved = oauthMemberRepository.findById(member.getId()).orElse(oauthMemberRepository.save(member));
        String token = "";
        return new AuthResponse(token, saved.getName(), saved.getPicture());
    }
}
