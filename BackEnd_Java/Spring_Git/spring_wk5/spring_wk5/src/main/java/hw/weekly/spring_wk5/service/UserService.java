package hw.weekly.spring_wk5.service;

import hw.weekly.spring_wk5.data.UserData;
import hw.weekly.spring_wk5.model.UserModel;
import hw.weekly.spring_wk5.repo.UserRepo;
import hw.weekly.spring_wk5.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserData userData;

    @Autowired
    UserRepo userRepo;

    public UserRequest checkUserId(Integer id) throws Exception {
        if (userData.getMapUsers().containsKey(id)) {
            return userData.getMapUsers().get(id);
        } else {
            throw new Exception("User not found");
        }
    }

    public UserModel loginValidate(String email, String password) throws Exception {
        Optional<UserModel> userOpt = userRepo.getUserByEmailAndPassword(email, password);
        if (userOpt.isPresent()) {
            return userOpt.get();
        } else {
            throw new Exception("Please provide correct Username and Password.");
        }
    }

    public void createUser(UserRequest userRequest) throws Exception {
        try {
            Optional<UserModel> userExist = userRepo.getUserByEmail(userRequest.getEmail());
            if (userExist.isPresent()) {
                throw new Exception("Email already exists.");
            }
            UserModel userNew = new UserModel();
            userNew.setEmail(userRequest.getEmail());
            userNew.setMobile(userRequest.getMobile());
            userNew.setName(userRequest.getName());
            userNew.setPassword(userRequest.getPassword());
            userNew.setAddress(userRequest.getAddress());
            userRepo.save(userNew);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public List<UserModel> listUser() {
        return userRepo.findAll();
    }

    public boolean updateUser(UserRequest userRequest) throws  Exception{
        try{
            //java 8 optional
            Optional<UserModel> userOpt = userRepo.findById(userRequest.getId());//get the data bases on primary key

            //user is exist
            if(userOpt.isPresent()){
                UserModel userTmp = userOpt.get();//get the exsiting data using id
                if(userRequest.getName() != null && !userRequest.getName().equals("")){
                    userTmp.setName(userRequest.getName());
                }
                if(userRequest.getPassword() != null && !userRequest.getPassword().equals("")){
                    userTmp.setPassword(userRequest.getPassword());
                }
                if(userRequest.getEmail() != null && !userRequest.getEmail().equals("")){
                    userTmp.setEmail(userRequest.getEmail());
                }
                if(userRequest.getMobile() != null && !userRequest.getMobile().equals("")){
                    userTmp.setMobile(userRequest.getMobile());
                }
                if(userRequest.getAddress() != null && !userRequest.getAddress().equals("")){
                    userTmp.setAddress(userRequest.getAddress());
                }
                userRepo.save(userTmp);//update the data as it has Primary key
                return true;
            }else{
                throw  new Exception("user is not found");
            }

            /*
            //2nd syntax start
            UserModel userModelTmp = userRepo.findById(userRequest.getId()).orElseThrow(()->new Exception("no user found"));//get the data bases on primary key
            if(userRequest.getEmail() != null && !userRequest.getEmail().equals("")){
                userModelTmp.setEmail(userRequest.getEmail());
            }
            if(userRequest.getMobile() != null && !userRequest.getMobile().equals("")){
                userModelTmp.setMobile(userRequest.getMobile());
            }
            if(userRequest.getName() != null && !userRequest.getName().equals("")){
                userModelTmp.setName(userRequest.getName());
            }

            userRepo.save(userModelTmp);//update the data as it has Primary key
            //2nd syntax end
            */

        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public boolean deleteUser(Integer userId) throws Exception{
        //java 8 optional
        UserModel userTmp = userRepo.findById(userId).orElseThrow(()->new Exception("No user found"));//get the data bases on primary key
        userRepo.delete(userTmp);
        return true;
    }


}