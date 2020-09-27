import React, { useState, useEffect } from "react";
import { fetchUser, addUser } from "../actions/index";
import { connect, useSelector } from "react-redux";


import {
  ProfileArticle,
  Container
} from "./styledComponents";
function Profile({fetchUser,stylists,history}) {
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()


  useEffect(() => {
      setUser(fetchUser())
  }, [fetchUser]);

console.log(localStorage.getItem("userID"))

  return (
    <Container>
      <ProfileArticle>
        {/* <Button onClick={() => history.goBack()}>Go Back</Button> */}
        <h1>Welcome !</h1>
      {stylists.username}
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
