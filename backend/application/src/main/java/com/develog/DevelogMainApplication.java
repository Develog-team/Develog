package com.develog;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
@EnableJpaAuditing //등록일과 수정일을 함께 관리
@PropertySource("classpath:/application-local.properties")
public class DevelogMainApplication {

    public static void main(String[] args) {
        run(DevelogMainApplication.class, args);
    }

}
