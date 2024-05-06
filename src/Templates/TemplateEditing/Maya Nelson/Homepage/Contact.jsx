import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Contact = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set show to true after the component is mounted to trigger the animation
      setShow(true);
    }, []);

    const store = useSelector((state) => state.store)
    const { storeDetails } = store

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
            <TemplateEditNavbar />
            <div>
                <div>
                    <Navbar/>
                </div>
                <div className='bg-[#E6DACE] mt-[5rem] pt-[6rem] pb-[7rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Let's talk</h1>
                    </div>
                    <div className='lg:px-[330px] xs:px-[20px] mt-[5rem]'>
                        <div className='py-[5rem] lg:px-[5rem] xs:px-[1rem] pb-[6rem] bg-[#fff] lg:w-[50vw] xs:w-[90vw]'>
                            <form>
                                <div className='lg:flex items-center justify-between'>
                                    <span>
                                        <label className='text-[14px] font-Urbanist font-[900]'>First Name <span className='text-blue-600'>*</span></label><br/>
                                        <input type='text' className='bg-transparent border-b-[2px] border-b-solid border-b-[#000] hover:border-b-blue-600 mt-3 w-[100%] outline-none text-blue-600' required />
                                    </span>
                                    <span>
                                        <label className='text-[14px] font-Urbanist font-[900] lg:mt-0 xs:mt-[3rem]'>Last Name <span className='text-blue-600'>*</span></label><br/>
                                        <input type='text' className='bg-transparent border-b-[2px] border-b-solid border-b-[#000] hover:border-b-blue-600 mt-3 w-[100%] outline-none text-blue-600' required />
                                    </span>
                                </div>
                                <label className='text-[14px] font-Urbanist font-[900] mt-[3rem]'>Email <span className='text-blue-600'>*</span></label><br/>
                                <input type='email' className='bg-transparent border-b-[2px] border-b-solid border-b-[#000] hover:border-b-blue-600 mt-3 w-[100%] outline-none text-blue-600' required /><br/>
                                <label className='text-[14px] font-Urbanist font-[900] mt-[3rem]'>Subject</label><br/>
                                <input type='email' className='bg-transparent border-b-[2px] border-b-solid border-b-[#000] hover:border-b-blue-600 mt-3 w-[100%] outline-none text-blue-600' /><br/>
                                <label className='text-[14px] font-Urbanist font-[900] mt-[3rem]'>Message </label><br/>
                                <textarea rows='4' cols='4' className='bg-transparent border-b-[2px] border-b-solid border-b-[#000] hover:border-b-blue-600 mt-3 w-[100%] outline-none text-blue-600 overflow-hidden resize-none' />
                                <button type='submit' className='bg-blue-600 py-[8px] px-[40px] rounded-[100px] text-[#fff] text-[15px] mt-4 font-Urbanist font-[700] hover:bg-transparent hover:border-[2px] hover:border-solid hover:border-blue-600 hover:text-[#000]'>SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </Transition>
  )
}

export default Contact