package hw.microservice.wk7client2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class Wk7client2Application {

	public static void main(String[] args) {
		SpringApplication.run(Wk7client2Application.class, args);
	}

}
