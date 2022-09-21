import '../styles/services.css'
import React from 'react'

const Services = () => {
    return (
        <div className='services-container' id='services'>
            <div className="services-heading">
                <h1 className='main-heading'>SERVICES</h1>
                <p className='sub-heading'>Scope of our featured premium services</p>
                <hr className='purple-line' />
            </div>
            <div className='services-wrapper'>
                <div className='serv-row-1'>
                    <div className='serv'>
                        <i class="fa-solid fa-desktop"></i>
                        <h2>Web Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                    <div className='serv'>
                        <i class="fa-solid fa-code"></i>
                        <h2>Web Development</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                    <div className='serv'>
                        <i class="fa-brands fa-android"></i>
                        <h2>App Design</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                </div>
                <div className='serv-row-2'>
                    <div className='serv'>
                        <i class="fa-solid fa-camera"></i>
                        <h2>Photography</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                    <div className='serv'>
                        <i class="fa-solid fa-copyright"></i>
                        <h2>Branding</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                    <div className='serv'>
                        <i class="fa-solid fa-earth-africa"></i>
                        <h2>Hosting</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim eros elementum tristique. Duis cursus, viverra ornare, eros dolor interdum nulla, commodo diam libero vitae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
