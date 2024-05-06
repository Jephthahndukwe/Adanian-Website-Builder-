import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro from '../../../../assets/images/restro.jpg'
import restro2 from '../../../../assets/images/restro2.png'
import restro3 from '../../../../assets/images/restro3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'


const Homepage = () => {

     // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const navigate = useNavigate()


   // State variables for each heading
const [heading1, setHeading1] = useState({ id: 'heading1', text: 'Restaurant & Bar', color: '#7c6c50' });
const [heading2, setHeading2] = useState({ id: 'heading2', text: 'Est. 2035', color: '#7c6c50' });
const [heading3, setHeading3] = useState({ id: 'heading3', text: 'Made With Love. Simply Delicious', color: '#000' });
const [heading4, setHeading4] = useState({ id: 'heading4', text: 'I’m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#7c6c50' });
const [heading5, setHeading5] = useState({ id: 'heading5', text: 'A Fresh and Seasonal Cuisine', color: '#000' });
const [heading6, setHeading6] = useState({ id: 'heading6', text: 'I’m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#7c6c50' });
const [heading7, setHeading7] = useState({ id: 'heading7', text: 'Reserve a Table', color: '#000' });
const [heading8, setHeading8] = useState({ id: 'heading8', text: 'A Fresh and Seasonal Cuisine', color: '#000' });

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
    formData.append('selectedImage2', file1);
    formData.append('selectedImage3', file1);

    const texts = {
        heading1: heading1,
        heading2: heading2,
        heading3: heading3,
        heading4: heading4,
        heading5: heading5,
        heading6: heading6,
        heading7: heading7,
        heading8: heading8,
      }

      console.log(texts);


        let stringifiedObject = JSON.stringify(texts);
        // let joiner = textArray.join("*")
        formData.append('template', 'Lawrence');
        formData.append('texts', stringifiedObject);
        console.log(formData);

    try {
        const res = axios.patch(`https://ayoba.adanianlabs.io/api/user/upload_file/${storeDetails.nameOfStore}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(res.data);

        if (res.data) {
            console.log(res.data)
            toast.success('Homepage saved successfully');
        } else {
            console.log(error)
            toast.error('Failed to save template, Please try again later.');
        }
    } catch (error) {
        console.error('Error uploading files:', error);
            toast.error('Failed to save template, Please try again later.');
    }
};

console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Lawrence') {
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
    <>
    <TemplateEditNavbar handleUpload={handleUpload} />
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            <div className='lg:flex gap-[3rem]'>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview || restro})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='lg:w-[90%] xs:w-[100%] h-[100vh] bg-fixed'>
                        <input type="file" onChange={handleImageChange} />
                    </div>
              <div className='lg:hidden xs:block mt-[5rem]'>
                <h2 className='text-[25px] text-center font-[400] font-Namdhinggo' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h2>
                <h2 className='text-[25px] text-center font-[400] font-Namdhinggo' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</h2>
              </div>
              <div className='lg:block xs:hidden'>
                    <h2 
                        className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' 
                        style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)`, color: heading1.color }} 
                        onClick={() => openModal(heading1, setHeading1)}>{heading1.text}
                    </h2>
                <div className='h-[50%] w-[1px] bg-[#7c6c50] mt-[3rem] ms-[0.7rem]' />
                <h2 className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo mt-[3rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)`, color: heading2.color }}
                     onClick={() => openModal(heading2, setHeading2)}>{heading2.text}
                </h2>
              </div>
            </div>
            <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] mt-[4rem]'>
                <div>
                    <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:w-[75%] lg:ms-[1rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                       onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}
                    </h1>
                    <p className='mt-[2rem] lg:ms-0 xs:ms-[2rem] text-center text-[16px] leading-[24px] text-[#7c6c50] w-[85%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                        onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}
                    </p>
                    <h3 className='mt-[3rem] flex justify-center items-center lg:ms-[-7rem]'>
                        <Link to='/LawrenceEditMenu' className='text-[#fff] text-[16px] font-[400] no-underline hover:text-[#fff] hover:bg-[#493f30] bg-[#7c6c50] py-[15px] px-[50px]'
                        >
                            View Menu
                        </Link>
                    </h3>
                </div>
                <div className='lg:mt-0 xs:mt-[7rem]'>
                        <input type="file" onChange={handleImageChange2} />
                        <img src={preview2 || restro2} alt="Frame" className="w-[100vw]" />
                </div>
            </div>
            <div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview3 || restro3})`,  backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed lg:mt-[5rem] xs:mt-[10rem]'>
                    <input type="file" onChange={handleImageChange3} />
                        <div className='flex justify-center items-center h-[100vh] text-content'>
                            <div className='bg-[#faf8f1] py-[70px] lg:px-[30px] px-[20px] lg:w-[50%] xs:w-[90%] flex justify-center items-center'>
                                <div>
                                    <h1 className='text-center lg:text-[40px] xs:text-[27px] lg:leading-[55px] xs:leading-[40px] font-[200] lg:w-[60%] lg:ms-[7rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                    onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}
                                    </h1>
                                    <p className='mt-[2rem] lg:ms-[5rem] text-center text-[16px] leading-[24px] text-[#7c6c50] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                                        onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}
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
            </div>
            <div className='mt-[4rem] py-[30px] pb-[90px] lg:px-0 xs:px-[20px]'>
                <h2 className='font-Namdhinggo text-center font-[100] lg:text-[50px] xs:text-[40px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                  onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}
                </h2>
                <h3 className='text-center lg:text-[16px] xs:text-[14px] leading-[24px] font-[400] lg:mt-5 xs:mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'
                    onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}
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
    </>
  )
}

export default Homepage