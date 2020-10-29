import React, { useState } from "react"
import {Form, FormControl, Button, Container, Col, Row} from "react-bootstrap"
import axios from "axios"

export default function Login (props) {
  const [state, setState] = useState({
		email: "",
    password: "",
    loginErrors: "",
  });
  
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/")
  }
  
  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/api/sessions", {
      email: state.email,
      password: state.password,
    }, 
    { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data);
      }
    }).catch(error => {
      console.log("Error: ", error)
    })
    event.preventDefault();
  }

  const handleChange = (event) => {
    const eventValue = event.target.value
    setState({ ...state, [event.target.name]: eventValue});
  }

  return (
    <Container className="login-container">
      <Row>
        <h2>Status: {props.loggedInStatus}</h2>
        <Col md="6" className="login-form-1">
          <h3>Login</h3>
          <Form onSubmit={handleSubmit}>
            <FormControl type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} required />
            <FormControl type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} required />
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}