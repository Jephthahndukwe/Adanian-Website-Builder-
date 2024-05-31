import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Component/Navbar';
import fash25 from '../../../../assets/images/fash25.png'
import fash26 from '../../../../assets/images/fash26.png'
import Footer from '../Component/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';

const About = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  // State variables for each heading
const [heading18, setHeading18] = useState({ id: 'heading18', text: 'About Us', color: '#4a573e' });
const [heading19, setHeading19] = useState({ id: 'heading19', text: 'I’m a paragraph. Click here to add your own text.', color: '#4a573e' });
const [heading20, setHeading20] = useState({ id: 'heading20', text: 'Lets Get Comfortable', color: '#4a573e' });
const [heading21, setHeading21] = useState({ id: 'heading21', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you..', color: '#8b9186' });
const [heading22, setHeading22] = useState({ id: 'heading22', text: 'This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.', color: '#8b9186' });

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
        formData.append('selectedImage24', file1);
        formData.append('selectedImage25', file2);

        const texts = {
            heading18: heading18,
            heading19: heading19,
            heading20: heading20,
            heading21: heading21,
            heading22: heading22,
          }
    
          console.log(texts);
    
    
            let stringifiedObject = JSON.stringify(texts);
            // let joiner = textArray.join("*")
            formData.append('template', 'DayDream');
            formData.append('texts', stringifiedObject);
            console.log(formData);

        try {
            const response = axios.patch(`https://ayoba.adanianlabs.io/api/user/upload_file/${storeDetails.nameOfStore}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            if (response.data) {
                console.log('Files uploaded:', data.files);
                toast.success('About page saved successfully.');
            } 
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error uploading page');
        }
    };

    console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Day Dream') {
          toast.success(`You have started editing ${res.data.template}`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if(storeDetails) {
        getWebsite()
      }
  }, [])


  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
           <TemplateEditNavbar handleUpload={handleUpload}/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading18, setHeading18)} style={{ color: heading18.color}}>{heading18.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading19, setHeading19)} style={{ color: heading19.color}}>{heading19.text}</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[7rem] lg:px-0 xs:px-[40px]'>
                                        <input type="file" onChange={handleImageChange} /> 
                                        <img src={preview || fash25} className='relative' />

                                       <div className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-25rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]'>
                                        <input type="file" onChange={handleImageChange2} /> 
                                        <img src={preview2 || fash26} className='lg:w-[100%] xs:w-[100%]' />
                                       </div>
                                    </div>
                                </div>
                                <div className='bg-[#CDD2C8] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh]'>
                                    <div className='lg:pt-[10rem] lg:ps-[4rem] xs:pr-[2rem] xs:pt-[4rem] xs:ps-[1rem] lg:pr-[4rem] lg:pb-0 xs:pb-[5rem]'>
                                        <h1 className='text-start font-Namdhinggo italic text-[34px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading20, setHeading20)} style={{ color: heading20.color}}>{heading20.text}</h1>
                                        <p className='leading-[32px] mt-[2.5rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading21, setHeading21)} style={{ color: heading21.color}}>{heading21.text}</p>
                                        <p className='leading-[32px] mt-[2rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading22, setHeading22)} style={{ color: heading22.color}}>{heading22.text}</p>
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

export default About