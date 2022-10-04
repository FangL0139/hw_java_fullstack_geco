package W5_Hw.Collections;

import java.util.TreeSet;

public class UserTreeSet {
    public static void main(String[] args) {
        User u1 = new User("Jack", 15);
        User u2 = new User("Bush", 65);
        User u3 = new User("Victoria", 43);
        User u4 = new User("Ong", 78);

        TreeSet<User> users = new TreeSet<>();
        users.add(u1);
        users.add(u2);
        users.add(u3);
        users.add(u4);

        printUsers(users);

    }

    public static void printUsers(TreeSet<User> users){
        for (User p:users) {
            System.out.println("Name: "+p.getName()+", Age: "+p.getAge());
        }
    }
}
