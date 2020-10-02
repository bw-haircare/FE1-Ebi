import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { LoadUser, registerUser } from "../actions/index";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  padding: 30px;
  text-align: center;
`;

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Form = styled.div`
  color: palevioletred;
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

export const Button = styled.button`
  background: #ac8daf;
  border-radius: 3px;
  border: none;
  color: #f1d4d4;
  padding: 0.5em 2em;
  margin: 1em;
`;

function SignUp({loggingIn, registerUser,history}) {

  
  const [data, setData]=useState({
    username: "",
    password: "",
    role:1
  })

  const handleChanges = e => {
    setData({...data, [e.target.name]:e.target.value})

  };

  const handleSubmit = async e => {
    console.log(data)
    if(data.username==="" && data.password==="")return alert("empty val")
    else await registerUser(data.username, data.password)
    // history.push("/Dashboard/StylistsPosts");
    window.setTimeout(() => {
      history.push("/profile");
    }, 1000)

}



    return (
      <div className="login-wrapper">
        <FormGroup>
          <H1>  Register </H1>
          <div>
            <Input
              placeholder="username"
              name="username"
              defaultValue={data.username}
              onChange={(e)=>handleChanges(e)}
            />
            <i className="fas fa-user" />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              defaultValue={data.password}
              onChange={(e)=>handleChanges(e)}
            />
            <i className="fas fa-key" />
          </div>
          <div>
            <div className="btn-login shd" onClick={()=>handleSubmit()}>
            {loggingIn === true ? (
                <Loader
                  type="ThreeDots"
                  color="##00bfff"
                  height={80}
                  width={80}
                />
              ) : (
                <Button>Sign In</Button>
              )}
            </div>
            <i className="fas fa-sign-in-alt" />
          </div>
        </FormGroup>
        <div className="login-splash" />
      </div>
    );
  }


const mapStateToProps = (state) => ({
  loggingIn: state.loggingIn,
});

export default connect(mapStateToProps,{ LoadUser, registerUser } )(SignUp);