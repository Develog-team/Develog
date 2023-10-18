package com.develog.time;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Data;


import java.time.LocalDateTime;

@MappedSuperclass //객체의 입장에서 공통 매핑 정보가 필요할 때 사용
@Data
public class JpaBaseEntity {
//  엔티티를 생성, 변경할 때 변경한 사람과 시간을 추적하고 싶으면? Auditing 사용
//  등록일, 수정일, 등록자, 수정자
//  상속으로 공통적용, 순수 JPA 사용함
// JPA 주요 이벤트 어노테이션: @PrePersist, @PostPersist, @PreUpdate, @PostUpdate

    //updatable: 엔티티 수정 시 이 필드도 같이 저장하지만
    //false로 설정하면 데이터베이스에 수정하지 않는다. 읽기 전용일 때 사용한다.
    @Column(updatable = false)
    private LocalDateTime createDate; //등록일

    @Column(insertable = false)
    private LocalDateTime updateDate; //수정일

    @PrePersist
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        createDate = now;
        updateDate = now;
    }


    @PreUpdate
    public void preUpdate() {
        updateDate = LocalDateTime.now();
    }
}
