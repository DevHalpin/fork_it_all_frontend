import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import axios from "axios";
import NavbarNav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import UserProfile from "./components/User_Profile";
import Recipes from "./components/Recipes";
import My_Twists from "./components/My_Twists";
import Fave_Twists from "./components/Fave_Twists";
import Fave_Users from "./components/Fave_Users";
import UserDashboard from "./components/User_Dashboard";
export default function App() {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });
  const checkLoginStatus = () => {
    axios
      .get("/api/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          state.loggedInStatus === "LOGGED_IN"
        ) {
          setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("Explosions! ", error);
      });
  };
  useEffect(() => {
    checkLoginStatus();
  });
  const handleLogin = (data) => {
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };
  const handleLogout = () => {
    setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  };
  return (
    <Router>
      <NavbarNav
        user={state.user}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedInStatus={state.loggedInStatus}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/user_profile"
          render={(props) => (
            <UserProfile
              {...props}
              user={state.user}
              loggedInStatus={state.loggedInStatus}
            />
          )}
        />
        <Route
          exact
          path="/recipes/:recipe"
          render={(props) => <Recipes {...props} user={state.user} />}
        />
        <Route exact path="/my_twists/:user" component={My_Twists} />
        <Route
          exact
          path="/fave_twists/:recipe/twists/:twist"
          component={Fave_Twists}
        />
        <Route path="/my_twists" component={My_Twists} />
        <Route path="/fave_twists" component={Fave_Twists} />
        <Route
          path="/user_dashboard"
          render={(props) => (
            <UserDashboard {...props} loggedInStatus={state.loggedInStatus} />
          )}
        />
        <Route path="/fave_users" component={Fave_Users} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
