import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { login } from "../actions/index";
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

class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  render() {
    return (
      <div className="login-wrapper">
        <FormGroup>
          <H1>Login</H1>
          <div>
            <Input
              placeholder="username"
              name="username"
              value={this.state.creds.username}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
            <i className="fas fa-user" />
          </div>
          <div>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.creds.password}
              onChange={this.handleChanges}
              className={
                this.props.error === true ? "error login-input" : "login-input"
              }
              required
            />
            <i className="fas fa-key" />
          </div>
          <div>
            <div className="btn-login shd" onClick={this.login}>
              {this.props.loggingIn === true ? (
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

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    let creds = `grant_type=password&username=${
      this.state.creds.username
    }&password=${this.state.creds.password}`;
    this.props.login(creds).then(res => {
      if (res) {
        this.props.history.push("/Dashboard/StylistsPosts");
      }
    });
  };
}

const mapStateToProps = ({ token, loggingIn, error }) => ({
  token,
  loggingIn,
  error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
