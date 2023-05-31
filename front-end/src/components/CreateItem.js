import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateItem() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [item, setItem] = useState({
    itemName: "",
    itemQuantity: "",
    description: "",
  });

  const onChangeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
   e.preventDefault();
       try {
        /* Retrieves the loginId created and stored when the user logged in; this
        value matches the id of the user's login id in the database and
        will bind each item to their specific user */
         const loginId = parseInt(localStorage.getItem("loginId"));
           const newItem = {
             itemName: item.itemName,
             itemQuantity: item.itemQuantity,
             description: item.description,
             userId: loginId //assigns this value to each item created after login
           };
       await axios.post("http://localhost:8080/item", newItem)
         .then(navigate("/items"));
   } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 text-center">
          <h2 className="m-4">Create Item</h2>
          <form onSubmit={onSubmit}>
            <div className="text-center mb-3">
              <label htmlFor="Name" className="form-label">
                Item Name
              </label>
              <input type={"text"}
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
              <input type={"number"}
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
              <input type={"text"}
                className="form-control"
                placeholder="Enter Brief Description of Item"
                name="description"
                value={item.description}
                onChange={onChangeItem}
              />
            </div>
            <button type="submit"
              className="btn btn-outline-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
