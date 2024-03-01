import React, { useState } from 'react';
import './stylings/style.css';
import { Link } from 'react-router-dom';
import logo from './images/SOAIR LOGO 01 1.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark lg:block xs:hidden">
        <div className="container-fluid">
          <img src={logo} className='logo-img'/>
          <button className="navbar-toggler" onClick={handleToggle}>
            {show ? <FaTimes /> : <FaBars />}
          </button>
          {/* <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}> */}
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to='/SoairHome' className="nav-link text-light">Home</Link></li>
              <li className='nav-item'><Link to='/SoairCourse' className="nav-link text-light">Courses</Link></li>
              <li className='nav-item'><Link to='/SoairEvent' className="nav-link text-light">Events</Link></li>
              <li className='nav-item'><Link to='/SoairStudent' className="nav-link text-light">Students</Link></li>
              <li className='nav-item'><Link to='/SoairContact' className="nav-link text-light">Contact</Link></li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
