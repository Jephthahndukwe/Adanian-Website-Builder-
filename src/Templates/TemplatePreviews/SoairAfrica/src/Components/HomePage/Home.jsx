import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import '../stylings/style.css'
import { Link } from 'react-router-dom'
import frame from '../images/Frame 162.png'
import StartCourse from './StartCourse'
import Solutions from './Solutions'
import HomeContact from './HomeContact'
import Imageslide from './Imageslide'
import ImageSlider from './ImageSlider'
import Footer from '../Footer'
import TemplateEditNavbar from '../../../../../TemplateDashboard/TemplateEditNavbar'

const Home = () => {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = sessionStorage.getItem('popupShown');
    if (!hasPopupBeenShown) {
      setShowPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
     <div className={`${showPopup ? 'opacity-50 pointer-events-none' : ''}`}>
     <TemplateEditNavbar/>
    <div>
      <NavBar/>
        <div className='home background2'>
            <div className="container pt-sm-6">
                <div className='head f-style text-white pt-6'>
                    <h1 className='text-uppercase fs-3'>giving tech the african feeling</h1>
                    <hr className='line'/><div className='span'></div>
                    <p className='f-style'>School Of Artificial Intelligence and Robotics (SOAIR) is a first ever <br className='none'/> futuristic institution in Africa that focuses on training and preparing <br className='none'/> Africans for the unknown future with some advanced level of Technology, <br className='none'/> Research and Development. School Of Artificial Intelligence & Robotics (SOAIR) <br className='none'/> is an EduTech and Technology R&D company that Trains and Build Solutions <br className='none'/> technologically for Africans and the World at large. </p>
                    <Link to='/SoairCourse'><button className='btn-generally me-4'>ENROLL</button></Link>
                    <Link to='/SoairEvent'><button className='btn-generally btn-second'>EVENTS</button></Link>
                </div>
                <div className='eventSide float-lg-end float-sm-none slider'>
                  <Imageslide slides={ImageSlider} loading='lazy'/>
                </div>
            </div>
        </div>
        <img src={frame} className='frame'/>
    </div>

    <StartCourse/>
    <Solutions/>
    <HomeContact/>
    <Footer/>
     </div>

    {showPopup && <div className="fixed inset-0 bg-black opacity-50" style={{  }}></div>}
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[50%] h-[70vh] rounded shadow-lg flex justify-center">
          <div>
          <p>This is a popup!</p>
          <button onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Home