import "./Hero.css";

import React from 'react'
import bgImage from "../assets/hero-image.jpg"

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
       <div className="mask">
          <img className="bg-image" src={bgImage} alt="bgimage" />
        </div>
        
        <div className="content">
            <p>Hi, I'M SEBASTINE ANDREW</p>
            <h1>  Frontend Developer </h1>
            <Link to="/project" className="btn" >Projects</Link>
            <Link to="/contact" className="btn btn-light" >Contact</Link>
        </div>
       

    </div>
  )
}

export default Hero
