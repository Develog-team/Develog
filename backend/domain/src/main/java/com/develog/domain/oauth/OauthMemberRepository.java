package com.develog.domain.oauth;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface OauthMemberRepository extends JpaRepository<OauthMember, Long> {
    String findRefreshTokenById(Long memberId);
}