import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utilities/PrivateRoute";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
// import Homepage from "./components/Homepage";
import Test from "./components/Test";
import { profiles } from "./components/styleList";
// import InsideStylistDetails from "./components/InsideStylistDetails";
import "./App.scss";

function App() {
  // const [bringData, setBringData] = useState(profiles);
  return (
    <Router>
      <div className="App">
        <h1>Hair Care App Homepage</h1>
        <NavBar />
        <Route exact path="/" component={Test} />
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        {/* <Route path="/stylists/:id" component={InsideStylistDetails} />
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Homepage bringData={bringData} setBringData={setBringData} />
            );
          }}
        /> */}
      </div>
    </Router>
  );
}

export default App;
