package com.develog.profile.dto;

import com.develog.profile.entity.Image;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Tag(name = "ImageDto", description = "ImageDto 생성, 조회, 수정 요청")
@Getter
public class ImageDto {

    private final int image_id;
    private final String originName;
    private final String uniqueName;


    @Builder
    public ImageDto(int image_id, String originName, String uniqueName) {
        this.image_id = image_id;
        this.originName = originName;
        this.uniqueName = uniqueName;
    }

    public static ImageDto toEntity(Image image) {
        return ImageDto.builder()
                .image_id(image.getImage_id())
                .originName(image.getOriginName())
                .uniqueName(image.getUniqueName())
                .build();
    }
}