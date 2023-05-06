import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  function validateForm() {
    return email.length > 0 && password.length > 0;

  }
   function handleSubmit(event) {
        event.preventDefault();
   }

    return(
    <div className="Login">
    <h1 className="m-5 text-center" >Log In</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail" className="m-5">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@gmail.com"></Form.Control>
      </Form.Group>
        <Form.Group controlId="formPassword" className="m-5">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*********"></Form.Control>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit" disabled={!validateForm()}>
        Submit
      </Button>
    </Form>
    </div>
  )
}