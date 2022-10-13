package hw.weekly.spring_wk5.repo;

import hw.weekly.spring_wk5.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserModel, Integer> {

    @Query("select user from UserModel user where email = ?1 and password=?2")
    Optional<UserModel> getUserByEmailAndPassword(String email, String password);

    @Query("select user from UserModel user where email=?1")
    Optional<UserModel> getUserByEmail(String email);

    @Modifying
    @Transactional
    @Query("update UserModel set token = ?1 where id = ?2")
    Integer updateTokenByUserId(String token, Integer userId);

    @Query("select user from UserModel user where token = ?1 and id = ?2")
    Optional<UserModel> getUserByUserIdAndToken(String token, Integer userId);
}
