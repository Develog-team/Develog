package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.Lob;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Tag(name = "ProfileCreateRequest", description = "Profile 생성 요청")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileCreateRequest {

    @Schema(description = "닉네임")
    private String nickname;

    @Lob
    @Schema(description = "자기소개")
    private String introduction;

    @Schema(description = "링크 여러개")
    private List<String> link;

    @Schema(description = "이미지")
    private List<MultipartFile> images = new ArrayList<>();


}
