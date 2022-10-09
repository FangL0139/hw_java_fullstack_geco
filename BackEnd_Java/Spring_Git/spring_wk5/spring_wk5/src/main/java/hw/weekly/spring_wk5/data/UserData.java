package hw.weekly.spring_wk5.data;

import hw.weekly.spring_wk5.request.UserRequest;
import lombok.Getter;

import java.util.ArrayList;
import java.util.Arrays;

@Getter
public class UserData {
    UserRequest user1 = new UserRequest("john@gmail.com", "John-1", "Chicago");
    UserRequest user2 = new UserRequest("anton@gmail.com", "Anton-1", "Berlin");
    UserRequest user3 = new UserRequest("shinji@gmail.com", "Shinji-1", "Kyoto");
    UserRequest user4 = new UserRequest("auyeong@gmail.com", "Au Yeong-2", "Hong Kong");
    UserRequest user5 = new UserRequest("aaron@gmail.com", "Aaron-2", "Boston");
    UserRequest user6 = new UserRequest("nick@gmail.com", "Nick-2", "San Diego");

    ArrayList<UserRequest> allUsers = new ArrayList<>(
            Arrays.asList(user1, user2, user3, user4, user5)
    );
}
