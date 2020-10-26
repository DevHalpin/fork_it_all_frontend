import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';

function NavbarNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
}

export default NavbarNav;