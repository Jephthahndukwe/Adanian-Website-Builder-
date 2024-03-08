import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F2EDE6] lg:px-[50px] xs:px-[30px] pb-[3rem] pt-[3rem]'>
        <div className='flex flex-wrap lg:gap-0 xs:gap-[3rem] justify-between lg:ps-[16rem] items-center'>
            <div>
                <Link to='/DayDreamHome' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Home</Link><br/>
                <Link to='/DayDreamSales' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Sale</Link><br/>
                <Link to='/DayDreamAbout' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>About</Link><br/>
            </div>
            <div>
                <Link to='/DayDreamLookbook' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Lookbook</Link><br/>
                <Link to='/DayDreamAbout' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Our Story</Link><br/>
                <Link to='/DayDreamContact' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Contact</Link><br/>
            </div>
            <div>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Facebook</Link><br/>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Instagram</Link><br/>
               <Link to='/' className='text-[17px] font-Namdhinggo italic font-[100] text-[#4a573e] no-underline hover:text-[#4a573e]'>Pinterest</Link><br/>
            </div>
            <div>

            </div>
        </div>
        <div>
            <h2 className='mt-[4rem] text-[#4a573e] text-center font-Namdhinggo italic text-[16px] font-[100]'>©2024 by Day. DREAM. Powered and secured by <Link to='/' className='text-[#4a573e] text-center font-Namdhinggo italic hover:text-[#4a573e hover:text-[#4a573e]'>Adanian Labs</Link></h2>
        </div>
    </div>
  )
}

export default Footer