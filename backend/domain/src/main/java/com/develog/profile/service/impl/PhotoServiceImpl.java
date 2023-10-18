package com.develog.profile.service.impl;

import com.develog.profile.dto.PhotoDto;
import com.develog.profile.dto.PhotoResponseDto;
import com.develog.profile.entity.Photo;
import com.develog.profile.repository.PhotoRepository;
import com.develog.profile.service.PhotoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PhotoServiceImpl implements PhotoService {

    private final PhotoRepository photoRepository;

    /**
     * 이미지 개별 조회
     */
    @Transactional(readOnly = true)
    @Override
    public PhotoDto findByFileId(Long id) {
        Photo entity = photoRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 파일이 존재하지 않습니다.")
        );

        PhotoDto photoDto = PhotoDto.builder()
                .origFileName(entity.getOrigFileName())
                .filePath(entity.getFilePath())
                .fileSize(entity.getFileSize())
                .build();

        return photoDto;
    }

    /**
     * 이미지 전체 조회
     */
    @Transactional
    @Override
    public List<PhotoResponseDto> findAllByProfile(Long id) {
        List<Photo> photoList = photoRepository.findAllByProfileId(id);

        return photoList.stream()
                .map(PhotoResponseDto::new)
                .collect(Collectors.toList());
    }

}
