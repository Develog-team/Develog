package com.develog.application.goal;

import com.develog.application.goal.dto.GoalCreateDTO;
import com.develog.application.goal.dto.GoalDetailDto;
import com.develog.domain.goal.Goal;
import com.develog.domain.goal.GoalRepository;
import com.develog.domain.goal.GoalStatus;
import com.develog.domain.goal.record.Record;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
@ActiveProfiles("test")
public class GoalServiceIntegrationTest {

    @Autowired
    private GoalService goalService;

    @Autowired
    private GoalRepository goalRepository;

    @BeforeEach
    void setUp() {
        Authentication authentication = mock(Authentication.class);
        SecurityContext securityContext = mock(SecurityContext.class);

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getName()).thenReturn("1");

        SecurityContextHolder.setContext(securityContext);
    }


    @Test
    public void testCreateGoal() {

        Long goalId = goalService.create(getTestGoal());

        Optional<Goal> goalInDb = goalRepository.findById(goalId);
        assertThat(goalInDb).isPresent();
    }

    @Test
    public void testFindByUser() {
        goalService.create(getTestGoal());
        List<GoalDetailDto> goals = goalService.findByUser();
        assertThat(goals).isNotEmpty();
    }

    @Test
    public void testCreateRecord() {
        Long goalId = goalService.create(getTestGoal());
        Long recordId = goalService.createRecord(goalId, getTestRecord());
    }

    private Record getTestRecord(){
        return Record.builder()
            .record("기록")
            .retrospect("회고")
            .build();
    }

    private Goal getTestGoal(){
        return Goal.builder()
                .title("test 목표")
                .description("테스트 목표 설명.")
                .status(GoalStatus.TODO)
                .build();
    }
}
