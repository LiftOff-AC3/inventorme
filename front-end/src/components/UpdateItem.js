import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateItem({ id }) {
  const [editItem, setEditItem] = useState({
    itemName: "",
    itemQuantity: "",
    description: "",
  });
  const navigate = useNavigate();

  console.log({ id });
  const handleSubmit = async (e) => {
    try {
      await axios.put(`/item/${id}`, editItem, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Item updated successfully");
      navigate("/items");
    } catch (err) {
      alert(`Error updating item: ${err.message}`);
    }
  };

  return (
    <div>
      <h1 className="text-center">Update Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="m-5">
          <Form.Label>Item Name: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.itemName}
            onChange={(e) =>
              setEditItem({ ...editItem, itemName: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formQuantity" className="m-5">
          <Form.Label>Quantity: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.itemQuantity}
            onChange={(e) =>
              setEditItem({ ...editItem, itemQuantity: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formDescription" className="m-5">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type="text"
            value={editItem.description}
            onChange={(e) =>
              setEditItem({ ...editItem, description: e.target.value })
            }
            required
          ></Form.Control>
        </Form.Group>
        <Button className="mx-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
