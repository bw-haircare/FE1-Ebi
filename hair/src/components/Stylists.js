import React from "react";

//temporary

export default function StylistsMember(props) {
  const { person } = props;
  return (
    <div>
      <div> {person.name}</div>
      <div> {person.number}</div>
      <div> {person.email}</div>
    </div>
  );
}
