package com.develog.oauth.kakao.response;

import com.develog.oauth.OauthMember;
import com.develog.oauth.OauthType;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

@Data
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class KakaoMemberResponse {

    private Long id;
    private KakaoAccount kakaoAccount;

    public OauthMember toEntity(){
        return OauthMember.builder()
                .oauthId(id)
                .oauthType(OauthType.KAKAO)
                .name(kakaoAccount.profile.nickname)
                .picture(kakaoAccount.profile.profileImageUrl)
                .build();
    }

    @Data
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public class KakaoAccount{
        Profile profile;

        @Data
        @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
        public class Profile{
            String nickname;
            String profileImageUrl;
        }
    }
}