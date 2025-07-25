import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/tombak-logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to='values' smooth={true} offset={-260} duration={500}>Values</Link></li>
          <li><Link to='team' smooth={true} offset={-260} duration={500}>Team</Link></li>
          <li><Link to='process' smooth={true} offset={-260} duration={500}>Process</Link></li>
          <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar