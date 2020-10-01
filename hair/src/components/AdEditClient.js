//Code and styling done by Jade Lopez

import React, { useEffect, useState } from "react";
import {registerUser, clients,newClient_, fetchUser, updateClient } from "../actions/index";
import { connect } from "react-redux";
import {  useParams, useHistory } from "react-router-dom";



//CSS
import {
  FormContainer,
  PostForm,
  PostLabel,
  PostInput,
  FormButton
} from "./styledComponents";


function EditClientForm({fetchUser, clients, updateClient}) {
    const history = useHistory();
  const [newPost, setNewPost] = useState( { client_name: "", service: "", client_ImgUrl: "" }
  );

  const params = useParams();
  const info = clients.find(item => Number(item.id) === Number(params.id));

  const [usr, setUsr] = useState(info);
  const [task2, setTask2] = useState([]);
  const [updateMe, setUpdateMe] = useState(false);

useEffect(()=>{
    setUsr(info)
    setUpdateMe(false)
    fetchUser()
},[fetchUser, info, updateClient])

  //Change Event
  function handleChange(event) {
    const updatedPost = { ...usr, [event.target.name]: event.target.value };
    setTask2({ ...newPost, [event.target.name]: event.target.value });
setUsr(updatedPost)
console.log("usr =", usr)
    setNewPost(updatedPost);
  }

const submitHandler = async (e, id)=>{
  e.preventDefault()
  await updateClient(usr, id)
  setUpdateMe(true)
    history.push("/profile");
}

  return (
    <div>
      <h2 className="postFormTitle"> </h2>
{ usr &&  <FormContainer>
        <PostForm onSubmit={submitHandler}>
          {/* Placeholder for image url */}
          <PostForm className="form-group">
            <PostLabel>Client Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="client_name"
              placeholder=" "
              value={usr.client_name}
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
              value={usr.service}
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
              value={usr.client_ImgUrl}
              onChange={handleChange}
            />
          </PostForm>
          <FormButton type="submit">Submit</FormButton>
        </PostForm>
      </FormContainer>
}    </div>
  );
}

const mapStateToProps = (state) => ({
    loggingIn: state.loggingIn,
    clients:state.clients,

  });
  
  export default connect(mapStateToProps,{ registerUser, fetchUser, newClient_, updateClient } )(EditClientForm);
