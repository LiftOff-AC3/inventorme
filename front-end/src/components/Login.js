import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("/submit", {
        email: email,
        password: password,
      });

      if (response.status === 200) {

        const authToken = response.data.token;
        const userId = response.data.userId;
        localStorage.setItem("token", authToken);
        localStorage.setItem("userId", userId);

        navigate("/items");
      }

    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Login failed. Please check your email and password.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }

  }

  return (
    <div class="box">
      <h1>Log In</h1>
      <Form class="form-container" onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="m-1">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@gmail.com"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formPassword" className="m-1">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*********"
            required
          ></Form.Control>
        </Form.Group>
        <Button
          id="login-submit-button"
          // className="mx-5"
          // variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
