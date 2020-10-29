import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Nav.scss";
import {Link, useHistory} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row} from "react-bootstrap";
import axios from "axios";
import {LoginModal, RegisterModal} from "./Modal";

function NavbarNav(props) {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries()).search;
    fetch(`/api/recipes?search=${formDataObj}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const id = res.recipe.id;
        history.push(`/recipes/${id}`);
        console.log(res);
      });
  }

  const handleLogOutClick = () => {
    axios.delete("/api/logout", {withCredentials: true})
      .then(() => {
        props.handleLogout();
      })
      .catch(error => {
        console.log("Logout Error ", error);
      });
  };

  // Set modal state to false (closed)
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  // Toggle for modals
  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };
  const toggleRegisterModal = () => {
    setRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <Navbar bg="dark" expand="xxl" sticky="top" className="nav">
      <Container fluid>
        <LoginModal handleLogin={props.handleLogin} id="login-modal" show={isLoginModalOpen} onHide={toggleLoginModal} toggleRegisterModal />
        <RegisterModal handleLogin={props.handleLogin} id="register-modal" show={isRegisterModalOpen} onHide={toggleRegisterModal} toggleLoginModal />
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
          {props.loggedInStatus === "NOT_LOGGED_IN" ?
            (<>
              <Button id="login-modal" onClick={toggleLoginModal} variant="primary" className="mr-sm-2">
                Login
            </Button>  <Button id="register-modal" onClick={toggleRegisterModal} variant="primary" className="mr-sm-2">
                Register
            </Button>
            </>)
            : <>
              <p>User: {props.user.handle} </p>
              <Button onClick={handleLogOutClick} variant="danger" className="mr-sm-2">
                Log out
          </Button>
            </>
          }
        </Row>
      </Container>
    </Navbar >
  );
}

export default NavbarNav;
