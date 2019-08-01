import React from "react";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
import {
  Container,
  PostCard,
  PostImage,
  PostBody,
  Descript,
  BtnContainer,
  H1
} from "./styledComponents";

export default function StylistPosts(props) {
  const { submitPost, buttonText } = props;

  return (
    <div>
      <H1>My Clients</H1>
      <Container>
        {props.stylistPost.map((post, index) => {
          return (
            <PostCard key={index}>
              <img src={post.image} alt={post.name} />
              <PostBody>
                <h2>{post.name}</h2>
                <Descript>{post.description}</Descript>
              </PostBody>
              <BtnContainer>
                <Link
                  to={`/Dashboard/StylistsPosts/postEdit/${post.id}`}
                  className="postButton"
                >
                  {buttonText}
                </Link>
                <Link
                  to={`/Dashboard/StylistsPosts/postEdit/${post.id}`}
                  className="postButton"
                >
                  Delete
                </Link>
              </BtnContainer>
            </PostCard>
          );
        })}
      </Container>
    </div>
  );
}
