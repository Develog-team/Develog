package com.develog.profile.dto;

import com.develog.profile.entity.Profile;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ProfileCreateRequestDto {

    @Schema(description = "profile 닉네임")
    private String nickname; // 닉네임
    @Schema(description = "profile 자기소개")
    private String bio; // 자기소개
    @Schema(description = "profile 웹사이트 링크")
    private List<String> link;



    @Builder
    public ProfileCreateRequestDto(String nickname, String bio, List<String> link) {
        this.nickname = nickname;
        this.bio = bio;
        this.link = link;
    }


    public Profile toEntity(){
        return Profile.builder()
                .nickname(nickname)
                .bio(bio)
                .link(link)
                .build();
    }


}
