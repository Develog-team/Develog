package com.develog.profile.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileUpdateRequestDto {
    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 이미지")
    private String picture; //프로필 이미지
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개

    @Builder
    public ProfileUpdateRequestDto(String nickname, String picture, String bio) {
        this.nickname = nickname;
        this.picture = picture;
        this.bio = bio;
    }
}
