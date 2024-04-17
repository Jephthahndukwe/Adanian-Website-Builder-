import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import fash6 from '../../../../assets/images/fash6.jpg'
import fash13 from '../../../../assets/images/fash13.png'
import fash14 from '../../../../assets/images/fash14.png'
import fash12 from '../../../../assets/images/fash12.png'
import fash15 from '../../../../assets/images/fash15.png'
import fash16 from '../../../../assets/images/fash16.png'
import fash17 from '../../../../assets/images/fash17.png'
import fash18 from '../../../../assets/images/fash18.png'
import fash19 from '../../../../assets/images/fash19.png'
import fash20 from '../../../../assets/images/fash20.png'
import fash21 from '../../../../assets/images/fash21.png'
import fash22 from '../../../../assets/images/fash22.png'
import Footer from '../Component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';


const Lookbook = () => {
    

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  useEffect(() => {
    AOS.init();
}, []);

// State variables for each heading
const [heading1, setHeading1] = useState({ id: 'heading1', text: 'Explore Our Lookbook', color: '#4a573e' });
const [heading2, setHeading2] = useState({ id: 'heading2', text: 'I’m a paragraph. Click here to add your text', color: '#4a573e' });
const [heading3, setHeading3] = useState({ id: 'heading3', text: 'Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK', color: '#f2ede6' });
const [heading4, setHeading4] = useState({ id: 'heading4', text: 'At Home. In Style.', color: '#f2ede6' });
const [heading5, setHeading5] = useState({ id: 'heading5', text: 'Put Your Best Set Forward', color: '#f2ede6' });
const [heading6, setHeading6] = useState({ id: 'heading6', text: 'I’m a paragraph. This is where people can read more.', color: '#f2ede6' });
const [heading7, setHeading7] = useState({ id: 'heading7', text: 'I’m a paragraph. I’m a great place to add more info about your products.', color: '#f2ede6' });
const [heading8, setHeading8] = useState({ id: 'heading8', text: 'Off-Duty Chic', color: '#f2ede6' });

// Define state variables for up to 10 headings
// Add additional headings as needed...

const [isModalOpen, setModalOpen] = useState(false);
const [currentHeading, setCurrentHeading] = useState(null);
const [inputText, setInputText] = useState('');
const [inputColor, setInputColor] = useState('');

// Function to open the modal for editing a specific heading
const openModal = (heading, setHeadingState) => {
    setCurrentHeading({ heading, setHeadingState });
    setInputText(heading.text);
    setInputColor(heading.color);
    setModalOpen(true);
};

// Function to handle save button click
const handleSave = () => {
    // Update the current heading based on the input values
    currentHeading.setHeadingState({
        ...currentHeading.heading,
        text: inputText,
        color: inputColor,
    });
    setModalOpen(false);
};

// Function to handle cancel button click
const handleCancelClick = () => {
    setModalOpen(false);
};




   // IMAGE EDITING
   const useImageUpload = (setImage, setErrorMessage, maxSize, maxWidth, maxHeight, inputId) => {
    return (event) => {
        const selectedFile = event.target.files[0];

        // Check if file size is within limits
        if (selectedFile.size > maxSize) {
            setErrorMessage(`File size exceeds ${maxSize / (1024 * 1024)}MB. Please select a smaller file.`);
            setTimeout(() => {
                setErrorMessage('');
            }, 10000); // Hide the error message after 10 seconds
            return;
        }

        // Check if image dimensions are within limits
        const img = new Image();
        img.onload = function () {
            if (this.width > maxWidth || this.height > maxHeight) {
                setErrorMessage(`Image dimensions exceed ${maxWidth}x${maxHeight} pixels. Please select a smaller image.`);
                setTimeout(() => {
                    setErrorMessage('');
                }, 10000); // Hide the error message after 10 seconds
                return;
            }
            const imageUrl = URL.createObjectURL(selectedFile);
            setImage(imageUrl);
            setErrorMessage('');
        };
        img.src = URL.createObjectURL(selectedFile);
    };
};

const handleImageClick = (inputId) => {
    document.getElementById(inputId).click();
};

      const [selectedImage, setSelectedImage] = useState(null);
      const [errorMessage, setErrorMessage] = useState('');

      const onSelectFile = useImageUpload(setSelectedImage, setErrorMessage, 2 * 1024 * 1024, 635, 1000, 'fileInput');

      const handleImageClick1 = () => {
          handleImageClick('fileInput');
      };

      const [selectedImage2, setSelectedImage2] = useState(null);
      const [errorMessage2, setErrorMessage2] = useState('');

      const onSelectFile2 = useImageUpload(setSelectedImage2, setErrorMessage2, 2 * 1024 * 1024, 347, 456, 'fileInput2');

      const handleImageClick2 = () => {
          handleImageClick('fileInput2');
      };

      const [selectedImage3, setSelectedImage3] = useState(null);
      const [errorMessage3, setErrorMessage3] = useState('');

      const onSelectFile3 = useImageUpload(setSelectedImage3, setErrorMessage3, 2 * 1024 * 1024, 635, 1000, 'fileInput3');

      const handleImageClick3 = () => {
          handleImageClick('fileInput3');
      };

      const [selectedImage4, setSelectedImage4] = useState(null);
      const [errorMessage4, setErrorMessage4] = useState('');

      const onSelectFile4 = useImageUpload(setSelectedImage4, setErrorMessage4, 2 * 1024 * 1024, 310, 430, 'fileInput4');

      const handleImageClick4 = () => {
          handleImageClick('fileInput4');
      };

      const [selectedImage5, setSelectedImage5] = useState(null);
      const [errorMessage5, setErrorMessage5] = useState('');

      const onSelectFile5 = useImageUpload(setSelectedImage5, setErrorMessage5, 2 * 1024 * 1024, 431, 621, 'fileInput5');

      const handleImageClick5 = () => {
          handleImageClick('fileInput5');
      };

      const [selectedImage6, setSelectedImage6] = useState(null);
      const [errorMessage6, setErrorMessage6] = useState('');

      const onSelectFile6 = useImageUpload(setSelectedImage6, setErrorMessage6, 2 * 1024 * 1024, 635, 1000,      'fileInput6');

      const handleImageClick6 = () => {
          handleImageClick('fileInput6');
      };

      const [selectedImage7, setSelectedImage7] = useState(null);
      const [errorMessage7, setErrorMessage7] = useState('');

      const onSelectFile7 = useImageUpload(setSelectedImage7, setErrorMessage7, 2 * 1024 * 1024, 635, 1000,      'fileInput7');

      const handleImageClick7 = () => {
          handleImageClick('fileInput7');
      };

      const [selectedImage8, setSelectedImage8] = useState(null);
      const [errorMessage8, setErrorMessage8] = useState('');

      const onSelectFile8 = useImageUpload(setSelectedImage8, setErrorMessage8, 2 * 1024 * 1024, 635, 1000,      'fileInput8');

      const handleImageClick8 = () => {
          handleImageClick('fileInput8');
      };

      const [selectedImage9, setSelectedImage9] = useState(null);
      const [errorMessage9, setErrorMessage9] = useState('');

      const onSelectFile9 = useImageUpload(setSelectedImage9, setErrorMessage9, 2 * 1024 * 1024, 443, 551,      'fileInput9');

      const handleImageClick9 = () => {
          handleImageClick('fileInput9');
      };

      const [selectedImage10, setSelectedImage10] = useState(null);
      const [errorMessage10, setErrorMessage10] = useState('');

      const onSelectFile10 = useImageUpload(setSelectedImage10, setErrorMessage10, 2 * 1024 * 1024, 635, 1000,      'fileInput10');

      const handleImageClick10 = () => {
          handleImageClick('fileInput10');
      };

      const [selectedImage11, setSelectedImage11] = useState(null);
      const [errorMessage11, setErrorMessage11] = useState('');

      const onSelectFile11 = useImageUpload(setSelectedImage11, setErrorMessage11, 2 * 1024 * 1024, 386, 604,      'fileInput11');

      const handleImageClick11 = () => {
          handleImageClick('fileInput11');
      };

      const [selectedImage12, setSelectedImage12] = useState(null);
      const [errorMessage12, setErrorMessage12] = useState('');

      const onSelectFile12 = useImageUpload(setSelectedImage12, setErrorMessage12, 2 * 1024 * 1024, 635, 1000,      'fileInput12');

      const handleImageClick12 = () => {
          handleImageClick('fileInput12');
      };


      // UPLOADING OF IMAGES AND TEXT TO BACKEND
// Function to upload images and text to the backend
const uploadImagesAndText = async (imagesArray, textArray) => {
    // Create a new FormData object
    const formData = new FormData();
  
    // Append each image to the FormData object
    imagesArray.forEach((image, index) => {
        if (image) {
            // Append each image file using a unique key based on its index
            formData.append(`image${index + 1}`, image);
        }
    });
  
    // Append each text item (including ID, text, and color) to the FormData object
    textArray.forEach(({ id, text, color }, index) => {
        formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
    });
  
    try {
        // Send the POST request with FormData
        const response = await axios.patch('https://good-pear-butterfly-gown.cyclic.app/api/user/upload_file/nameOfStore', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
  
        // Handle the server response
        console.log('Response from server:', response.data);
        alert('Template saved successfully!');
    } catch (error) {
        // Handle any errors
        console.error('Error saving template', error);
        alert('Error saving template', error);
    }
  };
  
  // Function to handle the "Save" button click
  const handleSaveClick = () => {
    // Create an array of selected images from the state variables
    const imagesArray = [
        selectedImage,
        selectedImage2,
        selectedImage3,
        selectedImage4,
        selectedImage5,
        selectedImage6,
        selectedImage7,
        selectedImage8,
        selectedImage9,
        selectedImage10,
        selectedImage11,
        selectedImage12,
    ];
  
    // Create an array of text items from the state variables
    const textArray = [
        heading1,
        heading2,
        heading3,
        heading4,
        heading5,
        heading6,
        heading7,
        heading8,
        // Add additional text state variables here if needed...
    ];
  
    // Call the uploadImagesAndText function with the array of images and text
    uploadImagesAndText(imagesArray, textArray);
  };

  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
            <TemplateEditNavbar handleSaveClick={handleSaveClick}/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] text-[#4a573e] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</p>
                </div>
                   <div className='lg:px-[40px]'>
                   {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                   <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-12rem]'>
                        {selectedImage ? (
                            <div style={{ backgroundImage: `url(${selectedImage})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[155vh] object-contain lg:block xs:hidden' onClick={handleImageClick1} />
                        ) : (
                        <div style={{ backgroundImage: `url(${fash12})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[155vh] object-contain lg:block xs:hidden' onClick={() => document.getElementById('fileInput').click()} />
                        )}
                        <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }}/>

                        {selectedImage ? (
                            <img src={selectedImage} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' onClick={handleImageClick} />
                        ) : (
                            <img src={fash12} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' onClick={() => document.getElementById('fileInput').click()} />
                        )}
                        <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }}/>

                        <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[95vh] lg:mt-0 xs:mt-[-14rem]'>
                            <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                                <h2 className='text-[#f2ede6] font-Namdhinggo text-[16px] font-[100] italic text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-down" data-aos-duration="1000" onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h2>
                                <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                                    <div>
                                    {selectedImage2 ? (
                                        <img src={selectedImage2} className='lg:w-[70%] xs:w-[90%]' data-aos="fade-left" data-aos-duration="1000"  onClick={handleImageClick2} />
                                    ) : (
                                        <img src={fash6} className='lg:w-[70%] xs:w-[90%]' data-aos="fade-left" data-aos-duration="1000"  onClick={() => document.getElementById('fileInput2').click()} />
                                    )}
                                    <input id="fileInput2" type='file' name='images' onChange={onSelectFile2} style={{ display: 'none' }}/>

                                    <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'  data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                   </div>
                   <div className='lg:px-[40px]'>
                   <div className='lg:flex items-center mt-[7rem] '>
                        {selectedImage3 ? (
                            <div style={{ backgroundImage: `url(${selectedImage3})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:block xs:hidden' onClick={handleImageClick3} />
                        ) : (
                        <div style={{ backgroundImage: `url(${fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:block xs:hidden' onClick={() => document.getElementById('fileInput3').click()} />
                        )}
                        <input id="fileInput3" type='file' name='images' onChange={onSelectFile3} style={{ display: 'none' }}/>

                        <div style={{ backgroundImage: `url(${fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:hidden xs:block'>
                        <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[45px] lg:w-[60%] xs:w-[80%] font-[100] italic text-start ps-[1rem] pt-[28rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</h2>
                        </div>
                        <div className='bg-[#013b3e] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[90vh] lg:mt-0 xs:mt-[-32rem]'>
                            <div className='lg:pt-[7rem] lg:ps-[7rem]'>
                                <h2 className='font-Namdhinggo text-[50px] w-[60%] font-[100] italic text-start lg:block xs:hidden hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</h2>
                                <div className='lg:pt-[10rem] lg:ps-[8rem] xs:pt-[4rem] xs:ps-[2rem]'>
                                    {selectedImage4 ? (
                                        <img src={selectedImage4} className='lg:w-[75%] xs:w-[70%]' data-aos="fade-left" data-aos-duration="1000"  onClick={handleImageClick4} />
                                    ) : (
                                        <img src={fash14} className='lg:w-[75%] xs:w-[70%]' data-aos="fade-left" data-aos-duration="1000"  onClick={() => document.getElementById('fileInput4').click()} />
                                    )}
                                    <input id="fileInput4" type='file' name='images' onChange={onSelectFile4} style={{ display: 'none' }}/>

                                    <p className='font-Namdhinggo lg:text-[17px] xs:text-[20px] lg:w-[60%] xs:w-[75%] font-[100] italic text-start lg:mt-4 xs:mt-[4rem] lg:ms-0 xs:ms-[4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-left" data-aos-duration="1000" onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}</p>
                                </div>
                            </div>
                        </div >
                    </div>
                   </div>
                   <div  className='lg:px-[40px]'>
                        <div className='lg:flex items-center lg:mt-[7rem] xs:mt-[5rem]'>
                            <div className='bg-[#013B3E] lg:w-[50vw] xs:w-[100vw] lg:h-[175vh] xs:h-[100vh] lg:pt-[7rem] xs:pt-[3rem] lg:ps-[5rem] xs:px-[1rem]'>
                                <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo italic font-[100] text-start lg:w-[40%] xs:w-[90%] lg:ps-0 xs:ps-[0.5rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}</p>
                                <div className='lg:absolute lg:mt-[3rem] lg:ms-[20.7rem] lg:pt-0 xs:pt-[3rem] lg:ps-0 xs:ps-[3rem]'>
                                    {selectedImage5 ? (
                                        <img src={selectedImage5} data-aos="fade-right" data-aos-duration="1000"  onClick={handleImageClick5} />
                                    ) : (
                                        <img src={fash16} data-aos="fade-right" data-aos-duration="1000"  onClick={() => document.getElementById('fileInput5').click()} />
                                    )}
                                    <input id="fileInput5" type='file' name='images' onChange={onSelectFile5} style={{ display: 'none' }}/>
                                </div>
                            </div>
                            <div>
                                {selectedImage6 ? (
                                        <img src={selectedImage6} className='lg:h-[175vh]' onClick={handleImageClick6} />
                                    ) : (
                                        <img src={fash15} className='lg:h-[175vh]' onClick={() => document.getElementById('fileInput5').click()} />
                                    )}
                                    <input id="fileInput6" type='file' name='images' onChange={onSelectFile6} style={{ display: 'none' }}/>
                            </div>
                        </div>
                    </div>
                    <div className='lg:px-[40px]'>
                        <div className='lg:flex items-center mt-[7rem]'>
                            {selectedImage7 ? (
                                <div style={{ backgroundImage: `url(${setSelectedImage7})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill' onClick={handleImageClick7} />
                            ) : (
                                <div style={{ backgroundImage: `url(${fash17})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill' onClick={() => document.getElementById('fileInput7').click()} />
                            )}
                            <input id="fileInput7" type='file' name='images' onChange={onSelectFile7} style={{ display: 'none' }}/>

                            {selectedImage8 ? (
                                <div style={{ backgroundImage: `url(${setSelectedImage8})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill lg:mt-0 xs:mt-[-32rem]' onClick={handleImageClick8}>
                                    <div className='lg:pt-[14rem] lg:ps-[6rem] xs:pt-[6rem] xs:ps-[3rem]'>
                                        <img src={selectedImage9} className='lg:w-[82%] xs:w-[90%]' data-aos="zoom-in-left" data-aos-duration="1000" onClick={handleImageClick9} />
                                        <h2 className='lg:mt-[-19rem] xs:mt-[-12rem] italic font-Namdhinggo xs:text-[55px] lg:text-[70px] lg:ms-[1rem] xs:ms-[-1rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</h2>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ backgroundImage: `url(${fash18})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill lg:mt-0 xs:mt-[-32rem]' onClick={() => document.getElementById('fileInput8').click()}>
                                    <div className='lg:pt-[14rem] lg:ps-[6rem] xs:pt-[6rem] xs:ps-[3rem]'>
                                        {selectedImage9 ? (
                                            <img src={selectedImage9} className='lg:w-[82%] xs:w-[90%]' data-aos="zoom-in-left" data-aos-duration="1000" onClick={handleImageClick9} />
                                        ) : (
                                            <img src={fash19} className='lg:w-[82%] xs:w-[90%]' data-aos="zoom-in-left" data-aos-duration="1000" onClick={() => document.getElementById('fileInput9').click()} />
                                        )}
                                        <input id="fileInput9" type='file' name='images' onChange={onSelectFile9} style={{ display: 'none' }}/>
                                        <h2 className='lg:mt-[-19rem] xs:mt-[-12rem] italic font-Namdhinggo xs:text-[55px] lg:text-[70px] lg:ms-[1rem] xs:ms-[-1rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</h2>
                                    </div>
                                </div>
                            )}
                            <input id="fileInput8" type='file' name='images' onChange={onSelectFile8} style={{ display: 'none' }}/>
                        </div>
                    </div>
                    <div  className='lg:px-[40px] lg:mb-[5rem]'>
                        <div className='lg:flex items-center lg:mt-[7rem] xs:mt-[-23rem]'>
                            {selectedImage10 ? (
                                <div style={{ backgroundImage: `url(${setSelectedImage10})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill' onClick={handleImageClick10}>
                                    <img src={selectedImage11} className='lg:pt-[12.3rem] xs:pt-[4rem] lg:ms-0 xs:ms-[3rem] lg:px-[8rem] lg:w-[100%] xs:w-[75%]' data-aos="zoom-in-right"  data-aos-duration="1000" onClick={handleImageClick11} />
                                </div>
                            ) : (
                                <div style={{ backgroundImage: `url(${fash20})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill' onClick={() => document.getElementById('fileInput10').click()}>
                                    {selectedImage11 ? (
                                        <img src={selectedImage11} className='lg:pt-[12.3rem] xs:pt-[4rem] lg:ms-0 xs:ms-[3rem] lg:px-[8rem] lg:w-[100%] xs:w-[75%]' data-aos="zoom-in-right"  data-aos-duration="1000" onClick={handleImageClick11} />
                                    ) : (
                                        <img src={fash22} className='lg:pt-[12.3rem] xs:pt-[4rem] lg:ms-0 xs:ms-[3rem] lg:px-[8rem] lg:w-[100%] xs:w-[75%]' data-aos="zoom-in-right"  data-aos-duration="1000" onClick={() => document.getElementById('fileInput11').click()} />
                                    )}
                                    <input id="fileInput11" type='file' name='images' onChange={onSelectFile11} style={{ display: 'none' }}/>
                                </div>
                            )}
                            <input id="fileInput11" type='file' name='images' onChange={onSelectFile11} style={{ display: 'none' }}/>

                            {selectedImage12 ? (
                                <div style={{ backgroundImage: `url(${setSelectedImage12})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill lg:mt-0 xs:mt-[-5rem] lg:ms-[-0.3rem]' onClick={handleImageClick12} />
                            ) : (
                                <div style={{ backgroundImage: `url(${fash21})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill lg:mt-0 xs:mt-[-5rem] lg:ms-[-0.3rem]' onClick={() => document.getElementById('fileInput12').click()} />
                            )}
                            <input id="fileInput12" type='file' name='images' onChange={onSelectFile12} style={{ display: 'none' }}/>
                            
                        </div>
                    </div>
            </div>
            <Footer/>

             {/* Popup modal */}
             {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden pt-[5%]">
                <div className="bg-[#fff] px-[20px] py-[10px] rounded-[5px] shadow-lg w-[50%]">
                <p className="mb-4">Edit text:</p>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                <p className="mb-4">Change text color:</p>
                <input
                    type="color"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                {/* Save and Cancel buttons */}
                <div className='flex justify-end space-x-4'>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                    <button onClick={handleCancelClick} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                </div>
                </div>
                </div>
            )}
        </div>

    </Transition>
  )
}

export default Lookbook