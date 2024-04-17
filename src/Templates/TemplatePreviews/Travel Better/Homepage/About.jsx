import React from 'react'
import Navbar from '../Components/Navbar'
import bgimg from '../../../../assets/images/header-bg-1.png'
import abimg from '../../../../assets/images/about-img.jpg'
import { FaMap, FaHandshake, FaHeadset } from 'react-icons/fa'
import pic1 from '../../../../assets/images/pic-1.png'
import pic2 from '../../../../assets/images/pic-2.png'
import pic3 from '../../../../assets/images/pic-3.png'
import pic4 from '../../../../assets/images/pic-4.png'
import pic5 from '../../../../assets/images/pic-5.png'
import pic6 from '../../../../assets/images/pic-6.png'
import Footer from '../Components/Footer'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'

const About = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <Navbar/>
        <div class="h-[70vh]" style={{ background: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <h1 className='text-center lg:text-[6rem] xs:text-[3rem] pt-[20vh] uppercase text-[#fff]' style={{ textShadow: '0 1.5rem 3rem rgba(0,0,0,.3)' }}>About Us</h1>
        </div>

        <div className='mb-5 mt-[5rem] pb-[5rem]'>
            <div className='lg:flex items-center gap-[3rem] lg:px-[100px] xs:px-[20px]'>
                <div className='lg:w-[50%]'>
                    <img src={abimg} className='w-[100%]' />
                </div>
                <div className='lg:w-[50%] lg:mt-0 xs:mt-[3rem]'>
                    <h3 className='text-[2rem] text-[#222] text-center'>why choose us?</h3>
                    <p className='text-[1rem] text-[#777] leading-[2] py-[1rem] lg:px-[20px] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure numquam nulla iusto corporis dolor commodi libero, vitae obcaecati optio rerum ab culpa nesciunt, earum mollitia quasi ipsam non. Aliquid, iure.</p>
                    <p className='text-[1rem] text-[#777] leading-[2] lg:px-[20px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum, delectus voluptate aliquam quaerat iusto repellendus error nulla ab atque.</p>
                    <div className="mt-[2rem] flex gap-[1rem] items-center justify-center lg:px-0">
                        <div className="bg-[#eee] py-[8px] lg:px-[20px] xs:px-[10px]">
                            <div className='flex justify-center items-center'>
                                <FaMap className='text-[#8e44ad] text-[2rem]'/>
                            </div>
                            <span className='lg:text-[1rem] xs:text-[0.6rem] text-[#777] capitalize block mt-2'>top destinations</span>
                        </div>
                        <div className="bg-[#eee] py-[8px] lg:px-[20px] xs:px-[10px]">
                            <div className='flex justify-center items-center'>
                                <FaHandshake className='text-[#8e44ad] text-[2rem]' />
                            </div>
                            <span className='lg:text-[1rem] xs:text-[0.6rem] text-[#777] capitalize block mt-2'>affordable price</span>
                        </div>
                        <div className="bg-[#eee] py-[8px] lg:px-[20px] xs:px-[10px]">
                            <div className='flex justify-center items-center'>
                                <FaHeadset className='text-[#8e44ad] text-[2rem]' />
                            </div>
                            <span className='lg:text-[1rem] xs:text-[0.6rem] text-[#777] capitalize block mt-2'>24/7 guide service</span>
                        </div>
                </div>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default About