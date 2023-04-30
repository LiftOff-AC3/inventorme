import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Forms(){
  
    const [inputValue, setInputValue] = useState("");

    const handleClick =(event) =>{
      setInputValue(event.target.value);
      console.log("Clicked");
    }

    return(
    <Form onSubmit={handleClick}>
      <Form.Group className="m-5">
        <Form.Label htmlFor="name">Name: </Form.Label>
        <Form.Control type="name" placeholder="John Doe" id="name" name="text"></Form.Control>
      </Form.Group>  
      <Form.Group className="m-5">
        <Form.Label htmlFor="name">Company: </Form.Label>
        <Form.Control type="name" placeholder="My Company" id="company" name="text"></Form.Control>
      </Form.Group>
      <Form.Group className="m-5">
        <Form.Label htmlFor="email">Email: </Form.Label>
        <Form.Control type="email" placeholder="email@gmail.com" id="email" name="email"></Form.Control>
      </Form.Group>
        <Form.Group className="m-5">
        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control type="password" placeholder="*********" id="password" name="email"></Form.Control>
        <Form.Label htmlFor="password">Verify Password: </Form.Label>
        <Form.Control type="password" placeholder="*********" id="verify-password" name="email"></Form.Control>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}