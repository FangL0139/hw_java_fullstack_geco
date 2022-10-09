package hw.weekly.spring_wk5.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeneralResponse {
    String response;

    public GeneralResponse(String response) {
        this.response = response;
    }
}
