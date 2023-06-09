package com.ac3.InventorMe.repository;

import com.ac3.InventorMe.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Integer> {
    Login findByEmail(String email);
}
