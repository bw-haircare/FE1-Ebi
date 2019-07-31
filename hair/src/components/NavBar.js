import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Spacing = styled.div`
  padding: 0 22px;
  a {
    text-direction: none;
    color: #411;
    font-size: 18px;
  }
`;
const Flex = styled.div`
  background: #cc3;
  width: 100%;
  border: 1px solid #000;
  display: flex;
  border: 1px solid #000;
  flex-flox: row;
  justify-content: center;
`;
export default function NavBar() {
  return (
    <Flex>
      <Spacing>
        <NavLink to="/login">Login</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/About">About</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/Register">Register</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/Logout">Logout</NavLink>
      </Spacing>
    </Flex>
  );
}
