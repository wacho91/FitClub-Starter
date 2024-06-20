import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">
        <Header />
      {/* The  best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>

        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Share </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
             in here we will help you to shape and build your ideal body and live up your life to fullest
            </span> 
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*Hero button*/}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
    </div>
    <div className="right-h">Right Side</div>
   </div>
  )
}

export default Hero
