package com.develog.domain.oauth;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface OauthMemberRepository extends JpaRepository<OauthMember, Long> {
    Optional<OauthMember> findByEmail(String email);

    String findRefreshTokenById(Long memberId);
    Optional<OauthMember> findByOauthIdAndOauthType(Long oauthId, OauthType type);
}