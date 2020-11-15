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


  useEffect(() => {
    fetchAllUsers()
    // fetchAllClients()

  }, [fetchAllUsers])

  console.log("LOADDIN", isLoading)


  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>BROWSE AND DISCOVER BEAUTY PROFESSIONALS NEARBY</H1>
      <div className="StyleContainer ">
        <div style={{display:"flex", flexWrap:"wrap"}}>

{isLoading===true ? (<div className="loadercontainer" style={{marginTop:"100%"}}>
  <div class="lds-ripple"><div></div><div></div></div>
  </div>) : (stylists.map((user, i) => {
          return <StylistDetails clients={clients} key={i} user={user} />;
        }))}





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
