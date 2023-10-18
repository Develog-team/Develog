package com.develog;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
@EnableJpaAuditing //등록일과 수정일을 함께 관리
public class DevelogMainApplication {

    public static void main(String[] args) {
        run(DevelogMainApplication.class, args);
    }

}
