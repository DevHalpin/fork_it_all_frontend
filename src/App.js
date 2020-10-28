import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/App.scss";
import axios from "axios";

import NavbarNav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration"
import User_Profile from "./components/User_Profile";
import Recipes from "./components/Recipes";
import My_Twists from "./components/My_Twists";
import Fave_Twists from "./components/Fave_Twists";
import Fave_Users from "./components/Fave_Users";
import User_Dashboard from "./components/User_Dashboard";

export default function App() {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });

  const checkLoginStatus = () => {
    axios.get("/api/logged_in", { withCredentials: true })
    .then(response => {
      if (response.data.logged_in && state.loggedInStatus === "NOT_LOGGED_IN") {
        setState({
        loggedInStatus: "LOGGED_IN",
        user: response.data.user
        })
      }
      else if (!response.data.logged_in && state.loggedInStatus === "LOGGED_IN") {
        setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
        })
      }
    })
    .catch(error => {
      console.log("Explosions! ", error)
    });
  }

  useEffect(() => {
    checkLoginStatus();
  })

  const handleLogin = (data) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data
  })
  }


  return (
    <Router>
      <NavbarNav />
      <Switch>
        <Route exact path="/" render={props => (
          <Home { ...props } loggedInStatus={state.loggedInStatus} />
        )}  />
        <Route path="/login" render={props => (
          <Login { ...props } loggedInStatus={state.loggedInStatus} />
        )}  />
        <Route path="/register" render={props => (
          <Registration { ...props } handleLogin={handleLogin} loggedInStatus={state.loggedInStatus} />
        )}  />
        <Route path="/user_profile" component={User_Profile} />
        <Route exact path="/recipes/:recipe" component={Recipes} />
        <Route exact path="/my_twists/:user" component={My_Twists} />
        <Route exact path="/fave_twists/:recipe/twists/:twist" component={Fave_Twists} />
        <Route path="/my_twists" component={My_Twists} />
        <Route path="/fave_twists" component={Fave_Twists} />
        <Route path="/user_dashboard" component={User_Dashboard} />
        <Route path="/fave_users" component={Fave_Users} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
