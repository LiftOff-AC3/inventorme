package com.ac3.InventorMe.repository;

import com.ac3.InventorMe.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {
}
