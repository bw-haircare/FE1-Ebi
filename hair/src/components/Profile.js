import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import styled, { css } from "styled-components";
import Modal from "react-bootstrap/Modal";
import { fetchUser, addUser } from "../actions/index";
import { connect } from "react-redux";

import {
  Button,
  ProfileArticle,
  CropImg,
  CropThumb,
  Container
} from "./styledComponents";

function Profile({fetchUser,history,stylists}) {
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()
//   console.log("propos", props)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setUser(fetchUser)
  }, [fetchUser, user]);

  console.log("USER-->", user)
  console.log("stylists->", stylists)

  return (
    <Container>
      <ProfileArticle>
        <Button onClick={() => history.goBack()}>Go Back</Button>
        <h1>Welcome !</h1>
        {console.log("INSIDE RETURN",)}
        {stylists.map(item=>item.first)}
      
      </ProfileArticle>
    </Container>
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
    { fetchUser }
  )(Profile);
