package com.develog.api.profile;

import com.develog.profile.dto.*;
import com.develog.profile.entity.Photo;
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
import org.springframework.util.CollectionUtils;
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
                              @ModelAttribute ProfileVO profileVO) throws Exception {

        ProfileUpdateRequestDto requestDto =
                ProfileUpdateRequestDto.builder()
                        .nickname(profileVO.getNickname())
                        .bio(profileVO.getBio())
                        .link(profileVO.getLink())
                        .build();

        // DB에 저장되어있는 파일 불러오기
        List<PhotoResponseDto> dbPhotoList = fileService.findAllByProfile(id);
        // 전달되어온 파일들
        List<MultipartFile> multipartList = profileVO.getFiles();
        // 새롭게 전달되어온 파일들의 목록을 저장할 List 선언
        List<MultipartFile> addFileList = new ArrayList<>();

        if(CollectionUtils.isEmpty(dbPhotoList)) { // DB에 아예 존재 x
            if(!CollectionUtils.isEmpty(multipartList)) { // 전달되어온 파일이 하나라도 존재
                for (MultipartFile multipartFile : multipartList)
                    addFileList.add(multipartFile);	// 저장할 파일 목록에 추가
            }
        }
        else {  // DB에 한 장 이상 존재
            if(CollectionUtils.isEmpty(multipartList)) { // 전달되어온 파일 아예 x
                // 파일 삭제
                for(PhotoResponseDto dbPhoto : dbPhotoList)
                    fileService.deletePhoto(dbPhoto.getFileId());
            }
            else {  // 전달되어온 파일 한 장 이상 존재

                // DB에 저장되어있는 파일 원본명 목록
                List<String> dbOriginNameList = new ArrayList<>();

                // DB의 파일 원본명 추출
                for(PhotoResponseDto dbPhoto : dbPhotoList) {
                    // file id로 DB에 저장된 파일 정보 얻어오기
                    PhotoDto dbPhotoDto = fileService.findByFileId(dbPhoto.getFileId());
                    // DB의 파일 원본명 얻어오기
                    String dbOrigFileName = dbPhotoDto.getOrigFileName();

                    if(!multipartList.contains(dbOrigFileName))  // 서버에 저장된 파일들 중 전달되어온 파일이 존재하지 않는다면
                        fileService.deletePhoto(dbPhoto.getFileId());  // 파일 삭제
                    else  // 그것도 아니라면
                        dbOriginNameList.add(dbOrigFileName);	// DB에 저장할 파일 목록에 추가
                }

                for (MultipartFile multipartFile : multipartList) { // 전달되어온 파일 하나씩 검사
                    // 파일의 원본명 얻어오기
                    String multipartOrigName = multipartFile.getOriginalFilename();
                    if(!dbOriginNameList.contains(multipartOrigName)){   // DB에 없는 파일이면
                        addFileList.add(multipartFile); // DB에 저장할 파일 목록에 추가
                    }
                }
            }
        }

        // 각각 인자로 게시글의 id, 수정할 정보, DB에 저장할 파일 목록을 넘겨주기
        return Response.success(profileService.update(id, requestDto, addFileList));
    }

    @Operation(summary = "profile 삭제", description = "profile을 삭제합니다.")
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response deleteBoard(@PathVariable Long id) {
        fileService.deletePhoto(id);
        profileService.delete(id);
        return Response.success();
    }

}
