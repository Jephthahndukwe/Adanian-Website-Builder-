import { Link } from 'react-router-dom'
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='lg:px-[90px] xs:px-[15px] py-[20px] '>
        <nav className='lg:flex gap-auto justify-between items-center bg-transparent'>
           <div className='flex justify-between items-center'>
              <Link to='/'><img src={Logo} className='xs:w-[80%] lg:w-[100%]' /></Link>
              <FaBarsStaggered onClick={() => setShowNav(true)} className='text-[#00AABC] text-[30px] lg:hidden xs:block hover:text-[#FB9613]'/>
           </div>
           <div className='lg:flex xs:hidden justify-between items-center gap-[120px] lg:bg-transparent xs:bg-[#000] lg:p-0 xs:p-[20px] xs:absolute lg:relative left-0 top-0 lg:w-auto xs:w-[100%] text-center'>
                <ul className='lg:flex items-center gap-[40px] xs:pt-[4rem] lg:pt-3'>
                    <li className='lg:p-0 xs:p-[25px]'><Link to='/' className='text-[#fff] lg:text-[16px] no-underline xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'>Creation</Link></li>
                    <li className='lg:p-0 xs:p-[25px]'><Link to='/' className='text-[#fff] lg:text-[16px] no-underline xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'>Resources</Link></li>
                    <li className='lg:p-0 xs:p-[25px]'><Link to='/' className='text-[#fff] lg:text-[16px] no-underline xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'>Solution</Link></li>
                    <li className='lg:p-0 xs:p-[25px]'><Link to='/' className='text-[#fff] lg:text-[16px] no-underline xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'>Support</Link></li>
                    <li className='lg:p-0 xs:p-[25px]'><Link to='/' className='text-[#fff] lg:text-[16px] no-underline xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'>Pricing</Link></li>
                </ul>
                <ul className='lg:flex items-center gap-[24px] xs:mt-[3rem] lg:mt-0 xs:pb-[2rem] lg:pb-0'>
                    <li className='border-b-[1px] border-b-[solid] border-b-[#fff] lg:py-[6px] lg:px-[10px] xs:pb-[1rem]'><Link to='/login' className='text-[#fff] lg:text-[16px] xs:text-[20px] font-[400] leading-[25.6px] no-underline'>Log In</Link></li>
                    <li className='bg-[#FB9613] lg:mt-0 xs:mt-[2rem] rounded-[100px] lg:py-[8px] xs:py-[12px] px-[20px] flex items-center flex justify-center'><Link to='/signup' className='text-[#fff] lg:text-[16px] xs:text-[18px] font-[400] leading-[25.6px] no-underline'>Get Started</Link></li>
                </ul>
              </div> 
           {
            showNav ?  
             <div className='lg:bg-transparent xs:bg-[#000] lg:p-0 xs:p-[20px] xs:absolute lg:relative left-0 top-0 lg:w-auto xs:w-[100%] lg:h-auto xs:h-[100vh]'>
                <FaTimes onClick={() => setShowNav(false)} className='text-[#fff] text-[30px] flex justify-end items-end hover:text-[#FB9613]' />
               <div className='lg:flex justify-between items-center gap-[120px] text-center'>
                <ul className='lg:flex items-center gap-[40px] xs:pt-[2rem] lg:pt-0'>
                    <li className='text-[#fff] lg:text-[16px] lg:p-0 xs:p-[25px] xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Creation</Link></li>
                    <li className='text-[#fff] lg:text-[16px] lg:p-0 xs:p-[25px] xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Resources</Link></li>
                    <li className='text-[#fff] lg:text-[16px] lg:p-0 xs:p-[25px] xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Solution</Link></li>
                    <li className='text-[#fff] lg:text-[16px] lg:p-0 xs:p-[25px] xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Support</Link></li>
                    <li className='text-[#fff] lg:text-[16px] lg:p-0 xs:p-[25px] xs:text-[22px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Pricing</Link></li>
                </ul>
                <ul className='lg:flex items-center gap-[24px] xs:mt-[3rem] lg:mt-0 xs:pb-[2rem] lg:pb-0'>
                    <li className='text-[#ff00ff] lg:text-[16px] xs:text-[20px] font-[400] leading-[25.6px] border-b-[1px] border-b-[solid] border-b-[#fff] lg:py-[6px] lg:px-[10px] xs:pb-[1rem] hover:text-[#fff]'><Link to='/login' className='text-[#fff] hover:text-[#fff]'>Log In</Link></li>
                    <li className='bg-[#FB9613] lg:mt-0 xs:mt-[2rem] rounded-[100px] lg:py-[8px] xs:py-[12px] px-[20px] flex items-center text-[#fff] lg:text-[16px] flex justify-center xs:text-[18px] font-[400] leading-[25.6px] hover:text-[#fff]'><Link to='/signup'>Get Started</Link></li>
                </ul>
              </div> 
             </div>
            : 
            null
           }
        </nav>
    </div>
  )
}

export default Navbar