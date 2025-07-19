import React, { useState } from 'react'
import './Staff.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user from '../../assets/user.png'

const Staff = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 2);  // 2 = number of slides
  }

  const handleBack = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
  }

  return (
    <div className='staff'>
      <img src={back_icon} alt="Back" className='back-btn' onClick={handleBack} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={handleNext} />
      
      <div className="slider">
        <ul style={{ transform: `translateX(-${slideIndex * 50}%)` }}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Dr. Kamaruzzaman Seman</h3>
                  <span>CEO & Founder</span>
                </div>
                <p>PhD in Electrical Engineering with 30+ years experience in hardware product development, Computer Engineering, Telecommunication Engineering, and Machine Learning. Former Principal Research engineer at Telekom R&D.</p>
              </div>

              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Wan Ilhan Idriss</h3>
                  <span>Web Developer Intern</span>
                </div>
                <p>Computer Science graduate from UiTM. Specialized in Mobile App Development and experienced in React (JavaScript) frontend and Django (Python) backend solutions.</p>
              </div>

              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Vacant</h3>
                  <span>Chief Technology Officer</span>
                </div>
                <p>Altium Certified Designer with expertise in high-speed digital and RF circuit design.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Another Staff</h3>
                  <span>New Role</span>
                </div>
                <p>Short bio for another key team member...</p>
              </div>
              {/* Add more user-info blocks if you want */}
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Staff
