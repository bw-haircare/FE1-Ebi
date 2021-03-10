import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import Modal from "react-bootstrap/Modal";
import {fetchUserClientPortfolio, fetchStylistServiceList} from "../actions/index";
import { connect } from "react-redux";
import {
  Button,
  ProfileArticle,
  CropImg,
  CropThumb,
  Container
} from "./styledComponents";

function StylistInfo({fetchUserClientPortfolio, fetchStylistServiceList, clients_id, stylists, services_id, history, location}) {
  const [show, setShow] = useState(false);
  const [clientPortf, setClientPortf]=useState()
  const [stylistService, setStylistService]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    setStylistService(fetchStylistServiceList(id))
  }, [fetchUserClientPortfolio, id])

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
            <div className="stars">
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
            </div>
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
            <h3>My Services</h3>
            
            {services_id.length>0 ? (services_id.map(item=>(
              <p>
              <strong>{item.service_name}</strong> <br />${item.price}
              <Button variant="primary" onClick={handleShow}>
                Book
              </Button>
            </p>
            ))):<strong>Coming Soon...</strong>}
          </section>

          <section className="side">
            <h3>My Portfolio</h3>
            <section className="portfolio">
              {clients_id ? (clients_id.map((item,val) => {
                return (
                  <CropThumb key={val}>
                      <img alt={`${item.client_name}`} src={item.client_ImgUrl}/>
                  </CropThumb>
                );
              })): <p>Stylist has no clients yet</p>}
            </section>
            <section className="address">
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
        services_id:state.services_id,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUserClientPortfolio, fetchStylistServiceList }
  )(StylistInfo);
  
