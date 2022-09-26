import '../styles/team.css'
import React from 'react'

const Team = () => {
    return (
        <div className='team-container' id='team'>
            <div className="team-header">
                <h1 className='main-heading-team'>Awesome Team</h1>
                <p className='sub-heading'>Setibulum rutrum quam vitae fringilla tincidunt</p>
                <hr className='purple-line-hr' />
            </div>
            <div className='team-wrapper'>
                <div className='member-parent'>
                    <div className='member-child member-image-1'>
                        <div className='socials'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='member-details'>
                        <h4>Nathan Williams</h4>
                        <p>Creative Director</p>
                    </div>
                </div>
                <div className='member-parent'>
                    <div className='member-child member-image-2'>
                        <div className='socials'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='member-details'>
                        <h4>Alexis Smith</h4>
                        <p>Web Designer</p>
                    </div>
                </div>
                <div className='member-parent'>
                    <div className='member-child member-image-3'>
                        <div className='socials'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='member-details'>
                        <h4>Rahabi Khan</h4>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className='member-parent'>
                    <div className='member-child member-image-4'>
                        <div className='socials'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    <div className='member-details'>
                        <h4>Jim Noel</h4>
                        <p>Graphic Deigner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team