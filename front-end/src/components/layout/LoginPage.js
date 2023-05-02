import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = (e) => {
      e.preventDefault();
      if(email === "" || password === ""){
        alert("Please fill out all required fields.")
      }
    }


    return(
    <Form onSubmit={handleClick}>
      <Form.Group controlId="formEmail" className="m-5">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@gmail.com"></Form.Control>
      </Form.Group>
        <Form.Group controlId="formPassword" className="m-5">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*********"></Form.Control>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}