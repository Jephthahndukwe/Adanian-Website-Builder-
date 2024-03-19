import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import restro from '../../../../assets/images/restro.jpg'
import restro2 from '../../../../assets/images/restro2.png'
import restro3 from '../../../../assets/images/restro3.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Homepage = () => {

    const [screenSize, setScreenSize] = useState('desktop');

     // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
    <div>
        <TemplateEditNavbar setScreenSize={setScreenSize} />
        <div className='bg-[#faf8f1] mt-[-3rem] pt-[2rem]'>       
            <Navbar setScreenSize={setScreenSize}/>
            <div className='lg:flex gap-[3rem]'>
              <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${restro})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='lg:w-[90%] xs:w-[100%] h-[100vh] bg-fixed' />
              <div className={`${screenSize === 'desktop' ? 'lg:hidden' : 'xs:block'} mt-[5rem]`}>
                <h2 className='text-[#7c6c50] text-[25px] text-center font-[400] font-Namdhinggo'>Restaurant & Bar</h2>
                <h2 className='text-[#7c6c50] text-[25px] text-center font-[400] font-Namdhinggo'>Est. 2035</h2>
              </div>
              {screenSize === 'desktop' && (
              <div className='lg:block xs:hidden'>
                <h2 className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo' style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)` }}>Restaurant & Bar</h2>
                <div className='h-[50%] w-[1px] bg-[#7c6c50] mt-[3rem] ms-[0.7rem]' />
                <h2 className='text-[#7c6c50] text-[20px] font-[400] font-Namdhinggo mt-[3rem]' style={{ writingMode: `vertical-rl`, textOrientation: `mixed`, transform: `rotate(180deg)` }}>Est. 2035</h2>
              </div>
               )}
            </div>
            <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] mt-[4rem]'>
                <div>
                    <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:w-[70%] lg:ms-[3rem]'>Made With Love. Simply Delicious</h1>
                    <p className='mt-[2rem] lg:ms-0 xs:ms-[2rem] text-center text-[16px] leading-[24px] text-[#7c6c50] w-[85%]'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <h3 className='mt-[3rem] flex justify-center items-center lg:ms-[-7rem]'><Link to='/LawrenceMenu' className='text-[#fff] text-[16px] font-[400] no-underline hover:text-[#fff] hover:bg-[#493f30] bg-[#7c6c50] py-[15px] px-[50px]'>View Menu</Link></h3>
                </div>
                <div className='lg:mt-0 xs:mt-[7rem]'>
                    <img src={restro2} className='w-[100vw]' />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${restro3})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed lg:mt-[5rem] xs:mt-[10rem]'>
                <div className='flex justify-center items-center h-[100vh] text-content'>
                    <div className='bg-[#faf8f1] py-[70px] lg:px-[30px] px-[20px] lg:w-[50%] xs:w-[90%] flex justify-center items-center'>
                        <div>
                            <h1 className='text-center lg:text-[40px] xs:text-[27px] lg:leading-[55px] xs:leading-[40px] font-[200] lg:w-[60%] lg:ms-[7rem]'>A Fresh and Seasonal Cuisine</h1>
                            <p className='mt-[2rem] lg:ms-[5rem] text-center text-[16px] leading-[24px] text-[#7c6c50] lg:w-[70%]'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <h3 className='mt-[3rem] flex justify-center items-center'><Link to='/LawrenceAbout' className='text-[#fff] text-[16px] hover:text-[#fff] font-[400] no-underline bg-[#7c6c50] hover:bg-[#493f30] py-[15px] px-[50px]'>About Lawrence</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[4rem] py-[30px] pb-[90px] lg:px-0 xs:px-[20px]'>
                <h2 className='font-Namdhinggo text-center font-[100] lg:text-[50px] xs:text-[40px]'>Reserve a Table</h2>
                <h3 className='text-center lg:text-[16px] xs:text-[14px] leading-[24px] font-[400] lg:mt-5 xs:mt-4'>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</h3>
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
    </div>
    </>
  )
}

export default Homepage