package W5_Hw.Collections;

import java.util.ArrayList;
import java.util.HashMap;

public class MapUser1 {
    public static void main(String[] args) {

        ArrayList<User1> arrU1 = new ArrayList<>();
        ArrayList<User1> arrU2 = new ArrayList<>();
        ArrayList<User1> arrU3 = new ArrayList<>();
        HashMap<String,ArrayList<User1>> mapU = new HashMap<>();

        User1 user1 = new User1("John-1","Chicago",26);
        User1 user2 = new User1("Schroder-1","Berlin",50);
        User1 user3 = new User1("Shinji-1","Kyoto",34);
        arrU1.add(user1);
        arrU1.add(user2);
        arrU1.add(user3);

        User1 user4 = new User1("Mario-2","Hong Kong",13);
        User1 user5 = new User1("Sam-2","Boston",53);
        User1 user6 = new User1("Nick-2","San Diego",40);
        arrU2.add(user4);
        arrU2.add(user5);
        arrU2.add(user6);

        User1 user7 = new User1("Honda-3","Milan",29);
        User1 user8 = new User1("Charlie-3","Sydney",41);
        User1 user9 = new User1("Vivien-3","Hanoi",22);
        arrU3.add(user7);
        arrU3.add(user8);
        arrU3.add(user9);

        mapU.put("arr2",arrU2);
        mapU.put("arr1",arrU1);
        mapU.put("arr3",arrU3);

        for (String key:mapU.keySet()) {
            System.out.println("The ArrayList is: "+key+"~~~~~~~~~~~~");
            for (User1 tempU:mapU.get(key)) {
                System.out.println("Name: "+tempU.getName()+", Address: "+tempU.getAdd()+", Age: "+tempU.getAge());
            }
        }

    }
}
