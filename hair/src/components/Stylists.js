import React from "react";
import { Link } from "react-router-dom";

//temporary

//This is Eunice's part. Putting in temporary data to make sure my components work.
export default function StylistsMember(props) {
  const { person, buttonText } = props;

  return (
    <div className="stylist-container">
      <h1>Stylists</h1>
      {props.stylist.map((person, index) => {
        return (
          <div className="card" key={index}>
            <p> Name:{person.name}</p>
            <p> Number:{person.number}</p>
            <p> Email:{person.email}</p>
            <Link to={`/edit/${person.id}`}>Edit</Link>
          </div>
        );
      })}
    </div>
  );
}
