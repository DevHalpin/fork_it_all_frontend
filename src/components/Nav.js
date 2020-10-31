import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Nav.scss";
import {Link, useHistory} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row} from "react-bootstrap";
import axios from "axios";
import {LoginModal, RegisterModal} from "./Modal";

function NavbarNav(props) {
  const [state, setState] = useState({
    search: ""
  });
  const history = useHistory();
  
  const handleChange = (event) => {
    const eventValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: eventValue
    });
  };

  const handleSubmit = (event) => {
    axios
      .get(`http://localhost:3001/api/recipes?search=${state.search}`)
      .then((response) => {
        history.push(`/recipes/${response.data.recipe.id}`)
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

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
              <Link to="/user_profile/48">Profile</Link>
              <Link to="/recipes/12">
                Recipes
                </Link>
              <Link to="/my_twists/41">
                My Twists
                </Link>
              <Link to="/fave_twists/85">
                Fave Twists
              </Link>
              <Link to="/fave_users/19">
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
        <FormControl
                  type="text"
                  name="search"
                  placeholder="Search here!"
                  value={state.search}
                  onChange={handleChange}
                />
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
              <p className="user-handle">User: {props.user.handle} </p>
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
