import React, { useState } from "react";
// import Images from "../img";
import { Link } from "react-router-dom";
import InsideStylistDetails from "../components/InsideStylistDetails";
import { profiles } from "../components/data";
import StarRatingComponent from "react-star-rating-component";

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

function Homepage(props) {
  console.log("props stylist", props);
  const [bringData, setBringData] = useState([]);

  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>BROWSE AND DISCOVER BEAUTY PROFESSIONALS</H1>
      <div className="StyleContainer ">
        {props.bringData.map((user, i) => {
          return <StylistDetails key={i} user={user} />;
        })}
      </div>
    </div>
  );
}

function StylistDetails({ user }) {
  const { image, name, last, role, stars, location } = user;
  return (
    <Wrap>
      <Link
        to={{
          pathname: `/stylists/${user.id}`,
          state: { ...user }
        }}
      >
        <div className="left">
          <CropImg>
            <img src={image} height="200px" />
          </CropImg>{" "}
        </div>
        <div className="right">
          <h2>
            {" "}
            {name} {last}{" "}
          </h2>
          <h3>{role}</h3>
          <p className="city">{location.city}</p>
          <p className="stars">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor="pink"
              renderStarIcon={() => <span>♥</span>}
              value={stars}
            />
          </p>
        </div>
      </Link>
    </Wrap>
  );
}

export default Homepage;
