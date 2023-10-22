package com.develog.domain.goal;

import com.develog.domain.base.UserBaseEntity;
import com.develog.domain.goal.record.Record;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "goal_id")
    private List<Record> records = new ArrayList<>();

    public void addRecord(Record record){
        records.add(record);
    }

}
