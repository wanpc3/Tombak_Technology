import React from 'react'
import './About.css'
import logo from '../../assets/logo.png'
//import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-left">
            <img src={logo} alt="" className='tombak-logo'/>
            <img src="" alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT TOMBAK TECHNOLOGY SDN BHD</h3>
            <h2>Your trusted partner in smart electronic prototyping from concept to reality.</h2>
            <p>Founded in 2020, Tombak Technology began as a small team of electronic engineers passionate about turning innovative ideas into functional prototypes. Today, we've grown into a full-service electronic prototyping company serving clients worldwide.</p>
        
            <br/>
            <h3>OUR EXPERTISE</h3>
            <h2>What We Do Best</h2>
            <ul className="expertise-list">
              <li>✅ PCB design and layout</li>
              <li>✅ Embedded systems firmware development</li>
              <li>✅ 3D modeling for electronic enclosures</li>
              <li>✅ Rapid prototyping and testing</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
