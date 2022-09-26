import React, { useState, createContext } from 'react'
import {MobileNavLinks} from './NavLinks'
import '../styles/nav.css'
import { CgMenu } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'


export const CloseContext = createContext()

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const hamburger = <CgMenu size='36px' color='white' className='hamburger' onClick={() => setOpen(!open)} />
  const closeBurger = < AiOutlineClose size='36px' color='white' className='hamburger' onClick={() => setOpen(!open)} /> 

  const linkClose = () => {
    setOpen(false)
  }

  return (
    <CloseContext.Provider value={open}>
      <nav className='mobile-nav'>
        {open && <MobileNavLinks isMobile={true} linkClose={linkClose}/>}
        <div className={open ? 'hamburger-wrapper active' : 'hamburger-wrapper'}>
          {!open ? hamburger: closeBurger}
        </div>

      </nav>
    </CloseContext.Provider>

  )
}

export default MobileNav