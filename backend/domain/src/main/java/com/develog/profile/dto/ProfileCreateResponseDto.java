package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;


@Getter
public class ProfileCreateResponseDto {

    private final Long id;
    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 이미지")
    private String picture; //프로필 이미지
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개

    public ProfileCreateResponseDto(Profile entity) {
        this.id = entity.getId();
        this.nickname = entity.getNickname();
        this.picture = entity.getPicture();
        this.bio = entity.getBio();
    }
}
