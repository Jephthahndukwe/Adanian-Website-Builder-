import React, { useState, useEffect } from 'react'
import '../stylings/Course.css'
import image from '../images/image 28.png'
import image2 from '../images/Ellipse 9.png'
import image3 from '../images/image 29.png'
import { FaStar } from 'react-icons/fa'
import PropTypes from 'prop-types'


const Testimonials = ({ handleElementClick }) => {


    // Image Editing
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [errorMessage2, setErrorMessage2] = useState('');

    const onSelectFile2 = (event) => {
        const selectedFile = event.target.files[0];
    
        // Check if file size is within limits for image 2 (e.g., 2 MB)
        if (selectedFile.size > 2 * 1024 * 1024) {
            setErrorMessage2('File size exceeds 2MB. Please select a smaller file for image 2.');
            setTimeout(() => {
                setErrorMessage2('');
            }, 10000); // Hide the error message after 10 seconds
            return;
        }
    
        // Check if image dimensions are within limits for image 2 (e.g., 800x600)
        const img = new Image();
        img.onload = function () {
            if (this.width > 800 || this.height > 600) {
                setErrorMessage2('Image dimensions exceed 800x600 pixels. Please select a smaller image for image 2.');
                setTimeout(() => {
                    setErrorMessage2('');
                }, 10000); // Hide the error message after 10 seconds
                return;
            }
            setSelectedImage2(URL.createObjectURL(selectedFile));
        };
        img.src = URL.createObjectURL(selectedFile);
    };
    

  const handleImageClick1 = () => {
      document.getElementById('fileInput').click();
  };

  const [selectedImage3, setSelectedImage3] = useState(null);
    const [errorMessage3, setErrorMessage3] = useState('');

    const onSelectFile3 = (event) => {
        const selectedFile = event.target.files[0];
    
        // Check if file size is within limits for image 2 (e.g., 2 MB)
        if (selectedFile.size > 2 * 1024 * 1024) {
            setErrorMessage3('File size exceeds 2MB. Please select a smaller file for image 2.');
            setTimeout(() => {
                setErrorMessage3('');
            }, 10000); // Hide the error message after 10 seconds
            return;
        }
    
        // Check if image dimensions are within limits for image 2 (e.g., 800x600)
        const img = new Image();
        img.onload = function () {
            if (this.width > 800 || this.height > 600) {
                setErrorMessage3('Image dimensions exceed 800x600 pixels. Please select a smaller image for image 2.');
                setTimeout(() => {
                    setErrorMessage3('');
                }, 10000); // Hide the error message after 10 seconds
                return;
            }
            setSelectedImage3(URL.createObjectURL(selectedFile));
        };
        img.src = URL.createObjectURL(selectedFile);
    };

    const [selectedImage4, setSelectedImage4] = useState(null);
    const [errorMessage4, setErrorMessage4] = useState('');

    const onSelectFile4 = (event) => {
        const selectedFile = event.target.files[0];
    
        // Check if file size is within limits for image 2 (e.g., 2 MB)
        if (selectedFile.size > 2 * 1024 * 1024) {
            setErrorMessage4('File size exceeds 2MB. Please select a smaller file for image 2.');
            setTimeout(() => {
                setErrorMessage4('');
            }, 10000); // Hide the error message after 10 seconds
            return;
        }
    
        // Check if image dimensions are within limits for image 2 (e.g., 800x600)
        const img = new Image();
        img.onload = function () {
            if (this.width > 800 || this.height > 600) {
                setErrorMessage4('Image dimensions exceed 800x600 pixels. Please select a smaller image for image 2.');
                setTimeout(() => {
                    setErrorMessage4('');
                }, 10000); // Hide the error message after 10 seconds
                return;
            }
            setSelectedImage4(URL.createObjectURL(selectedFile));
        };
        img.src = URL.createObjectURL(selectedFile);
    };


  return (
    <>
        <div className='background mt-5 pb-5 testi'>
            <div class="container pt-4">
                <div className='mt-5'>
                    <h1 className='f-style text-uppercase text-center' onClick={handleElementClick}>our happy learners</h1>
                    <p className='f-style text-center' onClick={handleElementClick}>Have a look at what some of our students say about us.
                    let them show you how amazing their journey has
                    been here.</p>
                </div>
                <div className='row mt-4 test'>
                {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
                {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
                {errorMessage4 && <p style={{ color: 'red' }}>{errorMessage4}</p>}
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                {/* <img src={image} loading='lazy'/> */}
                                {selectedImage2 ? (
                                    <img src={selectedImage2} alt="Selected Image 2" className="w-[20%] object-cover h-[70px] rounded-[100px]" onClick={() => document.getElementById('fileInput2').click()} />
                                ) : (
                                    <img src={image} alt="Frame 2" className="frame-image" onClick={() => document.getElementById('fileInput2').click()} />
                                )}
                                <input id="fileInput2" type='file' name='image2' onChange={onSelectFile2} style={{ display: 'none' }} />
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style' onClick={handleElementClick}>James Uche</h5>
                                    <p className='f-style text-uppercase' onClick={handleElementClick}>uI/uX</p>
                                </div>
                                <FaStar className='ms-7 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3' onClick={handleElementClick}>"I had a great experience at the UI/UX Design course! The coursework was challenging but manageable, and I felt like I learned a lot in a short amount of time. The instructors were also very helpful and supportive."</h5>
                    </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                {/* <img src={image2} loading='lazy'/> */}
                                {selectedImage3 ? (
                                    <img src={selectedImage3} alt="Selected Image 2" className="w-[20%] object-cover h-[70px] rounded-[100px]" onClick={() => document.getElementById('fileInput3').click()} />
                                ) : (
                                    <img src={image2} alt="Frame 2" className="frame-image" onClick={() => document.getElementById('fileInput3').click()} />
                                )}
                                <input id="fileInput3" type='file' name='image2' onChange={onSelectFile3} style={{ display: 'none' }} />
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style' onClick={handleElementClick}>sarah wilde</h5>
                                    <p className='f-style text-uppercase' onClick={handleElementClick}>web development</p>
                                </div>
                                <FaStar className='ms-8 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3' onClick={handleElementClick}>"I had no prior knowledge of web development before taking the course, but after completing it I feel much more confident in my coding abilities. Highly recommend Soair School!"</h5>
                    </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-8 mt-4'>
                        <div className='testimony'>
                            <div className='d-flex'>
                                {/* <img src={image3} loading='lazy'/> */}
                                {selectedImage4 ? (
                                    <img src={selectedImage4} alt="Selected Image 2" className="w-[20%] object-cover h-[70px] rounded-[100px]" onClick={() => document.getElementById('fileInput4').click()} />
                                ) : (
                                    <img src={image3} alt="Frame 2" className="frame-image" onClick={() => document.getElementById('fileInput4').click()} />
                                )}
                                <input id="fileInput4" type='file' name='image2' onChange={onSelectFile4} style={{ display: 'none' }} />
                                <div className='test-name ms-3 mt-2'>
                                    <h5 className='f-style' onClick={handleElementClick}>halima tafiq</h5>
                                    <p className='f-style text-uppercase' onClick={handleElementClick}>3D Design</p>
                                </div>
                                <FaStar className='ms-7 mt-4 text-star '/>
                            </div>
                            <h5 className='f-style ms-2 mt-3' onClick={handleElementClick}>"The 3D design school course was an invaluable experience for me. It provided me with the tools I needed to become a professional in the field of 3D design, as well as giving me a better understanding of how the industry works."</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}

Testimonials.propTypes = {
    handleElementClick: PropTypes.func.isRequired
  };
  

export default Testimonials