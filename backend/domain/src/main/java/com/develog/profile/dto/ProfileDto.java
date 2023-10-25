package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Tag(name = "ProfileDto")
@Data
@AllArgsConstructor
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

    public static ProfileDto toDto(Profile profile) {
        return new ProfileDto(
                profile.getProfile_id(),
                profile.getNickname(),
                profile.getIntroduction(),
                profile.getLink(),
                profile.getImages().stream().map(ImageDto::toDto).collect(Collectors.toList())
        );
    }

}
