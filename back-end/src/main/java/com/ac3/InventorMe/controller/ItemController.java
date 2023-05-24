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
import java.util.Optional;
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

    @PutMapping("/item/{id}")
     public ResponseEntity<String> updateItem(@RequestBody Item editItem, @PathVariable("id") int id){
         Optional<Item> optionalItem = itemRepository.findById(id);
                 if(optionalItem.isPresent()){
                     Item existingItem = optionalItem.get();
                     existingItem.setItemName(editItem.getItemName());
                     existingItem.setItemQuantity(editItem.getItemQuantity());
                     existingItem.setDescription(editItem.getDescription());
                     itemRepository.save(existingItem);
                     return ResponseEntity.ok("Item updated successfully!");
                 }
                 else{
                     return ResponseEntity.notFound().build();
                 }
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
