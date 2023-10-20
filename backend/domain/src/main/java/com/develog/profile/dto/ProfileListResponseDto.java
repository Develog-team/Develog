package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

import java.util.List;

@Getter
public class ProfileListResponseDto {

    private Long id;
    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개
    @Schema(description = "profile 웹사이트 링크")
    private List<String> link;
    @Schema(description = "profile 사진번호")
    private Long fileId; //


    public ProfileListResponseDto(Profile entity) {
        this.id = entity.getId();
        this.nickname = entity.getNickname();
        this.bio = entity.getBio();
        this.link = entity.getLink();

        if(!entity.getPhoto().isEmpty())  // 첨부파일 존재 o
            this.fileId = entity.getPhoto().get(0).getId();  // 첫번째 이미지 반환
        else // 첨부파일 존재 x
            this.fileId = 0L;  // 서버에 저장된 기본 이미지 반환
    }

}
