//Code and styling done by Jade Lopez

import React, { useEffect, useState } from "react";
import { LoadUser, registerUser,newClient_, newService_, fetchUser, fetchAllUsers, fetchAllClients, fetchAllServices } from "../actions/index";
import { connect } from "react-redux";

//CSS
import {
  FormContainer,
  PostForm,
  PostLabel,
  PostInput,
  FormButton
} from "./styledComponents";


function AddEditService(props) {
    const{fetchUser, clients, services, user_info, new_client, new_services, newClient_, newService_, clients_id, history}=props
    const [newPost, setNewPost] = useState( { 
        service_name: "",
        service_description: "",
        price: "" }
        );


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
    console.log("NEW_service99", new_services)

    // await newClient_(newPost);
    await newService_({...newPost});

    setNewPost({  service_name: "",
    service_description: "",
    price: ""});

    console.log( newPost);
    console.log("Testter")
        history.push("/profile");

  }

  return (
    <div>
      <h2 className="postFormTitle"> Add Client </h2>
      <FormContainer>
      <PostForm onSubmit={handleSubmit}>
          {/* Placeholder for image url */}
          <PostForm className="form-group">
            <PostLabel>Service Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="service_name"
              placeholder="service name"
              value={newPost.service_name}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Description:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="service_description"
              placeholder="Please enter description"
              value={newPost.service_description}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Price:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="price"
              placeholder="Price"
              value={newPost.price}
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
  clients:state.clients,
  services:state.services,
  user_info: state.user_info,
    loggingIn: state.loggingIn,
    clients_id:state.clients_id,
    new_client:state.new_client,
    services_id:state.services_id,
    new_services:state.new_services
  });
  
  export default connect(mapStateToProps,{ LoadUser, registerUser, fetchUser, newClient_, newService_, fetchAllUsers, fetchAllClients, fetchAllServices } )(AddEditService);