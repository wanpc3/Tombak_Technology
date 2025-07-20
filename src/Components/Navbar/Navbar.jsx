import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/tombak-logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='process' smooth={true} offset={-260} duration={500}>Our Process</Link></li>
          <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar