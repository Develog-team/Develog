package com.develog.application.goal.record.dto;

import com.develog.domain.goal.record.Record;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RecordCreateDto {

    private Long id;
    private String record;
    private String retrospect;

    public Record toEntity() {
        return Record.builder()
            .id(id)
            .record(record)
            .retrospect(retrospect)
            .build();
    }
}
