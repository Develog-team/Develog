package com.develog.api.profile;

import com.develog.profile.dto.PhotoResponseDto;
import com.develog.profile.dto.ProfileCreateRequestDto;
import com.develog.profile.dto.ProfileListResponseDto;
import com.develog.profile.dto.ProfileUpdateRequestDto;
import com.develog.profile.entity.Profile;
import com.develog.profile.service.PhotoService;
import com.develog.profile.service.impl.ProfileServiceImpl;
import com.develog.response.Response;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.Tag;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Api(value = "Profile Controller", tags = "Profile")
@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping("/api/profiles")
public class ProfileController {

    private final ProfileServiceImpl profileService;
    private final PhotoService fileService;

    @Operation(summary = "profile 생성", description = "profile을 작성합니다.")
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@ModelAttribute List<MultipartFile> files,
                           @ModelAttribute ProfileCreateRequestDto requestDto) throws Exception{
        return Response.success(profileService.create(requestDto, files));
    }

    @Operation(summary = "profile 전체 목록 조회", description = "profile 전체 목록을 조회합니다.")
    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public Response findAllProfile() {

        // 게시글 전체 조회
        List<Profile> boardList = profileService.findProfileList();
        // 반환할 List<BoardListResponseDto> 생성
        List<ProfileListResponseDto> responseDtoList = new ArrayList<>();

        for(Profile profile : boardList){
            // 전체 조회하여 획득한 각 게시글 객체를 이용하여 BoardListResponseDto 생성
            ProfileListResponseDto responseDto = new ProfileListResponseDto(profile);
            responseDtoList.add(responseDto);
        }

        return Response.success(responseDtoList);
    }

    @Operation(summary = "profile 단건 조회", description = "profile을 단건 조회합니다.")
    @GetMapping("/detail/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response findBoard(@ApiParam(value = "profile id", required = true) @PathVariable Long id) {
        // 게시글 id로 해당 게시글 첨부파일 전체 조회
        List<PhotoResponseDto> photoResponseDtoList =
                fileService.findAllByProfile(id);
        // 게시글 첨부파일 id 담을 List 객체 생성
        List<Long> photoId = new ArrayList<>();
        // 각 첨부파일 id 추가
        for(PhotoResponseDto photoResponseDto : photoResponseDtoList)
            photoId.add(photoResponseDto.getFileId());

        return Response.success(profileService.findProfile(id, photoId));
    }

    @Operation(summary = "profile 수정", description = "profile을 수정합니다.")
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response editBoard(@ApiParam(value = "profile id", required = true) @PathVariable Long id,
                              @RequestBody ProfileUpdateRequestDto profileUpdateRequestDto) {
        return Response.success(profileService.update(id, profileUpdateRequestDto));
    }

    @Operation(summary = "profile 삭제", description = "profile을 삭제합니다.")
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response deleteBoard(@PathVariable Long id) {
        profileService.delete(id);
        return Response.success();
    }

}
