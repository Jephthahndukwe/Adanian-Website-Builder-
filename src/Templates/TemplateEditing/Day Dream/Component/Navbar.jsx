import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarTop = scrollPosition === 0 ? '13rem' : '1rem';

  const [show, setShow] = useState(false)

  const toggleNavbar = () => {
    setShow(!show);
  };

  // State variables for each heading
const [heading33, setHeading33] = useState({ id: 'heading33', text: 'Day. DREAM', color: '#4a573e' });
const [heading34, setHeading34] = useState({ id: 'heading34', text: '@DayDream', color: '#4a573e' });

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

 // SAVING DATA TO BACKEND
 const handleUpload = async () => {
  const formData = new FormData();

  const textArray = [
    JSON.stringify(heading33),
  // Add additional text state variables here if needed...
];

  console.log(textArray);
  
  let joiner = textArray.join("*")
  formData.append('template', 'DayDream');
  formData.append('texts', joiner);
  console.log(formData);

  try {
      const response = axios.patch('https://ayoba.adanianlabs.io/api/user/upload_file/ChikaStore', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });

      console.log(response.data);

      if (response.data) {
          const data = await response.json();
          console.log('Files uploaded:', data.files);
          alert('Files uploaded:');
      } else {
          console.error('Upload failed:', response.statusText);
          alert('Upload failed:');
      }
  } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files:');
  }
};

  return (
    <div className='lg:flex lg:relative lg:mt-[-18rem] xs:fixed lg:top-[-25rem] xs:top-[13rem] z-[1000] justify-center' style={{ top: navbarTop }}>
        <div className='bg-[#f2ede6] lg:w-[95vw] xs:w-[100vw] lg:flex items-center justify-between lg:py-[8px] xs:py-[15px] lg:px-[30px] xs:px-[20px]'>
            <div className='lg:flex xs:hidden gap-[2rem] items-center list-none'>
                  <li><Link to='/DayDreamEditHome' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Home</Link></li>
                  <li><Link to='/DayDreamEditLookbook' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Lookbook</Link></li>
                  <li><Link to='/DayDreamEditAbout' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>About</Link></li>
                  <li><Link to='/DayDreamEditSales' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Sale</Link></li>
                  <li><Link to='/DayDreamEditContact' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Contact</Link></li>
            </div>
            <div className='flex justify-between items-center'>
              <h2 className='text-[22px] no-underline font-Namdhinggo italic font-[400] hover:text-[#4a573e] text-[#4a573e] mt-3' onClick={() => openModal(heading33, setHeading33)} style={{ color: heading33.color}}>{heading33.text}</h2>
              <div>
                {show ? (
                  <FaTimes
                    className='text-[25px] font-Namdhinggo'
                    onClick={toggleNavbar}
                  />
                  ) : (
                  <FaBars
                    className='text-[25px] font-Namdhinggo lg:hidden xs:flex'
                    onClick={toggleNavbar}
                  />
                )}
              </div>
            </div>
            <div>
              <h2 className='text-[17px] font-Namdhinggo italic font-[200] mt-1 lg:block xs:hidden' onClick={() => openModal(heading34, setHeading34)} style={{ color: heading34.color}}>{heading34.text}</h2>
            </div>
            {show ? 
              <div className='lg:hidden xs:block text-center pt-[3rem] w-[90vw] h-[100vh] bg-[#f2ede6] gap-[2rem] items-center list-none'>
                  <li className='mt-5'><Link to='/DayDreamEditHome' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Home</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditLookbook' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Lookbook</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditAbout' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>About</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditSales' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Sale</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditContact' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Contact</Link></li>
              </div> 
            : null
          }
        </div>
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
  )
}

export default Navbar