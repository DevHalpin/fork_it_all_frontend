import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Nav.scss";
import {Link, useHistory} from "react-router-dom";
import Logo from "./images/ForkItAll.png";
import {Nav, Navbar, Form, FormControl, Button, Container, Row, Dropdown} from "react-bootstrap";
import axios from "axios";
import {LoginModal, RegisterModal} from "./Modal";

function NavbarNav(props) {
  const [navOpen, setNavOpen] = useState(false);
  const [state, setState] = useState({
    search: ""
  });
  const history = useHistory();
  // Set modal state to false (closed)
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  const handleChange = (event) => {
    const eventValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: eventValue
    });
  };

  const handleSubmit = (event) => {
    axios
      .get(`/api/recipes?search=${state.search}`)
      .then((response) => {
        history.push(`/recipes/${response.data.id}`);
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

  // Toggle for modals
  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };
  const toggleRegisterModal = () => {
    setRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <Navbar expanded={navOpen} bg="dark" expand="xxl" sticky="top" className="nav">
      <Container fluid>
        <LoginModal handleLogin={props.handleLogin} id="login-modal" show={isLoginModalOpen} onHide={toggleLoginModal} toggleRegisterModal />
        <RegisterModal handleLogin={props.handleLogin} id="register-modal" show={isRegisterModalOpen} onHide={toggleRegisterModal} toggleLoginModal />
        <Row>
          <Navbar.Toggle onClick={() => setNavOpen(navOpen ? false : "expanded")} aria-controls="basic-navbar-nav"><i className="material-icons menu">menu</i></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="dropdown-menu">
              <Link onClick={() => setNavOpen(false)} role="menuitem" to="/recipes/43" id="nav-link">
                Recipes  <i className="material-icons menu-links md-24">food_bank</i>
              </Link>
              <Dropdown.Divider />
              <Link onClick={() => setNavOpen(false)} role="menuitem" to={`/user_profile/${props.user.id}`} id="nav-link">Profile  <i className="material-icons menu-links md-24">account_box</i></Link>
              <Dropdown.Divider />
              <Link onClick={() => setNavOpen(false)} role="menuitem" to="/my_twists/" id="nav-link">
                My Twists  <i className="material-icons menu-links md-24">menu_book</i>
              </Link>
              <Dropdown.Divider />
              <Link onClick={() => setNavOpen(false)} role="menuitem" to="/fave_twists/" id="nav-link">
                Fave Twists  <i className="material-icons menu-links md-24">favorite</i>
              </Link>
              <Dropdown.Divider />
              <Link onClick={() => setNavOpen(false)} role="menuitem" to="/fave_users/" id="nav-link">Fave Users  <i className="material-icons menu-links md-18">group_add</i></Link>
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
          <Button bsPrefix type="submit" className="mr-sm-2 search-button gen-button">
            <i className="material-icons md-18">search</i>  Search
          </Button>
        </Form>
        <Row>
          {props.loggedInStatus === "NOT_LOGGED_IN" ?
            (<>
              <Button id="login-modal" onClick={toggleLoginModal} bsPrefix className="mr-sm-2 login-buttons gen-button">
                Login
            </Button>  <Button id="register-modal" onClick={toggleRegisterModal} bsPrefix className="mr-sm-2 login-buttons gen-button">
                Register
            </Button>
            </>)
            : <>
              <div className="user-handle">User: {props.user.handle} </div>
              <Button onClick={handleLogOutClick} bsPrefix className="mr-sm-2 logout-button gen-button">
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
