package com.ac3.InventorMe.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Login {

    @OneToOne
    @JoinColumn(name = "user_id")
    private RegistrationData registrationData;

    @OneToMany(mappedBy = "login")
    private List<Item> item;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;

    public Login(Long id, String email, String password, RegistrationData registrationData) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.registrationData = registrationData;
    }

    public Login() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RegistrationData getRegistrationData() {
        return registrationData;
    }

    public void setRegistrationData(RegistrationData registrationData) {
        this.registrationData = registrationData;
    }
}