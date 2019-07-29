import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/index";

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
        <h1>Hair Care App</h1>
        <button>User Sign Up</button>
        <button>Stylist Sign Up</button>
      </div>
    );
  }

  login = e => {
    e.preventDefault();
    console.log("clicked");
    this.props
      .login(this.state.creds)
      .then(() => this.props.history.push("/stylists"));
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