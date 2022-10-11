package hw.weekly.spring_wk5.service;

import hw.weekly.spring_wk5.data.UserData;
import hw.weekly.spring_wk5.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserData userData;

    public UserRequest checkUserId(Integer id) throws Exception {
        if(userData.getMapUsers().containsKey(id)){
            return userData.getMapUsers().get(id);
        }else {
            throw new Exception("User not found");
        }
    }

    public UserRequest loginValidate(String userName, String password) throws Exception {
        for (UserRequest tempUser:userData.getMapUsers().values()) {
            if(userName.equals(tempUser.getUserName()) && password.equals(tempUser.getPassword())){
                return tempUser;
            }
        }
        throw new Exception("Please provide correct Username and Password.");
    }
}
