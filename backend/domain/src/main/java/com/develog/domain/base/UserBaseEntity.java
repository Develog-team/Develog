package com.develog.domain.base;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;

@MappedSuperclass
@Getter
public abstract class UserBaseEntity extends TimeBaseEntity{

    @CreatedBy
    private Long createUser;
}
