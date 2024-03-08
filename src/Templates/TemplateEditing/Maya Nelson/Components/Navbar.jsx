import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarTop = scrollPosition === 0 ? 'lg:top-[0] xs:top-[0]' : 'top-[0rem]';

  const [show, setShow] = useState(false)

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className={`bg-[#fff] w-[100vw] fixed z-[1000] ${navbarTop}`}>
        <div className='lg:px-[60px] xs:px-[20px] py-[20px]'>
        <div className='lg:flex justify-between items-center'>
            <div className='lg:flex gap-2 items-center'>
                <div className='flex gap-2 items-center'>
                  <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                  <h1 className='lg:text-[25px] xs:text-[22px] font-Urbanist font-[800] mt-2 lg:block xs:hidden'><Link to='/MayaNelsonEditHome' className='text-[#000] hover:text-[#000] no-underline'>Maya Nelson</Link></h1>
                  <div className='xs:flex lg:hidden justify-between items-center w-[100vw]'>
                    <h1 className='lg:text-[25px] xs:text-[22px] font-Urbanist font-[800] mt-2'><Link to='/MayaNelsonEditHome' className='text-[#000] hover:text-[#000] no-underline'>Maya Nelson</Link></h1>
                    <HiBars3BottomRight className='text-[40px] lg:hidden xs:block' onClick={toggleNavbar} />
                  </div>
                </div>
                <h2 className='text-[18px] mt-[10px] font-[300] lg:block xs:hidden'>/</h2>
                <h2 className='text-[18px] font-[300] lg:mt-[12px]'><Link to='/MayaNelsonEditHome' className='text-[#000] hover:text-[#000] no-underline'>PROJECT MANAGER</Link></h2>
            </div>
            <div className='mt-4 lg:block xs:hidden'>
                <ul className='flex items-center gap-[2rem]'>
                    <li><Link to='/MayaNelsonEditHome' className='text-[16px] font-Urbanist font-[400] text-[#000] no-underline hover:text-blue-600'>ABOUT ME</Link></li>
                    <li><Link to='/MayaNelsonEditResume' className='text-[16px] font-Urbanist font-[400] text-[#000] no-underline hover:text-blue-600'>RESUME</Link></li>
                    <li><Link to='/MayaNelsonEditProjects' className='text-[16px] font-Urbanist font-[400] text-[#000] no-underline hover:text-blue-600'>PROJECTS</Link></li>
                    <li><Link to='/MayaNelsonEditContact' className='text-[16px] font-Urbanist font-[400] text-[#000] no-underline hover:text-blue-600'>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    </div>
    {
              show ?
                <div className='transition ease-in-out duration-1000 lg:hidden xs:block absolute top-[-0.5rem] w-[100vw] h-[110vh] pt-[3rem] bg-[#E6DACE]'>
                  <div className='flex justify-end items-end px-[2rem]'><FaTimes className='text-[25px]' onClick={toggleNavbar}/></div>
                  <ul className='lg:flex items-center gap-[2rem] text-center ms-[-3rem]'>
                      <li className='mt-[3.5rem]'><Link to='/MayaNelsonEditHome' className='lg:text-[16px] xs:text-[22px] font-Urbanist font-[600] text-[#000] no-underline hover:text-blue-600'>ABOUT ME</Link></li>
                      <li className='mt-[3.5rem]'><Link to='/MayaNelsonEditResume' className='lg:text-[16px] xs:text-[22px] font-Urbanist font-[600] text-[#000] no-underline hover:text-blue-600'>RESUME</Link></li>
                      <li className='mt-[3.5rem]'><Link to='/MayaNelsonEditProjects' className='lg:text-[16px] xs:text-[22px] font-Urbanist font-[600] text-[#000] no-underline hover:text-blue-600'>PROJECTS</Link></li>
                      <li className='mt-[3.5rem]'><Link to='/MayaNelsonEditContact' className='lg:text-[16px] xs:text-[22px] font-Urbanist font-[600] text-[#000] no-underline hover:text-blue-600'>CONTACT</Link></li>
                  </ul>
              </div>
             : null
            }
    </div>
  )
}

export default Navbar