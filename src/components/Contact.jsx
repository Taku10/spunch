import '../styles/contact.css'

import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-heading'>
            <h1 className='main-heading'>KEEP IN TOUCH</h1>
            <p className='sub-header'>Setibulum rutrum quam vitae fringilla tincidunt</p>
            <hr className='purple-line'/>
        </div>
        <form className='contact-form'>
                <div className='full-name'>
                    <input type="text" name="firstName" placeholder='Enter your First Name' />
                    <input type="text" name="lastName" placeholder='Enter your Last Name' />
                </div>
                <input type="text" name="email" placeholder='Enter your email address'  />
                <textarea name="message"  cols="10" rows="2"></textarea>
            </form>
    </div>
  )
}

export default Contact