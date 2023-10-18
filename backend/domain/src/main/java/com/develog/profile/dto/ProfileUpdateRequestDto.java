package com.develog.profile.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileUpdateRequestDto {
    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개
    @Schema(description = "profile 웹사이트 링크")
    private List<String> link;


    @Builder
    public ProfileUpdateRequestDto(String nickname, String bio, List<String> link) {
        this.nickname = nickname;
        this.bio = bio;
        this.link = link;
    }
}
