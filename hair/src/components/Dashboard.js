//Code and styling done by Jade Lopez

import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import AddEditForm from "./AddEditPost";
import StylistPosts from "./StylistsPosts";

//CSS
import { DashNav, DashLink } from "./styledComponents";

export default function Dashboard() {
  const [stylistPost, setStylistPost] = useState([
    {
      id: 1,
      image: "https://i.imgur.com/xtLBuaV.png",
      name: "Trina",
      description: "Cut & Color"
    },
    {
      id: 2,
      image: "https://i.imgur.com/4SbP5L9.png",
      name: "Mallory",
      description: "Color"
    },
    {
      id: 3,
      image: "https://i.imgur.com/Udfrvdr.png",
      name: "Jason",
      description: "Cut & Style"
    },
    {
      id: 4,
      image: "https://i.imgur.com/pGTbbJQ.png",
      name: "Trent",
      description: "Cut & Style"
    },
    {
      id: 5,
      image: "https://i.imgur.com/3DyC3X3.png",
      name: "Liela",
      description: "Color, Cut, & Style"
    },
    {
      id: 6,
      image: "https://i.imgur.com/XRZuSP0.png",
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

  //Delete post
  const deletePost = id => {
    setStylistPost(stylistPost.filter(post => post.id !== id));
  };

  return (
    <div>
      <DashNav>
        <DashLink>
          <Link className="link-color" to="/Dashboard/StylistsPosts">
            Posts
          </Link>
        </DashLink>
        <DashLink>
          <Link
            className="link-color"
            to="/Dashboard/StylistsPosts/AddEditPost"
          >
            Add Post
          </Link>
        </DashLink>
        <DashLink>
          <Link className="link-color" to="/logout">
            Log Out
          </Link>
        </DashLink>
      </DashNav>

      <Switch>
        <Route
          exact
          path="/Dashboard/StylistsPosts/AddEditPost"
          render={props => (
            <AddEditForm {...props} submitPost={addPost} buttonText="Add" />
          )}
        />

        <Route
          exact
          path="/Dashboard/StylistsPosts"
          render={props => (
            <StylistPosts
              {...props}
              stylistPost={stylistPost}
              setStylistPost={setStylistPost}
              deletePost={deletePost}
              buttonText="Edit"
            />
          )}
        />

        <Route
          path="/Dashboard/StylistsPosts/postEdit/:id"
          render={props => {
            const card = stylistPost.find(
              post => post.id.toString() === props.match.params.id
            );
            return (
              <AddEditForm
                {...props}
                initialPost={card}
                submitPost={editPost}
                buttonText="Edit"
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}
