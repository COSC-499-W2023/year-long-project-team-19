import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

const AdminLogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      await axios.post(
        "https://nodeserver-two.vercel.app/api/user/login",
        {
          username: form.elements.formBasicUsername.value,
          password: form.elements.formBasicPassword.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    setValidated(true);
  };

  return (
    <>
      <Navbar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            width: "400px",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px",
          }}
        >
          <h1 className="text-center mb-4">Admin Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
              <Form.Control.Feedback type="invalid">
                Enter your username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Enter your password.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default AdminLogin;
