import React, { useState } from "react";
import { Modal, Button, Form, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/Modal.scss";
import axios from "axios";

// Create twist modal
const TwistCreateModal = (props) => {
  const { show, onHide, user, recipe } = props;
  const [state, setState] = useState({
    content: "",
    private: false,
    category: "Ingredient Replacement",
  });
  //handle state changes for checkbox and field content
  const handleChange = (event) => {
    const { type, checked } = event.target;
    const eventValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: eventValue,
      [event.target.name]: type === "checkbox" ? checked : eventValue,
    });
  };

  const handleSubmit = (event) => {
    console.log(state);
    axios
      .post("/api/twists", {
        content: state.content,
        recipe_id: recipe,
        user_id: user.id,
        tags: state.category,
        slug: "222hgvf74kt34",
        is_private: state.private,
        sort_order: 1,
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Create a New Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>
                  Do you have an idea to make this recipe better? Enter your
                  personal twist here to share it!
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter twist"
                  value={state.content}
                  onChange={handleChange}
                  required
                  name="content"
                />
                <Form.Group as={Col}>
                  <Form.Label>Select a Category for Twist</Form.Label>
                  <Form.Control
                    as="select"
                    id="inlineFormCustomSelect"
                    value={state.category}
                    onChange={handleChange}
                    name="category"
                    custom
                  >
                    <option value="Ingredient Replacement">
                      Ingredient Replacement
                    </option>
                    <option value="Cooking Time">Cooking Time</option>
                    <option value="Healthy Options">Healthy Options</option>
                    <option value="Add Something Extra">
                      Add Something Extra
                    </option>
                    <option value="Take Something Out">
                      Take Something Out
                    </option>
                  </Form.Control>
                </Form.Group>
              </Form.Group>
              <Button onClick={onHide} variant="primary" type="submit">
                Submit Twist
              </Button>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  checked={state.private}
                  label="Set Twist Private"
                  name="private"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Edit twist modal
const TwistEditModal = (props) => {
  const { show, onHide, user, twist } = props;
  const [editState, setEditState] = useState({
    content: twist.content,
    private: false,
    category: "Ingredient Replacement",
  });

  const handleEditChange = (event) => {
    const { type, checked } = event.target;
    const eventValue = event.target.value;
    setEditState({
      ...editState,
      [event.target.name]: eventValue,
      [event.target.name]: type === "checkbox" ? checked : eventValue,
    });
  };

  const handleEditSubmit = (event) => {
    console.log(editState);
    axios
      .put(`/api/twists/${twist.id}`, {
        content: editState.content,
        is_private: editState.private,
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Edit your Twist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleEditSubmit}>
              <Form.Group>
                <Form.Label>
                  Found a better change for this recipe? Enter it here!
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit your twist"
                  value={editState.content}
                  onChange={handleEditChange}
                  name={"content"}
                />
              </Form.Group>
              <Button onClick={onHide} variant="primary" type="submit">
                Submit Twist
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Edit twist modal
const TwistDeleteModal = (props) => {
  const { show, onHide, twist } = props;

  const handleDeleteSubmit = (event) => {
    console.log(`/api/twists/${twist.id}`);
    axios.delete(`/api/twists/${twist.id}`, {}).catch((error) => {
      console.log("Error: ", error);
    });
    event.preventDefault();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header onClick={onHide} closeButton>
            <Modal.Title>Delete your Twist?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>
                  Are you sure you want to delete this twist?
                </Form.Label>
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                onClick={handleDeleteSubmit}
              >
                Delete
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Login Modal
const LoginModal = (props) => {
  const history = useHistory();
  const { show, onHide, handleLogin } = props;

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
        "http://localhost:3001/api/sessions",
        {
          email: state.email,
          password: state.password,
        },
        { withCredentials: true }
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
    setState({ ...state, [event.target.name]: eventValue });
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
              <Button onClick={onHide} variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

// Register Modal
const RegisterModal = (props) => {
  const history = useHistory();
  const { show, onHide, handleLogin } = props;
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
    console.log(state);
    axios
      .post(
        "http://localhost:3001/api/registrations",
        {
          email: state.email,
          password: state.password,
          password_confirmation: state.password_confirmation,
          handle: state.handle,
          name: state.name,
        },
        { withCredentials: true }
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
    setState({ ...state, [event.target.name]: eventValue });
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
              <Button onClick={onHide} variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export {
  TwistCreateModal,
  TwistEditModal,
  TwistDeleteModal,
  LoginModal,
  RegisterModal,
};
