import React, { useState, useEffect } from "react";
import { fetchUser, addUser } from "../actions/index";
import { connect, useSelector } from "react-redux";


import {
  ProfileArticle,
  Container
} from "./styledComponents";
// {fetchUser,history,stylists}
function Profile({fetchUser,stylists}) {
    // console.log("PROPS", props)
    // const {user: currentUser}=useSelector((state)=>state.user)
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()
//   console.log("propos", props)


  useEffect(() => {
      setUser(fetchUser())
//     // setUser(fetchUser)
  }, [fetchUser]);

//   console.log("USER-->", user)
//   console.log("stylists->", stylists)

  return (
    <Container>
      <ProfileArticle>
        {/* <Button onClick={() => history.goBack()}>Go Back</Button> */}
        <h1>Welcome !</h1>
        {console.log("INSIDE RETURN",)}
        {stylists.map(item=>item.username)}
      
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
