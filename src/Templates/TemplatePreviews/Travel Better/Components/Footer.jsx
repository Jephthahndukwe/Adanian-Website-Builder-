import React from 'react'
import img from '../../../../assets/images/footer-bg.jpg'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div>
        <div class="" style={{ background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div class="box-container flex flex-wrap items-center lg:gap-[20rem] xs:gap-[5rem] pt-[4rem] lg:px-[60px] xs:px-[20px] lg:ps-[8rem]">
                    <div class="">
                        <h3 className='text-[#fff] text-[1.5rem] capitalize pb-[1rem]'>quick links</h3>
                       <ul className='ms-[-2rem]'>
                            <li className='mt-3 flex items-center'>
                                <RiArrowRightSLine className='text-[#8e44ad] text-[1.2rem]' /> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>home</Link>
                            </li>
                            <li className='mt-3 flex items-center'>
                                <RiArrowRightSLine className='text-[#8e44ad] text-[1.2rem]' /> 
                                <Link to="about.html" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'> about</Link>
                            </li>
                            <li className='mt-3 flex items-center'>
                                <RiArrowRightSLine className='text-[#8e44ad] text-[1.2rem]'/> 
                                <Link to="package.html" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>package</Link>
                            </li>
                            <li className='mt-3 flex items-center'>
                                <RiArrowRightSLine className='text-[#8e44ad] text-[1.2rem]'/> 
                                <Link to="book.html" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>book</Link>
                            </li>
                       </ul>
                    </div>

                    <div class="box">
                        <h3 className='text-[#fff] text-[1.5rem] capitalize pb-[1rem]'>follow us</h3>
                        <ul className='ms-[-2rem]'>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaFacebookF className='text-[#8e44ad] text-[1rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>facebook </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaTwitter className='text-[#8e44ad] text-[1rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>twitter </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaInstagram className='text-[#8e44ad] text-[1rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>instagram </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaLinkedinIn className='text-[#8e44ad] text-[1rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>linkedin </Link>
                            </li>
                        </ul>
                    </div>
                        
                    <div class="box">
                        <h3 className='text-[#fff] text-[1.5rem] capitalize pb-[1rem]'>contact info</h3>
                        <ul className='ms-[-2rem]'>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaPhoneAlt className='text-[#8e44ad] text-[0.9rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'> +2341234567890 </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaPhoneAlt className='text-[#8e44ad] text-[0.9rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>+2341234567890 </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaEnvelope className='text-[#8e44ad] text-[0.9rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>jephthahndukwe@gmail.com </Link>
                            </li>
                            <li className='mt-3 flex items-center gap-2'>
                                <FaMapLocationDot className='text-[#8e44ad] text-[0.9rem]'/> 
                                <Link to="#" className='text-[#fff9] pr-[0rem] transition delay-[.2s] ease-linear hover:ps-[7px] no-underline text-[0.9rem] capitalize hover:text-[#fff9]'>Lagos, Nigeria - 100261 </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='w-[100%] mt-5 h-[2px] bg-[#fff9]'/>

            <div class="text-center pt-[1rem] pb-[2rem] lg:text-[1rem] xs:text-[0.7rem] text-[#fff] capitalize"> © 2035 Travel Better. Powered and secured by <Link to='/travelbetter' className='text-[#8e44ad] hover:text-[#8e44ad]'>Adanian Labs</Link></div>

        </div>
    </div>
  )
}

export default Footer