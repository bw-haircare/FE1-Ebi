  import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { fetchUser, addUser } from "../actions/index";
import { connect, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";
import {
  Button,
  ProfileArticle,
  CropImg,
  CropThumb,
  Container
} from "./styledComponents";

function Profile({fetchUser,stylists,history}) {
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()
  const {imgUrl,username,first, last}=stylists


  useEffect(() => {
      setUser(fetchUser())
  }, [fetchUser]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const {
//     image,
//     name,
//     last,
//     stars,
//     role,
//     description,
//     portfolio,
//     price,
//     location
//   } = location.state;
//   const place = location.state.location;
//   const pricing = location.state.price;
//   const work = location.state.portfolio;
  return (
    <Container>
      <ProfileArticle>
        <Button onClick={() => history.goBack()}>Go Back</Button>
        <section className="top-section">
          <CropImg>
            <div className="left">
              <img src={imgUrl} width="200px" />
            </div>
          </CropImg>

          <div className="right">
            <h2>
               <h1>Welcome !</h1>
      {stylists.username}
            </h2>
            {/* <h3>{role}</h3> */}
            <p className="description">
                {/* {description} */}
                </p>
            <p className="stars">
              {" "}
              My Rating:{" "}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor="pink"
                renderStarIcon={() => <span>♥</span>}
                value="3.6"
              />{" "}
              {/* {stars} */}
            </p>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You're all set! 
              {/* {name} */}
               will contact you shortly to work out the
              details{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>

        <section className="bottom-row">
          <section className="services">
            {/* {Object.values(place).map(value => {
              return <p>{value}</p>;
            })} */}

            <h3>My Services</h3>
            Check it out here
            {/* {Object.entries(pricing).map(([key, val]) => {
              return (
                <p>
                  <strong>{key}</strong> <br />${val}
                  <Button variant="primary" onClick={handleShow}>
                    Book
                  </Button>
                </p>
              );
            })} */}
          </section>

          <section className="side">
            <h3>My Portfolio</h3>
            <section className="portfolio">
                work
              {/* {work.map(val => {
                return (
                  <CropThumb>
                    <img src={val} />
                  </CropThumb>
                );
              })} */}
            </section>
            <section className="address">
                address
              {/* {Object.values(place).map(value => {
                return <p>{value}</p>;
              })} */}
            </section>
          </section>
        </section>
      </ProfileArticle>
    </Container>
  );
}

const mapStateToProps = state => {
    return {
        stylists: state.stylists,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUser }
  )(Profile);
