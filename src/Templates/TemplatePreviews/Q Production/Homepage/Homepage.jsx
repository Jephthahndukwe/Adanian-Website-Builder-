import React from 'react'
import TemplatePreviewNavbar from './../../../TemplateDashboard/TemplatePreviewNavbar';
import Navbar from '../Components/Navbar';
import entertain1 from '../../../../assets/images/entertain1.png'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${entertain1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='w-[100%] bg-fixed'>
          <Navbar/>
          <div className='text-center mt-[8rem] text-[#fff] pb-[5rem]'>
            <h3>We Are Q Productions</h3>
            <h3 className='mt-5 text-[75px] font-[700] w-[65%] ms-[14rem] leading-[100px]'>HERE TO CREATE MOMENTS THAT LAST A LIFETIME</h3>
            <p className='mt-[3.5rem]'><Link to='' className='bg-[#FFF76A] py-[18px] px-[30px] no-underline text-[16px] text-[#000] hover:text-[#FFF76A] hover:border-[1px] hover:border-solid hover:border-[#FFF76A] hover:bg-transparent font-[600] mt-[5rem]'>Upcoming Events</Link></p>
          </div>
          <Footer/>
        </div>
    </div>
  )
}

export default Homepage