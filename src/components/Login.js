import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.scss";
import axios from "axios";
import {Form, FormControl, Button, Container, Col, Row} from "react-bootstrap"

function Login() {
  const [username, setUsername] = useState("");

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries()).search;
    console.log(formData.entries());
    // fetch(`/api/data?search=${formDataObj}`, {
    //   method: 'GET',
    // });
  }

  function loginEvent(event) {
    event.preventDefault();
    console.log(event);
    axios
      .get("/api/users/1")
      .then((response) => {
        console.log(response.data);
        // let parsedResponse = JSON.parse(response.data.message);
        // console.log(parsedResponse);
        setUsername(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
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
        {/* <div className="col-md-6 login-form-2">
          <h3>Register</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username *"
                value=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                value=""
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <button type="button" class="mr-sm-2 btn btn-primary">
                Forgot password?
              </button>
            </div>
          </form>
        </div> */}
      </Row>
    </Container>
    </>
  );
}

export default Login;
