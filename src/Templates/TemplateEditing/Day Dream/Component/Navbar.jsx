import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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

  const navbarTop = scrollPosition === 0 ? '13rem' : '1rem';

  const [show, setShow] = useState(false)

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className='lg:flex lg:relative lg:mt-[-18rem] xs:fixed lg:top-[-25rem] xs:top-[13rem] z-[1000] justify-center' style={{ top: navbarTop }}>
        <div className='bg-[#f2ede6] lg:w-[95vw] xs:w-[100vw] lg:flex items-center justify-between lg:py-[8px] xs:py-[15px] lg:px-[30px] xs:px-[20px]'>
            <div className='lg:flex xs:hidden gap-[2rem] items-center list-none'>
                  <li><Link to='/DayDreamEditHome' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Home</Link></li>
                  <li><Link to='/DayDreamEditLookbook' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Lookbook</Link></li>
                  <li><Link to='/DayDreamEditAbout' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>About</Link></li>
                  <li><Link to='/DayDreamEditSales' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Sale</Link></li>
                  <li><Link to='/DayDreamEditContact' className='text-[16px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Contact</Link></li>
            </div>
            <div className='flex justify-between items-center'>
              <h2><Link to='/DayDreamEditHome' className='text-[22px] no-underline font-Namdhinggo italic font-[200] hover:text-[#4a573e] text-[#4a573e] -mt-5'>Day. <span className='font-[400] italic'>DREAM</span></Link></h2>
              <div>
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
              </div>
            </div>
            <div>
              <h2 className='text-[17px] font-Namdhinggo italic font-[200] text-[#4a573e] mt-1 lg:block xs:hidden'>@DayDream</h2>
            </div>
            {show ? 
              <div className='lg:hidden xs:block text-center pt-[3rem] w-[90vw] h-[100vh] bg-[#f2ede6] gap-[2rem] items-center list-none'>
                  <li className='mt-5'><Link to='/DayDreamEditHome' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Home</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditLookbook' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Lookbook</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditAbout' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>About</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditSales' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Sale</Link></li>
                  <li className='mt-5'><Link to='/DayDreamEditContact' className='lg:text-[16px] xs:text-[30px] no-underline font-Namdhinggo italic font-[200] text-[#4a573e] hover:text-[#4a573e]'>Contact</Link></li>
              </div> 
            : null
          }
        </div>
    </div>
  )
}

export default Navbar