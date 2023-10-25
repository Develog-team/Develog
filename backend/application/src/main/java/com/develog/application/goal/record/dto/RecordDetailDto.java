package com.develog.application.goal.record.dto;

import java.time.LocalDateTime;
import lombok.Data;
import org.springframework.cglib.core.Local;

@Data
public class RecordDetailDto {

  private String record;
  private String retrospect;
  private LocalDateTime createdDateTime;
  private LocalDateTime lastModifiedDateTime;
}
