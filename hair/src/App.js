import React, { useState, useEffect } from "react";
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
import Profile from "./components/Profile"
import { fetchUser, addUser, fetchAllClients } from "./actions/index";
import { connect } from "react-redux";

//CSS
import { LogoContainer, Logo } from "./components/styledComponents";
import "./App.scss";
import { setToken } from "./setToken";
import AddEditClient from "./components/AddEditClient";
import EditClientForm from "./components/AdEditClient"
import EditUser from "./components/EditUser";

if(localStorage.getItem("token")){
  setToken(localStorage.getItem("token"))
}
function App(props) {
  const {fetchUser, fetchAllClients}=props
  const [bringData, setBringData] = useState(profiles);
  const [user, setUser]= useState()
  const [client, setClient]=useState()

  useEffect(() => {
    setUser(fetchUser())
    setClient(fetchAllClients())
}, [fetchUser, fetchAllClients]);


  return (
    <Router>
      <div className="App">
        <LogoContainer>
          <Logo src="https://i.imgur.com/jaZMHk5.png" alt="Hair Care Logo" />
        </LogoContainer>

        <NavBar />
        <PrivateRoute path="/Dashboard/StylistsPosts" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />        
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/client" component={AddEditClient} />
        <Route exact path="/user/:id"><EditUser fetchC={fetchAllClients} {...props}/> </Route>
        <Route exact path="/client/:id"><EditClientForm fetchC={fetchAllClients} {...props}/> </Route>

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
const mapStateToProps = state => {
  return {
      stylists: state.stylists,
      clients:state.clients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, fetchAllClients }
)(App);
