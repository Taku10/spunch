import React from 'react'
import '../styles/testimonials.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
  return (
    <div className='test-container'>
      <div className='test-heading'>
        <h1>TESTIMONIALS</h1>
        <hr className='white-line' />
      </div>
      <div className="test-wrapper">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='carousol-caption'>
                <p className='client-message'>
                  It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.
                </p>
                <p className='client-name'>Amanda Scara</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='carousol-caption'>
                <p className='client-message'>
                  It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.
                </p>
                <p className='client-name'>Wilbur Smith</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className='carousol-caption'>
                <p className='client-message'>
                  It really saves me time and effort. web design is exactly what our business has been lacking. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem risus tristique posuere.
                </p>
                <p className='client-name'>Riaan Tonder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials