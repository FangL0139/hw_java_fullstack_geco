package hw.microservice.wk7sprcloud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class Wk7sprcloudApplication {

	public static void main(String[] args) {
		SpringApplication.run(Wk7sprcloudApplication.class, args);
	}

}
