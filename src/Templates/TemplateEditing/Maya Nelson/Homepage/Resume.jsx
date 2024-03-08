import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Resume = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  return (
    <Transition
      show={show}
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
        <div>
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
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[800]'>2035 - Present</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2'>JOB POSITION</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Company Name</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Company Location</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4'>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                    <div className='w-[50%] lg:mt-[-5rem]'>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[800]'>2035 - Present</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2'>JOB POSITION</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Company Name</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Company Location</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4'>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[7rem]'>
                            <h2 className='text-[27px] font-Urbanist font-[900]'>Education</h2>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist text-blue-600 font-[800]'>2035 - 2035</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2'>UNIVERSITY NAME</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Degree Level</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>University Location</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4'>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist text-blue-600 font-[800]'>2035 - 2035</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2'>UNIVERSITY NAME</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>Degree Level</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3'>University Location</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4'>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                            <h2 className='text-[25px] font-Urbanist font-[800]'>Professional skillset</h2>
                            <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>Entrepreneurial Mindset</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>Go-to-Market Planning</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>Teamwork & Collaboration</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-8rem] lg:-ms-5'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>Digital Analytics</h1>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='text-[25px] font-Urbanist font-[800] lg:mt-[5rem]'>Languages</h2>
                                <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>English (native)</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>French (proficient)</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]'>Spanish (proficient)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </Transition>
  )
}

export default Resume