import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='flex justify-center items-center mt-[-3rem]'>
         <div className='bg-[#000] pr-[4rem] py-[-10rem] flex justify-between items-center w-[90%]'>
        <div className='bg-[#FFF76A] px-[20px] py-[10px]'>
            <Link to='/qproductionHome' className='text-[#000] no-underline hover:text-[#000]'>
              <h1 className='text-[50px] font-[700] text-center'>Q</h1>
              <h3 className='text-center text-[14px]'>Productions</h3>
            </Link>
        </div>
        <div>
          <ul className='flex items-center gap-[3rem] mt-3'>
            <li><Link to='/qproductionServices' className='text-[#fff] no-underline text-[15px] hover:text-[#FFF76A]'>Services</Link></li>
            <li><Link to='/qproductionAbout' className='text-[#fff] no-underline text-[15px] hover:text-[#FFF76A]'>About</Link></li>
            <li><Link to='/qproductionContact' className='text-[#fff] no-underline text-[15px] hover:text-[#FFF76A]'>Contact</Link></li>
            <li><Link to='' className='text-[#fff] no-underline text-[15px] hover:text-[#FFF76A]'>Get Tickets</Link></li>
          </ul>
        </div>
        <div className='flex items-center gap-[2rem]'>
          <FaFacebookF className='text-[20px] text-[#fff]'/>
          <FaInstagram className='text-[20px] text-[#fff]'/>
        </div>
    </div>
      </div>
  )
}

export default Navbar