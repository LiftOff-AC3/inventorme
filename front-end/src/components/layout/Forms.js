import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Forms(){
  return(
    <Form>
      <Form.Group className="m-5">
        <Form.Label for="name">Name: </Form.Label>
        <Form.Control type="name" placeholder="John Doe" id="name" name="text"></Form.Control>
      </Form.Group>  
      <Form.Group className="m-5">
        <Form.Label for="name">Company: </Form.Label>
        <Form.Control type="name" placeholder="My Company" id="name" name="text"></Form.Control>
      </Form.Group>
      <Form.Group className="m-5">
        <Form.Label for="email">Email: </Form.Label>
        <Form.Control type="email" placeholder="email@gmail.com" id="email" name="email"></Form.Control>
      </Form.Group>
        <Form.Group className="m-5">
        <Form.Label for="password">Password: </Form.Label>
        <Form.Control type="password" placeholder="*********" id="password" name="email"></Form.Control>
        <Form.Label for="password">Verify Password: </Form.Label>
        <Form.Control type="password" placeholder="*********" id="password" name="email"></Form.Control>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}