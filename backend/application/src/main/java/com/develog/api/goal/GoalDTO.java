package com.develog.api.goal;

import com.develog.goal.Goal;
import com.develog.goal.GoalStatus;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GoalDTO {

    private String title;
    private String description;
    private GoalStatus status;

    public Goal toEntity(){
        return Goal.builder()
                .title(title)
                .description(description)
                .status(status)
                .build();
    }

    public static GoalDTO from(Goal goal){
        return GoalDTO.builder()
                .title(goal.getTitle())
                .description(goal.getDescription())
                .status(goal.getStatus())
                .build();
    }
}
