package com.ac3.InventorMe.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String password;
    private UUID userUuid;

    public Login() {
        super();
    }

    public Login(int id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public UUID getUserUuid() { return userUuid; }

    public void setUserUuid(UUID userUuid) { this.userUuid = userUuid; }
}