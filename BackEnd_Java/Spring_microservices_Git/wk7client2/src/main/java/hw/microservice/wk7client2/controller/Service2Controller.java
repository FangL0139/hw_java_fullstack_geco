package hw.microservice.wk7client2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("service2")
public class Service2Controller {
    @GetMapping("nameapi")
    public String getName(){return "This is client 2.";}
}
