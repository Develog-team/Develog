package com.develog.profile.service.impl;

import com.develog.profile.dto.ProfileCreateRequestDto;
import com.develog.profile.dto.ProfileCreateResponseDto;
import com.develog.profile.dto.ProfileUpdateRequestDto;
import com.develog.profile.entity.Profile;
import com.develog.profile.exception.ProfileNotFoundException;
import com.develog.profile.repository.ProfileRepository;
import com.develog.profile.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;

    //전체 멤버 프로필 조회
    @Override
    public List<ProfileCreateResponseDto> findProfileList() {

        return profileRepository.findAll().stream()
                .map(ProfileCreateResponseDto::new)
                .collect(Collectors.toList());
    }

    //개별 멤버 프로필 조회
    @Override
    public ProfileCreateResponseDto findProfile(long id) {
        Profile entity = profileRepository.findById(id).orElseThrow(ProfileNotFoundException::new);
        return new ProfileCreateResponseDto(entity);
    }

    @Transactional
    @Override
    public Long create(ProfileCreateRequestDto profileCreateRequestDto) {
        return profileRepository.save(profileCreateRequestDto.toEntity()).getId();
    }

    @Transactional
    @Override
    public Long update(long id, ProfileUpdateRequestDto profileUpdateRequestDto) {
        Profile profile = profileRepository.findById(id).orElseThrow(ProfileNotFoundException::new);

        profile.update(profileUpdateRequestDto.getNickname(),
                profileUpdateRequestDto.getPicture(),
                profileUpdateRequestDto.getBio());

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
