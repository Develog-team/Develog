package com.develog.profile.entity;

import com.develog.base.entity.JpaBaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Profile extends JpaBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private String nickname; // 닉네임

    @Column(nullable = true)
    private String picture; //프로필 이미지

    @Column(nullable = true)
    private String bio; // 자기소개

//    @ManyToOne
//    private OauthMember member; //회원 아이디
//
//    //링크 태그 - 웹페이지 링크 -> 1. 회원당 소유한 링크 저장 2. 해시태그
//    @ManyToOne
//    private Tag tag;
//
//    //옵저버 및 옵저빙
//    @ManyToOne
//    private Observe observe;

    @Builder
    public Profile(String nickname, String picture, String bio) {
        this.nickname = nickname;
        this.picture = picture;
        this.bio = bio;
    }

    public Profile update(String nickname, String picture, String bio) {
        this.nickname = nickname;
        this.picture = picture;
        this.bio = bio;
        return this;
    }
}
