package com.develog.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class JwtManager {
    @Value("${security.jwt.token.secret-key}")
    private String secretKeyPlain;
    private SecretKey secretKey;

    @Value("${security.jwt.token.expire-length}")
    private long validityInMilliseconds;
    @Value("${security.jwt.refresh.token.expire-length}")
    private long validityOfRefreshInMilliseconds;

    private static final String TOKEN_MEMBER_ID = "memberId";

    public String createToken(Long memberId, boolean isRefreshToken) {
        String subject = isRefreshToken ? "refresh-token" : "access-token";
        Claims claims = Jwts.claims().setSubject(memberId.toString()).setSubject(subject);

        Date now = new Date();
        Date validity = new Date(now.getTime() + (isRefreshToken ? validityOfRefreshInMilliseconds : validityInMilliseconds));

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .claim(TOKEN_MEMBER_ID, memberId)
                .signWith(getSecretKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public SecretKey getSecretKey() {
        if (secretKey == null) {
            String keyBase64Encoded = Base64.getEncoder().encodeToString(secretKeyPlain.getBytes());
            secretKey = Keys.hmacShaKeyFor(keyBase64Encoded.getBytes());
        }
        return secretKey;
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }

    public String resolveRefreshToken(HttpServletRequest req) {
        return req.getHeader("Refresh-Token");
    }

    public Authentication getAuthentication(String token) {
        Long memberId = getMemberId(token);
        UserDetails userDetails =  new org.springframework.security.core.userdetails.User(String.valueOf(memberId), "", new ArrayList<>());
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public Long getMemberId(String token) {
        return ((Integer)Jwts.parserBuilder().setSigningKey(getSecretKey()).build().parseClaimsJws(token).getBody().get(TOKEN_MEMBER_ID)).longValue();
    }

    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(getSecretKey()).build().parseClaimsJws(token);
            if (claims.getBody().getExpiration().before(new Date())) {
                return false;
            }
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            e.printStackTrace();
            throw new JwtAuthenticationException("JWT 토큰이 유효하지 않습니다.");
        }
    }
}