import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Reservation = () => {

 // Get today's date in the format YYYY-MM-DD
 const today = new Date().toISOString().split('T')[0];

   // State variables for each heading
const [heading9, setHeading9] = useState({ id: 'heading9', text: 'Make a reservation', color: '#000' });
const [heading10, setHeading10] = useState({ id: 'heading10', text: 'To help us find the best table for you, select the preferred party size, date, and time of your reservation.', color: '#000' });
const [heading11, setHeading11] = useState({ id: 'heading11', text: 'Choose an available time slot:', color: '#000' });
const [heading12, setHeading12] = useState({ id: 'heading12', text: '10:45 AM', color: '#000' });
const [heading13, setHeading13] = useState({ id: 'heading13', text: '10:45 AM', color: '#000' });
const [heading14, setHeading14] = useState({ id: 'heading14', text: '10:45 AM', color: '#000' });
const [heading15, setHeading15] = useState({ id: 'heading15', text: '10:45 AM', color: '#000' });
const [heading16, setHeading16] = useState({ id: 'heading16', text: '10:45 AM', color: '#000' });
const [heading17, setHeading17] = useState({ id: 'heading17', text: '10:45 AM', color: '#000' });
const [heading18, setHeading18] = useState({ id: 'heading18', text: '10:45 AM', color: '#000' });
const [heading19, setHeading19] = useState({ id: 'heading19', text: '10:45 AM', color: '#000' });
const [heading20, setHeading20] = useState({ id: 'heading20', text: '10:45 AM', color: '#000' });
const [heading21, setHeading21] = useState({ id: 'heading21', text: '10:45 AM', color: '#000' });
const [heading22, setHeading22] = useState({ id: 'heading22', text: '10:45 AM', color: '#000' });
const [heading23, setHeading23] = useState({ id: 'heading23', text: '10:45 AM', color: '#000' });
const [heading24, setHeading24] = useState({ id: 'heading24', text: '10:45 AM', color: '#000' });
const [heading25, setHeading25] = useState({ id: 'heading25', text: '10:45 AM', color: '#000' });
const [heading26, setHeading26] = useState({ id: 'heading26', text: '10:45 AM', color: '#000' });

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

const store = useSelector((state) => state.store)
    const { storeDetails } = store


     // SAVING DATA TO BACKEND
     const handleUpload = async () => {
        const formData = new FormData();

        const texts = {
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
          }
    
          console.log(texts);
    
    
            let stringifiedObject = JSON.stringify(texts);
            // let joiner = textArray.join("*")
            formData.append('template', 'Lawrence');
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
                toast.success('Reservation page saved successfully');
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
    <div>
        <TemplateEditNavbar handleUpload={handleUpload} />
        <div className='bg-[#faf8f1] pt-[2rem]'>
        <Navbar/>
        <div className='mt-[4rem] py-[30px] pb-[90px]'>
                <h2 className='font-Namdhinggo text-center font-[100] lg:text-[50px] xs:text-[40px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading9, setHeading9)} style={{ color: heading9.color}}>{heading9.text}</h2>
                <h3 className='text-center text-[16px] font-[400] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading10, setHeading10)} style={{ color: heading10.color}}>{heading10.text}</h3>
                <form>
                    <div className='lg:flex justify-center gap-[1rem] items-center mt-[5rem] px-[10px]'>
                    <span>
                        <label className='font-Namdhinggo text-[17px]'>Party size</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[12px] bg-[#faf8f1] px-[8px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1 guest</option>
                            <option selected className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6 guests</option>
                        </select>
                    </span><br/>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-4'>Date</label><br/>
                        <input type="date" id="date" defaultValue={today} className='border-[1px] mt-2 border-solid border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[10px] bg-[#faf8f1] px-[8px] font-Namdhinggo text-[18px] outline-none' />
                    </span><br/>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-4'>Time</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[12px] bg-[#faf8f1] px-[8px] pr-[90px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 PM</option>
                        </select>
                    </span>
                    </div>
                    <div className='xs:px-[20px] lg:px-[170px]'>
                            <div className='lg:w-[93%] xs:w-[100%] lg:ms-[2rem] h-[2px] bg-[#d6d5cf] mt-[5rem]' />
                                <div className='flex justify-center items-center lg:ms-[2rem]'>
                                    <div>
                                    <h3 className='lg:text-start xs:text-center mt-[3rem] text-[18px] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading11, setHeading11)} style={{ color: heading11.color}}>{heading11.text}</h3>
                                        <div className='flex flex-wrap items-center gap-[1rem] mt-[2rem]'>
                                        <div className='relative' onClick={() => openModal(heading12, setHeading12)} style={{ color: heading12.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]' >
                                                <span className='font-Namdhinggo text-[18px]'>{heading12.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading13, setHeading13)} style={{ color: heading13.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading13.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading14, setHeading14)} style={{ color: heading14.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading14.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading15, setHeading15)} style={{ color: heading15.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading15.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading16, setHeading16)} style={{ color: heading16.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading16.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading17, setHeading17)} style={{ color: heading17.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading17.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading18, setHeading18)} style={{ color: heading18.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading18.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading19, setHeading19)} style={{ color: heading19.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading19.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading20, setHeading20)} style={{ color: heading20.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading20.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading21, setHeading21)} style={{ color: heading21.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading21.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading22, setHeading22)} style={{ color: heading22.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading22.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading23, setHeading23)} style={{ color: heading23.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading23.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading24, setHeading24)} style={{ color: heading24.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading24.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading25, setHeading25)} style={{ color: heading25.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading25.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative' onClick={() => openModal(heading26, setHeading26)} style={{ color: heading26.color}}>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>{heading26.text}</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button type='submit' className='bg-[#7c6c50] py-[10px] px-[20px] mt-[3rem] text-[#fff]'>Reserve Now</button>
                                </div>
                    </div>
                </form>
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

export default Reservation