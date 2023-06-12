import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import bcrypt from "bcryptjs";
import styles from "./Registration.css";

export default function Registration() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    const regexNameVerification = /^[A-Za-z\s]+$/;
    const regexEmailVerification = /^(.+)@(.+)$/;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return false;
    } else if (!regexNameVerification.test(name)) {
      return false;
    } else if (!regexEmailVerification.test(email)) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    }
    return true;
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
      const response = await axios.post("/registration", {
          name: name,
          company: company,
          email: email,
        });
      const userId = response.data;
      
      await axios.post("/login", {
        email: email,
        password: hashedPassword,
        userId: userId
      });
      alert("Registration Success!");
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="registration-box">
      <h1 class="text-center">Register</h1>
      <Form class="form-container" onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="m-1">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formCompany" className="m-1">
          <Form.Label>Company: </Form.Label>
          <Form.Control
            type="name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="My Company"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formEmail" className="m-1">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword" className="m-1">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formConfirmPassword" className="m-1">
          <Form.Label>Verify Password: </Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="*********"
          ></Form.Control>
        </Form.Group>
        <Button
          className="mx-5"
          variant="warning"
          id="registration-button"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
