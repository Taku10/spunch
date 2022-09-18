import React,{useState, useEffect} from 'react'
import '../styles/nav.css'

const Nav = () => {
  const[nav, setNav]=useState(false)


  const changeNav=()=>{
    console.log(window.scrollY)
    if(window.scrollY >= 1){
      setNav(true)
    }else{
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeNav);


  return (
    <nav className={nav ? 'nav-container active': 'nav-container'}>
        <h1 className='logo'>Spunch</h1>
        <ul className='nav-items'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>TEAM</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Nav