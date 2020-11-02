import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";

const LoginModal = (props) => {
  const history = useHistory();
  const {show, onHide, handleLogin} = props;

  const [state, setState] = useState({
    email: "",
    password: "",
    loginErrors: "",
  });

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    history.push("/");
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "/api/sessions",
        {
          email: state.email,
          password: state.password,
        },
        {withCredentials: true}
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

  const handleChange = (event) => {
    const eventValue = event.target.value;
    setState({...state, [event.target.name]: eventValue});
  };

  return (
    <>
      <Modal show={show} onHide={onHide} id="login-modal">
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                onClick={onHide}
                bsPrefix
                type="submit"
                className="gen-button login-buttons"
              >
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default LoginModal;