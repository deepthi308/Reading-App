import React from 'react'
import styled from 'styled-components'
import ReadingImage from "../../assets/reading.png"
import { motion } from "framer-motion"
import {Link} from "react-router-dom"

const Hero = ({purpleMode}) => {
  return (
    <HeroContainer className={`${purpleMode == true ? "purple" : ""}`}>
      <Link to="/books" className={`btn ${purpleMode? "purple_box" : ""}`}>
      <div className="top">
          <img src={ReadingImage} alt="Image" />
      </div>
      <div className="bottom">
        Test your reading skills
      </div>
      </Link>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
height: 90vh;
display: flex;
color: white;
align-items: center;
justify-content: center;
cursor: pointer;

.btn{
  text-decoration:none;
  padding:0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.8rem;
background-color: transparent;
outline: none;
border: none;
background: rgb(3,0,2);
background: linear-gradient(141deg, rgba(3,0,2,1) 5%, rgba(1,55,168,1) 83%);
height: 15rem;
width: 15rem;
color: white;
box-shadow: 0px 0px 8px white;
font-size: 1.4rem;
transition: all 0.2s ease-in-out;
&:hover{
  scale:1.1;
}
.bottom{
  text-align:  center;
}
.top{
  height: 50%;
  width:100%;
  flex:1;
  
 
  img{
    
    height: 100%;
    width: 100%;
     object-fit:contain;
  }
}
}
.purple_box{
  color: white;
    background: rgb(0, 0, 0);
    background: linear-gradient(141deg, rgba(0, 0, 0, 1) 0%, rgba(92, 0, 135, 1) 100%);
    
}

`
export default Hero