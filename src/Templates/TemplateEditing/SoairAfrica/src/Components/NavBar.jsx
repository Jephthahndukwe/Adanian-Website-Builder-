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


  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onSelectFile = (event) => {
      const selectedFile = event.target.files[0];

      // Check if file size is within limits (e.g., 2 MB)
      if (selectedFile.size > 20 * 1024 * 1024) {
          setErrorMessage('File size exceeds 2MB. Please select a smaller file.');
          setTimeout(() => {
              setErrorMessage('');
          }, 10000); // Hide the error message after 10 seconds
          return;
      }

      // Check if image dimensions are within limits (e.g., 800x600)
      const img = new Image();
      img.onload = function () {
          if (this.width > '1200px' || this.height > '1000px') {
              setErrorMessage('Image dimensions exceed 800x600 pixels. Please select a smaller image.');
              setTimeout(() => {
                  setErrorMessage('');
              }, 10000); // Hide the error message after 10 seconds
              return;
          }
          const imageUrl = URL.createObjectURL(selectedFile);
          setSelectedImage(imageUrl);
          setErrorMessage('');
      };
      img.src = URL.createObjectURL(selectedFile);
  };

  const handleImageClick = () => {
      document.getElementById('fileInput').click();
  };

  return (
    <div className='lg:block xs:hidden'>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <nav className="navbar navbar-expand-lg navbar-dark lg:block xs:hidden">
        <div className="container-fluid">
          
          {/* <img src={logo} className='logo-img'/> */}
          {selectedImage ? (
              <img src={selectedImage} alt="Selected Image" className="logo-img" onClick={handleImageClick} />
          ) : (
              <img src={logo} alt="Frame" className="logo-img" onClick={() => document.getElementById('fileInput').click()} />
          )}
          <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
          <button className="navbar-toggler" onClick={handleToggle}>
            {show ? <FaTimes /> : <FaBars />}
          </button>
          {/* <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}> */}
            <ul className="navbar-nav ms-auto">
              <li className='nav-item'><Link to='/SoairEditHome' className="nav-link text-light">Home</Link></li>
              <li className='nav-item'><Link to='/SoairEditCourse' className="nav-link text-light">Courses</Link></li>
              <li className='nav-item'><Link to='/SoairEditEvent' className="nav-link text-light">Events</Link></li>
              <li className='nav-item'><Link to='/SoairEditStudent' className="nav-link text-light">Students</Link></li>
              <li className='nav-item'><Link to='/SoairEditContact' className="nav-link text-light">Contact</Link></li>
            </ul>
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
