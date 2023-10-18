package com.jpaConfigure;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Objects;
import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<Long> {

    @Override
    public Optional<Long> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (Objects.isNull(authentication)|| !authentication.isAuthenticated()) {
            return Optional.empty();
        }

        UserDetails user = (UserDetails) authentication.getPrincipal();
        return Optional.of(Long.parseLong(user.getUsername()));
    }
}