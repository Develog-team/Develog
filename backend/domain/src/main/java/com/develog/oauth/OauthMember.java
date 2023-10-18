package com.develog.oauth;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class OauthMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name="oauth_type")
    @Enumerated(EnumType.STRING)
    private OauthType oauthType;

    @Column(nullable = false, name = "oauth_id")
    private Long oauthId;

    @Column(nullable = false)
    private String name;

    @Column
    private String email;

    @Column
    private String picture;

    @Column
    private String introduction;

    @Column(name = "refresh_token")
    private String refreshToken;

    public void newRefreshToken(String newOne){
        refreshToken = newOne;
    }

}
