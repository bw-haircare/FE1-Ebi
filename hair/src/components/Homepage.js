import React, { useState } from "react";
// import Images from "../img";
import { Link } from "react-router-dom";
import InsideStylistDetails from "../components/InsideStylistDetails";
import { profiles } from "../components/data";

//CSS
import styled, { css } from "styled-components";
import {
  Button,
  H1,
  WrapDiv,
  CropImg,
  AlignLeft,
  AlignRight
} from "./styledComponents";

function Homepage(props) {
  console.log("props stylist", props);
  const [bringData, setBringData] = useState([]);

  return (
    <div>
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>Stylists</H1>
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
    <WrapDiv>
      <Link
        to={{
          pathname: `/stylists/${user.id}`,
          state: { ...user }
        }}
      >
        <AlignLeft>
          <CropImg>
            <img src={image} height="200px" />
          </CropImg>{" "}
        </AlignLeft>
        <AlignRight>
          <h2>
            {" "}
            {name} {last}{" "}
          </h2>
          <h3>{role}</h3>
          <p className="city">{location.city}</p>
          <p className="stars">Rating: {stars}</p>
        </AlignRight>
      </Link>
    </WrapDiv>
  );
}

export default Homepage;
