import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

 

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img className='image' src={logo} alt="" />
        <h1>Daily grocery</h1>
        
        
    </nav>
  )
}

export default Navbar