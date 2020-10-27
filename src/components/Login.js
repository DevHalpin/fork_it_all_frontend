import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.scss";
import axios from "axios";

function Login() {
  function handleChange(event) {
    setUsername(event.target.value);
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

  const [username, setUsername] = useState("");
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form className="form-control" onSubmit={loginEvent}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username*"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                onChange={handleChange}
                value=""
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <a href="#www.example.com" className="ForgetPwd">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
        <div className="col-md-6 login-form-2">
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
        </div>
      </div>
    </div>
  );
}

export default Login;
