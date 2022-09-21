import React, { useState, useEffect } from 'react'
import '../styles/nav.css'
import { Link } from 'react-scroll'

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
    <nav className={`${nav ? 'nav-container active' : 'nav-container'} ${nav ? 'nav-container fixed' : 'nav-container'}`}>
      <h1 className='logo'>Spunch</h1>
      <ul className='nav-items'>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={1} >
            HOME
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={20} duration={1} delay={100}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={20} duration={1} delay={100}>
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="services" spy={true} smooth={true} offset={20} duration={1} delay={100}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="team" spy={true} smooth={true} offset={0} duration={1} delay={100}>
            TEAM
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-40} duration={1} delay={100}>
            BLOG
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={30} duration={1} delay={100}>
            CONTACT
          </Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Nav