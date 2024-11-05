import React from 'react'
import './Footer.css'
import wh from '../../assets/whatsapp.png'
import yt from '../../assets/YT.png'
import ig from '../../assets/ig.png'


const Footer = () => {
  return (
    <div className='footer'>
        <p>2024 Ivy Occasions. All rights reserved</p>
        
        <div className="social-links-footer">
                <a href="https://wa.me/+27636348606"><img src={wh} alt="Whatsapp"/></a>
                <a href="https://www.instagram.com/_ivy.com_businesspage?igsh=MWR5eHVvZnJrdXI5bg=="><img src={ig} alt="instagram"/></a>
                
        </div>
        
    </div>
  )
}

export default Footer