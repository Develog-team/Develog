package com.develog.oauth.kakao.response;

import com.develog.oauth.OauthMember;
import com.develog.oauth.OauthType;
import lombok.Data;


import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import java.time.LocalDateTime;

@JsonNaming(SnakeCaseStrategy.class)
public record KakaoMemberResponse(
        Long id,
        boolean hasSignedUp,
        LocalDateTime connectedAt,
        KakaoAccount kakaoAccount
) {

    public OauthMember toEntity() {
        return OauthMember.builder()
                .oauthId(id)
                .oauthType(OauthType.KAKAO)
                .name(kakaoAccount.profile.nickname)
                .picture(kakaoAccount.profile.profileImageUrl)
                .build();
    }

    @JsonNaming(SnakeCaseStrategy.class)
    public record KakaoAccount(
            boolean profileNeedsAgreement,
            boolean profileNicknameNeedsAgreement,
            boolean profileImageNeedsAgreement,
            Profile profile,
            boolean nameNeedsAgreement,
            String name,
            boolean emailNeedsAgreement,
            boolean isEmailValid,
            boolean isEmailVerified,
            String email,
            boolean ageRangeNeedsAgreement,
            String ageRange,
            boolean birthyearNeedsAgreement,
            String birthyear,
            boolean birthdayNeedsAgreement,
            String birthday,
            String birthdayType,
            boolean genderNeedsAgreement,
            String gender,
            boolean phoneNumberNeedsAgreement,
            String phoneNumber,
            boolean ciNeedsAgreement,
            String ci,
            LocalDateTime ciAuthenticatedAt
    ) {
    }

    @JsonNaming(SnakeCaseStrategy.class)
    public record Profile(
            String nickname,
            String thumbnailImageUrl,
            String profileImageUrl,
            boolean isDefaultImage
    ) {
    }
}
//
//@Data
//public class KakaoMemberResponse {
//
//    private Long id;
//    private KakaoAccount kakaoAccount;
//
//    public OauthMember toEntity(){
//        return OauthMember.builder()
//                .oauthId(id)
//                .name(kakaoAccount.profile.nickName)
//                .picture(kakaoAccount.profile.profileImageUrl)
//                .build();
//    }
//
//    private class KakaoAccount{
//        Profile profile;
//
//        private class Profile{
//            String nickName;
//            String profileImageUrl;
//        }
//    }
//}