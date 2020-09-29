//Code and styling done by Jade Lopez

import React, { useEffect, useState } from "react";
import { LoadUser, registerUser, newClient_, fetchUser } from "../actions/index";
import { connect } from "react-redux";



//CSS
import {
  FormContainer,
  PostForm,
  PostLabel,
  PostInput,
  FormButton
} from "./styledComponents";


function AddEditClient({fetchUser, newClient_, history}) {
  const [newPost, setNewPost] = useState( { client_name: "", service: "", client_ImgUrl: "" }
  );

  console.log("newClient", newClient_)

useEffect(()=>{
    fetchUser()
},[fetchUser])

  //Change Event
  function handleChange(event) {
    const updatedPost = { ...newPost, [event.target.name]: event.target.value };
    setNewPost(updatedPost);
  }

  //Submit Event
const handleSubmit = async event => {
    event.preventDefault();
    await newClient_(newPost);
    setNewPost({ client_name: "", service: "", client_ImgUrl: "" });
    console.log( newPost);
    // window.setTimeout(() => {
        history.push("/profile");
    //   }, 1000)
  }

  return (
    <div>
      <h2 className="postFormTitle"> Some Button text</h2>
      <FormContainer>
        <PostForm onSubmit={handleSubmit}>
          {/* Placeholder for image url */}
          <PostForm className="form-group">
            <PostLabel>Client Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="client_name"
              placeholder=" "
              value={newPost.client_name}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Service:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="service"
              placeholder="Please enter service name"
              value={newPost.service}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Image Url:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="client_ImgUrl"
              placeholder="Add image url"
              value={newPost.client_ImgUrl}
              onChange={handleChange}
            />
          </PostForm>
          <FormButton type="submit">Submit</FormButton>
        </PostForm>
      </FormContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
    loggingIn: state.loggingIn,
    clients:state.clients,

  });
  
  export default connect(mapStateToProps,{ LoadUser, registerUser, fetchUser, newClient_ } )(AddEditClient);
