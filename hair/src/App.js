import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { profiles } from "./components/data";
import Register from "./components/Register";
import InsideStylistDetails from "./components/InsideStylistDetails";
import "./App.scss";

function App() {
  const [bringData, setBringData] = useState(profiles);

  return (
    <Router>
      <div className="App">
        <h1>Hair Care</h1>
        <NavBar />
        {/* <Route exact path="/Homepage" component={Homepage} /> */}
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reg" component={Register} />
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
