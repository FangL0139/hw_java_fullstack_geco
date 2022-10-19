package hw.microservice.wk7_mqsubscriber.configuration;

import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class JmsConsumer {

    @JmsListener(destination = "geco_oct")
    public void msgListner(String msg){
        System.out.println(msg);
    }
}
