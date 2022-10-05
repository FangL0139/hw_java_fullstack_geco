package W5_Hw.Collections;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ArrUser1 {
    public static void main(String[] args) {
        User1 user1 = new User1("John-1","Chicago",16);
        User1 user2 = new User1("Anton-1","Berlin",50);
        User1 user3 = new User1("Shinji-1","Kyoto",4);
        User1 user4 = new User1("Au Yeong-2","Hong Kong",43);
        User1 user5 = new User1("Aaron-2","Boston",53);
        User1 user6 = new User1("Nick-2","San Diego",40);
        User1 user7 = new User1("Honda-3","Milan",29);
        User1 user8 = new User1("Charlie-3","Sydney",41);
        User1 user9 = new User1("Vivien-3","Hanoi",18);
        ArrayList<User1> arr = new ArrayList<>(
                Arrays.asList(user1,user2,user3,user4,user5,user6,user7,user8,user9)
        );

        System.out.println("All users in ArrayList:");
        for (User1 user:arr) {
            System.out.println("Name: "+ user.getName()+" -- Age: "+user.getAge());
        }

        List<User1> userB20 = arr.stream().filter(obj->obj.getAge()<20).collect(Collectors.toList());

        System.out.println("\nThe user with age less than 20: ");
        for (User1 user:userB20) {
            System.out.println("Name: "+user.getName()+"- Age: "+user.getAge());
        }

        User1 userNameA = arr.stream().filter(obj->obj.getName().toLowerCase().startsWith("a")).findFirst().get();
        System.out.println("\nThe first user with Name starting with \"a\": ");
        System.out.println("Name: "+userNameA.getName());

    }




}
