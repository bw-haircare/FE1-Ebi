//Code and styling done by Jade Lopez

import React, { useState } from "react";

//CSS
import styled, { css } from "styled-components";
import {
  FormContainer,
  PostForm,
  PostLabel,
  PostInput,
  FormButton
} from "./styledComponents";

export default function AddEditForm(props) {
  const { submitPost, initialPost, buttonText, history } = props;
  const [newPost, setNewPost] = useState(
    initialPost || { image: "", name: "", description: "" }
  );

  //Change Event
  function handleChange(event) {
    const updatedPost = { ...newPost, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedPost
    );
    setNewPost(updatedPost);
  }

  //Submit Event
  function handleSubmit(event) {
    event.preventDefault();
    submitPost(newPost);
    setNewPost({ image: "", name: "", description: "" });
    history.push("/Dashboard/StylistsPosts");
  }

  return (
    <div>
      <h2 className="postFormTitle">{buttonText}</h2>
      <FormContainer>
        <PostForm onSubmit={handleSubmit}>
          {/* Placeholder for image url */}
          <PostForm className="form-group">
            <PostLabel>Image:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="image"
              placeholder=" "
              value={newPost.image}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="name"
              placeholder="Please enter name"
              value={newPost.name}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Description:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="description"
              placeholder="Please enter a description"
              value={newPost.description}
              onChange={handleChange}
            />
          </PostForm>
          <FormButton type="submit">{buttonText}</FormButton>
        </PostForm>
      </FormContainer>
    </div>
  );
}
