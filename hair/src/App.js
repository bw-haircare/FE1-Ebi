import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hair Care App Homepage</h1>
        <NavBar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
