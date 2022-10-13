package hw.weekly.spring_wk5.configuration;

import hw.weekly.spring_wk5.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class TokenInterceptor implements HandlerInterceptor {

    @Autowired
    UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String currentURL = String.valueOf(request.getRequestURL());
        if (currentURL.endsWith("user/login") || currentURL.endsWith("user/register")) {
            return true;
        }
        String token = request.getHeader("token");
        String userId = request.getHeader("userId");

        if (token == null || token.isBlank()) {
            throw new Exception("No token");
        }
        if (userId == null || userId.isBlank()) {
            throw new Exception("No userId");
        }

        try {
            Integer intUserId = Integer.parseInt(userId);
            return userService.validateToken(token, intUserId);
        } catch (Exception e) {
            throw new Exception("User Id should be Integer");
        }


    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
