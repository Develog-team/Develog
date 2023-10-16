package com.develog.api.auth.jwt;

import com.develog.application.auth.jwt.JwtService;
import com.develog.security.jwt.JwtAuthenticationException;
import com.develog.security.jwt.JwtManager;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/jwt")
@RequiredArgsConstructor
public class JwtController {

    private final JwtService jwtService;

    @GetMapping("/refresh")
    public String tokenRefresh(HttpServletRequest request){
        return jwtService.refreshToken(request);
    }
}
