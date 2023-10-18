package com.develog.goal;

import com.develog.base.UserBaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Goal extends UserBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goal_id")
    private Long id;
    private String title;
    private String description;

    @Enumerated(value = EnumType.STRING)
    private GoalStatus status;
}
