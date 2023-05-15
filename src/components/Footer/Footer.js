import React from 'react'
import logo from '../../assets/logo.png'
import './styles.css'
const Footer = () => {
  return (
    <div className='footer-container'>
<div className="fotter-main-container">
    <div className="footer-items">
    <div className='footer-img'>
        <img src={logo} width='100px' alt="" />
    </div>

    <div className='footer-text'>
   <h4>
    WEBINA © 2023 All Rights Reserved
   </h4>
    </div>

    </div>
</div>
    </div>
  )
}

export default Footer