import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import "./styles/Button.scss";
import "./styles/Card.scss";
import axios from "axios";
import NavbarNav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Error from "./components/Error";
import UserProfile from "./components/User_Profile";
import Recipes from "./components/Recipes";
import MyTwists from "./components/My_Twists";
import FaveTwists from "./components/Fave_Twists";
import Fave_Users from "./components/Fave_Users";
import Slug from "./components/Slug";

export default function App() {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });
  const checkLoginStatus = () => {
    axios
      .get("/api/logged_in",{
        headers: {
          authorization: `Token token=${localStorage.getItem('access_token')}`,
        }, withCredentials: true})
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
    localStorage.setItem('access_token', data.user.access_token)
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };
  const handleLogout = () => {
    localStorage.removeItem('access_token')
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
        <Route exact path="/recipes/undefined" component={Error} />
        <Route
          path="/recipes/:recipe/:twists?/:twist?"
          render={(props) => <Recipes {...props} user={state.user} />}
        />
        <Route
          path="/my_twists/"
          render={(props) => <MyTwists {...props} user={state.user} />}
        />
        <Route
          path="/fave_twists/"
          render={(props) => <FaveTwists {...props} user={state.user} />}
        />
        <Route path="/fave_users/" component={Fave_Users} />
        <Route path="/twists/:slug" component={Slug} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}
