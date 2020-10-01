import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import styled, { css } from "styled-components";
import Modal from "react-bootstrap/Modal";
import {fetchUserClientPortfolio} from "../actions/index";
import { connect } from "react-redux";
import {  useParams, useHistory } from "react-router-dom";
import {
  Button,
  ProfileArticle,
  CropImg,
  CropThumb,
  Container
} from "./styledComponents";

function StylistInfo({fetchUserClientPortfolio, clients_id, stylists, history, location}) {
  const [show, setShow] = useState(false);
  const [clientPortf, setClientPortf]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("PROPS-->", clients_id)

  console.log("PROPS STYLIST", stylists)
  console.log("LOCATION", location)

    const {
        bio,
        first,
        id,
        imgUrl,
        last,
        profession,
        username,
        price
  } = location.state;


  useEffect(() => {

    setClientPortf(fetchUserClientPortfolio(id))
  }, [fetchUserClientPortfolio, id])

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
//   } = props.location.state;
//   const place = props.location.state.location;
//   const pricing = props.location.state.price;
//   const work = props.location.state.portfolio;
  return (
    <Container>

<ProfileArticle>
         <Button onClick={() => history.goBack()}>Go Back</Button>
       <section className="top-section">
          <CropImg>
            <div className="left">
              <img alt={`${first}-${last}`}src={imgUrl} width="200px" />
            </div>
          </CropImg>

         <div className="right">
            <h2>
              {first} {last}
            </h2>
             <h3>{profession}</h3>
            <p className="description">{bio}</p>
            <p className="stars">
              {" "}
              My Rating:{" "}
              <StarRatingComponent
                name="rate1"
                starCount={5}
                starColor="pink"
                renderStarIcon={() => <span>♥</span>}
                value="3"
              />{" "}
              3
            </p>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Congratulations!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You're all set! {first} will contact you shortly to work out the
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
            {/* {Object.entries(price).map(([key, val]) => {
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
                {console.log("Client_id", clients_id)}
              {clients_id.map((item,val) => {
                return (
                  <CropThumb>
                      <img alt={`${item.client_name}`} src={item.client_ImgUrl}/>
                  </CropThumb>
                );
              })}
            </section>
            <section className="address">
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
        clients_id:state.clients_id,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUserClientPortfolio }
  )(StylistInfo);
  
