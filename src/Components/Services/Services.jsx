import React, {useState} from 'react'
import './Services.css'
import service_1 from '../../assets/service-1.png'
import service_2 from '../../assets/service-2.png'
import service_3 from '../../assets/service-3.png'
import service_4 from '../../assets/service-4.png'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      img: service_1,
      title: 'Schematic Design',
      description: 'Professional circuit design using industry-standard tools like Altium and KiCad.',
      details: [
        'Component selection',
        'Circuit simulation',
        'Design validation',
      ]
    },
    {
      img: service_2,
      title: 'PCB Development',
      description: 'High-quality PCB layout and manufacturing support.',
      details: [
        'Multi-layer designs',
        'High-speed routing',
        'DFM optimization',
      ]
    },
    {
      img: service_3,
      title: 'Firmware Development',
      description: 'Custom firmware for microcontrollers and embedded systems.',
      details: [
        'ARM, AVR, ESP platforms',
        'RTOS implementation',
        'IoT connectivity',
      ]
    },
    {
      img: service_4,
      title: '3D Modeling & Enclosures',
      description: 'Mechanical design for prototypes and production.',
      details: [
        'CAD modeling',
        '3D printing',
        'Injection molding prep',
      ]
    },
  ];

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='services' id='services'>
      {services.map((service, index) => (
        <div key={index} className="service" onClick={() => toggleActive(index)}>
          <img src={service.img} alt="" />
          <div className="caption">
            <p>{service.title}</p>
          </div>

          {activeIndex === index && (
            <div className='service-details'>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.details.map((item, idx) => (
                  <li key={idx}>✅ {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Services
