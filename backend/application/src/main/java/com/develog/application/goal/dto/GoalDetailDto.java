package com.develog.application.goal.dto;

import com.develog.domain.goal.Goal;
import com.develog.domain.goal.GoalStatus;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public class GoalDetailDto {

  private String title;
  private String description;
  private GoalStatus status;
  private LocalDateTime createdDateTime;
  private LocalDateTime lastModifiedDateTime;

  public static GoalDetailDto from(Goal goal){
    return GoalDetailDto.builder()
        .title(goal.getTitle())
        .description(goal.getDescription())
        .status(goal.getStatus())
        .createdDateTime(goal.getCreatedDateTime())
        .lastModifiedDateTime(goal.getLastModifiedDateTime())
        .build();
  }

}
