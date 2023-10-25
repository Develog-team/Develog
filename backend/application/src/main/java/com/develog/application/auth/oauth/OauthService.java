package com.develog.application.auth.oauth;

import com.develog.domain.oauth.OauthMember;
import com.develog.domain.oauth.OauthMemberRepository;
import com.develog.domain.oauth.OauthType;
import com.develog.domain.oauth.memberClient.OauthMemberClientComposite;
import com.develog.domain.oauth.oauthCodeRequest.AuthCodeRequestUrlProviderComposite;
import com.develog.security.jwt.JwtManager;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OauthService {

    private final AuthCodeRequestUrlProviderComposite authCodeRequestUrlProviderComposite;
    private final OauthMemberClientComposite oauthMemberClientComposite;
    private final OauthMemberRepository  oauthMemberRepository;
    private final JwtManager jwtManager;

    public String getOauthCodeRequestPageUrl(OauthType type){
        return authCodeRequestUrlProviderComposite.getOauthCodeRequestUrl(type);
    }

    @Transactional
    public AuthResponse login(OauthType type, String code) {
        OauthMember member = getMember(type, code);
        String token = jwtManager.createToken(member.getId(), false);
        String refreshToken = jwtManager.createToken(member.getId(), true);
        member.newRefreshToken(refreshToken);
        return new AuthResponse(token, refreshToken, member.getName(), member.getPicture());
    }

    private OauthMember getMember(OauthType type, String code) {
        OauthMember member = oauthMemberClientComposite.findOauthMember(type, code);
        Optional<OauthMember> saved = oauthMemberRepository.findByOauthIdAndOauthType(member.getOauthId(), member.getOauthType());
        if(saved.isEmpty()) {
            oauthMemberRepository.save(member);
        } else{
            member = saved.get();
        }
        return member;
    }
}
