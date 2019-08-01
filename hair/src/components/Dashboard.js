import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import AddEditForm from "./AddEditPost";
import StylistPosts from "./StylistsPosts";

//Dashboard for Stylists: Edit where needed.

export default function Dashboard() {
  const [stylistPost, setStylistPost] = useState([
    {
      id: 1,
      image: "../img/Trina.png",
      name: "Trina",
      description: "Cut & Color"
    },
    {
      id: 2,
      image: "../img/Mallory.png",
      name: "Mallory",
      description: "Color"
    },
    {
      id: 3,
      image: "../img/Jason.png",
      name: "Jason",
      description: "Cut & Style"
    },

    {
      id: 4,
      image: "../img/Trent.png",
      name: "Trent",
      description: "Cut & Style"
    },
    {
      id: 5,
      image: "../img/Leila.png",
      name: "Liela",
      description: "Color, Cut, & Style"
    },
    {
      id: 6,
      image: "../img/Jazmine.png",
      name: "Jazmine",
      description: "Cut, Press, & Style"
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
        <Link className="link-color" to="/DashBoard/StylistsPosts">
          Posts
        </Link>
        <Link className="link-color" to="/DashBoard/AddEditPost ">
          Add Post
        </Link>
      </div>

      <Route
        exact
        path="/DashBoard/AddEditPost"
        render={props => (
          <AddEditForm {...props} submitPost={addPost} buttonText="Add Post" />
        )}
      />

      <Route
        exact
        path="/DashBoard/StylistsPosts"
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
        exact
        path="/DashBoard/StylistsPosts/postEdit/:id"
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
