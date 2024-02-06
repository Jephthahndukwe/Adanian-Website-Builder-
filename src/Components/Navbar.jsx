import { Link } from 'react-router-dom'
import Logo from '../assets/images/ADANIAN LOGO 1.png'

const Navbar = () => {
  return (
    <div className='px-[90px] py-[20px]'>
        <nav className='lg:flex gap-auto justify-between items-center'>
           <Link to='/'><img src={Logo} /></Link>
            <ul className='flex items-center gap-[40px]'>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Creation</Link></li>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Resources</Link></li>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Solution</Link></li>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Support</Link></li>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] hover:text-[#FB9613]'><Link to='/'>Pricing</Link></li>
            </ul>
            <ul className='flex items-center gap-[24px]'>
                <li className='text-[#fff] text-[16px] font-[400] leading-[25.6px] border-b-[1px] border-b-[solid] border-b-[#fff] py-[6px] px-[10px]'><Link to='/login'>Log In</Link></li>
                <li className='bg-[#FB9613] rounded-[100px] py-[8px] px-[20px] flex items-center text-[#fff] text-[16px] font-[400] leading-[25.6px]'><Link to='/signup'>Get Started</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar