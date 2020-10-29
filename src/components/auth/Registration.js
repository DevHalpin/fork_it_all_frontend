import React, { useState } from "react"
import {Form, FormControl, Button, Container, Col, Row} from "react-bootstrap"
import axios from "axios"

export default function Registration(props) {
  const [state, setState] = useState({
		email: "",
    password: "",
    password_confirmation: "",
    handle: "",
    name: "",
    registrationErrors: "",
  });
  
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/")
  }
  
  const handleSubmit = (event) => {
    axios.post("http://localhost:3001/api/registrations", {
      email: state.email,
      password: state.password,
      password_confirmation: state.password_confirmation,
      handle: state.handle,
      name: state.name,
    }, 
    { withCredentials: true }
    ).then(response => {
      if (response.data.status === 'created') {
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
          <h3>Register</h3>
          <Form onSubmit={handleSubmit}>
            <FormControl type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} required />
            <FormControl type="text" name="name" placeholder="Name" value={state.name} onChange={handleChange} required />
            <FormControl type="text" name="handle" placeholder="Handle" value={state.handle} onChange={handleChange} required />
            <FormControl type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} required />
            <FormControl type="password" name="password_confirmation" placeholder="Password Confirmation" value={state.password_confirmation} onChange={handleChange} required />
            <Button type="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}