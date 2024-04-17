import React from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import Navbar from '../Components/Navbar'
import entertain1 from '../../../../assets/images/entertain1.png'
import entertain8 from '../../../../assets/images/entertain8.png'
import entertain9 from '../../../../assets/images/entertain9.png'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${entertain1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className='w-[100%] bg-fixed'>
            <Navbar/>
            <div className='pt-[5rem]'>
                <h1 className='text-[70px] ms-[21rem] w-[50%] font-[800] text-[#fff] text-center'>ABOUT Q PRODUCTIONS</h1>
                <p className='text-[16px] ms-[27.5rem] mt-[2rem] w-[35%] leading-[28px] text-[#fff] text-center'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                <div className='flex justify-center items-center mt-[5rem]'>
                    <div className='bg-[#000000b6] w-[90%] py-[90px] px-[250px]'>
                        <h1 className='text-center text-[50px] font-[700] text-[#FFF76A]'>Our Team</h1>
                        <div className='flex items-center gap-[1rem] mt-[5rem]'>
                            <div>
                                <img src={entertain8} />
                                <h3 className='text-[#FFF76A] text-[20px] font-[500] ms-[-2rem] text-center mt-[3rem]'>Jerry Shine</h3>
                                <p className='text-[#fff] text-[16px] w-[70%] text-center ms-[2rem] mt-[2rem] leading-[28px]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</p>
                            </div>
                            <div>
                                <img src={entertain9} />
                                <h3 className='text-[#FFF76A] text-[20px] font-[500] ms-[-2rem] text-center mt-[3rem]'>Jerry Shine</h3>
                                <p className='text-[#fff] text-[16px] w-[70%] text-center ms-[2rem] mt-[2rem] leading-[28px]'>I'm a paragraph. Click here to add your text and edit me. Let your users get to know you.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-[4rem]'>
                            <Link to='' className='bg-[#FFF76A] text-[#000] font-[600] py-[15px] px-[40px] no-underline hover:border-[1px] hover:border-solid hover:bg-transparent hover:border-[#FFF76A] hover:text-[#FFF76A]'>Let's Talk</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default About