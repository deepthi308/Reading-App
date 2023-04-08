import React, { useState } from 'react'
import LogoBlue from "../../assets/logo2.png"
import LogoPurple from "../../assets/purple_logo.png"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import {RiCloseCircleFill} from "react-icons/ri"
import { Link } from 'react-router-dom'
import { BsFillSunFill } from "react-icons/bs"
import {BsFillMoonStarsFill} from "react-icons/bs"

const Navbar = ({setPurpleMode, purpleMode}) => {

  const [isClicked, setIsClicked] = useState(false);
 

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const setTheme = () => {
    setPurpleMode(!purpleMode)
  }
  return (
    <>
     <DeskTopNav className={`${purpleMode==true?"purple":""}`}>
      <div className="logo-container">
      <img src={`${purpleMode==true?LogoPurple:LogoBlue}`} alt="Logo" />
        </div>
        {purpleMode ? (<BsFillSunFill className="theme-icon sun" onClick={setTheme} />) : (<BsFillMoonStarsFill className="theme-icon moon" onClick={setTheme} />)}
      <ul className="nav-links">
       <Link to="/dashboard" className="link">Dashboard</Link>
       <Link to="/settings" className="link">Settings</Link>
       <Link to="/about" className="link">About</Link> 
      </ul>
      </DeskTopNav>
      <MobileNav className={`${purpleMode == true ? "purple" : ""}`}>
      <div className="logo-container">
      <img src={`${purpleMode==true?LogoPurple:LogoBlue}`}alt="Logo" />
        </div>
        {purpleMode ? (<BsFillSunFill className="theme-icon sun" onClick={setTheme} />) : (<BsFillMoonStarsFill className="theme-icon moon" onClick={setTheme} />)}
        {isClicked? (<RiCloseCircleFill className="close" onClick={handleClick} />):(<GiHamburgerMenu className="burger-menu" onClick={handleClick} />)}
        {
          isClicked && (
        <div className="menus">
        <Link to="/dashboard" className={`menu ${purpleMode?"purple purpleList":""}`}>Dashboard</Link>
        <Link to="/settings" className={`menu ${purpleMode?"purple purpleList":""}`}>Settings</Link>
        <Link to="/about" className={`menu ${purpleMode?"purple purpleList":""}`}>About</Link>
        </div>
          )
        }
      </MobileNav>
    </>

  )
}

const DeskTopNav = styled.div`
background-color: rgba(225,225,225, 0.06);
font-size: 1.1rem;
letter-spacing: 0.5px;
width: 100vw;
height:7rem;
display: flex;
align-items: center;
justify-content: space-around;

gap: 2rem;
border-bottom: 4px solid #0137a8;
.logo-container{
  
img{
 height: 100px;
 width: 160px;
}

}
.nav-links{
 
  height: 2.8rem;
  align-items: center;
  width: 50%;
  justify-content: center;
  
  display: flex;
  gap: 3.6rem;
  position: relative;
  
  .link{
     padding:  12px 8px;
     border-radius: 5px;
    list-style-type: none;
    cursor: pointer;
   
   color: white;
   text-decoration: none;
   
    padding: 0 10px;
    transition: all 0.2s ease-in-out;
     
  }
  
  }
  
}

@media (max-width: 850px){
display: none;
}
`

const MobileNav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0rem 2rem;
background-color: rgba(225,225,225, 0.06);
font-size: 1.1rem;
letter-spacing: 0.5px;
width: 100vw;
height:7rem;
gap: 2rem;
border-bottom: 4px solid #0137a8;
z-index: 1;

img{
 height: 100px;
 width: 160px;
}

.burger-menu{
  scale: 1.8;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover{
    scale: 2.4;
  }

 
}

.menus{
  
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7rem;
  right: 1.5rem;
  background-color: rgba(225,225,225, 0.06);
  padding: 1rem;
  cursor: pointer;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.5rem;
  .menu{
   border-bottom: 0.1rem solid #0137a8;
   padding: 0.2rem;
   transition: all 0.2s ease-in-out;
   border-radius: 5px;
   color: white;
   text-decoration: none;
   &:hover{
    scale: 1.1;
    
    box-shadow: 0px 0px 5px 0px white;
   }
  }
}

@media (min-width:850px){
  display: none;
}
`

export default Navbar