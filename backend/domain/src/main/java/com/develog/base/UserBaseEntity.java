package com.develog.base;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;

@MappedSuperclass
@Getter
public abstract class UserBaseEntity extends TimeBaseEntity{

    @CreatedBy
    private Long createUser;
}
