import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavbarNav from "./components/Nav";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/Login";
import User_Profile from "./components/User_Profile";
import Recipes from "./components/Recipes";
import My_Twists from "./components/My_Twists";
import Fave_Twists from "./components/Fave_Twists";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NavbarNav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/users" component={User_Profile} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/my_twists" component={My_Twists} />
        <Route path="/fave_twists" component={Fave_Twists} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
