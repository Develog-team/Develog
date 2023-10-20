package com.develog.profile.entity;


import com.develog.time.JpaBaseEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.ArrayList;
import java.util.List;

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
    private String bio; // 자기소개

    //링크 태그
    @Column(nullable = true)
    @ElementCollection
    private List<String> link;

    @OneToMany(
            mappedBy = "profile",
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            orphanRemoval = true
    )
    private List<Photo> photo = new ArrayList<>();


//    @ManyToOne
//    private OauthMember member; //회원 아이디

//
//    //옵저버 및 옵저빙
//    @ManyToOne
//    private Observe observe;

    @Builder
    public Profile(String nickname, String bio, List<String> link) {
        this.nickname = nickname;
        this.bio = bio;
        this.link = link;
    }


    public Profile update(String nickname, String bio, List<String> link) {
        this.nickname = nickname;
        this.bio = bio;
        this.link = link;
        return this;
    }

    // Profile에서 파일 처리를 하기 위해서
    public void addPhoto(Photo photo) {
        this.photo.add(photo);

        // 게시글에 파일이 저장되어있지 않은 경우
        if(photo.getProfile() != this)
            // 파일 저장
            photo.setProfile(this);
    }

}
