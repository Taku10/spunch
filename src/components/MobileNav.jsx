import React, { useState, createContext } from 'react'
import NavLinks from './NavLinks'
import '../styles/nav.css'
import { CgMenu } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'


export const CloseContext = createContext()

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const hamburger = <CgMenu size='36px' color='white' className='hamburger' onClick={() => setOpen(!open)} />


  const linkClose = () => {
    setOpen(false)
  }

  return (
    <CloseContext.Provider value={open}>
      <nav className='mobile-nav'>
        {open && <NavLinks />}
        <div className={open ? 'hamburger-wrapper active' : 'hamburger-wrapper'}>
          {hamburger}
        </div>

      </nav>
    </CloseContext.Provider>

  )
}

export default MobileNav