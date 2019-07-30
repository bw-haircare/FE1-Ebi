import React, { useState } from "react";

//Note from Katie to Andre - this function should be for users, not stylists. The stylist sign up form is at StylistSignUp.js
export default function AddStylist(props) {
  const [registration, setRegistration] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    registrationErrors: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setRegistration({ ...registration, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setRegistration({ ...registration });
  };
  return (
    <div>
      <h1>UserSignUp</h1>
      return (
      <div>
        <h1>User Registration</h1>
        <form noValidate onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="">
              First Name:
              <input
                type="text"
                name="first_name"
                value={registration.first_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Last Name:
              <input
                type="text"
                name="last_name"
                value={registration.last_name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Username:
              <input
                type="text"
                name="username"
                value={registration.username}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Email:
              <input
                type="email"
                name="email"
                value={registration.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Password:
              <input
                type="password"
                name="password"
                value={registration.password}
                onChange={handleChange}
              />
              {/*  Error message */}
            </label>
            <button type="submit">Sign Up</button>
          </fieldset>
        </form>
      </div>
      );
    </div>
  );
}
