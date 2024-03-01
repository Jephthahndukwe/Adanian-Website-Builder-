import React from 'react'
import '../stylings/style.css'
import '../stylings/event.css'
import { Link } from 'react-router-dom'
import program from '../images/program.png'
import program2 from '../images/program2.png'
import program3 from '../images/program3.png'
import { FaCalendar } from 'react-icons/fa'
import PropTypes from 'prop-types'


const Programs = ({ handleElementClick }) => {
  return (
    <>
     <div>
      <div class="container">
        <div className='programs d-sm-flex mt-5'>
          <h1 className='f-style text-uppercase fs-2 text-center' onClick={handleElementClick}>events and programs</h1>
      </div>
    </div>  
    </div> 
    </>
  )
}

Programs.propTypes = {
  handleElementClick: PropTypes.func.isRequired
};

export default Programs