import React, { useState } from 'react'
import '../stylings/style.css'
import frame from '../images/Frame 125.png'
import frame2 from '../images/Frame 162.png'
import PropTypes from 'prop-types';


const Solutions = ({ handleElementClick }) => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onSelectFile = (event) => {
      const selectedFile = event.target.files[0];

      // Check if file size is within limits (e.g., 2 MB)
      if (selectedFile.size > 2 * 1024 * 1024) {
          setErrorMessage('File size exceeds 2MB. Please select a smaller file.');
          setTimeout(() => {
              setErrorMessage('');
          }, 10000); // Hide the error message after 10 seconds
          return;
      }

      // Check if image dimensions are within limits (e.g., 800x600)
      const img = new Image();
      img.onload = function () {
          if (this.width > 800 || this.height > 600) {
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
    <div>
        <div class="container-fluid">
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='solution d-sm-flex'>
              {/* <img src={frame} className='frame-img' loading='lazy'/> */}
              {selectedImage ? (
                    <img src={selectedImage} alt="Selected Image" className="selected-image w-[25%]" onClick={handleImageClick} />
                ) : (
                    <img src={frame} alt="Frame" className="frame-image w-[25%]" onClick={() => document.getElementById('fileInput').click()} />
                )}
                <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
              <div className='solution-text'>
                <h2 className='f-style fs-4 text-uppercase mt-3 ms-5' onClick={handleElementClick}>we turn ideas into solutions</h2>
                <hr className='line'/><div className='span'></div>
                <p className='f-style mt-4 ms-sm-5' onClick={handleElementClick}>SOAIR has a subsidiary called Code Learners, Code Learners <br className='none'/> is a technology educational institution that teaches coding <br className='none'/> and computer programming language majorly to individuals <br className='none'/> between the age of six to sixteen at their homes, schools or offices. <br className='none'/> The burning concern of the institution is to tackle poor solution skills <br className='none'/> among young and old Nigerians, Code learners is  presently training over <br className='none'/> 2,500 students from Federal school, Public and Private school. </p>
              </div>
            </div>
        </div>
        <img src={frame2} className='frame'/>
    </div>
  )
}

Solutions.propTypes = {
  handleElementClick: PropTypes.func.isRequired
};

export default Solutions