import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#fff] py-[40px] lg:px-[50px] xs:px-[20px]'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <h2 className='lg:text-[14px] xs:text-[16px] leading-[20px] font-Urbanist font-[400] lg:w-[55%] xs:w-[75%]'>© 2035 by Maya Nelson. Powered and secured by <Link to='/' className='text-[#000] hover:text-[#000]'>Adanian Labs</Link></h2>
            </div>
            <div className='flex flex-wrap lg:gap-[5rem] xs:gap-[4rem] items-center lg:mt-0 xs:mt-[4rem]'>
                <div>
                    <h2 className='lg:text-center xs:text-[20px] lg:text-[14px] font-Urbanist font-[800]'>Call</h2>
                    <h3 className='text-center xs:text-[18px] lg:text-[15px] font-Urbanist font-[400] mt-3'>123-456-7890</h3>
                </div>
                <div>
                    <h2 className='lg:text-center xs:text-[20px] lg:text-[14px] font-Urbanist font-[800]'>Write</h2>
                    <h3 className='text-center xs:text-[18px] lg:text-[15px] font-Urbanist font-[400] mt-3'>info@mysite.com</h3>
                </div>
                <div>
                    <h2 className='lg:text-center xs:text-[20px] lg:text-[14px] font-Urbanist font-[800]'>Follow</h2>
                    <div className='flex gap-3 mt-3'>
                        <FaFacebookF className='xs:text-[18px] lg:text-[15px]'/>
                        <FaTwitter className='xs:text-[18px] lg:text-[15px]'/>
                        <FaLinkedinIn className='xs:text-[18px] lg:text-[15px]'/>
                        <FaInstagram className='xs:text-[18px] lg:text-[15px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer