package hw.microservice.wk7_mqsubscriber.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class publishMQ {

    @Autowired
    JmsTemplate jmsTemplate;

//    @GetMapping("publish")
//    public ResponseEntity<?> publishMsg(){
//        jmsTemplate.convertAndSend("geco_oct","time is late");
//        return ResponseEntity.ok("published");
//    }
}
