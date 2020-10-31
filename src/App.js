import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import Slug from "./components/Slug";

export default function App() {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });
  const checkLoginStatus = () => {
    axios
      .get("/api/logged_in", {withCredentials: true})
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
          path="/user_profile/:user"
          render={(props) => (
            <UserProfile
              {...props}
              user={state.user}
              loggedInStatus={state.loggedInStatus}
            />
          )}
        />
        <Route
          path="/recipes/:recipe/:twists?/:twist?"
          render={(props) => <Recipes {...props} user={state.user} />}
        />
        <Route path="/my_twists/" component={My_Twists} />
        <Route path="/fave_twists/" component={Fave_Twists} />
        <Route path="/fave_users/" component={Fave_Users} />
        <Route path="/twists/:slug" component={Slug} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
