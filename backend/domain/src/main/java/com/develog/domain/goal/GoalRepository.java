package com.develog.domain.goal;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GoalRepository extends JpaRepository<Goal, Long> {

    List<Goal> findByCreateUser(Long userId);
    Optional<Goal> findByIdAndCreateUser(Long goalId, Long userId);
}
