import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaPaperPlane, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [show, setShow] = useState(false)

  const toggleNavbar = () => {
    setShow(!show)
  }

  return (
    <div>
        <section className="sticky top-0 left-0 right-0 z-[1000] bg-[#fff] flex  items-center justify-between xs:py-[20px] lg:px-[50px] xs:px-[10px]" style={{ boxShadow: `0 .5rem 1rem rgba(0,0,0,.1)` }}>
            <div className='flex gap-[10rem] items-center'>
              <Link to="/travelbetterhome" className="text-[1.5rem] no-underline hover:text-[#222] text-[#222] flex items-center gap-3"><FaPaperPlane /> travelBetter</Link>
              <div className='xs:flex lg:hidden justify-end items-end'>
                {show ? (
                    <FaTimes
                      className='text-[25px] font-Namdhinggo'
                      onClick={toggleNavbar}
                    />
                    ) : (
                    <FaBars
                      className='text-[25px] font-Namdhinggo lg:hidden xs:flex'
                      onClick={toggleNavbar}
                    />
                  )}
                {/* <FaBars className=''/> */}
              </div> 
            </div>
            <div>
                <ul className='lg:flex mt-3 xs:hidden'>
                    <li><Link to="/travelbetterhome" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Home</Link></li>
                    <li><Link to="/travelbetterabout" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>About</Link></li>
                    <li><Link to="/travelbetterpackage" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Package</Link></li>
                    <li><Link to="/travelbetterbook" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Book</Link></li>
                </ul>
            </div>

            {show ? 
              <div className='absolute lg:hidden xs:block top-[3rem] bg-[#fff] left-0 w-[100%]'>
                  <ul className='mt-3 text-center ms-[-3rem]'>
                      <li className='mt-4'><Link to="/travelbetterhome" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Home</Link></li>
                      <li className='mt-4'><Link to="/travelbetterabout" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>About</Link></li>
                      <li className='mt-4'><Link to="/travelbetterpackage" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Package</Link></li>
                      <li className='mt-4'><Link to="/travelbetterbook" className='text-[1.2rem] no-underline ms-[2rem] text-[#222] hover:text-[#8e44ad]'>Book</Link></li>
                  </ul>
              </div>
            :null
          }
            
        </section>
    </div>
  )
}

export default Navbar