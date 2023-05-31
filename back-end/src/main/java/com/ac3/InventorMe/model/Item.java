package com.ac3.InventorMe.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /*JsonIgnoreProperties solved the issue I ran into with the items
    list not rendering in the table. I'll leave info about the two properties
    in the comment section of the pull request*/
    @ManyToOne
    @JoinColumn(name="login_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Login userId;

    private String itemName;
    private String Description;
    private int itemQuantity;

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

    public int getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public Login getUserId() { return userId; }

    public void setUserId(Login userId) { this.userId = userId; }

    public void setUserId(int userId) {
        Login login = new Login();
        login.setId(userId);
        this.userId = login;
    }
}
