package com.ac3.InventorMe.services;

import com.ac3.InventorMe.model.Login;
import com.ac3.InventorMe.repository.LoginRepository;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.crypto.SecretKey;


@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public boolean validateLogin(String email, String password) {
        Login login = loginRepository.findByEmail(email);
        String enteredPassword = login.getPassword();

        return encoder.matches(password, enteredPassword);
    }
    public Login findByEmail(String email) {
     return loginRepository.findByEmail(email);
    }

    public String generateAuthToken(Login login) {

        long expirationTime = 86400000;
        Date expirationDate = new Date(System.currentTimeMillis() + expirationTime);

        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", login.getId());

        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        JwtBuilder jwtBuilder = Jwts.builder()
            .setClaims(claims)
            .setExpiration(expirationDate)
            .signWith(key, SignatureAlgorithm.HS256);

        String authToken = jwtBuilder.compact();

        System.out.println("token: " + jwtBuilder.compact());
        return authToken;
    }
}