package com.ac3.InventorMe.controller;
import com.ac3.InventorMe.model.RegistrationData;
import com.ac3.InventorMe.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    /* Refactored endpoint to send the user's UUID as part of the response body for use in the frontend*/
    @PostMapping("/registration")
    public ResponseEntity<UUID> createRegistration(@RequestBody RegistrationData registrationData){
        RegistrationData savedRegistrationData = registrationRepository.save(registrationData);
        UUID userUuid = savedRegistrationData.getUuid();
        return ResponseEntity.ok().body(userUuid);
    }
//    @GetMapping("/registration/${id}")
//    public Optional<RegistrationData> getRegistrationById(@PathVariable Integer id){
//        return registrationRepository.getRegistrationById(id);
//    }

    @GetMapping("/registrations")
    List<RegistrationData>getAllRegistrationData(){
        return registrationRepository.findAll();
    }

}