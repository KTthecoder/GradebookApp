import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <div className='NavbarContainer1'>
        <div className='NavbarLeft'>
          <h1>GradesBook</h1>
        </div>
        <div className='NavbarMid'>
          <NavLink to='/' className={({isActive}) => (isActive ? "NavbarMidLinkActive" : "NavbarMidLink")}>Home</NavLink>
          <NavLink to='/about-us' className={({isActive}) => (isActive ? "NavbarMidLinkActive" : "NavbarMidLink")}>About Us</NavLink>
          <NavLink to='/pricing' className={({isActive}) => (isActive ? "NavbarMidLinkActive" : "NavbarMidLink")}>Pricing</NavLink>
          <NavLink to='/contact' className={({isActive}) => (isActive ? "NavbarMidLinkActive" : "NavbarMidLink")}>Contact</NavLink>
        </div>
        <div className='NavbarRight'>
          <Link to='/sign-in' className='NavbarRightLink'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar