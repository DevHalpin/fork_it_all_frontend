import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Login.scss";

function Login() {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username*"
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
              <a href="#" className="ForgetPwd">
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
              <a href="#" className="ForgetPwd" value="Login"></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
