import React from 'react'
import './styles.css'
import contactimg from '../../assets/contactimg.jpg'
const Contact = () => {
  return (
<div className="contact-container">
    <div className="contact-main-container">
<h1 className='contact-header'>Contact</h1>
<div className="contact-items">
  <div>
    <div className="contact-input">
    <input type="text" placeholder='NAME' className='input-field'  />
    <input type="email" placeholder='EMAIL'  className='input-field' />
    <input type="password" placeholder='PASSWORD' className='input-field'/>
    <button className='contact-button' >SEND</button>
    </div>

  </div>


<div className="contact-img">
<img src={contactimg} width='100px' style={{borderRadius:'30px'}} alt="" />
</div>


</div>
    </div>
</div>
    )
}

export default Contact