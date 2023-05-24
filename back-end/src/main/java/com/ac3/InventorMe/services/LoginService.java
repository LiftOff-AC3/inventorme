package com.ac3.InventorMe.services;

import com.ac3.InventorMe.model.Login;
import com.ac3.InventorMe.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean validateLogin(String email, String password) {
        Login login = loginRepository.findByEmail(email);
        String enteredPassword = login.getPassword();

        if (login != null && encoder.matches(password, enteredPassword))  {
            return true;
        } else {
            return false;
        }
    }
}