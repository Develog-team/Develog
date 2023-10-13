package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import lombok.*;


@Getter
public class ProfileCreateResponseDto {

    private final Long id;
    private final String nickname; // 닉네임
    private final String picture; //프로필 이미지
    private final String bio; // 자기소개

    public ProfileCreateResponseDto(Profile entity) {
        this.id = entity.getId();
        this.nickname = entity.getNickname();
        this.picture = entity.getPicture();
        this.bio = entity.getBio();
    }
}
