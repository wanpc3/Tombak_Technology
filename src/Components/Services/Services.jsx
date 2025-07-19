import React from 'react'
import './Services.css'
import service_1 from '../../assets/service-1.png'
import service_2 from '../../assets/service-2.png'
//import service_3 from '../../assets/service-3.png'
import service_4 from '../../assets/service-4.png'

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>Schematic Design</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>PCB Development</p>
        </div>
      </div>
      {/* <div className="services">
        <img src={service_3} alt="" />
      </div> */}
      <div className="service">
        <img src={service_4} alt="" />
        <div className="caption">
            <img src="" alt="" />
            <p>Firmware Development</p>
        </div>
      </div>
    </div>
  )
}

export default Services
