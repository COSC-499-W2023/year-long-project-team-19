import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [loginError, setLoginError] = useState(false); // State to handle login error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    try {
      const result = await axios.post(
        "https://nodeserver-two.vercel.app/api/user/login",
        {
          username: form.elements.formBasicUsername.value,
          password: form.elements.formBasicPassword.value,
        }
      );
      if (result.data.message === "Loggin successful") {
        setValidated(true);
        setLoginError(false);
        sessionStorage.setItem("isLoggedIn", "true");

        // Wait for 3 seconds before redirecting to show UI success
        setTimeout(() => {
          navigate("/cards");
        }, 1000);
      }
    } catch (error) {
      setValidated(false);
      setLoginError(true);
      console.log(error);
    }
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
          {loginError && (
            <div class="alert alert-danger" role="alert">
              Login failed. Please check your credentials.
            </div>
          )}
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
