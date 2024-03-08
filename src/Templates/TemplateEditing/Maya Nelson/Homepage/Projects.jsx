import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Components/Navbar';
import portfo2 from '../../../../assets/images/portfo2.png'
import portfo3 from '../../../../assets/images/portfo3.png'
import portfo4 from '../../../../assets/images/portfo4.png'
import Footer from '../Components/Footer';


const Projects = () => {

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
                <div className='bg-[#E6DACE] mt-[5rem] pt-[6rem] pb-[7rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Projects</h1>
                    </div>
                    <p className='lg:ms-[20rem] lg:mt-5 xs:mt-4 lg:text-[16px] xs:text-[17px] px-[20px] font-Urbanist font-[400] leading-[26px] lg:w-[53%] text-center tracking-[1px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <div className='lg:px-[330px] xs:px-[20px] mt-[5rem]'>
                        <div className='lg:flex items-center'>
                            <div className='bg-[#fff] lg:w-[170vw] h-[60vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[900]'>Project name 01</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]'>Role Title</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={portfo2} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] h-[60vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[900]'>Project name 02</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]'>Role Title</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={portfo3} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] h-[60vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[900]'>Project name 03</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]'>Role Title</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={portfo4} className='w-full h-[60vh]' />
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

export default Projects