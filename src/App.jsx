import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Title from './Components/Title/Title'
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Core Services' title='What We Offer'/>
        <Services />
        <About />
      </div>
    </div>
  );
}

export default App;
