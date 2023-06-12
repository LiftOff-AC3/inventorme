import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./CreateItem.css";

export default function CreateItem() {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    itemName: "",
    itemQuantity: "",
    description: "",
    location: ""
  });
  
  const onChangeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
      try {
        const userId = localStorage.getItem("userId");
        const newItem = {
          itemName: item.itemName,
          itemQuantity: item.itemQuantity,
          description: item.description,
          location: item.location,
          userId: userId
        };
      await axios.post("/item", newItem)
      .then(navigate("/items"));
      } catch (err) {
        alert(err);
    }
  };
  
  <div class="box">
    <h2 className="m-4">Create Item</h2>
    <form onSubmit={onSubmit} class="form-container">
      <div className="text-center mb-3">
        <label htmlFor="Name" className="form-label">
          Item Name
        </label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter Item Name"
          name="itemName"
          value={item.itemName}
          onChange={onChangeItem}
          required
        />
      </div>
      <div className="text-center mb-3">
        <label htmlFor="Quantity" className="form-label">
          Quantity
        </label>

        <input 
          type={"number"}
          className="form-control"
          placeholder="Enter Quantity to Store"
          name="itemQuantity"
          value={item.itemQuantity}
          onChange={onChangeItem}
          required
        />
      </div>
      <div className="text-center mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type={"text"}
          className="form-control"
          placeholder="Enter Brief Description of Item"
          name="description"
          value={item.description}
          onChange={onChangeItem}
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        Submit
      </button>
    </form>
  </div>
     
  )
}
