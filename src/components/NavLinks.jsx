import React,{useContext, useState} from 'react'
import { Link } from 'react-scroll'
import '../styles/nav.css'
import { CloseContext } from './MobileNav'


export const DesktopNavLinks = () => {
    const [link, setLink] = useState(false)
    const open = useContext(CloseContext)
   


  const changeNav = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 800) {
      setLink(true)
    } else {
      setLink(false)
    }
  }

  window.addEventListener('scroll', changeNav);



    return (
        <ul className={`${link ? 'nav-items fixed' : 'nav-items'} ${link ? 'nav-items active': 'nav-items'} ${open ? 'nav-items active':'nav-items'}`}>
            <li>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={1} >
                    HOME
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-20} duration={1} delay={100}>
                    ABOUT
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-25} duration={1} delay={100}>
                    PORTFOLIO
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="services" spy={true} smooth={true} offset={-20} duration={1} delay={100}>
                    SERVICES
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="team" spy={true} smooth={true} offset={0} duration={1} delay={100}>
                    TEAM
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="blog" spy={true} smooth={true} offset={0} duration={1} delay={100}>
                    BLOG
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={30} duration={1} delay={100}>
                    CONTACT
                </Link>
            </li>

        </ul>


    )
}

export const MobileNavLinks = ({isMobile, linkClose}) => {
    const [link, setLink] = useState(false)
    const open = useContext(CloseContext)
   


  const changeNav = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 700) {
      setLink(true)
    } else {
      setLink(false)
    }
  }

  window.addEventListener('scroll', changeNav);



    return (
        <ul className={`${link ? 'nav-items fixed' : 'nav-items'} ${link ? 'nav-items active': 'nav-items'} ${open ? 'nav-items active':'nav-items'}`}>
            <li>
                <Link activeClass="active" to="home"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={0} duration={1} >
                    HOME
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="about" onClick={isMobile && linkClose} spy={true} smooth={true} offset={-10} duration={1} delay={100}>
                    ABOUT
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="portfolio"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={-30} duration={1} delay={100}>
                    PORTFOLIO
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="services"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={-30} duration={1} delay={100}>
                    SERVICES
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="team"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={0} duration={1} delay={100}>
                    TEAM
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="blog"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={-40} duration={1} delay={100}>
                    BLOG
                </Link>
            </li>
            <li>
                <Link activeClass="active" to="contact" onClick={isMobile && linkClose}  spy={true} smooth={true} offset={30} duration={1} delay={100}>
                    CONTACT
                </Link>
            </li>

        </ul>


    )
}

