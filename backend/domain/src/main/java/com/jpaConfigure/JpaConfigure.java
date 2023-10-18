package com.jpaConfigure;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = "com.develog")
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
@RequiredArgsConstructor
public class JpaConfigure {

    @Bean
    public AuditorAware<Long> auditorProvider() {
        return new AuditorAwareImpl();
    }

}
