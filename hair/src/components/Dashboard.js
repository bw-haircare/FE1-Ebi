import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import AddEditForm from "./AddEditPost";
import StylistPosts from "./StylistsPosts";

//Dashboard for Stylists: Edit where needed.

export default function Dashboard() {
  const [stylistPost, setStylistPost] = useState([
    //Dummy data that needs to be changed for images
    {
      id: 1,
      image: "picture 1",
      name: "Jack",
      description: "Picture description "
    },
    {
      id: 2,
      image: "picture 2",
      name: "Jill",
      description: "Picture description "
    },
    {
      id: 3,
      image: "picture 3",
      name: "Holly",
      description: "Picture description"
    },
    {
      id: 4,
      image: "picture 4",
      name: "Lisa",
      description: "Picture description "
    }
  ]);

  //Add Post
  const addPost = post => {
    setStylistPost([...stylistPost, { ...post, id: Date.now() }]);
  };

  //Edit Posts
  const editPost = editedPost => {
    const stylistPostCopy = [...stylistPost];
    const oldStylistPost = stylistPostCopy.find(
      post => post.id === editedPost.id
    );

    Object.assign(oldStylistPost, editedPost);
    setStylistPost(stylistPostCopy);
  };

  // console.log(addPost)

  return (
    <div>
      {/* <Link to="/StylisPost">Dashboard</Link> */}

      <div className="dashNav-container">
        <Link to="/components/AddEditPost">Add Post</Link>
        <Link to="/components/StylistsPosts">Dashboard</Link>
        This is the Dashboard
      </div>

      <Route
        exact
        path="/components/AddEditPost"
        render={props => (
          <AddEditForm {...props} submitPost={addPost} buttonText="Add Post" />
        )}
      />

      <Route
        exact
        path="/components/StylistsPosts"
        render={props => (
          <StylistPosts
            {...props}
            stylistPost={stylistPost}
            setStylistPost={setStylistPost}
            buttonText="Edit Post"
          />
        )}
      />

      <Route
        path="/components/StylistsPosts/postEdit/:id"
        render={props => {
          const card = stylistPost.find(
            post => post.id.toString() === props.match.params.id
          );
          return (
            <AddEditForm
              {...props}
              initialPost={card}
              submitPost={editPost}
              buttonText="Edit Post"
            />
          );
        }}
      />
    </div>
  );
}
