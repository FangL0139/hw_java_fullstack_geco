package hw.weekly.spring_wk5.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {


    Integer id;
    String name;
    String email;
    String password;
    String address;
    String mobile;
    public UserRequest(Integer id, String email, String password, String address) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.address = address;
    }
}
