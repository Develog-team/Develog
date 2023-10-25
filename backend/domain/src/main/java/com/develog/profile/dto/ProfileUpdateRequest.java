package com.develog.profile.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "ProfileUpdateRequest")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfileUpdateRequest {
    @Schema(description = "닉네임")
    private String nickname;

    @Lob
    @Schema(description = "자기소개")
    private String introduction;

    @Schema(description = "링크 여러개")
    private List<String> link;

    @Schema(description = "추가된 이미지")
    private List<MultipartFile> addedImages = new ArrayList<>();

    @Schema(description = "제거된 이미지 아이디")
    private List<Integer> deletedImages = new ArrayList<>();
}
