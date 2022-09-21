import React from 'react'
import '../styles/home.css'
import Nav from './Nav'

const Home = () => {
    return (
        <div className='home-container' id='home'>
            <Nav />
            <header className='home-header'>
                <h1>Creating Results</h1>
                <p>
                    Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <button>LEARN MORE</button>
            </header>
        </div>

    
    )
}

export default Home
