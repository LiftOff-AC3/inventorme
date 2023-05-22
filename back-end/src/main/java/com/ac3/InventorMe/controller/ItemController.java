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

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    public ItemController(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @PostMapping("/item")
    Item newItem(@RequestBody Item newItem){
        return itemRepository.save(newItem);
    }

    @PutMapping("/items/{id}")
     Item updateItem(@RequestBody Item newItem, @PathVariable int id){
         return itemRepository.findById(id)
                 .map(item -> {
                     item.setItemName(newItem.getItemName());
                     item.setItemQuantity(newItem.getItemQuantity());
                     item.setDescription(newItem.getDescription());
                     return itemRepository.save(item);
                 })
                 .orElseGet(() -> {
                     return itemRepository.save(newItem);
                 });
    }

    @GetMapping("/items")
    List<Item>getAllItems(){
        return itemRepository.findAll();
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
