package com.develog.profile.service.impl;

import com.develog.profile.dto.ProfileCreateRequestDto;
import com.develog.profile.dto.ProfileCreateResponseDto;
import com.develog.profile.dto.ProfileUpdateRequestDto;
import com.develog.profile.entity.Photo;
import com.develog.profile.entity.Profile;
import com.develog.profile.exception.ProfileNotFoundException;
import com.develog.profile.repository.PhotoRepository;
import com.develog.profile.repository.ProfileRepository;
import com.develog.profile.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;
    private final PhotoRepository photoRepository;
    private final FileHandler fileHandler;

    //전체 멤버 프로필 조회 - 최신 순으로 정렬
    @Override
    public List<Profile> findProfileList() {

//        return profileRepository.findAll(Sort.by(Sort.Direction.DESC, "id")).stream()
//                .map(ProfileCreateResponseDto::new)
//                .collect(Collectors.toList());

        return profileRepository.findAll();
    }

    //개별 멤버 프로필 조회
    @Override
    public ProfileCreateResponseDto findProfile(Long id, List<Long> fileId) {
        Profile entity = profileRepository.findById(id).orElseThrow(ProfileNotFoundException::new);
        return new ProfileCreateResponseDto(entity, fileId);
    }

    @Transactional
    @Override
    public Long create(ProfileCreateRequestDto requestDto, List<MultipartFile> files) throws Exception {
        // 파일 처리를 위한 Board 객체 생성
        Profile profile = new Profile(
                requestDto.getNickname(),
                requestDto.getBio(),
                requestDto.getLink()
        );

        List<Photo> photoList = fileHandler.parseFileInfo(files);

        // 파일이 존재할 때에만 처리
        if(!photoList.isEmpty()) {
            for(Photo photo : photoList) {
                // 파일을 DB에 저장
                profile.addPhoto(photoRepository.save(photo));
            }
        }

        return profileRepository.save(profile).getId();

    }

    @Transactional
    @Override
    public Long update(Long id, ProfileUpdateRequestDto requestDto, List<MultipartFile> files) throws Exception {
        Profile profile = profileRepository.findById(id).orElseThrow(ProfileNotFoundException::new);

        List<Photo> photoList = fileHandler.parseFileInfo(files);

        if(!photoList.isEmpty()){
            for(Photo photo : photoList) {
                photoRepository.save(photo);
            }
        }

        profile.update(requestDto.getNickname(),
                requestDto.getBio(),
                requestDto.getLink());

        return id;
    }

    @Transactional
    @Override
    public void delete(long id) {
        Profile profile = profileRepository.findById(id).orElseThrow(ProfileNotFoundException::new);

        // 게시글이 있는 경우 삭제처리
        profileRepository.delete(profile);
    }




}
