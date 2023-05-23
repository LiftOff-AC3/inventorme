import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Registration() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const CryptoJS = require("crypto-js");
  const salt = CryptoJS.lib.WordArray.random(16);
  const hashedPassword = CryptoJS.PBKDF2(password, salt, {
    keySize: 512 / 32,
    iterations: 1000,
  }).toString();

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
    try {
      await axios
        .post("http://localhost:8080/registration", {
          name: name,
          company: company,
          email: email,
          password: hashedPassword,
        })
        .then(navigate("/items"));
      await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      alert("Registration Success!");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div id="registration-page">
      <h1 class="text-center">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="m-5">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formCompany" className="m-5">
          <Form.Label>Company: </Form.Label>
          <Form.Control
            type="name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="My Company"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formEmail" className="m-5">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword" className="m-5">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formConfirmPassword" className="m-5">
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
          variant="primary"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
