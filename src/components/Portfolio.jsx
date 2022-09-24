import React, { useEffect } from 'react'
import '../styles/portfolio.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {


  useEffect(() => {
    Aos.init({ duration: 1500, once: false })
  }, [])


  return (
    <div className='portfolio-container' id='portfolio'>
      <div className='portfolio-section'>
        <h1 className='main-heading'>Portfolio</h1>
        <p className='sub-heading'>An eye for detail makes our work beautiful</p>
        <hr className='purple-line' />
      </div>
      <div className='portfolio-wrapper'>
        <div className='row-1'>
          <div className='port-section-wrapper-1'>
            <div className='port image-1'>
              <div className='image-child child-1'>
                <span>Web Design</span>
              </div>
            </div>
            <div className='port image-2'>
              <div className='image-child child-2'>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
          <div className='port-section-wrapper-2'>
            <div className='port image-3'>
              <div className='image-child child-3'>
                <span>Mobile Apps</span>
              </div>
            </div>
            <div className='port image-4'>
              <div className='image-child child-4'>
                <span>Home Design</span>
              </div>
            </div>
          </div>

        </div>
        <div className='row-2'>
          <div className='port-section-wrapper-3'>
            <div className='port image-5'>
              <div className='image-child child-5'>
                <span>3D Drawing</span>
              </div>
            </div>
            <div className='port image-6'>
              <div className='image-child child-6'>
                <span>Print Design</span>
              </div>
            </div>
          </div>
          <div className='port-section-wrapper-4'>
            <div className='port image-7'>
              <div className='image-child child-7'>
                <span>Web Design</span>
              </div>
            </div>
            <div className='port image-8'>
              <div className='image-child child-8'>
                <span>Graphic Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
