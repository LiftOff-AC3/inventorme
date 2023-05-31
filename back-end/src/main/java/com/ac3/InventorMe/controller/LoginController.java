package com.ac3.InventorMe.controller;

import com.ac3.InventorMe.model.Login;
import com.ac3.InventorMe.repository.LoginRepository;
import com.ac3.InventorMe.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin("http://localhost:3000")
@RestController
public class LoginController {

    @Autowired
    private LoginRepository userRepository;

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    Login newLogin(@RequestBody Login newLogin) {
        return userRepository.save(newLogin);
    }

    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Login login) {
        String email = login.getEmail();
        String password = login.getPassword();
        boolean isValidLogin = loginService.validateLogin(email, password);

        /*After calling the isValidLogin function, the email address associated
        with the validated login credentials is assigned to loggedInUser.
        An authorization token is then generated for that user.
        A hashmap is then created that holds the authorization token and the id number
        of the user from the database. This data is then sent as a response which
        allows access/usage in the frontend
        */
        if (isValidLogin) {
            Login loggedInUser = loginService.findByEmail(email);
            if (loggedInUser != null) {
                String authToken = loginService.generateAuthToken(login);
                Map<String, Object> response = new HashMap<>();
                response.put("token", authToken);
                response.put("loginId", loggedInUser.getId());
                return ResponseEntity.ok().body(response);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}