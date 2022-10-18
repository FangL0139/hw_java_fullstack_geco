package hw.microservice.wk7client1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RequestMapping("service1")
@RestController
public class Service1Controller {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("getname")
    public String callAPI() {
        String res = restTemplate.getForObject("http://localhost:8082/service2/nameapi", String.class);
        return "Call API from client 1: " + res;
    }
}
