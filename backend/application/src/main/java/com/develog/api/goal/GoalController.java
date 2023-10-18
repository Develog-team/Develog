package com.develog.api.goal;

import com.develog.application.goal.GoalService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/goal")
public class GoalController {

    private final GoalService goalService;

    @PostMapping()
    public Long created(GoalDTO goalDTO){
        return goalService.create(goalDTO);
    }

    @GetMapping()
    public List<GoalDTO> findList(){
        return goalService.findByUser();
    }
}
