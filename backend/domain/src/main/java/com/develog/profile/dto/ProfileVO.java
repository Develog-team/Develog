package com.develog.profile.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class ProfileVO {

    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개
    @Schema(description = "profile 웹사이트 링크")
    private List<String> link;
    @Schema(description = "profile 이미지")
    private List<MultipartFile> files;

}
