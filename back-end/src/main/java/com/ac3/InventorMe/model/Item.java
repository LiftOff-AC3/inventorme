package com.ac3.InventorMe.model;
import jakarta.persistence.*;

@Entity
public class Item {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private RegistrationData registrationData;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String itemName;
    private String description;
    private int itemQuantity;

    public Item(int id, String itemName, String description, int itemQuantity, RegistrationData registrationData) {
        this.id = id;
        this.itemName = itemName;
        this.description = description;
        this.itemQuantity = itemQuantity;
        this.registrationData = registrationData;
    }

    public Item() {}

    public RegistrationData getRegistrationData() {
        return registrationData;
    }

    public void setRegistrationData(RegistrationData registrationData) {
        this.registrationData = registrationData;
    }

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
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }
}
