import React, { useState } from "react"
import {Form, FormControl, Button, Container, Col, Row} from "react-bootstrap"
import axios from "axios"

export default function Registration() {
  const [state, setState] = useState({
		email: "",
    password: "",
    password_confirmation: "",
    handle: "",
    name: "",
    registrationErrors: "",
	});
  
  const handleSubmit = (event) => {
    // axios.postt("https://localhost:3001/registrations")
    console.log("Form Submitted")
    console.log(state)
    event.preventDefault();
  }

  const handleChange = (event) => {
    const eventValue = event.target.value
    setState({ ...state, [event.target.name]: eventValue});
    console.log(state)
  }

  return (
    <Container className="login-container">
      <Row>
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