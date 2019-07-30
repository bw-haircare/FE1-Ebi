import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Stylists from "./components/Stylists";
import UserSignUp from "./components/UserSignUp";
import StylistSignUp from "./components/StylistSignUp";

import "./App.css";

function App() {
  //JADE
  //sets state
  const [stylist, setStylist] = useState([]);
  //JADE
  //Adds stylist to form on submission
  const addStylist = person => {
    setStylist([...stylist, { ...person, id: Date.now() }]);
  };

  //JADE
  //Edits stylists
  const editStylist = editedStylist => {
    //create a copy of original array to mutate it first before values are committed
    const stylistCopy = [...stylist];
    const oldStylist = stylistCopy.find(
      stylist => stylist.id === editedStylist.id
    );

    Object.assign(oldStylist, editedStylist);
    setStylist(stylistCopy);
  };

  return (
    <div className="App">
      <Route exact path="/" component={Stylists} />
      <Route exact path="/newstylist" component={StylistSignUp} />
      <Route exact path="/newuser" component={UserSignUp} />
    </div>
  );
}

export default App;
