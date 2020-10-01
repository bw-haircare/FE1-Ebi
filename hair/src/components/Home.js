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

function Home({bringData,stylists, clients, fetchAllUsers}) {
  console.log("props stylist");
  console.log("STYLISTS", stylists)
  console.log("CLIENTS FROM STATE", clients)

  useEffect(() => {
    fetchAllUsers()
    // fetchAllClients()

  }, [fetchAllUsers])


  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>BROWSE AND DISCOVER BEAUTY PROFESSIONALS NEARBY</H1>
      <div className="StyleContainer ">

      {stylists.sort((a, b) => a < b).map((user, i) => {
          return <StylistDetails clients={clients} key={i} user={user} />;
        })}


        {/* {bringData.map((user, i) => {
          return <StylistDetails key={i} user={user} />;
        })} */}
      </div>
    </div>
  );
}

function StylistDetails({user, clients}) {

  console.log("STYLISTS DETAILS", user)
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
          <p className="stars">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor="pink"
              renderStarIcon={() => <span>♥</span>}
              value="2"
            />
          </p>
        </div>
      </Link>
    </Wrap>
  );
}

const mapStateToProps = state => {
  return {
      stylists: state.stylists,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchAllUsers }
)(Home);
