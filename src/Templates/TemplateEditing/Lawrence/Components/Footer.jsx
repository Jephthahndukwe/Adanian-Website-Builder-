import React from 'react'
import { FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { FaTripadvisor } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#090f0f] py-[70px] pb-[100px] lg:px-[130px] xs:px-[20px] pt-[8rem] flex justify-center items-center'>
        <div>
            <div className='flex flex-wrap justify-between items-center'>
                <div>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo'>Address</h2>
                    <h4 className='text-[22px] w-[55%] leading-[30px] mt-[2rem] text-[#fff] font-[100] font-Namdhinggo'>500 Terry Francine Street San Francisco, CA 94158</h4>
                </div>
                <div className='lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo'>Contact Us</h2>
                    <h3 className='text-[22px] leading-[30px] mt-[2rem] w-[50%] text-[#fff] font-[100] font-Namdhinggo'>info@mysite.com 123 456 6780</h3>
                </div>
                <div className='lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo'>Opening Hours</h2>
                    <h3 className='text-[22px] leading-[30px] mt-[2rem] text-[#fff] font-[100] font-Namdhinggo'>Mon - Fri: 11am - 10pm</h3>
                    <h3 className='text-[22px] leading-[30px] text-[#fff] font-[100] font-Namdhinggo'>Sat - Sun: 11am - 12am</h3>
                </div>
            </div>
            <div className='w-[100%] h-[1px] bg-[#fff] mt-[3rem]' />
            <div className='flex flex-wrap justify-between items-center mt-[3rem]'>
                <h3 className='text-[18px] text-[#fff] font-[100] leading-[24px] text-center font-Namdhinggo'>© 2035 Lawrence. Powered and secured by <Link to='/' className='text-[18px] text-[#fff] font-[100] font-Namdhinggo hover:text-[#fff]'>Adanian Labs</Link></h3>
                <div className='flex gap-[10px] items-center lg:ms-0 xs:ms-[7.5rem] lg:mt-0 xs:mt-[3rem]'>
                    <FaTwitter className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                    <FaInstagram className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                    <FaTripadvisor className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer