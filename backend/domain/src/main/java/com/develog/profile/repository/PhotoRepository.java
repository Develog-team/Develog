package com.develog.profile.repository;

import com.develog.profile.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Long> {
    List<Photo> findAllByProfileId(Long profileId);
}