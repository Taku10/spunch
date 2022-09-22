import React, { useState, useEffect } from 'react'
import '../styles/nav.css'
import { Link } from 'react-scroll'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'


const Nav = () => {
  const [nav, setNav] = useState(false)


  const changeNav = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 800) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeNav);


  return (
    <div className={`${nav ? 'nav-container active' : 'nav-container'} ${nav ? 'nav-container fixed' : 'nav-container'}`}>
      <h1 className='logo'>Spunch</h1>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

export default Nav