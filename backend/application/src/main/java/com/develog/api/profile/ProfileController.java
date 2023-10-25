package com.develog.api.profile;

import com.develog.application.profile.ProfileService;
import com.develog.profile.dto.ProfileCreateRequest;
import com.develog.profile.dto.ProfileUpdateRequest;
import com.develog.response.Response;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Profile Controller", description = "Profile")
@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping("/api/profiles")
public class ProfileController {

    private final ProfileService profileService;

    @Operation(summary = "프로필 생성", description = "프로필을 작성합니다.")
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Response create(@ModelAttribute ProfileCreateRequest req) {
        return Response.success(profileService.create(req));
    }

    @Operation(summary = "프로필 전체 목록 조회", description = "프로필 전체 목록을 조회합니다.")
    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public Response findAllProfiles() {
        return Response.success(profileService.findAllProfiles());
    }

    @Operation(summary = "프로필 단건 조회", description = "프로필을 단건 조회합니다.")
    @GetMapping("/detail/{profile_id}")
    @ResponseStatus(HttpStatus.OK)
    public Response findProfile(@Parameter(name = " profile_id", description = "profile의 id(pk)") @PathVariable long profile_id) {
        return Response.success(profileService.findProfile(profile_id));
    }

    @Operation(summary = "프로필 수정", description = "프로필을 수정합니다.")
    @PutMapping("/update/{profile_id}")
    @ResponseStatus(HttpStatus.OK)
    public Response editProfile(@Parameter(name = " profile_id", description = "profile의 id(pk)") @PathVariable long profile_id,
                                @ModelAttribute ProfileUpdateRequest req) {
        return Response.success(profileService.editProfile(profile_id, req));
    }

    @Operation(summary = "프로필 삭제", description = "프로필을 삭제합니다.")
    @DeleteMapping("/delete/{profile_id}")
    @ResponseStatus(HttpStatus.OK)
    public Response deleteProfile(@Parameter(name = " profile_id", description = "profile의 id(pk)") @PathVariable long profile_id) {
        profileService.deleteProfile(profile_id);
        return Response.success();
    }



}
