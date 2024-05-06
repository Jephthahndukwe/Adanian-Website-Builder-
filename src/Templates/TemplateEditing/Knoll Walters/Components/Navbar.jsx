import React, { useState, useEffect } from 'react'
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

  const navbarTop = scrollPosition === 0 ? 'lg:top-[6rem] xs:top-[14rem]' : 'top-[0rem]';

  const [show, setShow] = useState(false)

  const toggleNavbar = () => {
    setShow(!show);
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
};

  return (
    <div className={`px-[100px] py-[10px] lg:flex xs:hidden justify-between items-center fixed z-[1000] bg-[#fff] w-[100%] ${navbarTop}`}>
        <h1>Logo</h1>
        <div>
            <ul className='flex gap-[2rem] items-center'>
                <li className='text-[14px] font-[400] font-Poppins'><Link to='#Home' className='no-underline text-[#000] hover:text-[#00305B]' onClick={() => handleScrollToSection('Home')}>HOME</Link></li>
                <li className='text-[14px] font-[400] font-Poppins'><Link to='#practice-area' className='no-underline text-[#000] hover:text-[#00305B]' onClick={() => handleScrollToSection('practice-area')}>PRACTICE AREA</Link></li>
                <li className='text-[14px] font-[400] font-Poppins'><Link to='#our-vision' className='no-underline text-[#000] hover:text-[#00305B]' onClick={() => handleScrollToSection('our-vision')}>OUR VISION</Link></li>
                <li className='text-[14px] font-[400] font-Poppins'><Link to='#our-attorney' className='no-underline text-[#000] hover:text-[#00305B]' onClick={() => handleScrollToSection('our-attorney')}>ATTORNEYS</Link></li>
                <li className='text-[14px] font-[400] font-Poppins'><Link to='#contact' className='no-underline text-[#000] hover:text-[#00305B]' onClick={() => handleScrollToSection('contact')}>CONTACT</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar