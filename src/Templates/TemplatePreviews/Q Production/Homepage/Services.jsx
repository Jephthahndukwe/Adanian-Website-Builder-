import React from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import entertain1 from '../../../../assets/images/entertain1.png'
import entertain2 from '../../../../assets/images/entertain2.png'
import entertain3 from '../../../../assets/images/entertain3.png'
import entertain4 from '../../../../assets/images/entertain4.png'
import entertain5 from '../../../../assets/images/entertain5.png'
import entertain6 from '../../../../assets/images/entertain6.png'
import entertain7 from '../../../../assets/images/entertain7.png'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'


const Services = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${entertain1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='w-[100%] bg-fixed'>
            <Navbar/>
            <div className='mt-[5rem]'>
                <h3 className='text-[65px] font-[700] text-[#fff] text-center'>OUR SERVICES</h3>
                <div className='flex justify-center items-center'>
                    <div className='bg-[#000000b6] mt-[8rem] w-[90%]'>
                        <div className='flex items-center gap-[1rem] px-[120px] mt-[-3rem]'>
                            <div>
                                <img src={entertain2} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Live Events</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                            <div>
                                <img src={entertain4} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Strategy & Concept</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                            <div>
                                <img src={entertain5} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Event Design</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-[1rem] px-[120px] mt-[5rem] pb-[5rem]'>
                            <div>
                                <img src={entertain7} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Culinary Services</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                            <div>
                                <img src={entertain6} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Music Services</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                            <div>
                                <img src={entertain3} />
                                <div className='mt-[3rem]'>
                                    <h2 className='text-[#FFF76A] text-[20px] text-center'>Bar Services</h2>
                                    <h3 className='w-[75%] text-[#fff] text-[16px] text-center leading-[28px] font-[300] ms-[2rem] mt-[2rem]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-[#FFF76A] w-[90%] py-[80px] px-[20px]'>
                        <h1 className='text-[70px] w-[60%] text-[#000] font-[800] ms-[14rem] text-center'>PLANNING YOUR NEXT EVENT?</h1>
                        <div className='flex justify-center items-center mt-[3rem]'>
                            <div className='flex items-center gap-[2rem]'>
                                <Link to='' className='bg-[#000] text-[#FFF76A] font-[500] py-[15px] px-[50px] no-underline hover:border-[1px] hover:border-solid hover:bg-transparent hover:border-[#000] hover:text-[#000]'>Let's Talk</Link>
                                <Link to='' className='border-[1px] border-solid border-[#000] font-[500] text-[#000] py-[15px] px-[30px] no-underline hover:bg-[#000] hover:text-[#FFF76A]'>See Our Events</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Services