import { FaArrowRight } from 'react-icons/fa'
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div style={{background: `var(--Main-colour, #FB9613)`}} className="lg:px-[100px] xs:px-[20px] py-[60px]">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-[#fff] text-[20px] font-[700]">Company</h1>
          <hr className="bg-[#fff] h-[1px] w-[48px] mt-[11px]"/>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Adanian Labs</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Afya Rekod</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Abc</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>eCobba</Link></h3>
        </div>
        <div>
          <h1 className="text-[#fff] text-[20px] font-[700]">Support</h1>
          <hr className="bg-[#fff] h-[1px] w-[48px] mt-[11px]"/>
          <h3 className="text-[#fff] text-[16px] font-[400] mt-[11px] hover:underline">support.websitebuilder</h3>
          <h3 className="text-[#fff] text-[16px] font-[400] mt-[11px] hover:underline">01 234 78909</h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Hire a professional</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>System Error</Link></h3>
        </div>
        <div>
          <h1 className="text-[#fff] text-[20px] font-[700] lg:mt-0 xs:mt-[3rem]">More</h1>
          <hr className="bg-[#fff] h-[1px] w-[48px] mt-[11px]"/>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Pricing</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Blog</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Careers</Link></h3>
          <h3 className="mt-[11px] hover:underline"><Link to='/' className='text-[#fff] text-[16px] font-[400] no-underline'>Sme’s training</Link></h3>
        </div>
        <div>
          <h1 className="text-[#fff] text-[20px] font-[700] lg:mt-0 xs:mt-[3rem]">Contact Us</h1>
          <form>
            <label className='flex items-center justify-center'>
              <input type="email" placeholder="Email address" className="w-[210px] p-[10px] bg-[#fff] text-[#37373B] text-[16px] font-[400] mt-[11px] outline-none" />
              <button type="submit" className='bg-[#00AABC] py-[10px] px-[3px] w-[53px] text-[#fff] h-[44px] flex items-center justify-center mt-2'><FaArrowRight /> </button>
            </label>
          </form>
        </div>
      </div>
    </div>
    <div className='bg-[#000] px-[66px] py-[25px]'>
        <div className='lg:flex lg:gap-[157.5px] items-center'>
          <div>
            <Link to='/'><img src={Logo} className='lg:ms-0 xs:ms-[-3rem]' /></Link>
          </div>
          <div>
            <h3 className='text-[#fff] lg:text-[16px] xs:text-[17px] md:text-[12px] font-[400] lg:mt-0 xs:mt-[2rem] lg:ms-0 xs:ms-[-3rem]'>© 2024 <span className='font-[700]'>Adanian Website Builder</span>. All Rights Reserved.</h3>
          </div>
          <div className='flex gap-[61px] items-center text-[#fff] text-[20px] lg:mt-0 xs:mt-[3rem] lg:ms-0 xs:ms-[-1rem]'>
            <Link to='/' className='hover:text-[#1877F2] text-[#fff]'><FaFacebookF/></Link>
            <Link to='/' className='hover:text-[#1DA1F2] text-[#fff]'> <FaTwitter/></Link>
            <Link to='/' className='hover:text-[#E4405F] text-[#fff]'><FaInstagram/></Link>
            <Link to='/' className='hover:text-[#FF0000] text-[#fff]'><FaYoutube/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer