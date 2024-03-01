import { Link } from 'react-router-dom';
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch, CiBrightnessUp } from "react-icons/ci";
import { BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";



const Navbar = () => {
  return (
    <div className='lg:flex items-center gap-auto justify-between px-[24px] py-[12px] xs:hidden'>
        <div>
            <Link to='/dashboard'><img src={Logo} /></Link>
        </div>
        <div className='flex items-center gap-[32px]'>
            <Link to='/' className='no-underline'><h3 className='flex items-center gap-2 text-[14px] text-[#000] font-[400] no-underline'>Titled Project <span><MdKeyboardArrowDown className='mt-[3px]' /></span></h3></Link>
            <Link to='/' className='no-underline'><h3 className='flex items-center gap-2 text-[14px] text-[#000] font-[400] no-underline'>Help <span><MdKeyboardArrowDown className='mt-[3px]' /></span></h3> </Link> 
            <Link to='/' className='bg-[#00AABC] rounded-[100px] flex justify-center text-[14px] text-[#fff] font-[400] px-[17px] py-[7px] no-underline' style={{ boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}>Plan Upgrade</Link> 
            <label className='rounded-[100px] flex items-center w-[324px] pr-[225] ps-[17px]' style={{ background: `rgba(10, 173, 191, 0.15)`, boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}>
                <CiSearch className='mt-[2px]' />
                <input type='search' placeholder='Search...' className='rounded-[100px] flex items-center w-[280px] pr-[225] ps-[8px] py-[9px] bg-transparent outline-none text-[14px] text-[#000] font-[400]' /> 
            </label>        
        </div>
        <div className='flex items-center gap-[12px]'>
            <hr className='w-[1px] h-[24px] bg-[#000]'/>
            <BiMessageAltDetail className='text-[#0AADBF] text-[24px] ms-[5px]'/>
            <AiOutlineUser  className='text-[#0AADBF] text-[24px]'/>
            <IoSettingsOutline  className='text-[#0AADBF] text-[24px]'/>
            <CiBrightnessUp className='text-[#0AADBF] text-[24px]'/>
            <hr className='w-[1px] h-[24px] bg-[#000] ms-[12px]'/>
            <span className='flex items-center gap-1 ms-[5px]'>
                <AiOutlineUser className='text-[#000] text-[30px]'/>
                <MdKeyboardArrowDown />
            </span>
        </div>
    </div>
  )
}

export default Navbar