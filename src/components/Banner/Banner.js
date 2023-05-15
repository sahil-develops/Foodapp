import React from 'react'
import './styles.css'
import cake from '../../assets/cakes.jpg'
import pancake from '../../assets/pancakes.jpg'
import burger from '../../assets/burger.jpg'
const Banner = () => {
  return (
    <div>
<div className="banner-container">
    <div className="banner-main-container">
    <h1 className='banner-header'>Service</h1>
    <div className="banner-items">

<div className="banner-item cake">
<img src={cake} className='banner-img' alt="" />
<br />
<h3 className='banner-tagline'>cakes</h3>
</div>

<div className="banner-item pancake">
    <img src={pancake} className='banner-img' alt="" />
    <br />
    <h3 className='banner-tagline' >pancakes</h3>
</div>

<div className="banner-item burger">
    <img src={burger} className='banner-img' alt=""  />
    <br />
    <h3 className='banner-tagline' >burger</h3>
</div>

    </div>
    </div>
</div>
    </div>
  )
}

export default Banner