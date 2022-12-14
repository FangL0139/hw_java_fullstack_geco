package hw.weekly.spring_wk5.controller;

import hw.weekly.spring_wk5.request.UserRequest;
import hw.weekly.spring_wk5.response.GeneralResponse;
import hw.weekly.spring_wk5.service.UserService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileInputStream;
import java.io.FileOutputStream;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    String folderPath = "D:/UploadFiles/";
    @GetMapping("{userId}")
    public ResponseEntity<?> getUser(@PathVariable Integer userId) {
        try {
//            UserRequest user = userService.checkUserId(userId);
            return ResponseEntity.ok(userService.checkUserId(userId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @PostMapping("userlogin")
    public ResponseEntity<?> login(@RequestParam String userName, @RequestParam String password) {
        try {
            return ResponseEntity.ok(userService.loginValidate(userName, password));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody UserRequest userRequest) {
        try {
            return ResponseEntity.ok(userService.loginValidate(userRequest.getEmail(), userRequest.getPassword()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @GetMapping("logout")
    public ResponseEntity<?> logout(@RequestHeader Integer userId){
        try {
            userService.logout(userId);
            return ResponseEntity.ok(new GeneralResponse("Logout successfully!"));
        }catch (Exception e){
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @PostMapping("register")
    public ResponseEntity<?> userRegister(@RequestBody UserRequest userRequest) {
        try {
            userService.createUser(userRequest);
            return ResponseEntity.ok(new GeneralResponse("Register successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }
    }

    @GetMapping("listuser")
    public ResponseEntity<?> listUser() {
        return ResponseEntity.ok(userService.listUser());
    }

    @PostMapping("update")
    public ResponseEntity<?> updateUser(@RequestBody UserRequest userRequest) {

        try {
            userService.updateUser(userRequest);
            return ResponseEntity.ok(new GeneralResponse("User " + userRequest.getId() + " update successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }

    }

    @GetMapping("delete/{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer user_id){
//        GeneralResponse response = new GeneralResponse();
        try{
            userService.deleteUser(user_id);
//            response.setMessage("User is deleted");
            return ResponseEntity.ok(new GeneralResponse("User "+user_id +" is deleted"));
        }catch (Exception e){
//            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(new GeneralResponse(e.getMessage()));
        }

    }

    @PostMapping("uploadfile")
    public ResponseEntity<?> uploadImg(@RequestParam String userId, @RequestParam MultipartFile file) throws Exception {
        String profilePic = userId +"_"+file.getOriginalFilename();
        FileOutputStream fout = new FileOutputStream(folderPath+profilePic);
        fout.write(file.getBytes());
        userService.updateProfilePic(profilePic,Integer.parseInt(userId));
        return ResponseEntity.ok("File uploaded: "+profilePic);
    }

    @GetMapping(value = "loadImg/{userId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] loadImg(@PathVariable String userId) throws Exception {
        String profilePic = userService.getProfilePic(Integer.parseInt(userId)).getProfilePic();
        FileInputStream fin = new FileInputStream(folderPath + profilePic);
        return IOUtils.toByteArray(fin);
    }

}
