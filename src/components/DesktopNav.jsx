import React from 'react'
import {DesktopNavLinks }from './NavLinks'
import '../styles/nav.css'

const DesktopNav = () => {
  return (
    <nav className='desktop-nav'>
        <DesktopNavLinks/>
    </nav>
  )
}

export default DesktopNav