import React from 'react'
import './Values.css';
import value_1 from '../../assets/value-1.png';
import value_2 from '../../assets/value-2.png';
import value_3 from '../../assets/value-3.png';

const Values = () => {
  return (
    <div className='values' id='values'>
      <div className="value">
        <img src={value_1} alt="" />
        <h2>Vision</h2>
        <p>To be the preferred global partner for smart electronic prototyping solutions that bridge the gap between concept and production.</p>
      </div>
      <div className="value">
        <img src={value_2} alt="" />
        <h2>Mission</h2>
        <p>To deliver innovative, reliable, and cost-effective prototyping services that accelerate our clients' product development cycles.</p>
      </div>
      <div className="value">
        <img src={value_3} alt="" />
        <h2>Objectives</h2>
        <ul>
          <li>Ensure 100% functional first prototypes</li>
          <li>Reduce client time-to-market by 30%</li>
          <li>Maintain cutting-edge technical capabilities</li>
          <li>Provide white-glove service throughout development</li>
        </ul>  
      </div>
    </div>
  )
}

export default Values
