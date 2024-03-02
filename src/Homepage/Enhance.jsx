import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'

const Enhance = () => {
  return (
    <div>
        <div className="lg:flex justify-bwtween items-center lg:gap-[108px] xs:gap-[90px] py-[49px] lg:px-[90px] xs:px-[10px]">
            <div>
                <h1 className="text-[#fff] lg:text-[50px] xs:text-[35px] font-[400] lg:leading-[83.2px] lg:w-[650px] md:w-[10px]">Enhance Your Digital <br/> Presence</h1>
            </div>
            <div>
                <p className="text-[#fff] text-[16px] font-[400] leading-[25.6px] text-start lg:mt-0 xs:mt-[1.5rem]">From selling online, starting a blog and organizing events to promoting your business and building your community, create a website that can grow with you.</p>
                <h3 className="mt-[32px]"><Link to='/login' className="text-[#000] text-center text-[17px] font-[500] bg-[#fff] rounded-[100px] py-[13px] px-[24px] no-underline flex justify-center items-center gap-3 w-[183px] hover:bg-[#FB9613] hover:text-[#fff]">Get Started <FaArrowRight /> </Link></h3>
            </div>
        </div>
    </div>
  )
}

export default Enhance