package com.develog.domain.goal.record;

import com.develog.domain.base.TimeBaseEntity;
import com.develog.domain.goal.Goal;
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
public class Record extends TimeBaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "goal_id")
    private Goal goal;

    private String record; // 기록
    private String retrospect; // 회고

    public void belongTo(Goal goal){
        this.goal = goal;
    }

}
