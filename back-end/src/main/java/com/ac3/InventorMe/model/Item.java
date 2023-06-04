package com.ac3.InventorMe.model;
import jakarta.persistence.*;

@Entity
public class Item {

    @ManyToOne
    @JoinColumn(name = "login_id")
    private Login login;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String itemName;
    private String description;
    private int itemQuantity;

    public Item(int id, String itemName, String description, int itemQuantity, Login login) {
        this.id = id;
        this.itemName = itemName;
        this.description = description;
        this.itemQuantity = itemQuantity;
        this.login = login;
    }

    public Item() {}

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
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
