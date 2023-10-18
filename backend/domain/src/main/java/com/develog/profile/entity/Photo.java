package com.develog.profile.entity;


import com.develog.time.JpaBaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Table(name = "file")
public class Photo extends JpaBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;

    @Column(nullable = false)
    private String origFileName;  // 파일 원본명

    @Column(nullable = false)
    private String filePath;  // 파일 저장 경로

    private Long fileSize;

    @Builder
    public Photo(String origFileName, String filePath, Long fileSize){
        this.origFileName = origFileName;
        this.filePath = filePath;
        this.fileSize = fileSize;
    }

    // Profile 정보 저장
    public void setProfile(Profile profile){
        this.profile = profile;

        // 게시글에 현재 파일이 존재하지 않는다면
        if(!profile.getPhoto().contains(this))
            // 파일 추가
            profile.getPhoto().add(this);
    }
}