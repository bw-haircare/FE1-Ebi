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

  return (
    <div>
        <button onClick={()=> props.history.goBack()}>Go Back</button>
        <p>Inside the Stylist Profile Card. Hello World</p>
        <img src={image} width="200px"/>
        <h2>{name} {last}</h2>
        <h3>{role}</h3>
        <p>{description}</p>

        </div>
  )
}



export default InsideStylistDetails;
