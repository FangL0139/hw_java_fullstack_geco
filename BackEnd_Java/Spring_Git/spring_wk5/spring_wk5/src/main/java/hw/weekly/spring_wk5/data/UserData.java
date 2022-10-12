package hw.weekly.spring_wk5.data;

import hw.weekly.spring_wk5.request.UserRequest;
import lombok.Getter;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Repository
@Getter
public class UserData {
    UserRequest user1 = new
            UserRequest(1,"john@gmail.com", "John-1", "Chicago");
    UserRequest user2 = new UserRequest(2,"anton@gmail.com", "Anton-1", "Berlin");
    UserRequest user3 = new UserRequest(3,"shinji@gmail.com", "Shinji-1", "Kyoto");
    UserRequest user4 = new UserRequest(4,"auyeong@gmail.com", "Au Yeong-2", "Hong Kong");
    UserRequest user5 = new UserRequest(5,"aaron@gmail.com", "Aaron-2", "Boston");
    UserRequest user6 = new UserRequest(6,"nick@gmail.com", "Nick-2", "San Diego");

    ArrayList<UserRequest> allUsers = new ArrayList<>(
            Arrays.asList(user1, user2, user3, user4, user5)
    );

    HashMap<Integer,UserRequest> mapUsers = new HashMap<>(Map.of(user1.getId(), user1, user2.getId(), user2,user3.getId(),user3,user4.getId(),user4));



}
