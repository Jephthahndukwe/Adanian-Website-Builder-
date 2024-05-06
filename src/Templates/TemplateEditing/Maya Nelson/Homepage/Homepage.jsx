import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import portfo1 from '../../../../assets/images/portfo1.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { Transition } from '@headlessui/react';
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Homepage = () => {

    const [show, setShow] = useState(false);

    const navigate = useNavigate()

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

   // TEXT EDITING
    // State variables for each heading
    const [heading1, setHeading1] = useState({ id: 'heading1', text: 'Maya Nelson', color: '#000' });
    const [heading2, setHeading2] = useState({ id: 'heading2', text: 'PROJECT MANAGER', color: '#000' });
    const [heading3, setHeading3] = useState({ id: 'heading3', text: 'Hello', color: '#000' });
    const [heading4, setHeading4] = useState({ id: 'heading4', text: 'Here’s who I am & what I do', color: '#000' });
    const [heading5, setHeading5] = useState({ id: 'heading5', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.', color: '#000' });
    const [heading6, setHeading6] = useState({ id: 'heading6', text: 'I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
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

      const texts = {
        heading1: heading1,
        heading2: heading2,
        heading3: heading3,
        heading4: heading4,
        heading5: heading5,
        heading6: heading6,
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
              toast.success('Homepage saved successfully.');
            } else {
              console.error('Upload failed:', response.statusText);
              toast.error('Changes Failed. Try again later!');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error uploading page');
        }
    };

    const store = useSelector((state) => state.store)
    const { storeDetails } = store

    console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Maya Nelson') {
          // navigate('/dashboard')
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
        <div className='mt-[]'>
                <Navbar/>
            <div className='lg:flex items-center'>
                <div className='bg-[#E6DACE] lg:w-[80vw] xs:w-[100vw] lg:h-[150vh] xs:h-[120vh] lg:mt-[5rem] xs:mt-[27rem] lg:flex gap-[4rem] items-center'>
                    <div className='bg-[#f4ece6] lg:shadow-xl xs:shadow-2xl lg:w-[30vw] xs:w-[90%] absolute lg:ms-[14rem] xs:ms-[1.5rem] lg:mt-0 xs:mt-[-19rem]'>
                            <div className='flex items-center justify-center py-[50px] px-[20px]'>
                                <div>
                                    <div className='lg:ms-[6.5rem] xs:ms-24 rounded-full overflow-hidden w-[48%] h-[200px]'>
                                        <img src={preview || portfo1} className='w-full h-full object-cover '/>
                                    </div>
                                    <input type="file" onChange={handleImageChange} className='ms-[5rem]' />
                                    <h2 className='text-[28px] text-center font-Urbanist font-[900] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h2>
                                    <div className='w-[30%] h-[2px] bg-blue-600 mt-4 lg:ms-[10rem] xs:ms-[9rem]'/>
                                    <h3 className='lg:block xs:hidden text-[20px] font-[300] font-Urbanist mt-[2rem] tracking-[5px] lg:ms-[] text-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</h3>
                                    <div className='xs:flex gap-2 ms-[4rem] items-center mt-[3rem] lg:hidden'>
                                        <Link to='/MayaNelsonEditResume' className='bg-blue-600 py-[9px] px-[40px] rounded-[100px] hover:bg-[#fff] hover:border-[1px] hover:border-solid hover:border-[#000] hover:text-[#000] text-[15px] font-Urbanist font-[600] no-underline text-[#fff]'>RESUME</Link>
                                        <Link to='/MayaNelsonEditProjects' className='border-[1px] border-solid border-[#000] py-[9px] px-[40px] rounded-[100px] hover:bg-blue-600 hover:text-[#fff] hover:border-none text-[15px] font-Urbanist font-[600] no-underline text-[#000]'>PROJECTS</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] lg:w-[30vw] py-[15px] px-[-10rem] flex gap-5 justify-center items-center'>
                                <Link to='' className='text-[#000] hover:text-[#000]'><FaFacebookF className='text-[20px]'/></Link>
                                <Link to='' className='text-[#000] hover:text-[#000]'><FaTwitter className='text-[20px]'/></Link>
                                <Link to='' className='text-[#000] hover:text-[#000]'><FaLinkedinIn className='text-[20px]'/></Link>
                                <Link to='' className='text-[#000] hover:text-[#000]'><FaInstagram className='text-[20px]'/></Link>
                            </div>
                    </div>
                </div>
                <div className='lg:mt-[7.5rem] xs:mt-[-43rem] lg:ms-[8rem] xs:ms-[2rem]'>
                    <h1 className='lg:text-[100px] xs:text-[60px] font-Urbanist font-[900] text-start hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h1>
                    <h3 className='lg:text-[25px] xs:text-[20px] font-Urbanist font-[600] text-start mt-2 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</h3>
                    <div className='lg:flex gap-2 items-center lg:mt-[2rem] xs:hidden'>
                        <Link to='/MayaNelsonEditResume' className='bg-blue-600 py-[6px] px-[40px] rounded-[100px] hover:bg-[#fff] hover:border-[1px] hover:py-[5px] hover:border-solid hover:border-[#000] hover:text-[#000] text-[15px] font-Urbanist font-[600] no-underline text-[#fff]'>RESUME</Link>
                        <Link to='/MayaNelsonEditProjects' className='border-[1px] border-solid border-[#000] py-[6px] px-[40px] rounded-[100px] hover:bg-blue-600 hover:py-[5px] hover:text-[#fff] hover:border-none text-[15px] font-Urbanist font-[600] no-underline text-[#000]'>PROJECTS</Link>
                    </div>
                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist font-[400] leading-[26px] tracking-wider lg:w-[50%] xs:w-[95%] mt-[3rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</p>
                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist font-[400] leading-[26px] lg:w-[50%] xs:w-[95%] mt-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}</p>
                </div>
            </div>
            <div className='lg:mt-0 xs:mt-[5rem]'>
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
    </div>
    </Transition>
  )
}

export default Homepage