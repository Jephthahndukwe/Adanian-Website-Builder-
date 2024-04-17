import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Component/Navbar';
import fash23 from '../../../../assets/images/fash23.png'
import fash24 from '../../../../assets/images/fash24.png'
import Footer from '../Component/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';

const Contact = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

   // State variables for each heading
const [heading1, setHeading1] = useState({ id: 'heading1', text: 'Contact', color: '#4a573e' });
const [heading2, setHeading2] = useState({ id: 'heading2', text: 'I’m a paragraph. Click here to add your own text.', color: '#4a573e' });
const [heading3, setHeading3] = useState({ id: 'heading3', text: 'Visit Our Flagship Store', color: '#4a573e' });
const [heading4, setHeading4] = useState({ id: 'heading4', text: '500 Terry Francine Street San Francisco, CA 94158', color: '#4a573e' });
const [heading5, setHeading5] = useState({ id: 'heading5', text: 'Mail:', color: '#4a573e' });
const [heading6, setHeading6] = useState({ id: 'heading6', text: 'info@mysite.com', color: '#4a573e' });
const [heading7, setHeading7] = useState({ id: 'heading7', text: 'Tel:', color: '#4a573e' });
const [heading8, setHeading8] = useState({ id: 'heading8', text: '123-456-7890', color: '#4a573e' });

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

 // UPLOADING OF TEXT TO BACKEND
// Function to upload text to the backend
const uploadImagesAndText = async (textArray) => {
    // Create a new FormData object
    const formData = new FormData();
  
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
  
    // Call the uploadImagesAndText function with the array of text
    uploadImagesAndText(textArray);
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
            <div className='bg-[#fff] mt-[7rem]'>
                <div className='mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] lg:mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[5rem] lg:px-0 xs:px-[40px]'>
                                        <img src={fash23} className='relative' />
                                        <img src={fash24} className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-20rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]' />
                                    </div>
                                </div>
                                <div className='bg-[#F2EDE6] lg:w-[50vw] xs:w-[100vw] lg:pb-0 xs:pb-[5rem] lg:h-[170vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[4rem] xs:px-[2rem] xs:pt-[5rem] pr-[4rem]'>
                                        <h1 className='text-start font-Namdhinggo italic xs:text-[26px] lg:text-[24px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h1>
                                        <div className='lg:flex gap-[1rem] items-center pr-[5rem] mt-4'>
                                           <div>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</p>
                                           </div>
                                            <div>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                                                    <span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</span> 
                                                    <span className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}</span></p>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center -mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                                                    <span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}
                                                    </span> 
                                                   <span className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px] hover:w-[100%]' onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</span></p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='text-[#4a573e] text-start font-Namdhinggo italic lg:text-[24px] xs:text-[26px] font-[100] lg:mt-[2rem] xs:mt-[5rem]'>Write Us</h2>
                                              <form className='mt-3'>
                                                <label htmlFor='first name' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>First Name</label><br/>
                                                <input type='text' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='Last Name' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Last Name</label><br/>
                                                <input type="text" className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='email' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Email</label><br/>
                                                <input type='email' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='message' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Leave us a message...</label><br/>
                                                <textarea rows='3.5' cols='4' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] overflow-hidden resize-none' required></textarea>
                                                <button type='submit' className='bg-[#4A5145] hover:bg-[#373d33] py-[12px] px-[45px] mt-4 text-[#fff] text-center font-Namdhinggo italic text-[20px] font-[100]'>Submit</button>
                                              </form>
                                        </div>
                                    </div>
                                </div>
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
        </div>
    </Transition>
  )
}

export default Contact