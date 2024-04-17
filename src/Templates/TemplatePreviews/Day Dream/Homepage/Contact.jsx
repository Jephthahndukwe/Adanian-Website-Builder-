import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar';
import Navbar from '../Component/Navbar';
import fash23 from '../../../../assets/images/fash23.png'
import fash24 from '../../../../assets/images/fash24.png'
import Footer from '../Component/Footer';

const Contact = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
            <TemplatePreviewNavbar/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] text-[#4a573e] font-[100] text-center italic font-Namdhinggo'>Contact</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] text-[#4a573e] italic text-center mt-3'>I'm a paragraph. Click here to add your own text.</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] lg:mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[5rem] lg:px-0 xs:px-[40px]'>
                                        <img src={fash23} className='relative' />
                                        <img src={fash24} className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-20rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]' />
                                    </div>
                                </div>
                                <div className='bg-[#F2EDE6] lg:w-[50vw] xs:w-[100vw] lg:pb-0 xs:pb-[5rem] lg:h-[170vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[4rem] xs:px-[2rem] xs:pt-[5rem] pr-[4rem]'>
                                        <h1 className='text-[#4a573e] text-start font-Namdhinggo italic xs:text-[26px] lg:text-[24px] font-[100]'>Visit Our Flagship Store</h1>
                                        <div className='lg:flex gap-[1rem] items-center pr-[5rem] mt-4'>
                                           <div>
                                                <p className='text-[#4a573e] text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] lg:w-[70%] '>500 Terry Francine Street San Francisco, CA 94158</p>
                                           </div>
                                            <div>
                                                <p className='text-[#4a573e] text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center'><span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic'>Mail: </span> info@mysite.com</p>
                                                <p className='text-[#4a573e] text-start font-Namdhinggo italic lg:text-[16px] xs:text-[17px] font-[100] flex gap-1 items-center -mt-4'><span className='font-[600] lg:text-[16px] xs:text-[17px] font-Namdhinggo italic'>Tel: </span> 123-456-7890</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className='text-[#4a573e] text-start font-Namdhinggo italic lg:text-[24px] xs:text-[26px] font-[100] lg:mt-[2rem] xs:mt-[5rem]'>Write Us</h2>
                                              <form className='mt-3'>
                                                <label htmlFor='first name' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>First Name</label><br/>
                                                <input type='text' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='Last Name' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Last Name</label><br/>
                                                <input type="text" className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='email' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Email</label><br/>
                                                <input type='email' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100]' required /><br/>
                                                <label htmlFor='message' className='text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] mt-[1.5rem]'>Leave us a message...</label><br/>
                                                <textarea rows='3.5' cols='4' className='bg-transparent border-[1px] border-solid border-[#A6A99A] w-[100%] p-[15px] mt-1 outline-none text-[#4a573e] text-start font-Namdhinggo italic text-[18px] font-[100] overflow-hidden resize-none' required></textarea>
                                                <button type='submit' className='bg-[#4A5145] hover:bg-[#373d33] py-[12px] px-[45px] mt-4 text-[#fff] text-center font-Namdhinggo italic text-[20px] font-[100]'>Submit</button>
                                              </form>
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

export default Contact