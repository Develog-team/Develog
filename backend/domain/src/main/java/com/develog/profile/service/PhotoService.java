package com.develog.profile.service;

import com.develog.profile.dto.PhotoDto;
import com.develog.profile.dto.PhotoResponseDto;

import java.util.List;

public interface PhotoService {
    PhotoDto findByFileId(Long id);
    List<PhotoResponseDto> findAllByProfile(Long id);
}
