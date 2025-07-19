import React from 'react'
import './About.css'
//import about_img from '../../assets/about.png'
//import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src="" alt="" className='about-img'/>
            <img src="" alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT TOMBAK TECHNOLOGY SDN BHD</h3>
            <h2>Your trusted partner in smart electronic prototyping from concept to reality.</h2>
            <p>Founded in 2020, Tombak Technology began as a small team of electronic engineers passionate about turning innovative ideas into functional prototypes. Today, we've grown into a full-service electronic prototyping company serving clients worldwide.</p>
        </div>
      </div>
    </div>
  )
}

export default About
