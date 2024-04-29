import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

     // State variables for each heading
const [heading35, setHeading35] = useState({ id: 'heading35', text: '©2024 by Day. DREAM. Powered and secured by', color: '#4a573e' });



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

  return (
    <div className='bg-[#F2EDE6] lg:px-[50px] xs:px-[30px] pb-[3rem] pt-[3rem]'>
        <div className='flex flex-wrap lg:gap-0 xs:gap-[3rem] justify-between lg:ps-[16rem] items-center'>
            <div>
                <Link to='/DayDreamEditHome' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Home</Link><br/>
                <Link to='/DayDreamEditSales' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Sale</Link><br/>
                <Link to='/DayDreamEditAbout' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>About</Link><br/>
            </div>
            <div>
                <Link to='/DayDreamEditLookbook' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Lookbook</Link><br/>
                <Link to='/DayDreamEditAbout' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Our Story</Link><br/>
                <Link to='/DayDreamEditContact' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Contact</Link><br/>
            </div>
            <div>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Facebook</Link><br/>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Instagram</Link><br/>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Pinterest</Link><br/>
            </div>
            <div>

            </div>
        </div>
        <div>
            <h2 className='mt-[4rem] text-[#4a573e] text-center font-Namdhinggo italic text-[16px] font-[100]'><span className='text-[#4a573e] text-center font-Namdhinggo italic text-[16px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading35, setHeading35)} style={{ color: heading35.color}}>{heading35.text}</span> <Link to='/' className='text-[#4a573e] text-center font-Namdhinggo italic hover:text-[#4a573e hover:text-[#4a573e]'>Adanian Labs</Link></h2>
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

export default Footer