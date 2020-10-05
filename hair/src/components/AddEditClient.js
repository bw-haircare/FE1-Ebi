//Code and styling done by Jade Lopez

import React, { useEffect, useState } from "react";
import { LoadUser, registerUser,newClient_, fetchUser, fetchAllUsers, fetchAllClients } from "../actions/index";
import { connect } from "react-redux";
import {  useParams } from "react-router-dom";
// import profile from "../../public/img/profile.png"



//CSS
import {
  FormContainer,
  PostForm,
  PostLabel,
  PostInput,
  FormButton
} from "./styledComponents";


function AddEditClient(props) {
    // console.log("PROPS", props)
    const{fetchUser, clients, user_info, new_client, newClient_, clients_id, history}=props
  const [newPost, setNewPost] = useState( { client_name: "", service: "", client_ImgUrl: "" }
  );

  // const info = clients.find(item => Number(item.id) === Number(params.id));
// console.log("NEW CLIENT", newClient_)


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
    console.log("NEW_client99", new_client)

    // await newClient_({...newPost, client_ImgUrl: `https://api.adorable.io/avatars/avatar/${new_client.id}`});
    await newClient_(newPost);

    // await newClient_({...newPost, client_ImgUrl: "https://workhound.com/wp-content/uploads/2017/05/placeholder-profile-pic.png"});
    setNewPost({ client_name: "", service: "", client_ImgUrl: "" });

    console.log( newPost);
    console.log("Testter")
    // window.setTimeout(() => {
        history.push("/profile");
    //   }, 1000)
  }

  return (
    <div>
      <h2 className="postFormTitle"> Add Client </h2>
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
  user_info: state.user_info,
    loggingIn: state.loggingIn,
    clients_id:state.clients_id,
    new_client:state.new_client

  });
  
  export default connect(mapStateToProps,{ LoadUser, registerUser, fetchUser, newClient_, fetchAllUsers, fetchAllClients } )(AddEditClient);
