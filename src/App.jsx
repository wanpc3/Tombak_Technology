import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Values from './Components/Values/Values'
import Process from './Components/Process/Process'
import Staff from './Components/Staff/Staff'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>

        <Title subTitle='Our Core Services' title='What We Offer'/>
        <Services />
        
        <About />

        <Title subTitle='Our Values' title='Vision | Mission | Objectives'/>
        <Values />

        <Title subTitle='Meet Our Team' title='Key Staff'/>
        <Staff />

        <Title subTitle='Our Process' title='Our Prototyping Process'/>
        <Process />

        <Title subTitle='Get in Touch' title='Contact Us'/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
