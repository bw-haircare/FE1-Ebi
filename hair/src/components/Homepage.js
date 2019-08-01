import React, { useState } from "react";
// import Images from "../img";
import { Link } from "react-router-dom";
import InsideStylistDetails from "../components/InsideStylistDetails";
import { profiles } from "../components/data";

//CSS
import styled, { css } from "styled-components";
import { Button, H1 } from "./styledComponents";

function Homepage(props) {
  console.log("props stylist", props);
  const [bringData, setBringData] = useState([]);

  return (
    <div className="stylist-container">
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <H1>Stylists</H1>
      <div>
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
    <div>
      <Link
        to={{
          pathname: `/stylists/${user.id}`,
          state: { ...user }
        }}
      >
        <div>
          <img src="./elmoburns.gif" height="200px" />
          <h2>
            {" "}
            {name} {last}{" "}
          </h2>
          <h3>{role}</h3>
          <p>{location.city}</p>
          <p>Rating: {stars}</p>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
