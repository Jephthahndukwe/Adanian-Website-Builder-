import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import Navbar from '../Component/Navbar';
import fashSale1 from '../../../../assets/images/fashSale1.webp'
import fashSale2 from '../../../../assets/images/fashSale2.webp'
import fashSale3 from '../../../../assets/images/fashSale3.webp'
import fashSale4 from '../../../../assets/images/fashSale4.webp'
import fashSale5 from '../../../../assets/images/fashSale5.webp'
import fashSale6 from '../../../../assets/images/fashSale6.webp'
import fashSale7 from '../../../../assets/images/fashSale7.webp'
import fashSale8 from '../../../../assets/images/fashSale8.webp'
import fashSale9 from '../../../../assets/images/fashSale9.webp'
import fashSale10 from '../../../../assets/images/fashSale10.webp'
import fashSale11 from '../../../../assets/images/fashSale11.webp'
import fashSale12 from '../../../../assets/images/fashSale12.webp'
import fashSale13 from '../../../../assets/images/fashSale13.webp'
import fashSale14 from '../../../../assets/images/fashSale14.webp'
import fashSale15 from '../../../../assets/images/fashSale15.webp'
import fashSale16 from '../../../../assets/images/fashSale16.webp'
import fashSale17 from '../../../../assets/images/fashSale17.webp'
import fashSale18 from '../../../../assets/images/fashSale18.webp'
import fashSale19 from '../../../../assets/images/fashSale19.webp'
import fashSale20 from '../../../../assets/images/fashSale20.webp'
import fashSale21 from '../../../../assets/images/fashSale21.webp'
import fashSale22 from '../../../../assets/images/fashSale22.webp'
import Footer from '../Component/Footer';



const Sales = () => {

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
            <TemplateEditNavbar/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] text-[#4a573e] font-[100] text-center italic font-Namdhinggo'>See Through Our Collections</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] text-[#4a573e] italic text-center mt-3'>I'm a paragraph. Click here to add your own text.</p>
                </div>
                <div className='mb-[5rem]'>
                <div className='flex flex-wrap lg:ms-[9rem] gap-[2rem] mt-[5rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={fashSale1} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 1"/>
                        <img src={fashSale2} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 2"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={fashSale3} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 3"/>
                        <img src={fashSale4} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 4"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={fashSale5} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 5"/>
                        <img src={fashSale6} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 6"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={fashSale9} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 9"/>
                        <img src={fashSale10} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 10"/>
                    </div>
                </div>
                <div className='flex flex-wrap lg:ms-[9rem] lg:mt-[27rem] gap-[2rem] xs:mt-[37rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={fashSale12} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 12"/>
                        <img src={fashSale13} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 13"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={fashSale14} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 14"/>
                        <img src={fashSale15} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 15"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={fashSale18} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 18"/>
                        <img src={fashSale19} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 19"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[37rem]">
                        <img src={fashSale20} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 20"/>
                        <img src={fashSale21} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 21"/>
                    </div>
                </div>
                    <div className='lg:flex flex-wrap lg:ms-[9rem] mt-[27rem] gap-[2rem] xs:mt-[37rem] lg:px-0 xs:px-[2rem] items-center'>
                        <div className="relative w-full md:w-[70vw] lg:w-[20%]">
                            <img src={fashSale7} className="h-[60vh] xs:w-[50vh] lg:w-[100%]" alt="Fashion Sale 7"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale8} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 8"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale11} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 11"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale16} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 16"/>
                        </div>
                    </div>
                </div>
                


            </div>
            </div>
        </div>
       {/* <div className='relative'> */}
        <Footer/>
       {/* </div> */}
    </Transition>
  )
}

export default Sales