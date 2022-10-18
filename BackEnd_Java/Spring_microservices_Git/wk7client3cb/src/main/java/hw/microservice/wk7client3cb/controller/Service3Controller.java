package hw.microservice.wk7client3cb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RequestMapping("service3")
@RestController
public class Service3Controller {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    private CircuitBreakerFactory circuitBreakerFactory;

    @GetMapping("getname")
    public String callAPI() {
        String res = restTemplate.getForObject("http://localhost:8082/service2/nameapi", String.class);
        return "Call API from client 3: " + res;
    }

    private String callIfError(){
        return "Error happened, this is back up response from client 3.";
    }

    @GetMapping("callwrongurl")
    public String callWrongAPI(){
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("circuitbreaker");
        String wrongURL = "http://localhost:8088/wrong";
        return  circuitBreaker.run(()->restTemplate.getForObject(wrongURL, String.class),
                throwable -> callIfError());

    }
}
