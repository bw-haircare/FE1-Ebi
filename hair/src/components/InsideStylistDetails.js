import React, { useState, useEffect }  from "react";
import { Link, Route } from 'react-router-dom';
import styled , { css } from 'styled-components'
import {Button, WrapDiv, CropImg, CropThumb, AlignLeft, ProfileArticle} from "./StyledCss";
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap/Modal'
import ReactDOM from 'react-dom';



function InsideStylistDetails(props) {
    // const [bringData, setBringData] = useState();
    
    // useEffect(()=>{
    //     const id = props.match.params.id;


    //     // .then(response=>{
    //     //     setBringData(response.data)
    //     // })
    // }, [props.match.params.id])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

console.log('props Inside', props)
console.log('match', props.match.params.id)
console.log('place', props.location.state.location)
console.log('price', props.location.state.price)
console.log('portfolio', props.location.state.portfolio)


 const {image, name, last, stars, role, description, portfolio, price, location} = props.location.state;
 const place = props.location.state.location;
const pricing = props.location.state.price;
const work = props.location.state.portfolio;
  return (
    <ProfileArticle>
        <Button onClick={()=> props.history.goBack()}>Go Back</Button>
        <section className="top-section">
            <CropImg className="left"><img src={image} width="200px"/></CropImg>
       <div className="right">
        
        <h2>{name} {last}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
        
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          renderStarIcon={() => <span>♥</span>}
          starColor="red"
          value={stars}
        />
        </div>
        </section>

        <section className="bottom-row">
            <section className="services">
        {/* {Object.values(place).map(value => {
            return <p>{value}</p>
        })} */}
        <h3>My Services</h3>
        {Object.entries(pricing).map(([key, val]) => {
            return (<p><strong>{key}</strong> <br/>${val} 
            
            <Button variant="primary" onClick={handleShow}>
        Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're all set! {name} will contact you shortly to work out the details </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            
            
            </p>)
        })}
        </section>
        
        <section className="portfolio">
            <h3>My Portfolio</h3>
        {work.map(val => {
            return (<CropThumb><img src={val} /></CropThumb>)
        })}


        </section>
        </section>


        </ProfileArticle>
  )
}



export default InsideStylistDetails;
