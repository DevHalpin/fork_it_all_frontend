import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navi() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Fork It All!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Profiles</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Explosions?</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">More Explosions?</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Seriously, Only Explosions....</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Explosions The Whole Way Down</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}











