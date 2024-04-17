import React from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import Navbar from '../Components/Navbar'
import entertain1 from '../../../../assets/images/entertain1.png'


const Contact = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${entertain1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='w-[100%] bg-fixed'>
          <Navbar/>
          <div className='mt-[5rem]'>
            <h1 className='text-[70px] ms-[21rem] w-[50%] font-[800] text-[#fff] text-center'>CONTACT US</h1>
            <div className='flex justify-center items-center mt-[5rem]'>
              <div className='bg-[#000000b6] w-[90%] py-[90px] px-[100px]'>
                <h3 className='text-center text-[50px] font-[700] text-[#FFF76A]'>Let's Plan Your Next Event</h3>
                <div className='flex items-center justify-between px-[180px] mt-[4rem]'>
                  <div>
                    <h3 className='text-[#FFF76A] text-[18px] text-center'>Phone</h3>
                    <h4 className='text-[#fff] text-[14px] text-center mt-[1rem]'>123-456-7890</h4>
                  </div>
                  <div>
                    <h3 className='text-[#FFF76A] text-[18px] text-center'>Address</h3>
                    <h4 className='text-[#fff] text-[14px] text-center mt-[1rem]'>500 Terry Francine St. SF, CA 9415</h4>
                  </div>
                  <div>
                    <h3 className='text-[#FFF76A] text-[18px] text-center'>Mail</h3>
                    <h4 className='text-[#fff] text-[14px] text-center mt-[1rem]'>info@mysite.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Contact