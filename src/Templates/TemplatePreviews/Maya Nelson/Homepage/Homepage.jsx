import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import portfo1 from '../../../../assets/images/portfo1.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react';
import Footer from '../Components/Footer'
import axios from 'axios'
import toast from 'react-hot-toast'

const Homepage = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ayoba.adanianlabs.io/api/user/getwebsite/Chika Store');
      // setData(response.data);

      if(response.data.template == 'Maya Nelson') {
          setData(response.data);
      }

      console.log(response.data)

      if(response.data) {
            console.log('fetched successfully')
            setTimeout(() => {
              toast.success('Fetched Successfully');
            }, 1000);
      } else {
          console.log('Error fetching')
          setTimeout(() => {
            toast.error('Error Fetching');
          }, 1000);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <Transition
      show={show}
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
        {data && (
    <div>
        <TemplatePreviewNavbar/>
        <div className='lg:mt-[-3rem]'>
            <div>
                <Navbar/>
            </div>
            <div className='lg:flex items-center'>
                <div className='bg-[#E6DACE] lg:w-[80vw] xs:w-[100vw] lg:h-[150vh] xs:h-[120vh] lg:mt-[5rem] xs:mt-[27rem] lg:flex gap-[4rem] items-center'>
                    <div className='bg-[#f4ece6] lg:shadow-xl xs:shadow-2xl lg:w-[30vw] xs:w-[90%] absolute lg:ms-[14rem] xs:ms-[1.5rem] lg:mt-0 xs:mt-[-19rem]'>
                            <div className='flex items-center justify-center py-[50px] px-[20px]'>
                                <div>
                                    <img src={data.data.images.selectedImage1 ? data.data.images.selectedImage1 : portfo1} className='rounded-[100px] lg:ms-4 xs:ms-12'/>
                                    <h2 className='text-[28px] text-center font-Urbanist font-[900] mt-4' style={{ color: data.data && data.data.texts && data.data.texts.heading1 ? data.data.texts.heading1.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading1 ? data.data.texts.heading1.text : 'Maya Nelson'}</h2>
                                    <div className='w-[30%] h-[2px] bg-blue-600 mt-4 lg:ms-[5rem] xs:ms-[6.3rem]'/>
                                    <h3 className='lg:block xs:hidden text-[20px] font-[300] font-Urbanist mt-[2rem] tracking-[5px]' style={{ color: data.data && data.data.texts && data.data.texts.heading2 ? data.data.texts.heading2.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading2 ? data.data.texts.heading2.text : 'PROJECT MANAGER'}</h3>
                                    <div className='xs:flex gap-2 items-center mt-[3rem] lg:hidden'>
                                        <Link to='/MayaNelsonResume' className='bg-blue-600 py-[9px] px-[40px] rounded-[100px] hover:bg-[#fff] hover:border-[1px] hover:border-solid hover:border-[#000] hover:text-[#000] text-[15px] font-Urbanist font-[600] no-underline text-[#fff]'>RESUME</Link>
                                        <Link to='/MayaNelsonProjects' className='border-[1px] border-solid border-[#000] py-[9px] px-[40px] rounded-[100px] hover:bg-blue-600 hover:text-[#fff] hover:border-none text-[15px] font-Urbanist font-[600] no-underline text-[#000]'>PROJECTS</Link>
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
                    <h1 className='lg:text-[100px] xs:text-[60px] font-Urbanist font-[900] text-start' style={{ color: data.data && data.data.texts && data.data.texts.heading3 ? data.data.texts.heading3.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading3 ? data.data.texts.heading3.text : 'Hello'}</h1>
                    <h3 className='lg:text-[25px] xs:text-[20px] font-Urbanist font-[600] text-start mt-2' style={{ color: data.data && data.data.texts && data.data.texts.heading4 ? data.data.texts.heading4.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading4 ? data.data.texts.heading4.text : 'Heres who I am & what I do'}</h3>
                    <div className='lg:flex gap-2 items-center lg:mt-[2rem] xs:hidden'>
                        <Link to='/MayaNelsonResume' className='bg-blue-600 py-[6px] px-[40px] rounded-[100px] hover:bg-[#fff] hover:border-[1px] hover:py-[5px] hover:border-solid hover:border-[#000] hover:text-[#000] text-[15px] font-Urbanist font-[600] no-underline text-[#fff]'>RESUME</Link>
                        <Link to='/MayaNelsonProjects' className='border-[1px] border-solid border-[#000] py-[6px] px-[40px] rounded-[100px] hover:bg-blue-600 hover:py-[5px] hover:text-[#fff] hover:border-none text-[15px] font-Urbanist font-[600] no-underline text-[#000]'>PROJECTS</Link>
                    </div>
                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist font-[400] leading-[26px] tracking-wider lg:w-[50%] xs:w-[95%] mt-[3rem]' style={{ color: data.data && data.data.texts && data.data.texts.heading5 ? data.data.texts.heading5.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading5 ? data.data.texts.heading5.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'}</p>
                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist font-[400] leading-[26px] lg:w-[50%] xs:w-[95%] mt-[2rem]' style={{ color: data.data && data.data.texts && data.data.texts.heading6 ? data.data.texts.heading6.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading6 ? data.data.texts.heading6.text : 'I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                </div>
            </div>
            <div className='lg:mt-0 xs:mt-[5rem]'>
             <Footer/>
            </div>
        </div>
    </div>
        )}
    </Transition>
  )
}

export default Homepage