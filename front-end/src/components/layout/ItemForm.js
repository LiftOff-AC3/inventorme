import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";


function ItemForm() {
    return (
      <div className="itemForm">
        <Form.Group>
            <Form.Label>Item Name </Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Quantity </Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Description </Form.Label>
            <Form.Control></Form.Control>
        </Form.Group>

        <Button>Create Item</Button>

      </div>
    );
  }
  
  export default ItemForm;