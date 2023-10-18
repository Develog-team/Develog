package com.develog.application.goal;

import com.develog.api.goal.GoalDTO;
import com.develog.application.common.ContextUtils;
import com.develog.goal.Goal;
import com.develog.goal.GoalRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class GoalService {

    private final GoalRepository goalRepository;

    public Long create(GoalDTO goalDTO){
        Goal goal = goalDTO.toEntity();
        goalRepository.save(goal);
        return goal.getId();
    }

    @Transactional(readOnly = true)
    public List<GoalDTO> findByUser() {
        Long userId = ContextUtils.getCurrentUserId();
        return goalRepository.findByCreateUser(userId)
                .stream().map(GoalDTO::from).collect(Collectors.toList());
    }
}
