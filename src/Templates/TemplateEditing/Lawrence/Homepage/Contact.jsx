import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro6 from '../../../../assets/images/restro6.jpg'
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';

const Contact = () => {

     // State variables for each heading
const [heading72, setHeading72] = useState({ id: 'heading72', text: 'Contact', color: '#000' });
const [heading73, setHeading73] = useState({ id: 'heading73', text: 'We Welcome Your Feedback', color: '#fff' });
const [heading74, setHeading74] = useState({ id: 'heading74', text: 'Come Visit Us', color: '#000' });
const [heading75, setHeading75] = useState({ id: 'heading75', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Body placeholder for text paragraph. A paragraph is a self-contained unit of text.', color: '#000' });

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
const [preview, setPreview] = useState(null)

const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
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

 // SAVING DATA TO BACKEND
 const handleUpload = async () => {
    const formData = new FormData();
    formData.append('selectedImage1', file1);

    const textArray = [
      JSON.stringify(heading72),
      JSON.stringify(heading73),
      JSON.stringify(heading74),
      JSON.stringify(heading75),
    // Add additional text state variables here if needed...
  ];

  console.log(textArray);
    
    // Append each text item (including ID, text, and color) to the FormData object
    // textArray.forEach(({ id, text, color }, index) => {
    //     formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
    // });
    // formData.append('texts', textArray)
    let joiner = textArray.join("*")
    formData.append('template', 'Lawrence');
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
            setTimeout(() => {
                toast.success('Reservation page saved successfully');
            }, 500);
        } else {
            setTimeout(() => {
                toast.error('Failed to save template, Please try again later.');
            }, 500);
        }

        // if (response.data) {
        //     const data = await response.json();
        //     console.log('Files uploaded:', data.files);
        //     alert('Files uploaded:');
        // } else {
        //     console.error('Upload failed:', response.statusText);
        //     alert('Upload failed:');
        // }
    } catch (error) {
        console.error('Error uploading files:', error);
        setTimeout(() => {
            toast.error('Failed to save template, Please try again later.');
        }, 500);
    }
};


  return (
    <div>
        <TemplateEditNavbar handleUpload={handleUpload}/>
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[80px] w-[90vw]'>
                <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading72, setHeading72)} style={{ color: heading72.color}}>{heading72.text}</h2>
            </div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview || restro6})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[150vh] bg-fixed mt-[5rem]'>
                    <input type="file" onChange={handleImageChange} />
                        <div className='lg:flex justify-center items-center h-[150vh]'>
                            <form className='text-[#fff] lg:pt-0 xs:pt-[5rem]'>
                                <h1 className='font-Namdhinggo text-[50px] lg:w-[60%] text-center lg:ms-[14rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading73, setHeading73)} style={{ color: heading73.color}}>{heading73.text}</h1>
                            <div className='lg:ms-[7rem] mt-[4rem] lg:px-0 xs:px-[20px]'>
                            <div className='lg:flex gap-[1rem]'>
                                <span>
                                    <label>First Name</label><br/>
                                    <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                                </span><br/>
                                <span>
                                    <label className='xs:mt-4 lg:mt-0'>Last Name</label><br/>
                                    <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                                </span><br/>
                                <span>
                                    <label className='xs:mt-4 lg:mt-0'>Email</label><br/>
                                    <input type='email' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                                </span>
                                </div>
                                <br/>
                                <label>Subject</label><br/>
                                <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] w-[100%] mt-2 outline-none' /><br/>
                                <label className='mt-[1rem]'>Leave us a message...</label><br/>
                                <textarea type='text' rows='6' cols='4' className='bg-transparent border-[2px] border-solid overflow-hidden resize-none border-[#d6d5cf] mt-2 w-[100%] p-[5px]  text-start outline-none' />
                                <button type='submit' className='bg-[#7c6c50] w-[100%] p-[10px] mt-4 hover:bg-[#493f30]'>Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
            <div className='mt-[7rem] pb-[5rem] lg:px-0 xs:px-[10px]'>
                <h2 className='text-center font-Namdhinggo text-[45px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading74, setHeading74)} style={{ color: heading74.color}}>{heading74.text}</h2>
                <p className='text-center lg:w-[37%] lg:ms-[27rem] mt-[2rem] font-Namdhinggo text-[19px] leading-[30px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading75, setHeading75)} style={{ color: heading75.color}}>{heading75.text}</p>
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
  )
}

export default Contact