package hw.weekly.spring_wk5.controller;

import hw.weekly.spring_wk5.response.GeneralResponse;
import hw.weekly.spring_wk5.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("{userId}")
    public ResponseEntity<?> getUser(@PathVariable Integer userId){
        try{
//            UserRequest user = userService.checkUserId(userId);
            return ResponseEntity.ok(userService.checkUserId(userId));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @GetMapping("login")
    public ResponseEntity<?> login(@RequestParam String userName,@RequestParam String password){
        try{
            return ResponseEntity.ok(userService.loginValidate(userName,password));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
