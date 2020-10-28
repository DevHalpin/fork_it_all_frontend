import React, { useState } from "react";
import "../../styles/Login.scss";
// import axios from "axios";
import {Form, FormControl, Button, Container, Col, Row} from "react-bootstrap"

export default function Login() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container className="login-container">
      <Row>
        <Col md="6" className="login-form-1">
          <h3>Login</h3>
          <Form onSubmit={handleSubmit}>
            {/* <Form.Group> */}
              <FormControl
                type="text"
                placeholder="Username*"
                name="username"
              />
            {/* </div>
            <div className="form-group"> */}
              <FormControl
                type="password"
                placeholder="Your Password *"
                name="password"
              />
            {/* </div> */}
            {/* <div className="form-group"> */}
            <Button variant="success" type="submit" className="mr-sm-2">
            Login
          </Button>
            {/* </div> */}
            {/* <div className="form-group">
              <a href="#www.example.com" className="ForgetPwd">
                Forget Password?
              </a>
            </div> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


