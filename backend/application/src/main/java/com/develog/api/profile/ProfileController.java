package com.develog.api.profile;

import com.develog.profile.dto.ProfileCreateRequestDto;
import com.develog.profile.dto.ProfileUpdateRequestDto;
import com.develog.profile.service.impl.ProfileServiceImpl;
import com.develog.response.Response;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Api(value = "Profile Controller", tags = "Profile")
@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping("/api/profiles")
public class ProfileController {

    private final ProfileServiceImpl profileService;

    @ApiOperation(value = "profile 생성", notes = "profile을 작성합니다.")
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@ModelAttribute ProfileCreateRequestDto profileCreateRequestDto) {
        return Response.success(profileService.create(profileCreateRequestDto));
    }

    @ApiOperation(value = "profile 전체 목록 조회", notes = "profile 전체 목록을 조회합니다.")
    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public Response findAllProfile() {
        return Response.success(profileService.findProfileList());
    }

    @ApiOperation(value = "profile 단건 조회", notes = "profile을 단건 조회합니다.")
    @GetMapping("/detail/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response findBoard(@ApiParam(value = "profile id", required = true) @PathVariable Long id) {
        return Response.success(profileService.findProfile(id));
    }

    @ApiOperation(value = "profile 수정", notes = "profile을 수정합니다.")
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response editBoard(@ApiParam(value = "profile id", required = true) @PathVariable Long id,
                              @ModelAttribute ProfileUpdateRequestDto profileUpdateRequestDto) {
        return Response.success(profileService.update(id, profileUpdateRequestDto));
    }

    @ApiOperation(value = "profile 삭제", notes = "profile을 삭제합니다.")
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Response deleteBoard(@PathVariable Long id) {
        profileService.delete(id);
        return Response.success();
    }

}