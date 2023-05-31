package com.ac3.InventorMe.controller;
import com.ac3.InventorMe.model.RegistrationData;
import com.ac3.InventorMe.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    @PostMapping("/registration")
    RegistrationData newRegistrationData(@RequestBody RegistrationData newRegistrationData){
        return registrationRepository.save(newRegistrationData);
    }
//    @GetMappaing("/registration/${id}")
//    public Optional<RegistrationData> getRegistrationById(@PathVariable Integer id){
//        return registrationRepository.getRegistrationById(id);
//    }

    @GetMapping("/registrations")
    List<RegistrationData>getAllRegistrationData(){
        return registrationRepository.findAll();
    }

}