import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro from '../../../../assets/images/restro.jpg'
import restro2 from '../../../../assets/images/restro2.png'
import restro3 from '../../../../assets/images/restro3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import axios from 'axios'


const Homepage = () => {

     // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const navigate = useNavigate()


    const [editableElement, setEditableElement] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [isPublished, setIsPublished] = useState(false);
    



    useEffect(() => {
        // Load saved data from localStorage on component mount
        const savedData = JSON.parse(localStorage.getItem('homepageData'));
        if (savedData) {
            setEditorContent(savedData.editorContent || '');
            setSelectedImage(savedData.selectedImage || '');
            setSelectedImage2(savedData.selectedImage2 || '');
            setSelectedImage3(savedData.selectedImage3 || '');
        }
    }, []);

    // Load template content from local storage on component mount
    useEffect(() => {
        const savedContent = localStorage.getItem('homepageContent');
        if (savedContent) {
            setEditorContent(savedContent);
        }
    }, []);

    // Save changes to local storage whenever editorContent changes
    useEffect(() => {
        localStorage.setItem('homepageContent', editorContent);
    }, [editorContent]);

    const handleElementClick = (event) => {
        const element = event.target;
        setEditableElement(element);
        setEditorContent(element.innerHTML);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (editableElement && !editableElement.contains(event.target)) {
                // Clicked outside the editable element, remove the editor
                setEditableElement(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [editableElement]);

    const handleEditorChange = (content, editor) => {
        if (editableElement) {
            editableElement.innerHTML = content;
            setEditorContent(content);
            // Automatically save the content to local storage
            localStorage.setItem('homepageContent', content);
        }
    };

       // IMAGE EDITING
    const useImageUpload = (setImage, setErrorMessage, maxSize, maxWidth, maxHeight) => {
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
    
    const onSelectFile = useImageUpload(setSelectedImage, setErrorMessage, 2 * 1024 * 1024, 5139, 3426);
    
    const handleImageClick1 = () => {
        handleImageClick('fileInput1');
    };
    
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [errorMessage2, setErrorMessage2] = useState('');
    
    const onSelectFile2 = useImageUpload(setSelectedImage2, setErrorMessage2, 2 * 1024 * 1024, 555, 800);
    
    const handleImageClick2 = () => {
        handleImageClick('fileInput2');
    };

    const [selectedImage3, setSelectedImage3] = useState(null);
    const [errorMessage3, setErrorMessage3] = useState('');
    
    const onSelectFile3 = useImageUpload(setSelectedImage3, setErrorMessage3, 2 * 1024 * 1024, 628, 440);
    
    const handleImageClick3 = () => {
        handleImageClick('fileInput3');
    };



// Define the handleSave function in your Homepage component
const handleSave = () => {
    // Gather the necessary data to be saved (e.g., editor content, selected images)
    const dataToSave = new FormData();
    dataToSave.append('editorContent', editorContent);
    dataToSave.append('selectedImage', selectedImage);
    dataToSave.append('selectedImage2', selectedImage2);
    dataToSave.append('selectedImage3', selectedImage3);
    // Add other relevant data as needed

    // Save data to localStorage
    localStorage.setItem('images', JSON.stringify(dataToSave));

    // Send data to backend for further processing
    axios.post('https://ayoba.adanianlabs.io/api/user/upload_file', dataToSave)
        .then(response => {
            alert('Template successfully saved. Try previewing the template.')
            console.log('Homepage saved successfully');
        })
        .catch(error => {
            console.error('Error saving homepage:', error);
            alert('Failed to save template, Please try again later.')
        });
};

// Define the handlePreview function in your Homepage component
const handlePreview = () => {
    // Retrieve the saved content from local storage
    const savedContent = localStorage.getItem('homepageContent');
    // Construct the URL for the preview page
    const previewUrl = `/preview/${encodeURIComponent(savedContent)}`;
    // Redirect to the preview page
    navigate(previewUrl);
};

// Define the handlePublish function in your Homepage component
const handlePublish = async () => {
    try {
        // Send a request to the backend to publish the template
        const response = await axios.post('/api/publish', { content: editorContent });
        const publishedUrl = response.data.publishedUrl;
        setIsPublished(true);
        alert(`Template published successfully at: ${publishedUrl}`);
    } catch (error) {
        console.error('Error publishing template:', error);
        alert('Failed to publish template. Please try again later.');
    }
};

  return (
    <>
    <TemplateEditNavbar  
        onSave={handleSave} 
        onPreview={handlePreview} 
        onPublish={handlePublish} />
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className='lg:flex gap-[3rem]'>
              {selectedImage ? (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${selectedImage})`,  backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='lg:w-[90%] xs:w-[100%] h-[100vh] bg-fixed' onClick={handleImageClick} />
                ) : (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${restro})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='lg:w-[90%] xs:w-[100%] h-[100vh] bg-fixed' onClick={() => document.getElementById('fileInput').click()} />
                )}
                <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
              <div className='lg:hidden xs:block mt-[5rem]'>
                <h2 className='text-[#7c6c50] text-[25px] text-center font-[400] font-Namdhinggo'>Restaurant & Bar</h2>
                <h2 className='text-[#7c6c50] text-[25px] text-center font-[400] font-Namdhinggo'>Est. 2035</h2>
              </div>
              <div className='lg:block xs:hidden'>
                    <h2 
                        className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' 
                        style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)` }} 
                        onClick={handleElementClick}
                    >
                        Restaurant & Bar
                    </h2>
                <div className='h-[50%] w-[1px] bg-[#7c6c50] mt-[3rem] ms-[0.7rem]' />
                <h2 className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo mt-[3rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)` }}
                     onClick={handleElementClick}
                >
                    Est. 2035
                </h2>
              </div>
            </div>
            {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
            <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] mt-[4rem]'>
                <div>
                    <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:w-[75%] lg:ms-[1rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                        onClick={handleElementClick}
                    >
                        Made With Love. Simply Delicious
                    </h1>
                    <p className='mt-[2rem] lg:ms-0 xs:ms-[2rem] text-center text-[16px] leading-[24px] text-[#7c6c50] w-[85%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                        onClick={handleElementClick}
                    >
                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                    <h3 className='mt-[3rem] flex justify-center items-center lg:ms-[-7rem]'>
                        <Link to='/LawrenceEditMenu' className='text-[#fff] text-[16px] font-[400] no-underline hover:text-[#fff] hover:bg-[#493f30] bg-[#7c6c50] py-[15px] px-[50px]'
                        >
                            View Menu
                        </Link>
                    </h3>
                </div>
                <div className='lg:mt-0 xs:mt-[7rem]'>
                    {selectedImage2 ? (
                        <img src={selectedImage2} alt="Selected Image" className="w-[100vw]" onClick={handleImageClick2} />
                    ) : (
                        <img src={restro2} alt="Frame" className="w-[100vw]" onClick={() => document.getElementById('fileInput2').click()} />
                    )}
                        <input id="fileInput2" type='file' name='images' onChange={onSelectFile2} style={{ display: 'none' }} />
                </div>
            </div>
            <div>
            {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
            {selectedImage3 ? (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${selectedImage3})`,  backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed lg:mt-[5rem] xs:mt-[10rem]' onClick={handleImageClick3}>
                        <div className='flex justify-center items-center h-[100vh] text-content'>
                            <div className='bg-[#faf8f1] py-[70px] lg:px-[30px] px-[20px] lg:w-[50%] xs:w-[90%] flex justify-center items-center'>
                                <div>
                                    <h1 className='text-center lg:text-[40px] xs:text-[27px] lg:leading-[55px] xs:leading-[40px] font-[200] lg:w-[60%] lg:ms-[7rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                    onClick={handleElementClick}
                                    >
                                        A Fresh and Seasonal Cuisine
                                    </h1>
                                    <p className='mt-[2rem] lg:ms-[5rem] text-center text-[16px] leading-[24px] text-[#7c6c50] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                        onClick={handleElementClick}
                                    >
                                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                                    </p>
                                    <h3 className='mt-[3rem] flex justify-center items-center'>
                                        <Link to='/LawrenceEditAbout' className='text-[#fff] text-[16px] hover:text-[#fff] font-[400] no-underline bg-[#7c6c50] hover:bg-[#493f30] py-[15px] px-[50px]'
                                        >
                                            About Lawrence
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${restro3})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed lg:mt-[5rem] xs:mt-[10rem]' onClick={() => document.getElementById('fileInput3').click()}>
                        <div className='flex justify-center items-center h-[100vh] text-content'>
                            <div className='bg-[#faf8f1] py-[70px] lg:px-[30px] px-[20px] lg:w-[50%] xs:w-[90%] flex justify-center items-center'>
                                <div>
                                    <h1 className='text-center lg:text-[40px] xs:text-[27px] lg:leading-[55px] xs:leading-[40px] font-[200] lg:w-[60%] lg:ms-[7rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                    onClick={handleElementClick}
                                    >
                                        A Fresh and Seasonal Cuisine
                                    </h1>
                                    <p className='mt-[2rem] lg:ms-[5rem] text-center text-[16px] leading-[24px] text-[#7c6c50] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                        onClick={handleElementClick}
                                    >
                                        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                                    </p>
                                    <h3 className='mt-[3rem] flex justify-center items-center'>
                                        <Link to='/LawrenceEditAbout' className='text-[#fff] text-[16px] hover:text-[#fff] font-[400] no-underline bg-[#7c6c50] hover:bg-[#493f30] py-[15px] px-[50px]'
                                        >
                                            About Lawrence
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <input id="fileInput3" type='file' name='images' onChange={onSelectFile3} style={{ display: 'none' }} />
            </div>
            <div className='mt-[4rem] py-[30px] pb-[90px] lg:px-0 xs:px-[20px]'>
                <h2 className='font-Namdhinggo text-center font-[100] lg:text-[50px] xs:text-[40px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                     onClick={handleElementClick}
                >   
                    Reserve a Table
                </h2>
                <h3 className='text-center lg:text-[16px] xs:text-[14px] leading-[24px] font-[400] lg:mt-5 xs:mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                    onClick={handleElementClick}
                >
                    To help us find the best table for you, select the preferred party size, date, and time of your reservation.
                </h3>
                <form className='lg:flex justify-center gap-[1rem] items-center mt-[5rem]'>
                    <span>
                        <label className='font-Namdhinggo text-[17px]'>Party size</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] xs:w-[100%] lg:w-[320px] py-[12px] bg-[#faf8f1] px-[8px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1 guest</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6 guests</option>
                        </select>
                    </span>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-5'>Date</label><br/>
                        <input type="date" id="date" defaultValue={today} className='border-[1px] mt-2 border-solid border-[#a3a49f] xs:w-[100%] lg:w-[320px] py-[10px] bg-[#faf8f1] px-[8px] font-Namdhinggo text-[18px] outline-none' />
                    </span>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-5'>Time</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] lg:w-[320px] xs:w-[100%] py-[12px] bg-[#faf8f1] px-[8px] pr-[90px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:15 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:35 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:45 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:15 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:35 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:45 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:15 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:35 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:45 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>11:15 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>11:35 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>11:45 AM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>12:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>12:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>12:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>1:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>1:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>1:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>1:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>2:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>2:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>2:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>2:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>3:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>3:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>3:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>3:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>4:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>4:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>4:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>4:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>5:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>5:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>5:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>5:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>6:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>6:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>6:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>6:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>7:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>7:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>7:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>7:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>8:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:00 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:15 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:35 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>9:45 PM</option>
                            <option className='font-Namdhinggo xs:text-[14px] lg:text-[18px] text-[#7c6c50]'>10:00 PM</option>
                        </select>
                    </span>
                    <button type='submit' className='bg-[#7c6c50] py-[10px] px-[20px] mt-[2rem] text-[#fff]'>Find a Table</button>
                </form>
            </div>
            <Footer/>
        </div>
        {editableElement && (
                <div
                    className="editor-wrapper fixed h-[50vh] flex justify-center items-center top-0 left-[3rem]"
                >
                    <Editor
                        initialValue={editorContent}
                        apiKey="weyuzxfz4rnkmcfm9egz0vqo4qwek3fq6aucwzeudmatw48t"
                        init={{
                            height: 150,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>
            )}

            

    </>
  )
}

export default Homepage