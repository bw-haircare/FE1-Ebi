  import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { fetchUser, addUser, fetchAllClients } from "../actions/index";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import {
  Button,
  ProfileArticle,
  CropImg,
  CropThumb,
  Container
} from "./styledComponents";

function Profile({fetchUser, fetchAllClients, stylists,clients,history}) {
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()
  const [client, setClient]=useState()
  const {imgUrl,username,first, last, bio, profession}=stylists
  const { user_id, client_name, service, client_ImgUrl}=clients


  useEffect(() => {
      setUser(fetchUser())
      setClient(fetchAllClients())
  }, [fetchUser, fetchAllClients]);

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
              <img alt={imgUrl} src={imgUrl} width="200px" />
            </div>
          </CropImg>

          <div className="right">
            <h2>
      Welcome {first} {last} !
            </h2>
            <h3>{profession}</h3>
            <p className="description">
                {bio}
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

          <section className="side" style={{width: "630px"}}>
          <h3>My Clients {clients.length > 0 && <button onClick={()=>{history.push("/client");}}>Add Client</button>} </h3> 
            <div style={{display:"inline-flex", flexWrap:"wrap"}}>
            {clients.length === 0 ? (
            <div style={{borderRadius: "10px", border:"4px dotted lightgrey", padding: "120px", background:"ghostwhite", textAlign: "center"}}>
              <h1>You don't have any clients yet</h1>
              <div style={{padding: "10px"}}><button>Add New Client</button></div>
              </div>): 
            ( 
                clients.map(val =>  (
                  <div style={{width: "180px", height: "250px", border:"1px solid black",  margin:"10px"}}>
                    <div style={{backgroundImage: `url(${val.client_ImgUrl})`, height:" 140px", backgroundSize:"cover"}}></div>
                    <div style={{padding: "10px"}}>
                    <div>Name: {val.client_name}</div>
                    <div>Service: {val.service}</div>
                    <div>
                    <button style={{background:"deepskyblue", border:"none", borderRadius:"5px", padding: "5px", margin: "5px", position: "relative", float: "left"}}>Edit</button>
                    <button style={{background:"crimson", border:"none", borderRadius:"5px", padding: "5px", margin: "5px", position: "relative", float: "right"}}>Delete</button>
                    </div>
                    </div>
                  </div>
                  ))

            )}
            </div>


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
        clients:state.clients,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUser, fetchAllClients }
  )(Profile);
