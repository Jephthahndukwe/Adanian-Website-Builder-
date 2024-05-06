import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Components/Navbar';
import portfo2 from '../../../../assets/images/portfo2.png'
import portfo3 from '../../../../assets/images/portfo3.png'
import portfo4 from '../../../../assets/images/portfo4.png'
import Footer from '../Components/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';


const Projects = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set show to true after the component is mounted to trigger the animation
      setShow(true);
    }, []);

    // TEXT EDITING
    // State variables for each heading
    const [heading40, setHeading40] = useState({ id: 'heading40', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading41, setHeading41] = useState({ id: 'heading41', text: 'Project name 01', color: '#1E88E5' });
    const [heading42, setHeading42] = useState({ id: 'heading42', text: 'Role Title', color: '#000' });
    const [heading43, setHeading43] = useState({ id: 'heading43', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading44, setHeading44] = useState({ id: 'heading44', text: 'Project name 02', color: '#1E88E5' });
    const [heading45, setHeading45] = useState({ id: 'heading45', text: 'Role Title', color: '#000' });
    const [heading46, setHeading46] = useState({ id: 'heading46', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
    const [heading47, setHeading47] = useState({ id: 'heading47', text: 'Project name 03', color: '#1E88E5' });
    const [heading48, setHeading48] = useState({ id: 'heading48', text: 'Role Title.', color: '#000' });
    const [heading49, setHeading49] = useState({ id: 'heading49', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });
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
    const [file3, setFile3] = useState(null);
    const [preview, setPreview] = useState(null)
    const [preview2, setPreview2] = useState(null)
    const [preview3, setPreview3] = useState(null)

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

    const handleImageChange3 = (e) => {
        const selectedImage3 = e.target.files[0];
        if (selectedImage3) {
          setFile3(selectedImage3)
          const reader = new FileReader();
          reader.onload = () => {
            setPreview3(reader.result);
          };
          reader.readAsDataURL(selectedImage3);
        }
    };

    
    const store = useSelector((state) => state.store)
    const { storeDetails } = store

    // SAVING DATA TO BACKEND
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage1', file1);
        formData.append('selectedImage2', file2);
        formData.append('selectedImage3', file3);

      const texts = {
        heading40: heading40,
        heading41: heading41,
        heading41: heading42,
        heading43: heading43,
        heading44: heading44,
        heading45: heading45,
        heading46: heading46,
        heading47: heading47,
        heading48: heading48,
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
              toast.success('Project page saved successfully.');
            } else {
              console.error('Upload failed:', response.statusText);
              toast.error('Changes Failed. Try again later!');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error saving page:');
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
                <div className='bg-[#E6DACE] mt-[5rem] pt-[6rem] pb-[7rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Projects</h1>
                    </div>
                    <p className='lg:ms-[20rem] lg:mt-5 xs:mt-4 lg:text-[16px] xs:text-[17px] px-[20px] font-Urbanist font-[400] leading-[26px] lg:w-[53%] text-center tracking-[1px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading40, setHeading40)} style={{ color: heading40.color}}>{heading40.text}</p>
                    <div className='lg:px-[330px] xs:px-[20px] mt-[5rem]'>
                        <div className='lg:flex items-center'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist font-[900] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading41, setHeading41)} style={{ color: heading41.color}}>{heading41.text}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading42, setHeading42)} style={{ color: heading42.color}}>{heading42.text}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading43, setHeading43)} style={{ color: heading43.color}}>{heading43.text}</p>
                            </div>
                            <div className='lg:w-[120vw] mt-[-1.8rem]'>
                                <input type="file" onChange={handleImageChange} />
                                <img src={preview || portfo2} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist font-[900] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading44, setHeading44)} style={{ color: heading44.color}}>{heading44.text}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]' onClick={() => openModal(heading45, setHeading45)} style={{ color: heading45.color}}>{heading45.text}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]' onClick={() => openModal(heading46, setHeading46)} style={{ color: heading46.color}}>{heading46.text}</p>
                            </div>
                            <div className='lg:w-[120vw] mt-[-1.8rem]'>
                                <input type="file" onChange={handleImageChange2} />
                                <img src={preview2 || portfo3} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist font-[900] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading47, setHeading47)} style={{ color: heading47.color}}>{heading47.text}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]' onClick={() => openModal(heading48, setHeading48)} style={{ color: heading48.color}}>{heading48.text}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading49, setHeading49)} style={{ color: heading49.color}}>{heading49.text}</p>
                            </div>
                            <div className='lg:w-[120vw] mt-[-1.8rem]'>
                                <input type="file" onChange={handleImageChange3} />
                                <img src={preview || portfo4} className='w-full h-[60vh]' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

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

export default Projects