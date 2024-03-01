import { Link } from "react-router-dom"
import Logo from '../../assets/images/ADANIAN LOGO 1.png'
import { FaArrowLeft } from 'react-icons/fa'
import { FaDesktop } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";



const TemplateEditNavbar = () => {
    return (
        <div className="pt-[10px] mb-5 pb-[20px] px-[20px] shadow-2xl lg:flex justify-between items-center">
            <div className='flex items-center lg:gap-[16px] xs:gap-[35px]'>
                <img src={Logo} className='lg:w-[150px] xs:w-[100px]' />
                <div className='h-[45px] w-[1px] bg-[#eaeaea]'/>
                <Link to='/dashboard' className='flex gap-[8px] hover:text-[#FB9613] text-[#00AABC] no-underline items-center text-[13px] font-[400]'><FaArrowLeft /> Back to Dashboard</Link>
           </div>
           <div className="flex justify-center lg:mt-0 xs:mt-5 items-center gap-[1rem] lg:mb-0 xs:mb-[2rem]">
                <FaDesktop className='text-[#00AABC] text-[30px] cursor-pointer'/>
                <div className="h-[45px] w-[1px] bg-[#eaeaea]"/>
                <MdOutlinePhoneAndroid className=' text-[30px] hover:text-[#00AABC] cursor-pointer' />
           </div>
           <div className="lg:flex gap-[2rem] items-center mt-4">
            <h2 className="lg:block xs:hidden text-[#20303c] lg:text-[16px] xs:text-[13px] mt-2 lg:leading-[24px] font-[400]">Click edit and create your own amazing website</h2>
            <Link to='/SoairEditHome' className="bg-[#00AABC] py-[10px] px-[35px] w-[100%] no-underline hover:text-[#fff] text-[#fff] rounded-[100px] lg:ms-0 xs:ms-[5rem] lg:mt-0 xs:mt-5">Edit this site</Link>
           </div>
        </div>
    )
}

export default TemplateEditNavbar