  import React, { useState, useEffect } from "react";
import { Switch, Link, Route, useParams } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { fetchUser, deleteClient, fetchAllClients, updateUser } from "../actions/index";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import {
  Button,
  ProfileArticle,
  CropImg,
  Container
} from "./styledComponents";
import EditClientForm from "./AdEditClient";

function Profile({fetchUser, fetchAllClients, stylists,user_info,clients,history, deleteClient, updateUser}) {
  const params = useParams();
  const [show, setShow] = useState(false);
  const [user, setUser]= useState()
  const [client, setClient]=useState()
 
  const info = clients.find(item => Number(item.id) === Number(params.id));
  const userID=localStorage.getItem("userID")
  useEffect(() => {
      setUser(fetchUser(userID))
      // fetchAllClients()
  }, [fetchUser, fetchAllClients, updateUser, userID]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(userID)
console.log("USER INFO", user_info)
  return (
    <>
    <Container>
      <ProfileArticle>
        <Button onClick={() => history.goBack()}>Go Back</Button>
{user_info && ( <section className="top-section">
          <CropImg>
            <div className="left">
              <img alt={user_info.imgUrl} src={user_info.imgUrl} width="200px" />
            </div>
          </CropImg>

          <div className="right">
            <h2>
      Welcome {user_info.first} {user_info.last} !
            </h2> 
            <button onClick={()=>history.push(`/user/${user_info.id}`)} style={{background:"deepskyblue", position:"relative", float:"right"}}>Edit</button>
            <h3>{user_info.profession}</h3>
            
            <p className="description">
                {user_info.bio}
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
        </section>)}

       
       
       
       
       
        <section className="bottom-row">
          <section className="services">
            {/* {Object.values(place).map(value => {
              return <p>{value}</p>;
            })} */}

            <h3>My Services</h3>
            <strong>...Coming Soon</strong>
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
          <h3>My Clients {clients.length > 0 && <button onClick={()=>{history.push("/client")}}>Add Client</button>} </h3> 
            <div style={{display:"inline-flex", flexWrap:"wrap"}}>
            {clients.length === 0 ? (
            <div style={{borderRadius: "10px", border:"4px dotted lightgrey", padding: "120px", background:"ghostwhite", textAlign: "center"}}>
              <h1>You don't have any clients yet</h1>
              <div style={{padding: "10px"}}><button onClick={()=>{history.push("/client")}}>Add New Client</button></div>
              </div>): 
            ( 
                clients.map((val,key) =>  (
                  <div key={val.id} style={{width: "180px", height: "250px", border:"1px solid black",  margin:"10px"}}>
                    <div style={{backgroundImage: `url(${val.client_ImgUrl})`, height:" 140px", backgroundSize:"cover"}}></div>
                    <div style={{padding: "10px"}}>
                    <div>Name: {val.client_name}</div>
                    <div>Service: {val.service}</div>
                    <div>
                    <button onClick={()=>{history.push(`/client/${val.id}`)}} style={{background:"deepskyblue", border:"none", borderRadius:"5px", padding: "5px", margin: "5px", position: "relative", float: "left"}}>Edit</button>
                    <button onClick={()=>{deleteClient(val.id)}} style={{background:"crimson", border:"none", borderRadius:"5px", padding: "5px", margin: "5px", position: "relative", float: "right"}}>Delete</button>
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
    <Switch>
        {/* <Route
          exact
          path="/client/:id"
          render={props => (
            <AdEditClient {...props} />
          )}
        /> */}
        <Route exact path="/client/:id"><EditClientForm fetchclient={fetchAllClients}/> </Route>

      </Switch>
    </>
  );
}

const mapStateToProps = state => {
    return {
        user_info: state.user_info,
        clients:state.clients,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchUser, fetchAllClients, deleteClient, updateUser }
  )(Profile);
