import React, {useState} from "react";
//import logo from './logo.svg';
import Stylists from './components/Stylists'
import './App.css';
import {profiles} from './components/data'
import { Route } from 'react-router-dom';
import InsideStylistDetails from './components/InsideStylistDetails'




function App() {
  const [bringData, setBringData] = useState(profiles);

  return (
    <div className="App">
      <Route path="/stylists/:id" component={InsideStylistDetails} />
      <Route exact path="/" render ={props =>{
        return (     
           <Stylists bringData={bringData} setBringData={setBringData}/>
          )
      }} />

      </div>
  );
}

export default App;
