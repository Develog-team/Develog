package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileCreateRequestDto {

    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 이미지")
    private String picture; //프로필 이미지
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개

    @Builder
    public ProfileCreateRequestDto(String nickname, String picture, String bio) {
        this.nickname = nickname;
        this.picture = picture;
        this.bio = bio;
    }

    public Profile toEntity(){
        return Profile.builder()
                .nickname(nickname)
                .picture(picture)
                .bio(bio)
                .build();
    }


}
