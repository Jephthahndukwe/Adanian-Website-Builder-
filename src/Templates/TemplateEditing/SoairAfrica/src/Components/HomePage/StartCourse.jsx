import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import frame from '../images/Frame 127.png'
import frame2 from '../images/Frame 128.png'
import frame3 from '../images/Frame 129.png'
import frame4 from '../images/Frame 131.png'
import frame5 from '../images/Frame 131 (1).png'
import frame6 from '../images/Frame 131 (2).png'
import PropTypes from 'prop-types';


const StartCourse = ({ handleElementClick }) => {

  return (
    <div>
        <div className='container'>
            <div className='home-course'>
            <h1 className='text-center f-style fs-2 text-uppercase mt-4' onClick={handleElementClick}>start a course today</h1>
            <hr className='course-line'/>
            <div className='line2'/>
            <div className='line3'/>
            <p className='text-center f-style fs-5' onClick={handleElementClick}>SOAIR is presently training and preparing over 150 students <br className='none'/> on the skills of the future which is CODING. </p>
        </div>
        <center>
        <div className='row course-images'>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>ui/ux design</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn how to create jaw <br/> dropping designs across many <br/> platforms.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame2} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>web development</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn how to create nice <br/> and responsive websites <br/> designs.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame3} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>ai & robotics</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn how AI's emulate the <br/> human mind make robots <br/> that perform tasks.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame4} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>data science</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn advanced data science. <br/>Extract knowledge and <br/> insights from data.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame5} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>mobile development</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn how to develop up to <br/> date mobile applications <br/> across many devices.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <div className='col-lg-4 col-md-8 col-sm-8 mt-5'>
                <img src={frame6} loading='lazy'/>
                <div className='contain'>
                <h3 className='text-center pt-4 f-style fs-3 text-uppercase' onClick={handleElementClick}>3d design</h3>
                <p className='text-center f-style fs-5 text-capitalize mt-4' onClick={handleElementClick}>learn how to design up to <br/> date mobile applications <br/> across many devices.</p>
                <Link to='/SoairEditCourse' className='f-style link-btn text-dark text-center' onClick={handleElementClick}>Read More</Link>
                </div>
            </div>
            <Link to='/SoairEditCourse'><button className='btn-generally mt-5 text-center' onClick={handleElementClick}>More Courses</button></Link>
        </div>
        </center>
        
        </div>
    </div>
  )
}

StartCourse.propTypes = {
    handleElementClick: PropTypes.func.isRequired
};

export default StartCourse