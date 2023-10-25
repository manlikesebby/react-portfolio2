import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a front-end developer. I create responsive
                and secure websites for my clients
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <h1>My Stacks Are</h1>
            <p>- HTML -</p>
            <p>- CSS -</p>
            <p>- javaScript -</p>
            <p>- React -</p>
            <p>Other Frameworks like: <br/> Bootsrap5 and Tailwind css </p>
        </div>
      
    </div>
  )
}

export default AboutContent
 