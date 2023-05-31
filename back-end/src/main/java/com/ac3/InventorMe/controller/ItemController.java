package com.ac3.InventorMe.controller;
import com.ac3.InventorMe.model.Item;
import com.ac3.InventorMe.model.Login;
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

    @GetMapping("/items")
    List<Item>getAllItems(@RequestHeader("Authorization") String authorization){
        Login user = loginRepository.getReferenceById(Integer.parseInt(authorization));
        return itemRepository.findByUserId(user);
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