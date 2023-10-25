package com.develog.application.profile;

import com.develog.profile.dto.*;
import com.develog.profile.entity.Image;
import com.develog.profile.entity.Profile;
import com.develog.profile.exception.ProfileNotFoundException;
import com.develog.profile.repository.FileService;
import com.develog.profile.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static java.util.stream.Collectors.toList;

@RequiredArgsConstructor
@Service
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final FileService fileService;

    @Transactional
    public ProfileCreateResponse create(ProfileCreateRequest req) {

        List<Image> images = req.getImages().stream().map(i -> new Image(i.getOriginalFilename())).collect(toList());

        Profile profile = profileRepository.save(new Profile(req.getNickname(), req.getIntroduction(),
                req.getLink(), images));

        uploadImages(profile.getImages(), req.getImages());

        return new ProfileCreateResponse(profile);
    }

    @Transactional(readOnly = true)
    public List<ProfileDto> findAllProfiles() {
        List<Profile> profiles = profileRepository.findAll();
        List<ProfileDto> profileDtos = new ArrayList<>();
        profiles.stream().forEach(i -> profileDtos.add(new ProfileDto().toEntity(i)));
        return profileDtos;
    }

    @Transactional(readOnly = true)
    public ProfileDto findProfile(long profile_id) {
        return ProfileDto.toEntity(profileRepository.findById(profile_id).orElseThrow(ProfileNotFoundException::new));
    }

    @Transactional
    public ProfileDto editProfile(long profile_id, ProfileUpdateRequest req) {
        Profile profile = profileRepository.findById(profile_id).orElseThrow(ProfileNotFoundException::new);

        Profile.ImageUpdatedResult result = profile.update(req);
        uploadImages(result.getAddedImages(), result.getAddedImageFiles());
        deleteImages(result.getDeletedImages());
        return ProfileDto.toEntity(profile);
    }

    @Transactional
    public void deleteProfile(long profile_id) {
        Profile profile = profileRepository.findById(profile_id).orElseThrow(ProfileNotFoundException::new);

        profileRepository.delete(profile);
    }


    private void uploadImages(List<Image> images, List<MultipartFile> fileImages) {
        IntStream.range(0, images.size()).forEach(i -> fileService.upload(fileImages.get(i), images.get(i).getUniqueName()));
    }

    private void deleteImages(List<Image> images) {
        images.stream().forEach(i -> fileService.delete(i.getUniqueName()));
    }

}
