package com.develog.api.oauth;

import com.develog.application.oauth.AuthResponse;
import com.develog.application.oauth.OauthService;
import com.develog.domain.oauth.OauthType;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/oauth")
@RequiredArgsConstructor
public class OauthController {

    private final OauthService oauthService;

    @GetMapping("/{oauthType}")
    public ResponseEntity<Void> toOauthCodeRequestPage(@PathVariable OauthType oauthType, HttpServletResponse response) throws IOException {
        String pageUrl = oauthService.getOauthCodeRequestPageUrl(oauthType);
        response.sendRedirect(pageUrl);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public AuthResponse login(OauthType type, String code){
        return oauthService.login(type, code);
    }
}

