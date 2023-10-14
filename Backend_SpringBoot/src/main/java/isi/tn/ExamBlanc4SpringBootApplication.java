package isi.tn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories(basePackages="isi.tn")
@SpringBootApplication
public class ExamBlanc4SpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExamBlanc4SpringBootApplication.class, args);
	}

}
