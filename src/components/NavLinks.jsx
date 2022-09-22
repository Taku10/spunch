import React from 'react'
import { Link } from 'react-scroll'
import '../styles/nav.css'

const NavLinks = () => {
    return (
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


    )
}

export default NavLinks