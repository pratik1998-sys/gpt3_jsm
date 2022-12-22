import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>
            Do you want to step in to the future before others
          </h1>
        </div>
        <div className='gpt3__footer-button'>
          <button className=''>Request Early Access</button>
        </div>
        <div className='gpt3__footer-content'>
          <div className='gpt3__footer-wgpt3'>
            <img src={logo} alt='' />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='gpt3__footer-links'>
            <h3>Links</h3>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-company'>
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-getintouch'>
            <h3>Get in touch</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className='gpt3__footer-rights'>
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
