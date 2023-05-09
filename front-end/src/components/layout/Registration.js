import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

export default function Forms(){
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = async (e) => {
    //  e.preventDefault();

      try{
        await axios.post("http://localhost:8080/registration",{
          name:name,
          company:company,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        });
        alert("Registration Succefully")
      }catch(err){
        alert(err);
      }

      const regexNameVerification = /^[A-Za-z\s]+$/;
      const regexEmailVerification = /^(.+)@(.+)$/;

      if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill out all required fields.")
      }
      else if(!regexNameVerification.test(name)){
        alert("Please enter valid name.")
      }
      else if(!regexEmailVerification.test(email)){
        alert("Please enter valid email address.")
      }
      else if(password !== confirmPassword){
        alert("Please enter the same password.")
      }
    }
 
    return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="m-5">
        <Form.Label>Name: </Form.Label>
        <Form.Control type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"></Form.Control>
      </Form.Group>
      <Form.Group controlId="formCompany" className="m-5">
        <Form.Label>Company: </Form.Label>
        <Form.Control type="name" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="My Company"></Form.Control>
      </Form.Group>
      <Form.Group controlId="formEmail" className="m-5">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@gmail.com"></Form.Control>
      </Form.Group>
        <Form.Group controlId="formPassword" className="m-5">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*********"></Form.Control>
      </Form.Group>
      <Form.Group controlId="formConfirmPassword" className="m-5">
        <Form.Label>Verify Password: </Form.Label>
        <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="*********"></Form.Control>
      </Form.Group>
      <Button className="mx-5" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}