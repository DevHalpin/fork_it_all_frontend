import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Nav.scss";
import {Link} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row} from "react-bootstrap";

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries()).search;
  console.log(formDataObj);
  fetch(`/api/data?search=${formDataObj}`, {
    method: 'GET',
  });
}

function NavbarNav() {
  return (
    <Navbar bg="dark" expand="xxl" sticky="top">
      <Container fluid>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/user_profile">Profile</Link>
              <Link to="/recipes">
                Recipes
                </Link>
              <Link to="/my_twists">
                My Twists
                </Link>
              <Link to="/fave_twists">
                Fave Twists
              </Link>
              <Link to="/user_dashboard">
                Dashboard
              </Link>
              <Link to="/fave_users">
                Fave Users
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Row>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="img-responsive rounded mx-auto d-block"
          />
        </Link>
        <Form inline onSubmit={handleSubmit}>
          <FormControl type="text" name="search" placeholder="Search" className="mr-sm-2" />
          <Button variant="success" type="submit" className="mr-sm-2">
            Search
          </Button>
        </Form>
        <Row>
          <Link to="/login">
            <Button variant="primary" className="mr-sm-2">
              Log in
            </Button>
          </Link>
        </Row>
      </Container>
    </Navbar >
  );
}

export default NavbarNav;
