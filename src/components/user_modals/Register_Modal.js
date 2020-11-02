import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import axios from "axios";

const RegisterModal = (props) => {
  const history = useHistory();
  const {show, onHide, handleLogin} = props;
  const [state, setState] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    handle: "",
    name: "",
    registrationErrors: "",
  });

  const handleSuccessfulAuth = (data) => {
    handleLogin(data);
    history.push("/");
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "https://stark-shelf-20245.herokuapp.com/api/registrations",
        {
          email: state.email,
          password: state.password,
          password_confirmation: state.password_confirmation,
          handle: state.handle,
          name: state.name,
        },
        {withCredentials: true}
      )
      .then((response) => {
        if (response.data.status === "created") {
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
      <Modal show={show} onHide={onHide} id="register-modal">
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Register</Modal.Title>
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
              {/* Name */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {/* User Handle */}
              <Form.Group>
                <Form.Label>Handle</Form.Label>
                <Form.Control
                  type="text"
                  name="handle"
                  placeholder="Handle"
                  value={state.handle}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                {/* Password */}
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
              <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  placeholder="Password Confirmation"
                  value={state.password_confirmation}
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
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default RegisterModal;
