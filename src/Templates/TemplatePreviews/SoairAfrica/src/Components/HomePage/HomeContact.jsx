import React from 'react'
import '../stylings/style.css'
import image from '../images/image 12.png'
import image2 from '../images/image 11.png'
import axios from 'axios'

const HomeContact = () => {

  return (
    <div>
        <div className='container'>
          <div className='home-contact mt-5'>
              <h1 className='f-style text-uppercase fs-3 mt-5 text-center'>get in touch with us</h1>
              <hr className='course-line2'/>
              <div className='line4'/>
              <div className='line5'/>
              <img src={image} className='contact-img'/>
                <form className='text-center form container'>
                  <input type='text' placeholder='First Name' required />
                  <input type='text' placeholder='Second Name' required /><br/>
                  <input type='email' placeholder='Email Address' className='contact-input' required /><br/>
                  <textarea type='message' placeholder='Message' required />
                  <button className='f-style mt-5'>SEND</button>
                </form>
                <img src={image2} className='contact-img2'/>
          </div>
        </div>
    </div>
  )
  }

export default HomeContact
