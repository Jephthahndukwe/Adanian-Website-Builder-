import React from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import Navbar from '../Components/Navbar'
import restro6 from '../../../../assets/images/restro6.jpg'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div className='bg-[#faf8f1] mt-[-3rem] pt-[2rem]'>
            <Navbar/>
            <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[80px] w-[90vw]'>
                <h2 className='font-Namdhinggo text-[60px] font-[100]'>Contact</h2>
            </div>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restro6})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[150vh] bg-fixed mt-[5rem]'>
                <div className='lg:flex justify-center items-center h-[150vh]'>
                    <form className='text-[#fff] lg:pt-0 xs:pt-[5rem]'>
                        <h1 className='font-Namdhinggo text-[50px] lg:w-[60%] text-center lg:ms-[14rem]'>We Welcome Your Feedback</h1>
                       <div className='lg:ms-[7rem] mt-[4rem] lg:px-0 xs:px-[20px]'>
                       <div className='lg:flex gap-[1rem]'>
                        <span>
                            <label>First Name</label><br/>
                            <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span><br/>
                        <span>
                            <label className='xs:mt-4 lg:mt-0'>Last Name</label><br/>
                            <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span><br/>
                        <span>
                            <label className='xs:mt-4 lg:mt-0'>Email</label><br/>
                            <input type='email' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span>
                        </div>
                        <br/>
                        <label>Subject</label><br/>
                        <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] w-[100%] mt-2 outline-none' /><br/>
                        <label className='mt-[1rem]'>Leave us a message...</label><br/>
                        <textarea type='text' rows='6' cols='4' className='bg-transparent border-[2px] border-solid overflow-hidden resize-none border-[#d6d5cf] mt-2 w-[100%] p-[5px]  text-start outline-none' />
                        <button type='submit' className='bg-[#7c6c50] w-[100%] p-[10px] mt-4 hover:bg-[#493f30]'>Submit</button>
                       </div>
                    </form>
                </div>
            </div>
            <div className='mt-[7rem] pb-[5rem] lg:px-0 xs:px-[10px]'>
                <h2 className='text-center font-Namdhinggo text-[45px]'>Come Visit Us</h2>
                <p className='text-center lg:w-[37%] lg:ms-[27rem] mt-[2rem] font-Namdhinggo text-[19px] leading-[30px]'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Body placeholder for text paragraph. A paragraph is a self-contained unit of text.</p>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default Contact