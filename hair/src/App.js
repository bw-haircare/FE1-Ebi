import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { profiles } from "./components/data";
import SignUp from "./components/SignUp";
import InsideStylistDetails from "./components/InsideStylistDetails";
import Logout from "./components/Logout";

//CSS
import { AppTitle } from "./components/styledComponents";
import "./App.scss";

function App() {
  const [bringData, setBringData] = useState(profiles);

  return (
    <Router>
      <div className="App">
        <AppTitle>Hair Care</AppTitle>
        <NavBar />
        <PrivateRoute path="/Dashboard/StylistsPosts" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/stylists/:id" component={InsideStylistDetails} />
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Homepage bringData={bringData} setBringData={setBringData} />
            );
          }}
        />
      </div>
    </Router>
  );
}

export default App;
