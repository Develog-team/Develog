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
    @Column(name = "goal_id", nullable = false)
    private Long id;
    @Column(nullable = false)
    private String title;
    private String description;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private GoalStatus status = GoalStatus.TODO;

    @OneToMany(mappedBy = "goal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Record> records = new ArrayList<>();

    public void addRecord(Record record){
        records.add(record);
        record.belongTo(this);
    }

    public void update(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
