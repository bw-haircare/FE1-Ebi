import React, { useState, useEffect }  from "react";
import { Link, Route } from 'react-router-dom';


function InsideStylistDetails(props) {
    // const [bringData, setBringData] = useState();
    
    // useEffect(()=>{
    //     const id = props.match.params.id;


    //     // .then(response=>{
    //     //     setBringData(response.data)
    //     // })
    // }, [props.match.params.id])

console.log('props Inside', props)
console.log('match', props.match.params.id)
console.log('place', props.location.state.location)
console.log('price', props.location.state.price)
console.log('portfolio', props.location.state.portfolio)


 const {image, name, last, stars, role, description} = props.location.state;
//  const place = props.location.state.location;
// const pricing = props.location.state.price;
// const work = props.location.state.portfolio;
  return (
    <div>
        <button onClick={()=> props.history.goBack()}>Go Back</button>
        <p>Inside the Stylist Profile Card. Hello World</p>
        <img src={image} width="200px"/>
        <h2>{name} {last}</h2>
        <h3>{role}</h3>
        <p>{description}</p>
        {/* <p>{price}</p> */}
        {/* {Object.values(place).map(value => {
            return <p>{value}</p>
        })} */}
        {/* <h3>Pricing</h3>
        {Object.entries(pricing).map(val => {
            return <p>{ val } usd</p>
        })} */}
        {/* <h3>My Services</h3>
        {Object.entries(pricing).map(([key, val]) => {
            return (<p><strong>{key}</strong> <br/>${val} 
            <button>Book</button></p>)
        })}
        
        <h3>My Portfolio</h3>
        {work.map(val => {
            return (<img src={val} width="100px" />)
        })} */}
        {/* <img src={work} /> */}
        {/* <p>{place.zip}</p> */}
        </div>
  )
}



export default InsideStylistDetails;
