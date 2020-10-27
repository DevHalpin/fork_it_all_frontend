import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";
import {Link} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row} from "react-bootstrap";

function NavbarNav() {
  return (
    <Navbar bg="dark" expand="xxl" static="top">
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="success" className="mr-sm-2">
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
