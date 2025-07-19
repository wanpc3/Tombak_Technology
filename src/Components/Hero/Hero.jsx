import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to Tombak Technology Sdn Bhd!</h1>
        <p>Your trusted partner in smart electronic prototyping from concept to reality.</p>
        <br />
        <Link to='services' smooth={true} offset={-260} duration={500} className='btn'>Learn More</Link>
      </div>
    </div>
  )
}

export default Hero
