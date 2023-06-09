package com.ac3.InventorMe.controller;

import com.ac3.InventorMe.model.Item;
import com.ac3.InventorMe.repository.ItemRepository;
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

    @PostMapping("/item")
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item newItem = itemRepository.save(item);
        return ResponseEntity.ok(newItem);
    }

    @GetMapping("/items")
    List<Item> getAllItems(@RequestHeader("UserId") String authorization) {
        UUID loginId = UUID.fromString(authorization);
        return itemRepository.findByUserId(loginId);
    }

    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @PutMapping("/item/{id}")
    public ResponseEntity<String> updateItem(@RequestBody Item editItem, @PathVariable("id") int id) {
        Item existingItem = itemRepository.findById(id).orElse(null);
        if (existingItem != null) {
            existingItem.setItemName(editItem.getItemName());
            existingItem.setItemQuantity(editItem.getItemQuantity());
            existingItem.setDescription(editItem.getDescription());
            itemRepository.save(existingItem);
            return ResponseEntity.ok().body("Item updated successfully!");
        } else {
            return ResponseEntity.notFound().build();
        }
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
