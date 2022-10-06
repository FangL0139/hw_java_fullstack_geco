package W5_Hw.FileIO;

import java.io.FileOutputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;

public class FileOutput {


    public static void main(String[] args) {
        User2 user1 = new User2("John-1", "Chicago");
        User2 user2 = new User2("Anton-1", "Berlin");
        User2 user3 = new User2("Shinji-1", "Kyoto");
        User2 user4 = new User2("Au Yeong-2", "Hong Kong");
        User2 user5 = new User2("Aaron-2","Boston");
        User2 user6 = new User2("Nick-2","San Diego");
        User2 user7 = new User2("Honda-3","Milan");
        User2 user8 = new User2("Charlie-3","Sydney");
        User2 user9 = new User2("Vivien-3","Hanoi");
        User2 user10 = new User2("Peter-3","Rome");


        ArrayList<User2> arr = new ArrayList<>(Arrays.asList(user1, user2, user3, user4,user5,user6,user7,user8,user9,user10));

        String filePath = "../Files/Users.txt";
        String timeFormat = "dd/MM/yyyy hh:mm:ss a";
        try {
            FileOutputStream fout = new FileOutputStream(filePath);
            String strOut;

            LocalDateTime dt;
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern(timeFormat);
            StringBuilder strBuild = new StringBuilder();
            for (User2 user:arr) {
                strBuild.setLength(0);
                dt = LocalDateTime.now();
                strBuild.append("Name: ").append(user.getName()).append(" -- Address: ").append(user.getAdd())
                        .append(" -- Time: ").append(dt.format(formatter)).append("\n");
                strOut = strBuild.toString();
                fout.write(strOut.getBytes());
            }

            fout.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

    }
}
