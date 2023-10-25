package com.develog.profile.entity;


import com.develog.profile.dto.ProfileUpdateRequest;
import com.develog.time.entity.JpaBaseEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Profile extends JpaBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profile_id;

    @Column(nullable = true)
    private String nickname;

    @Lob
    @Column(nullable = true)
    private String introduction;

    @Column(nullable = true)
    @ElementCollection
    private List<String> link;

    @OneToMany(mappedBy = "profile", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<Image> images;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "member_id", nullable = false)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    private OauthMember member;

    @Builder
    public Profile(String nickname, String introduction, List<String> link, List<Image> images) {
        this.nickname = nickname;
        this.introduction = introduction;
        this.link = link;
        this.images = new ArrayList<>();
        addImages(images);
    }


    public ImageUpdatedResult update(ProfileUpdateRequest req) {
        this.nickname = req.getNickname();
        this.introduction = req.getIntroduction();
        this.link = req.getLink();

        ImageUpdatedResult result = findImageUpdatedResult(req.getAddedImages(), req.getDeletedImages());
        addImages(result.getAddedImages());
        deleteImages(result.getDeletedImages());
        return result;
    }

    private void addImages(List<Image> added) {
        added.stream().forEach(i -> {
            images.add(i);
            i.initProfile(this);
        });
    }

    private void deleteImages(List<Image> deleted) {
        deleted.stream().forEach(di -> this.images.remove(di));
    }

    private ImageUpdatedResult findImageUpdatedResult(List<MultipartFile> addedImageFiles, List<Integer> deletedImageIds) {
        List<Image> addedImages = convertImageFilesToImages(addedImageFiles);
        List<Image> deletedImages = convertImageIdsToImages(deletedImageIds);
        return new ImageUpdatedResult(addedImageFiles, addedImages, deletedImages);
    }

    private List<Image> convertImageIdsToImages(List<Integer> imageIds) {
        return imageIds.stream()
                .map(id -> convertImageIdToImage(id))
                .filter(i -> i.isPresent())
                .map(i -> i.get())
                .collect(toList());
    }

    private Optional<Image> convertImageIdToImage(int id) {
        return this.images.stream().filter(i -> i.getImage_id() == (id)).findAny();
    }

    private List<Image> convertImageFilesToImages(List<MultipartFile> imageFiles) {
        return imageFiles.stream().map(imageFile -> new Image(imageFile.getOriginalFilename())).collect(toList());
    }

    @Getter
    @AllArgsConstructor
    public static class ImageUpdatedResult {
        private List<MultipartFile> addedImageFiles;
        private List<Image> addedImages;
        private List<Image> deletedImages;
    }

}
