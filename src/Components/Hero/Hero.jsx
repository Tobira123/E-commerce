import React from 'react'
import { useEffect } from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import ScrollReveal from 'scrollreveal';

const Hero = () => {
  useEffect(() => {
  ScrollReveal().reveal('.hero-left,.hero-right,.offers',{
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true,
    viewFactor: 0.2
  });
}, []);

  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>NUEVOS PRODUCTOS</h2> */}
        <div>
            <div className="hero-hand-icon">
                <p>nuevos</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>productos</p>
            <p>disponibles</p>
        </div>
        <div className="hero-latest-btn">
            <div>Lo más nuevo</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
