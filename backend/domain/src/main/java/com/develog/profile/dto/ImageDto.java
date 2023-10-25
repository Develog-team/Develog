package com.develog.profile.dto;

import com.develog.profile.entity.Image;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ImageDto {

    private int image_id;
    private String originName;
    private String uniqueName;

    public static ImageDto toDto(Image image) {
        return new ImageDto(image.getImage_id(), image.getOriginName(), image.getUniqueName());
    }
}