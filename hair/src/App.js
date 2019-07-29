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
  
  //hook used for StylistSignUp.js
  const [stylist, setStylist] = useState({});

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stylists" component={Stylists} />
      <PrivateRoute exact path="/newstylist" component={StylistSignUp} />
      <PrivateRoute exact path="/newuser" component={UserSignUp} />
    </div>
  );
}

export default App;
