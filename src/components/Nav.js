import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";
import {Link} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, NavDropdown, Container, Row} from "react-bootstrap";

function NavbarNav() {
  return (
    <Navbar bg="dark" expand="xs" static="top">
      <Container fluid>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="img-responsive rounded mx-auto d-block"
          />
        </Link>
        <Row xs={2} md={4} lg={6}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown
                title="Categories"
                id="basic-nav-dropdown"
                className="white-text"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Row>
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
    </Navbar>
  );
}

export default NavbarNav;
