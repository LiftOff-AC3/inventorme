package com.ac3.InventorMe;

import com.ac3.InventorMe.model.Item;
import org.junit.jupiter.api.Test;
import com.ac3.InventorMe.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
public class ItemTests {
    @Autowired
    private ItemRepository itemRepository;

    @Test
    public void testDeleteItem() {
        // Create a new item entity and save it to the database
        Item item = new Item();
        item.setItemName("Test Item");
        item.setDescription("This is a test item.");
        item.setItemQuantity(10);
        itemRepository.save(item);

        // Delete the item entity from the database
        itemRepository.delete(item);

        // Confirm that the item entity has been deleted from the database
        Optional<Item> deletedItem = itemRepository.findById(item.getId());
        assertFalse(deletedItem.isPresent());
    }
}



