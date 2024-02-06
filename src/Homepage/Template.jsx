import { Link } from "react-router-dom"
import template1 from '../assets/images/template1.png'
import template2 from '../assets/images/template2.png'
import template3 from '../assets/images/template3.png'


const Template = () => {
  return (
    <div className="lg:px-0 xs:px-[20px]">
        <h1 className="text-[#fff] lg:text-[56px] xs:text-[40px] font-[400] lg:leading-[83.2px] text-center mt-[88px]">Browse templates that suits <br className="xs:hidden lg:block"/> your <span className="text-[#00AABC] font-[700]">BUSINESS</span> </h1>
        <p className="text-[#fff] lg:text-[19.375px] xs:text-[15px] font-[400] leading-[30px] text-center mt-[24px]">Get a headstart on your journey with 900+ free, customizable <span className="underline">website templates</span>, strategically <br className="xs:hidden lg:block"/> researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
        <h3 className="mt-[36px] flex justify-center items-center"><Link to='/login' className="text-[#000] text-[20px] font-[400] leading-[28px] bg-[#fff] rounded-[100px] py-[10px] px-[30px] text-center hover:bg-[#FB9613] hover:text-[#fff]">Get Started</Link></h3>
        <div className="flex flex-wrap gap-[16px] justify-center items-center mt-[84px]">
            <img src={template1} width='400px' height='380px' />
            <img src={template2} width='400px' height='380px' />
            <img src={template3} width='400px' height='380px' />
        </div>
    </div>
  )
}

export default Template