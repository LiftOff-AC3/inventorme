package com.ac3.InventorMe.services;

import com.ac3.InventorMe.model.Login;
import com.ac3.InventorMe.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public boolean validateLogin(String email, String password) {
        Login login = loginRepository.findByEmail(email);
        if (login != null && password.equals(login.getPassword())) {
            return true;
        }
        return false;
    }
}