package com.ac3.InventorMe.repository;

import com.ac3.InventorMe.model.Item;
import com.ac3.InventorMe.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Integer> {
  //retrieves a list of items associated with a user based on id
  List<Item> findByUserId(Login userId);
}
