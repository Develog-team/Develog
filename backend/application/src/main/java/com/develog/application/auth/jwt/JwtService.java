package com.develog.application.auth.jwt;

import com.develog.oauth.OauthMemberRepository;
import com.develog.security.jwt.JwtAuthenticationException;
import com.develog.security.jwt.JwtManager;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final JwtManager jwtManager;
    private final OauthMemberRepository memberRepository;

    public String refreshToken(HttpServletRequest request){
        String refreshToken = jwtManager.resolveRefreshToken(request);
        if(jwtManager.validateToken(refreshToken)){
            Long memberId = jwtManager.getMemberId(refreshToken);
            if(refreshToken.equals(memberRepository.findRefreshTokenById(memberId))){
                return jwtManager.createToken(memberId, false);
            }
        }
        throw new JwtAuthenticationException("유효하지 않은 Refresh token");
    }
}
