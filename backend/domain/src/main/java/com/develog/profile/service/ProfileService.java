package com.develog.profile.service;

import com.develog.profile.dto.ProfileCreateRequestDto;
import com.develog.profile.dto.ProfileCreateResponseDto;
import com.develog.profile.dto.ProfileUpdateRequestDto;
import com.develog.profile.entity.Profile;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProfileService {

    List<ProfileCreateResponseDto> findProfileList(); //전체 프로필 조회
    ProfileCreateResponseDto findProfile(long id); //개별 프로필 조회
    Long create(ProfileCreateRequestDto requestDto, List<MultipartFile> files) throws Exception;
    Long update(long id, ProfileUpdateRequestDto profileUpdateRequestDto);
    void delete(long id);
}
