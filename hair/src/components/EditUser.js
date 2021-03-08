//Code and styling done by Jade Lopez

import React, { useEffect, useState } from "react";
import {registerUser, clients,newClient_, newService_, fetchUser, updateUser } from "../actions/index";
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


function EditClientForm({fetchUser, clients,user_info, updateUser}) {
    const history = useHistory();
  const [newPost, setNewPost] = useState( { client_name: "", service: "", client_ImgUrl: "" }
  );

  const params = useParams();
//   const info = clients.find(item => Number(item.id) === Number(params.id));
const info = user_info
console.log("INFO", info)
console.log("PARAMS", params.id)


  const [usr, setUsr] = useState(info);
  const [task2, setTask2] = useState([]);
  const [updateMe, setUpdateMe] = useState(false);

useEffect(()=>{
    setUsr({id: params.id})
    setUpdateMe(false)
    // fetchUser()
},[fetchUser, info, params.id, updateUser])

  //Change Event
  function handleChange(event) {
    const updatedPost = { ...usr, [event.target.name]: event.target.value };
    setTask2({ ...newPost, [event.target.name]: event.target.value });
setUsr(updatedPost)
// console.log("usr =", usr)
    setNewPost(updatedPost);
  }

const submitHandler = async (e, id)=>{
  e.preventDefault()
  console.log("ID")
  await updateUser(usr)
  setUpdateMe(true)
  console.log("it worked in submit")
    history.push("/profile");
}

  return (
    <div>
      <h2 className="postFormTitle"> </h2>
{ usr &&  <FormContainer>
        <PostForm onSubmit={submitHandler}>
          {/* Placeholder for image url */}
          <div>
          <PostForm className="form-group">
            <PostLabel>First Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="first"
              placeholder=" "
              value={usr.first}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Last Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="last"
              placeholder=" "
              value={usr.last}
              onChange={handleChange}
            />
          </PostForm>
          </div>

          <PostForm className="form-group">
            <PostLabel>Location:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="location"
              placeholder="Please enter service name"
              value={usr.location}
              onChange={handleChange}
            />
          </PostForm>



          <PostForm className="form-group">
            <PostLabel>Bio:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="bio"
              placeholder="Please enter service name"
              value={usr.bio}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Profession:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="profession"
              placeholder="Please enter service name"
              value={usr.profession}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Image Url:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="imgUrl"
              placeholder="Add image url"
              value={usr.imgUrl}
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
  user_info:state.user_info
,    loggingIn: state.loggingIn,
    clients:state.clients,

  });
  
  export default connect(mapStateToProps,{ registerUser, fetchUser, newClient_, newService_, updateUser } )(EditClientForm);
