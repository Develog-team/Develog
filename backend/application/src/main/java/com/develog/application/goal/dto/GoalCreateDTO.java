package com.develog.application.goal.dto;

import com.develog.domain.goal.Goal;
import com.develog.domain.goal.GoalStatus;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GoalCreateDTO {

    @NotBlank(message = "title can not be empty")
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
}
