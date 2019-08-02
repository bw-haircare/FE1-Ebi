import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {WrapDiv, CropImg, AlignLeft} from "./StyledCss";
//import InsideStylistDetails from './InsideStylistDetails'



function Stylists(props) {

console.log('props stylist', props)

console.log('123, check')

  return (
    <div>
        {/* <Route path="/stylists/:id" component={InsideStylistDetails} /> */}

      <h1>Stylists</h1>
      {props.bringData.map((user, i)=>{
          return (      
          <StylistDetails key={i} user={user}/>
          );
      })}
      
    </div>
  )
}

function StylistDetails({user}) {
    const {image, name, last, city, role,stars, location} = user;
    return (
        <WrapDiv>
            <Link to={{
            pathname: `/stylists/${user.id}`, state:{...user}
            }}>
                <AlignLeft><CropImg><img src={image}  height="200px"/></CropImg> </AlignLeft>
                <div>
                    <h2> {name} {last} </h2>
                    <h3>{role}</h3>
                    <p className="city">{location.city}</p>
                    <p className="stars">Rating: {stars}</p>
                </div>
            </Link>

        </WrapDiv>            
        
            
        
            )
                                }


export default Stylists;
