package com.develog.profile.dto;


import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.Lob;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "ProfileDto")
@Getter
@NoArgsConstructor
public class ProfileDto {

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


    @Builder
    public ProfileDto(long profile_id, String nickname, String introduction, List<String> link, List<ImageDto> images) {
        this.profile_id = profile_id;
        this.nickname = nickname;
        this.introduction = introduction;
        this.link = link;
        this.images = images;
    }

    public static ProfileDto toEntity(Profile profile) {
        return ProfileDto.builder()
                .profile_id(profile.getProfile_id())
                .nickname(profile.getNickname())
                .introduction(profile.getIntroduction())
                .link(profile.getLink())
                .images(profile.getImages().stream().map(ImageDto::toEntity).collect(Collectors.toList()))
                .build();
    }

}
