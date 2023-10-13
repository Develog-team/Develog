package com.develog.profile.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileUpdateRequestDto {
    private String nickname; // 닉네임
    private String picture; //프로필 이미지
    private String bio; // 자기소개

    @Builder
    public ProfileUpdateRequestDto(String nickname, String picture, String bio) {
        this.nickname = nickname;
        this.picture = picture;
        this.bio = bio;
    }
}
