import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';


const Resume = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

   // TEXT EDITING
    // State variables for each heading
    const [heading7, setHeading7] = useState({ id: 'heading7', text: '2035 - Present', color: '#1E88E5' });
    const [heading8, setHeading8] = useState({ id: 'heading8', text: 'JOB POSITION', color: '#000' });
    const [heading9, setHeading9] = useState({ id: 'heading9', text: 'Company Name', color: '#000' });
    const [heading10, setHeading10] = useState({ id: 'heading10', text: 'Company Location', color: '#000' });
    const [heading11, setHeading11] = useState({ id: 'heading11', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click on Text or double click me to add your own content and make changes to the font and color.', color: '#000' });
    const [heading12, setHeading12] = useState({ id: 'heading12', text: 'I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading13, setHeading13] = useState({ id: 'heading13', text: '2035 - Present', color: '#1E88E5' });
    const [heading14, setHeading14] = useState({ id: 'heading14', text: 'JOB POSITION', color: '#000' });
    const [heading15, setHeading15] = useState({ id: 'heading15', text: 'Company Name', color: '#000' });
    const [heading16, setHeading16] = useState({ id: 'heading16', text: 'Company Location', color: '#000' });
    const [heading17, setHeading17] = useState({ id: 'heading17', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click on Text or double click me to add your own content and make changes to the font and color.', color: '#000' });
    const [heading18, setHeading18] = useState({ id: 'heading18', text: 'I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading19, setHeading19] = useState({ id: 'heading19', text: '2035 - 2035', color: '#1E88E5' });
    const [heading20, setHeading20] = useState({ id: 'heading20', text: 'UNIVERSITY NAME', color: '#000' });
    const [heading21, setHeading21] = useState({ id: 'heading21', text: 'Degree Level', color: '#000' });
    const [heading22, setHeading22] = useState({ id: 'heading22', text: 'University Location', color: '#000' });
    const [heading23, setHeading23] = useState({ id: 'heading23', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click on Text or double click me to add your own content and make changes to the font and color.', color: '#000' });
    const [heading24, setHeading24] = useState({ id: 'heading24', text: 'I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading25, setHeading25] = useState({ id: 'heading25', text: '2035 - 2035', color: '#1E88E5' });
    const [heading26, setHeading26] = useState({ id: 'heading26', text: 'UNIVERSITY NAME', color: '#000' });
    const [heading27, setHeading27] = useState({ id: 'heading27', text: 'Degree Level', color: '#000' });
    const [heading28, setHeading28] = useState({ id: 'heading28', text: 'University Location', color: '#000' });
    const [heading29, setHeading29] = useState({ id: 'heading29', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.', color: '#000' });
    const [heading30, setHeading30] = useState({ id: 'heading30', text: 'I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading31, setHeading31] = useState({ id: 'heading31', text: 'Professional skillset', color: '#000' });
    const [heading32, setHeading32] = useState({ id: 'heading32', text: 'Entrepreneurial Mindset', color: '#000' });
    const [heading33, setHeading33] = useState({ id: 'heading33', text: 'Go-to-Market Planning', color: '#000' });
    const [heading34, setHeading34] = useState({ id: 'heading34', text: 'Teamwork & Collaboration', color: '#000' });
    const [heading35, setHeading35] = useState({ id: 'heading35', text: 'Digital Analytics', color: '#000' });
    const [heading36, setHeading36] = useState({ id: 'heading36', text: 'Languages', color: '#000' });
    const [heading37, setHeading37] = useState({ id: 'heading37', text: 'English (native)', color: '#000' });
    const [heading38, setHeading38] = useState({ id: 'heading38', text: 'French (proficient)', color: '#000' });
    const [heading39, setHeading39] = useState({ id: 'heading39', text: 'Spanish (proficient)', color: '#000' });
    // Define state variables for up to 10 headings
    // Add additional headings as needed...

    // Languages

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
    
    const store = useSelector((state) => state.store)
    const { storeDetails } = store

      // SAVING DATA TO BACKEND
      const handleUpload = async () => {
        const formData = new FormData();

      const texts = {
        heading7: heading7,
        heading8: heading8,
        heading9: heading9,
        heading10: heading10,
        heading11: heading11,
        heading12: heading12,
        heading13: heading13,
        heading14: heading14,
        heading15: heading15,
        heading16: heading16,
        heading17: heading17,
        heading18: heading18,
        heading19: heading19,
        heading20: heading20,
        heading21: heading21,
        heading22: heading22,
        heading23: heading23,
        heading24: heading24,
        heading25: heading25,
        heading26: heading26,
        heading27: heading27,
        heading28: heading28,
        heading29: heading29,
        heading30: heading30,
        heading31: heading31,
        heading32: heading32,
        heading33: heading33,
        heading34: heading34,
        heading35: heading35,
        heading36: heading36,
        heading37: heading37,
        heading38: heading38,
        heading39: heading39,
      }

      console.log(texts);


      let stringifiedObject = JSON.stringify(texts);
        // let joiner = textArray.join("*")
        formData.append('template', 'Maya Nelson');
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
                toast.success('Resume page saved successfully.');
            } else {
                console.error('Upload failed:', response.statusText);
                toast.error('Changes Failed. Try again later!');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error uploading files:');
        }
    };

    console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Maya Nelson') {
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
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
        <div>
            <TemplateEditNavbar handleUpload={handleUpload}/>
            <div>
               <div>
                <Navbar/>
               </div>
                <div className='bg-[#E6DACE] mt-[5rem] pt-[6rem] pb-[5rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Resume</h1>
                    </div>
                    <div className='lg:px-[330px] xs:px-[10px] mt-[5rem]'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[27px] font-Urbanist font-[900]'>Experience</h2>
                                <h2><Link to='' className='text-[14px] hover:text-[#000] hover:bg-transparent hover:border-[2px] hover:border-solid hover:border-blue-600 bg-blue-600 py-[10px] px-[20px] rounded-[100px] text-[#fff] no-underline'>DOWNLOAD CV</Link></h2>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                    <div className='w-[50%] lg:mt-[-5rem]'>
                                        <h2 className='text-[22px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading9, setHeading9)} style={{ color: heading9.color}}>{heading9.text}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading10, setHeading10)} style={{ color: heading10.color}}>{heading10.text}</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading11, setHeading11)} style={{ color: heading11.color}}>{heading11.text}</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading12, setHeading12)} style={{ color: heading12.color}}>{heading12.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                    <div className='w-[50%] lg:mt-[-5rem]'>
                                        <h2 className='text-[22px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading13, setHeading13)} style={{ color: heading13.color}}>{heading13.text}</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading14, setHeading14)} style={{ color: heading14.color}}>{heading14.text}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading15, setHeading15)} style={{ color: heading15.color}}>{heading15.text}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading16, setHeading16)} style={{ color: heading16.color}}>{heading16.text}</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading17, setHeading17)} style={{ color: heading17.color}}>{heading17.text}</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading18, setHeading18)} style={{ color: heading18.color}}>{heading18.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[7rem]'>
                            <h2 className='text-[27px] font-Urbanist font-[900]'>Education</h2>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading19, setHeading19)} style={{ color: heading19.color}}>{heading19.text}</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading20, setHeading20)} style={{ color: heading20.color}}>{heading20.text}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading21, setHeading21)} style={{ color: heading21.color}}>{heading21.text}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading22, setHeading22)} style={{ color: heading22.color}}>{heading22.text}</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading23, setHeading23)} style={{ color: heading23.color}}>{heading23.text}</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading24, setHeading24)} style={{ color: heading24.color}}>{heading24.text}</p>
                                </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading25, setHeading25)} style={{ color: heading25.color}}>{heading25.text}</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading26, setHeading26)} style={{ color: heading26.color}}>{heading26.text}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading27, setHeading27)} style={{ color: heading27.color}}>{heading27.text}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading28, setHeading28)} style={{ color: heading28.color}}>{heading28.text}</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading29, setHeading29)} style={{ color: heading29.color}}>{heading29.text}</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading30, setHeading30)} style={{ color: heading30.color}}>{heading30.text}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                            <h2 className='text-[25px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading31, setHeading31)} style={{ color: heading31.color}}>{heading31.text}</h2>
                            <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading32, setHeading32)} style={{ color: heading32.color}}>{heading32.text}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading33, setHeading33)} style={{ color: heading33.color}}>{heading33.text}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading34, setHeading34)} style={{ color: heading34.color}}>{heading34.text}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-8rem] lg:-ms-5'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading35, setHeading35)} style={{ color: heading35.color}}>{heading35.text}</h1>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='text-[25px] font-Urbanist font-[800] lg:mt-[5rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading36, setHeading36)} style={{ color: heading36.color}}>{heading36.text}</h2>
                                <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading37, setHeading37)} style={{ color: heading37.color}}>{heading37.text}</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading38, setHeading38)} style={{ color: heading38.color}}>{heading38.text}</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading39, setHeading39)} style={{ color: heading39.color}}>{heading39.text}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            {/* Popup modal */}
            {isModalOpen && (
                          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
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

export default Resume