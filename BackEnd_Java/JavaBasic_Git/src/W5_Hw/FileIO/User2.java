package W5_Hw.FileIO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User2 {
    String name;
    String add;

    public User2(String name, String add) {
        this.name = name;
        this.add = add;
    }
}
