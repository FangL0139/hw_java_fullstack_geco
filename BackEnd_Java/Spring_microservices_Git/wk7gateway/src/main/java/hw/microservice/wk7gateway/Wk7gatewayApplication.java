package hw.microservice.wk7gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class Wk7gatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(Wk7gatewayApplication.class, args);
	}

}
