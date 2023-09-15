package com.develog.api;

import com.develog.application.test.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TestRestController {

    private final TestService service;

    @GetMapping("/test")
    public String test(){
        service.save("hello develog");
        return "hello";
    }
}
