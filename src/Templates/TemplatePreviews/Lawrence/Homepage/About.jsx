import React from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import Navbar from '../Components/Navbar'
import restro4 from '../../../../assets/images/restro4.jpg'
import restro5 from '../../../../assets/images/restro5.png'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div className='bg-[#faf8f1] mt-[-3rem] pt-[2rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[50px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100]'>About Us</h2>
                </div>
                <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restro4})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed mt-[5rem]'>
                    <div className='lg:flex justify-center items-center h-[100vh] lg:px-0 xs:px-[20px] lg:pt-0 xs:pt-[5rem]'>
                        <div>
                            <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[40px] lg:ms-[32rem] lg:text-start xs:text-center text-[#fff]'>The Restaurant</h2>
                            <p className='text-[#fff] lg:text-[16px] xs:text-[14.5px] mt-[2rem] lg:ms-[18rem] lg:w-[55%] leading-[28px] text-center'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out</p>
                        </div>
                    </div>
                </div>
                <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] xs:px-[10px] mt-[5rem] pb-[6rem]'>
                    <div>
                        <img src={restro5} className='w-[180vw]' />
                    </div>
                    <div className='lg:mt-0 xs:mt-[4rem]'>
                        <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:ms-[12rem]'>Our Kitchen</h1>
                        <p className='mt-[2rem] text-center text-[16px] leading-[24px] lg:ms-[5rem] text-[#7c6c50] lg:w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default About