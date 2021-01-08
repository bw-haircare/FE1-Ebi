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
  const [dropDownTerm, setDropDownTerm]=useState("")


  useEffect(() => {
    fetchAllUsers()
    // fetchAllClients()

  }, [fetchAllUsers])

  console.log("LOADDIN", isLoading)

  const searchResults=(e)=>{
    e.preventDefault()

    // setResult([...new Set(stylists.map(job=>job.profession))])
    console.log("SEARCHINGGGGGG 💃🏻 💃🏻 💃🏻 💃🏻")
    console.log("drop down term", dropDownTerm)
    // setResult(stylists.map(job=>job.profession))
    // const results = stylists.filter(person => person.toLowerCase().includes(searchTerm.toLowerCase()));
    const profession_name=stylists.map(job=>job)
    const result = profession_name.filter(person=>person.profession===dropDownTerm);
    setResult(result)

    console.log("results--->", result)

  }

  const changeHandler=(e)=>{
  console.log("changing", e.target.name)
  console.log("change 2", { [e.target.name]: e.target.value })
  setDropDownTerm(e.target.value)
  }


  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>BROWSE AND DISCOVER BEAUTY PROFESSIONALS NEARBY</H1>
      <div className="StyleContainer ">
          <form
          onSubmit={searchResults}
          style={{width:"100%", justifyContent:"center", display:"inline-flex", margin:"20px"}}
          >
        <input 
        style={{width:"100%", height:"50px", margin:"10px", maxWidth:"900px"}}
        />
        <select name="job"  
        id="jobs"
                style={{width:"50%", height:"50px", margin:"10px", padding:"10px", maxWidth:"900px"}}
                onChange={changeHandler}
        >
          {[...new Set(stylists.map(job=>job.profession))].map(item=><option value={`${item}`}>{item}</option>)}
</select>


        <button
         style={{height:"50px", margin: "10px", width:"200px",
        marginTop: "12px",
        marginLeft: "12px",
        boxShadow: "3px 8px",
        border: "1px solid black",
        boxShadow: "5px 10px",
        padding: "5px",
        verticalAlign: "super",
        color:"black",
        background:"white"
        }}>Search</button>
        </form>
        
        <div style={{display:"flex", flexWrap:"wrap"}}>   

{isLoading===true ? (<div className="loadercontainer" style={{marginTop:"100%"}}>
  <div class="lds-ripple"><div></div><div></div></div>
  </div>) : (results.length==0?
   (stylists.map((user, i) => {
          return <StylistDetails clients={clients} key={i} user={user} />;
        }))
  :
  (results.map((user, i) => {
    return <StylistSearchResult clients={clients} key={i} user={user} />;
  }))
  )}





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

function StylistSearchResult({user, clients}) {

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
