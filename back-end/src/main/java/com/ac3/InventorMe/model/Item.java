package com.ac3.InventorMe.model;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String itemName;
    private String Description;
    private int itemQuantity;
    private UUID userUuid;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getItemQuantity() { return itemQuantity; }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public UUID getUserUuid() { return userUuid; }

    public void setUserUuid(UUID userUuid) { this.userUuid = userUuid; }
}
