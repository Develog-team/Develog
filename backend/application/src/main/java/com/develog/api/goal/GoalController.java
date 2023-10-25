package com.develog.api.goal;

import com.develog.application.goal.dto.GoalDetailDto;
import com.develog.application.goal.dto.GoalUpdateDto;
import com.develog.application.goal.record.dto.RecordCreateDto;
import com.develog.application.goal.GoalService;
import com.develog.application.goal.dto.GoalCreateDTO;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/goal")
public class GoalController {

    private final GoalService goalService;

        @PostMapping()
        public Long created(@Valid @RequestBody GoalCreateDTO createDTO){
            return goalService.create(createDTO.toEntity());
        }

    @GetMapping()
    public List<GoalDetailDto> findList(){
        return goalService.findByUser();
    }

    @PatchMapping("/{goalId}")
    public void update(@PathVariable Long goalId, @Valid @RequestBody GoalUpdateDto updateDto){
        goalService.update(goalId, updateDto);
    }

    @DeleteMapping("/{goalId}")
    public void delete(@PathVariable Long goalId){
        goalService.delete(goalId);
    }

    @PostMapping("/{goalId}/record")
    public Long createRecord(@PathVariable Long goalId, RecordCreateDto recordDto){
        return goalService.createRecord(goalId, recordDto.toEntity());
    }
}
