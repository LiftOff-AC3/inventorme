package com.ac3.InventorMe.repository;
import com.ac3.InventorMe.model.RegistrationData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<RegistrationData, Integer> {
}