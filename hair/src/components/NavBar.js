import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Spacing, Flex } from "./styledComponents";

export default function NavBar() {
  return (
    <Flex>
      <Spacing>
        <NavLink to="/">Home</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/About">About</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/login">Login</NavLink>
      </Spacing>
      <Spacing>
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </Spacing>
    </Flex>
  );
}
