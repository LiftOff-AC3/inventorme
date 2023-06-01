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
    public ResponseEntity<String> loginUser(@RequestBody Login login) {
        String email = login.getEmail();
        String password = login.getPassword();
        boolean isValidLogin = loginService.validateLogin(email, password);

        if (isValidLogin) {
            return ResponseEntity.ok("Login Success!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed!");
        }
    }

}