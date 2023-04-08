import React from 'react'
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Hero from '../components/HomePage/Hero'
import Texture from "../assets/texture.png"


const HomePage = ({setPurpleMode, purpleMode}) => {
  return (
      <Container className="homePage"> 
      <Navbar className="navbar" setPurpleMode={setPurpleMode} purpleMode={purpleMode} />
      <Hero className="hero" purpleMode={purpleMode} />
      </Container>
  )
}

const Container = styled.div`
background: rgb(3,0,2);
background: linear-gradient(141deg, rgba(3,0,2,1) 5%, rgba(1,55,168,1) 83%);
min-height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
.navbar{
flex: 0.1;
}
.hero{
flex: 0.9;
}
`

export default HomePage