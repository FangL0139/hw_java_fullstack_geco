package W5_Hw.Collections;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User1 {
    public User1(String name, String add, int age) {
        this.name = name;
        this.add = add;
        this.age = age;
    }

    String name;
    String add;
    int age;
}
