package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.Lob;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "ProfileCreateResponse", description = "Profile 조회 요청")
@Getter
@NoArgsConstructor
public class ProfileCreateResponse {

    @Schema(description = "프로필 pk 번호")
    private long profile_id;

    @Schema(description = "닉네임")
    private String nickname;

    @Lob
    @Schema(description = "자기소개")
    private String introduction;

    @Schema(description = "링크 여러개")
    private List<String> link;

    @Schema(description = "이미지")
    private List<ImageDto> images;


    public ProfileCreateResponse(Profile entity) {
        this.profile_id = entity.getProfile_id();
        this.nickname = entity.getNickname();
        this.introduction = entity.getIntroduction();
        this.link = entity.getLink();
        this.images = entity.getImages().stream().map(ImageDto::toEntity).collect(Collectors.toList());
    }
}
