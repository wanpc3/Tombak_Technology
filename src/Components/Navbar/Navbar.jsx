import React from 'react'
import './Navbar.css'
import logo from '../../assets/tombak-logo.png'

const Navbar = () => {
    return (
      <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Our Process</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
      </nav>
    )
}

export default Navbar