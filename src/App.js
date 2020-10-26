import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavbarNav from "./components/Nav";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
import User_Profile from "./components/User_Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavbarNav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/users" component={User_Profile} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
