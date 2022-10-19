package hw.microservice.wk7_mqpublisher.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class publishMQ {

    @Autowired
    JmsTemplate jmsTemplate;

    @GetMapping("publish")
    public ResponseEntity<?> publishMsg(){
        jmsTemplate.convertAndSend("geco_oct","time is late");
        return ResponseEntity.ok("published");
    }
}
