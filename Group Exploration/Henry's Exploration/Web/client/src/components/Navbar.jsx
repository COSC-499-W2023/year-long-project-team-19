import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarClient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  //Buttons handler
  const handlePlay = () => {
    navigate("/");
  };
  const handleRules = () => {
    navigate("/rules");
  };
  const HandleCards = () => {
    navigate("/cards");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handlePlay} className={pathName === "/" ? "active" : ""}>Play</Nav.Link>
            <Nav.Link onClick={handleRules} className={pathName === "/rules" ? "active" : ""}>Rules</Nav.Link>
            <Nav.Link onClick={HandleCards} className={pathName === "/cards" ? "active" : ""}>Card</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarClient;
