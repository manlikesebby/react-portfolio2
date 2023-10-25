import "./Footer.css"

import React from 'react';

import {  FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                {/* <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>

                    <div>
                        <p>.</p>
                        <p>Bangladish</p>
                     </div>

                </div> */}
                    
                <div className="phone">
                        <FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <div>
                            <p>+2349055233008</p>
                            <p>+2349036829689</p>
                        </div>   
                        
                        
                     </div>
                     
                     <div className="email">
                        <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        sebastineandrew@gmail.com</h4> 
                     </div>
                    
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is Sebastine Andrew, CEO & Founder of sebtech. I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                    <a href="https://wa.link/7eho9y"><FaWhatsapp size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
                    <a href="https://twitter.com/sebamoneyflow"><FaTwitter size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
                    <a href="https://instagram.com/sebbydev/"> <FaInstagram size={30} style={{color:"#fff",marginRight: "1rem"}}/></a>
                    <a href="www.linkedin.com/in/sebastine-andrew-509480144"><FaLinkedin size={30} style={{color:"#fff",marginRight: "1rem"}}/> </a>
                     
                      
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
