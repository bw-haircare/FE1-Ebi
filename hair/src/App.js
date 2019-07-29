import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Stylists from "./components/Stylists";
import AddStylist from "./components/AddStylist";
import UserSignUp from "./components/UserSignUp";
import StylistSignUp from "./components/StylistSignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stylists" component={Stylists} />
      <PrivateRoute exact path="/addstylist" component={AddStylist} />
      <PrivateRoute exact path="/newuser" component={UserSignUp} />
      <PrivateRoute exact path="/newstylist" component={StylistSignUp} />
    </div>
  );
}

export default App;
