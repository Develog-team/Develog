package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

import java.util.List;


@Getter
public class ProfileCreateResponseDto {

    private final Long id;
    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개
    @Schema(description = "profile 웹사이트 링크")
    private List<String> link;
//    @Schema(description = "profile 사진번호")
//    private List<Long> fileId; //List<Long> fileId

    public ProfileCreateResponseDto(Profile entity) {
        this.id = entity.getId();
        this.nickname = entity.getNickname();
        this.bio = entity.getBio();
        this.link = entity.getLink();
//        this.fileId = fileId;
    }
}
