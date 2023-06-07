package com.ac3.InventorMe.controller;

import com.ac3.InventorMe.model.Item;
import com.ac3.InventorMe.repository.ItemRepository;
import com.ac3.InventorMe.repository.LoginRepository;
import com.ac3.InventorMe.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private LoginService loginService;

    @PostMapping("/item")
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item newItem = itemRepository.save(item);
        return ResponseEntity.ok(newItem);
    }
    /* Converts the String type of the  userUUID response header to UUID,
        returns only items whose UUID matches
     */
    @GetMapping("/items")
    List<Item>getAllItems(@RequestHeader("UserUUID") String authorization){
        UUID loggedInUuid = UUID.fromString(authorization);
        return itemRepository.findByUserUuid(loggedInUuid);
    }

    @DeleteMapping("/item")
    public ResponseEntity<?> deleteItem(@RequestBody Item item) {
        try {
            itemRepository.delete(item);
            return ResponseEntity.ok().build();
        } catch (EmptyResultDataAccessException e) {
            return ResponseEntity.notFound().build();
        }
    }
}