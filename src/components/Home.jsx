import React from 'react'
import '../styles/home.css'
import Nav from './Nav'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div className='home-container' id='home'>
            <Nav />
            <header className='home-header' >
                <h1>Creating Results</h1>
                <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <button>LEARN MORE</button>
            </header>

            <Link activeClass="active" to="about" spy={true} smooth={true} offset={20} duration={500}>
                <i className="fa-solid fa-chevron-down down-arrow"></i>
            </Link>

        </div>


    )
}

export default Home
