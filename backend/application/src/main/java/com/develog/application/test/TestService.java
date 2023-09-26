package com.develog.application.test;

import com.develog.test.Test;
import com.develog.test.TestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TestService {

    private final TestRepository testRepository;

    public void save(String msg){
        testRepository.save(new Test(msg));
    }
}
