import React, { useState,useEffect } from "react";
// import Images from "../img";
import { Link } from "react-router-dom";
import InsideStylistDetails from "../components/InsideStylistDetails";
import StarRatingComponent from "react-star-rating-component";

import {fetchAllClients, fetchAllUsers} from "../actions/index";
import { connect } from "react-redux";
import {  useParams, useHistory } from "react-router-dom";

//CSS
import styled, { css } from "styled-components";
import {
  Button,
  H1,
  WrapDiv,
  CropImg,
  AlignLeft,
  AlignRight,
  Wrap
} from "./styledComponents";

function Home({bringData,stylists, isLoading, loggingIn, clients, fetchAllUsers}) {
  const[results, setResult]=useState([])
  const [getLocation, setGetLocation]=useState()
  // const [searchTerm, setSearchTerm]=useState()
  const [dropDownTerm, setDropDownTerm]=useState("")
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    location: "",
    user: ""
  });
  const [newResult, setNewResult] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    fetchAllUsers()
    // fetchAllClients()

  }, [fetchAllUsers])

  console.log("LOADDIN", isLoading)

  const searchResults=(e)=>{
    e.preventDefault()
    const profession_name=stylists.map(job=>job)
    const result = profession_name.filter((person)=>(
      dropDownTerm && getLocation ? person.profession===dropDownTerm && person.location === getLocation:"null" ||
      getLocation ? [person.location].includes(getLocation):"null" ||
      dropDownTerm? person.profession===dropDownTerm:"null"

 )

 
      );
      // if (getLocation && dropDownTerm){
      //   const result = profession_name.filter((person)=>person.profession===dropDownTerm && person.location === getLocation)
      //   setResult(result)
      // } else if (dropDownTerm){
      //   const result = profession_name.filter((person)=>person.profession === dropDownTerm)
      //   setResult(result)
      // }
      // else if (getLocation){
      //   const result = profession_name.filter((person)=>[person.location].includes(getLocation))
      //   setResult(result)
      // }else{
      //   return "nothing"
      // }

    setResult(result)
  }

  const changeHandler=(e)=>{
  setDropDownTerm(e.target.value)
  }

  const handleChange=(e)=>{
    setGetLocation(e.target.value)
    }

  const changeHandling = (e) => {
    const value = e.target.value;
    setSearchTerm({
      ...searchTerm,
      [e.target.name]: value
    });
  };

    const submitHandler = (e) => {
      e.preventDefault();
      let searched = stylists.filter((item) => {
        if (
          (item.location ? item.location : "")
            .toLowerCase()
            .includes(searchTerm.location.toLowerCase()) &&
          (item.username ? item.username : "")
            .toLowerCase()
            .includes(searchTerm.user.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setNewResult(searched);
      setIsSubmitted(true);
    };

    const renderContent = () => {
      console.log("stylist???", stylists)
      if(isSubmitted){
        if (newResult.length > 0) {
              return (newResult.map((user, i) => <StylistDetails clients={clients} key={i} user={user} />))
            } else {
              return <h1 style={{color:"orangered", fontWeight:800}}>No matches</h1>;
            }
      }else{
        if(stylists.length){
          return (stylists.map((user, i) => <StylistDetails clients={clients} key={i} user={user} />))
        }else{
          return "LOADING ...."
        }

        
      }
    };


  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>BROWSE AND DISCOVER BEAUTY PROFESSIONALS NEARBY</H1>
      <div className="StyleContainer ">
          <form
           onSubmit={submitHandler}
          // onSubmit={searchResults}
          style={{width:"100%", justifyContent:"center", display:"inline-flex", margin:"20px", height:"70px"}}
          >
        <input 
        name="location"
        placeholder="write a location"
        value={searchTerm.location}
        // value={getLocation|| ""}
        onChange={changeHandling}
        // onChange={handleChange}
        style={{width:"50%", height:"50px", margin:"10px", maxWidth:"900px", border: "1px solid black", padding: "14px"}}
        />
        <div style={{ lineHeight: 3.2, display: "inline-block", verticalAlign: "middle", fontWeight:900}}> and/or </div>
        <input 
        placeholder="stylist"
        name="user"
        value={searchTerm.user}
        onChange={changeHandling}
        style={{width:"50%", height:"50px", margin:"10px", maxWidth:"900px", border: "1px solid black", padding: "14px"}}
        />
        {/* <select name="job"  
        id="jobs"
                style={{width:"50%", height:"50px", margin:"10px", padding:"10px", maxWidth:"900px"}}
                onChange={changeHandler}
        >
          {[null,...new Set(stylists.map(job=>job.profession).sort())].slice(0, -1).map(item=><option key={item} value={`${item}`}>{item}</option>)}
</select> */}


        <button
        className="search-button"
         style={{height:"50px", margin: "10px", width:"200px",
        marginTop: "12px",
        marginLeft: "12px",
        border: "1px solid black",
        boxShadow: "5px 10px #daccdb",
        padding: "5px",
        verticalAlign: "super",
        color:"black",
        background:"white"
        }}>Search</button>
        </form>
        
        <div style={{display:"flex", flexWrap:"wrap"}}>   
    {renderContent() || "LOADING..."}






        {/* {bringData.map((user, i) => {
          return <StylistDetails key={i} user={user} />;
        })} */}
        </div>
      </div>
    </div>
  );
}

function StylistDetails({user, clients}) {

  return (
    <Wrap>
      <Link
      clients={clients}
        to={{
          pathname: `/stylists/${user.id}`,
          state: { ...user }
        }}
      >
        <div className="left">
          <CropImg>
            <img alt={`${user.first}-${user.last}`}src={user.imgUrl} height="200px" />
          </CropImg>{" "}
        </div>
        <div className="right">
          <h2>
            {" "}
            {user.first} {user.last}{" "}
          </h2>
          <h3>{user.profession}</h3>
          <p className="city">{user.location}</p>
          <div className="stars">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor="pink"
              renderStarIcon={() => <span>♥</span>}
              value={2}
            />
          </div>
        </div>
      </Link>
    </Wrap>
  );
}

const mapStateToProps = state => {
  return {
      stylists: state.stylists,
      isLoading:state.isLoading,
      loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchAllUsers }
)(Home);
