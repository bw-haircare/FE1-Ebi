import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions";
import styled from "styled-components";

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

class SignUp extends Component {
  state = {
    userInfo: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  submitHandler = (e, userInfo) => {
    e.preventDefault();
    this.props.signUp(userInfo);
    this.setState({
      userInfo: {
        username: "",
        password: ""
      }
    });
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Stylist Registration</h1>
          <Form
            onSubmit={e => this.submitHandler(e, this.state.userInfo)}
            inline
          >
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Register A Username"
                value={this.state.userInfo.username}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                value={this.state.userInfo.password}
                onChange={this.changeHandler}
                id="password"
                placeholder="Register A Password"
                required
              />
            </FormGroup>
            <div className="createAccount">
              <button type="submit">Register Account</button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signedUp: state.signedUp
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
