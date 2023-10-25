package com.develog.application.goal;

import com.develog.application.common.ContextUtils;
import com.develog.application.goal.dto.GoalDetailDto;
import com.develog.application.goal.dto.GoalUpdateDto;
import com.develog.domain.goal.Goal;
import com.develog.domain.goal.GoalRepository;
import com.develog.domain.goal.record.Record;
import com.develog.domain.goal.record.RecordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.server.ResponseStatusException;

@Service
@Transactional
@RequiredArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;
    private final RecordRepository recordRepository;

    public Long create(Goal goal){
        goalRepository.save(goal);
        return goal.getId();
    }

    @Transactional(readOnly = true)
    public List<GoalDetailDto> findByUser() {
        Long userId = ContextUtils.getCurrentUserId();
        return goalRepository.findByCreateUser(userId)
                .stream().map(GoalDetailDto::from).collect(Collectors.toList());
    }

    public void delete(Long goalId) {
        Goal goal = findByGoalId(goalId);
        goalRepository.delete(goal);
    }

    public void update(Long goalId, GoalUpdateDto updateDto) {
        Goal goal = findByGoalId(goalId);
        goal.update(updateDto.getTitle(),updateDto.getDescription());
    }

    @Transactional
    public Long createRecord(Long goalId, Record record) {
        Goal goal = findByGoalId(goalId);
        goal.addRecord(record);
        recordRepository.save(record);
        return record.getId();
    }

    private Goal findByGoalId(Long goalId){
        Long userId = ContextUtils.getCurrentUserId();
        return goalRepository.findByIdAndCreateUser(goalId, userId).orElseThrow(()
            -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Goal not found or access denied"));
    }

}
