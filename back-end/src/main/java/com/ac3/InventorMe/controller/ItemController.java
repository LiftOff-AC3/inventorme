package com.ac3.InventorMe.controller;
import com.ac3.InventorMe.model.Item;
import com.ac3.InventorMe.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/item")
    Item newItem(@RequestBody Item newItem){
        return itemRepository.save(newItem);
    }

    @GetMapping("/items")
    List<Item>getAllItems(){
        return itemRepository.findAll();
    }
}
