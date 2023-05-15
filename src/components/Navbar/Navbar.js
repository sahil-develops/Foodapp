import React from 'react'
import './styles.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
<div className='container'>
    <div className='main-container'>
<img src={logo} alt="Logo" className='logo' />
<ul className='navbar-links'>
    <li>Home</li>
    <li>Service</li>
    <li>Contact</li>
    <li>About us</li>
</ul>
    </div>
    <div className='profile-section'>
<h1>
    The Best
    <br />
     Delicious
     <br />
 <span style={{color:'#FFB500'}}>   
 food
 </span> 
</h1>
    </div>
</div>
  )
}

export default Navbar