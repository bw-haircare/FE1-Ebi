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
  //JADE
  //sets state
  const [stylist, setStylist] = useState( {}
    [{
      id:1, 
      name:'Jade',
      number: '456-123-3698',
      email:'jade@gmail.com'
   },
   {
      id:2, 
      name:'Alexis',
      number: '888-369-8465',
      email:'Alexis@gmail.com'
   }]
  );
   //JADE
  //Adds stylist to form on submission
  const addStylist = person => {
    setStylist([...stylist, person])
  }


  return (
    <div className="App">
         <StylistSignUp
        submitStylist={addStylist}
      />
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/stylists" component={Stylists} />
      <PrivateRoute exact path="/newstylist" component={StylistSignUp} />
      <PrivateRoute exact path="/newuser" component={UserSignUp} />
    </div>
  );
}

export default App;
