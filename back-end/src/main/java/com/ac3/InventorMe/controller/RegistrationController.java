package com.ac3.InventorMe.controller;

import com.ac3.InventorMe.model.RegistrationData;
import com.ac3.InventorMe.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    @PostMapping("/registration")
    public ResponseEntity<UUID> createRegistration(@RequestBody RegistrationData registrationData) {
        RegistrationData savedRegistrationData = registrationRepository.save(registrationData);
        UUID userId = savedRegistrationData.getId();
        return ResponseEntity.ok().body(userId);
    }

    @GetMapping("/registrations")
    List<RegistrationData> getAllRegistrationData() {
        return registrationRepository.findAll();
    }
}
