package com.develog.security.exception.handler;

import com.develog.security.exception.UserNotFoundException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        Map<String, String> errorResponse = new HashMap<>();
        if (authException instanceof UserNotFoundException) {
            UserNotFoundException unfe = (UserNotFoundException) authException;
            errorResponse.put("email", unfe.getEmail());
            errorResponse.put("name", unfe.getName());
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "회원가입이 필요합니다.");
        } else {
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "인증에 실패하였습니다.");
        }
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json;charset=UTF-8");

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(errorResponse));
    }
}
