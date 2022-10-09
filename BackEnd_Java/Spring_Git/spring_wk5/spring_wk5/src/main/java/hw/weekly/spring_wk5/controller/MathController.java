package hw.weekly.spring_wk5.controller;

import hw.weekly.spring_wk5.data.UserData;
import hw.weekly.spring_wk5.request.MathRequest;
import hw.weekly.spring_wk5.request.UserRequest;
import hw.weekly.spring_wk5.response.GeneralResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class MathController {

    @PostMapping("math")
    public ResponseEntity<?> math(@RequestBody MathRequest request) {
        try {
            float res = 0;
            switch (request.getOp()) {
                case ADD:
                    res = request.getNum1() + request.getNum2();
                    break;
                case SUB:
                    res = request.getNum1() - request.getNum2();
                    break;
                case MUL:
                    res = request.getNum1() * request.getNum2();
                    break;
                case DIV:
                    res = request.getNum1() / request.getNum2();
                    break;
            }

            GeneralResponse response = new GeneralResponse("The result is " + res);
            return ResponseEntity.ok(response);
        }catch (Exception e){
//            GeneralResponse response = new GeneralResponse("The result is " + res);
            return ResponseEntity.badRequest().body(new GeneralResponse("Please send correct request."));
        }



    }

    @GetMapping("allusers")
    public ResponseEntity<?> getUserList() {
        UserData allUsers = new UserData();
        return ResponseEntity.ok(allUsers.getAllUsers());

    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserRequest user) {
        String userName = user.getUserName();
        String password = user.getPassword();

        try {
            ArrayList<UserRequest> allUsers = new UserData().getAllUsers();

            for (UserRequest tempUser : allUsers) {
                if (userName.equals(tempUser.getUserName()) && password.equals(tempUser.getPassword())) {
                    return ResponseEntity.ok(new GeneralResponse("Login successfully!"));
                }
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }


        return ResponseEntity.badRequest().body(new GeneralResponse("Please provide correct Username and Password!"));
    }

}
