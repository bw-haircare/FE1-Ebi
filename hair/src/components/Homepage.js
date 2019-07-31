import React from "react";
import { Link } from "react-router-dom";
//import InsideStylistDetails from './InsideStylistDetails'

function Homepage(props) {
  console.log("props stylist", props);

  return (
    <div className="stylist-container">
      {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <h1>Stylists</h1>
      {props.bringData.map((user, i) => {
        return <StylistDetails key={i} user={user} />;
      })}
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
          <img src={image} height="200px" />
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
