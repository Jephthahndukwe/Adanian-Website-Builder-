import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Component/Navbar';
import fash23 from '../../../../assets/images/fash23.png'
import fash24 from '../../../../assets/images/fash24.png'
import Footer from '../Component/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

   // State variables for each heading
const [heading25, setHeading25] = useState({ id: 'heading25', text: 'Contact', color: '#4a573e' });
const [heading26, setHeading26] = useState({ id: 'heading26', text: 'I’m a paragraph. Click here to add your own text.', color: '#4a573e' });
const [heading27, setHeading27] = useState({ id: 'heading27', text: 'Visit Our Flagship Store', color: '#4a573e' });
const [heading28, setHeading28] = useState({ id: 'heading28', text: '500 Terry Francine Street San Francisco, CA 94158', color: '#4a573e' });
const [heading29, setHeading29] = useState({ id: 'heading29', text: 'Mail:', color: '#4a573e' });
const [heading30, setHeading30] = useState({ id: 'heading30', text: 'info@mysite.com', color: '#4a573e' });
const [heading31, setHeading31] = useState({ id: 'heading31', text: 'Tel:', color: '#4a573e' });
const [heading32, setHeading32] = useState({ id: 'heading32', text: '123-456-7890', color: '#4a573e' });

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
 const [file1, setFile1] = useState(null);
 const [file2, setFile2] = useState(null);
 const [preview, setPreview] = useState(null)
 const [preview2, setPreview2] = useState(null)

 const handleFile1Change = (e) => {
     setFile1(e.target.files[0]);
 };
 const handleFile2Change = (e) => {
     setFile2(e.target.files[0]);
 };

 const handleImageChange = (e) => {
     const selectedImage = e.target.files[0];
     if (selectedImage) {
         setFile1(selectedImage)
         const reader = new FileReader();
         reader.onload = () => {
             setPreview(reader.result);
         };
     reader.readAsDataURL(selectedImage);
     }
 };
 const handleImageChange2 = (e) => {
     const selectedImage2 = e.target.files[0];
     if (selectedImage2) {
         setFile2(selectedImage2)
         const reader = new FileReader();
         reader.onload = () => {
         setPreview2(reader.result);
         };
         reader.readAsDataURL(selectedImage2);
     }
 };


 const store = useSelector((state) => state.store)
 const { storeDetails } = store

  // SAVING DATA TO BACKEND
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('selectedImage46', file1);
    formData.append('selectedImage47', file2);

    const textArray = [
      JSON.stringify(heading25),
      JSON.stringify(heading26),
      JSON.stringify(heading27),
      JSON.stringify(heading28), 
      JSON.stringify(heading29),
      JSON.stringify(heading30),
      JSON.stringify(heading31),
      JSON.stringify(heading32),
    // Add additional text state variables here if needed...
  ];

  console.log(textArray);
    
    // Append each text item (including ID, text, and color) to the FormData object
    // textArray.forEach(({ id, text, color }, index) => {
    //     formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
    // });
    // formData.append('texts', textArray)
    let joiner = textArray.join("*")
    formData.append('template', 'DayDream');
    formData.append('texts', joiner);
    console.log(formData);

    try {
        const response = axios.patch(`https://ayoba.adanianlabs.io/api/user/upload_file/${storeDetails.nameOfStore}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(response.data);

        if (response.data) {
            const data = await response.json();
            console.log('Files uploaded:', data.files);
            setTimeout(() => {
                toast.success('Changes saved successfully.');
              }, 1000);
        } else {
            console.error('Upload failed:', response.statusText);
            setTimeout(() => {
                toast.error('Changes saved successfully.');
              }, 1000);
        }
    } catch (error) {
        console.error('Error uploading files:', error);
        toast.error('Error uploading files:');
    }
};


  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
            <TemplateEditNavbar />
            <div className='bg-[#fff] mt-[7rem]'>
                <div className='mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading25, setHeading25)} style={{ color: heading25.color}}>{heading25.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading26, setHeading26)} style={{ color: heading26.color}}>{heading26.text}</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] lg:mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[5rem] lg:px-0 xs:px-[40px]'>
                                        <input type="file" onChange={handleImageChange} /> 
                                        <img src={preview || fash23} className='relative' />

                                        <div className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-20rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]'>
                                            <input type="file" onChange={handleImageChange2} /> 
                                            <img src={preview2 || fash24}  />
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#F2EDE6] lg:w-[50vw] xs:w-[100vw] lg:pb-0 xs:pb-[5rem] lg:h-[170vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[4rem] xs:px-[2rem] xs:pt-[5rem] pr-[4rem]'>
                                        <h1 className='text-start font-Namdhinggo italic xs:text-[26px] lg:text-[24px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading27, setHeading27)} style={{ color: heading27.color}}>{heading27.text}</h1>
                                        <div className='lg:flex gap-[1rem] items-center pr-[5rem] mt-4'>
                                           <div>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading28, setHeading28)} style={{ color: heading28.color}}>{heading28.text}</p>
                                           </div>
                                            <div>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                                                    <span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading29, setHeading29)} style={{ color: heading29.color}}>{heading29.text}</span> 
                                                    <span className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading30, setHeading30)} style={{ color: heading30.color}}>{heading30.text}</span></p>
                                                <p className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center -mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                                                    <span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading31, setHeading31)} style={{ color: heading31.color}}>{heading31.text}
                                                    </span> 
                                                   <span className='text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px] hover:w-[100%]' onClick={() => openModal(heading32, setHeading32)} style={{ color: heading32.color}}>{heading32.text}</span></p>
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