import '../styles/footer.css'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <ul className='footer-socials'>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>GOOGLE+</li>
            </ul>
            <p>
                © 2022 SPUNCH LANDING PAGE, DEVELOPED BY <span className='dev-name'>TAKUNDA MADZIWA</span> 
            </p>
        </div>
    )
}

export default Footer
