// import React from "react";
// import { connect } from "react-redux";
// import { register, noError } from "../actions/index";
// import styled from "styled-components";

// export const Form = styled.div`
//   padding: 0 22px;
//  color: black;
// `;

// class Register extends React.Component {
//   state = {
//     userInfo: {
//       username: "",
//       password: ""
//     }
//   };

//   changeHandler = e => {
//     e.preventDefault();
//     this.setState({
//       userInfo: {
//         ...this.state.userInfo,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   submitHandler = (e, userInfo) => {
//     e.preventDefault();
//     this.props.signUp(userInfo);
//     this.setState({
//       userInfo: {
//         username: "",
//         password: ""
//       }
//     });
//     this.props.history.push("/login");
//   };

//   render() {
//     return (
//       <div className="wrapper">
//         <div className="form-wrapper">
//           <h3>Register/h3>
//           <Form
//             onSubmit={e => this.submitHandler(e, this.state.userInfo)}
//             inline
//           >
//             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//               <Label for="username" className="mr-sm-2">
//                 Username
//               </Label>
//               <Input
//                 type="text"
//                 name="username"
//                 id="username"
//                 placeholder="Register A Username"
//                 value={this.state.userInfo.username}
//                 onChange={this.changeHandler}
//               />
//             </FormGroup>
//             <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//               <Label for="password" className="mr-sm-2">
//                 Password
//               </Label>
//               <Input
//                 type="password"
//                 name="password"
//                 value={this.state.userInfo.password}
//                 onChange={this.changeHandler}
//                 id="password"
//                 placeholder="Register A Password"
//                 required
//               />
//             </FormGroup>
//             <div className="createAccount">
//               <Button type="submit">Register Account</Button>
//                         </div>
//                     </Form>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     signedUp: state.signedUp,
// })

// export default connect(mapStateToProps, { signUp })(Register);
