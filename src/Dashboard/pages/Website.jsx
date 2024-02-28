import { Link } from 'react-router-dom'
import Logo from '../../assets/images/ADANIAN LOGO 1.png'
import { FaArrowLeft } from "react-icons/fa";
import Icons1 from '../../assets/images/M1_296.png'
import Icons2 from '../../assets/images/M1_297.png'


const Website = () => {
    return (
        <div className='py-[20px] px-[30px]'>
           <div className='flex items-center gap-[16px]'>
                <img src={Logo} className='w-[150px]' />
                <hr className='h-[45px] w-[1px] bg-[#eaeaea]'/>
                <Link to='/dashboard' className='flex gap-[8px] hover:text-[#FB9613] items-center text-[13px] font-[400]'><FaArrowLeft /> Back to Dashboard</Link>
           </div>
           <div className='flex items-center justify-center mt-[6rem]'>
                <div>
                    <h1 className='text-[30px] font-[500] text-center'>How would you like to design your website?</h1>
                    <div className='lg:flex gap-[35px] items-center mt-10'>
                        <div className='bg-[#fff] py-[25px] shadow-2xl hover:shadow-lg hover:shadow-[#00AABC] px-[40px] lg:w-[450px] xs:w-[100%] lg:h-[320px] rounded-[15px]'>
                            <div className='flex justify-center items-center'>
                                <img src={Icons1} className='w-[100px]' />
                            </div>
                            <h3 className='text-[#000624] lg:text-[20px] xs:text-[15px] font-[700] leading-[30px] mt-[2rem] text-center'>Let Adanian Lab create a site for you</h3>
                            <h4 className='text-[#000624] lg:text-[16px] xs:text-[13px] font-[400] leading-[24px] mt-[3%] text-center'>Use our site-builder to go live quickly.</h4>
                            <p className='flex justify-center items-center mt-5'>
                                <Link to='/' className='text-[16px] text-center font-[500] leading-[24px] text-[#fff] bg-[#00AABC] hover:bg-[#116dff] py-[9px] px-[30px] w-[55%] rounded-[100px]'>Get Started</Link>
                            </p>
                        </div>
                        <div className='bg-[#fff] shadow-2xl py-[25px] hover:shadow-lg hover:shadow-[#00AABC] px-[40px] lg:w-[450px] xs:w-[100%] lg:h-[320px] rounded-[15px] lg:mt-0 xs:mt-[2rem]'>
                            <div className='flex justify-center items-center'>
                                <img src={Icons2} className='w-[100px]' />
                            </div>
                            <h3 className='text-[#000624] lg:text-[20px] xs:text-[16px] font-[700] leading-[30px] mt-[2rem] text-center'>Customize a designed template</h3>
                            <h4 className='text-[#000624] lg:text-[16px] xs:text-[13px] font-[400] leading-[24px] mt-[3%] text-center'>Choose from thousands of designs for your site.</h4>
                            <p className='flex justify-center items-center mt-5'>
                                <Link to='/website/templates' className='text-[16px] text-center font-[500] leading-[24px] text-[#fff] bg-[#00AABC] hover:bg-[#116dff] py-[9px] px-[30px] lg:w-[55%] xs:w-[70%] rounded-[100px]'>Pick a Template</Link>
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Website