package com.develog.oauth.kakao.response;

import com.develog.oauth.OauthMember;
import lombok.Data;

@Data
public class KakaoMemberResponse {

    private Long id;
    private KakaoAccount kakaoAccount;

    public OauthMember toEntity(){
        return OauthMember.builder()
                .oauthId(id)
                .name(kakaoAccount.profile.nickName)
                .picture(kakaoAccount.profile.profileImageUrl)
                .build();
    }

    private class KakaoAccount{
        Profile profile;

        private class Profile{
            String nickName;
            String profileImageUrl;
        }
    }
}