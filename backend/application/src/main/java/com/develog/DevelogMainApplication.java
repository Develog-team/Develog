package com.develog;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
//@ComponentScan(basePackages = {"com.develog.application", "com.develog.infra", "com.develog.domain"})
public class DevelogMainApplication {

    public static void main(String[] args) {
        run(DevelogMainApplication.class, args);
    }

}
