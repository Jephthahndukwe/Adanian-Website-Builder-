import Navbar from "../Components/Navbar"
import store from '../assets/icons/store.svg'
import background from '../assets/images/sunset-africa-savanna-landscape.png'
import portfolio from '../assets/icons/portfolio.svg'
import blog from '../assets/icons/blog.svg'
import education from '../assets/icons/education.svg'
import service from '../assets/icons/service.svg'
import restaurant from '../assets/icons/restaurant.svg'
import event from '../assets/icons/event.svg'
import other from '../assets/icons/other.svg' 
import { Link } from "react-router-dom"
import fidelity from '../assets/images/fidelity.png'
import afyaRekod from '../assets/images/afyaRekod.png'
import mtn from '../assets/images/mtn.png'
import ayoba from '../assets/images/ayoba.png' 
import Instruct from "./Instruct"
import Template from "./Template"
import Steps from "./Steps"
import Enhance from "./Enhance"
import Footer from "../Components/Footer"

const Header = () => {
  return (
    <div style={{background: `linear-gradient(115deg, #00041B 0%, #030515 25%, #16161A 50%, #10121D 75%, #050505 100%)`}}>        
    <div style={{ backgroundImage: `url(${background})` }}>
    <Navbar/>
        <div className="pt-[53px] px-[10px]">
            <h1 className="text-center text-[#fff] lg:text-[70px] xs:text-[45px] font-[400] lg:leading-[100px]">Build your website <br className="xs:hidden lg:block" /> with <span className="text-[#00AABC] font-[700]">zero code</span></h1>
            <h4 className="text-[#fff] text-center lg:text-[20px] font-[400] lg:leading-[36px] lg:mt-[48px] xs:mt-[30px]">What kind of website would you like to create?</h4>
            <div className="flex justify-center ">
                <div>
                <div className="lg:flex xs:grid xs:grid-cols-2 gap-[11px] mt-[24px]">
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={store} /> Online Store</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={portfolio} /> Portfolio</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={blog} /> Blog</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={education} /> Educational</h3>
                </div>
                <div className="lg:flex xs:grid xs:grid-cols-2 gap-[11px] mt-[14px]">
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={service} /> Service Business</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={restaurant} /> Restaurant</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={event} /> Event</h3>
                    <h3 className="rounded-[14px] lg:w-[185px] xs:w-[150px] h-[48px] p-[4px] flex gap-[6px] justify-center items-center text-[#fff] text-center font-[400] lg:text-[18px] xs:text-[14px]" style={{border: `1px solid rgba(255, 255, 255, 0.70)`}}><img src={other} /> Other</h3>
                </div>
                </div>
            </div>
        <h3 className="mt-[42px] flex justify-center pb-5"><Link to='/login' className="text-center bg-[#fff] lg:w-[276px] xs:w-[200px] h-[60px] lg:py-[12px] lg:px-[39px] xs:py-[10px] px-[25px] text-[#000] lg:text-[23.625px] xs:text-[19px] flex items-center justify-center font-[400] rounded-[100px] hover:bg-[#FB9613] hover:text-[#fff]">Create Website</Link></h3>
        </div>
        <div className="lg:flex md:flex md:flex-wrap xs:grid xs:grid-cols-2 lg:gap-[138px] xs:gap-[3rem] items-center mt-[49px] px-[60px]">
            <img src={fidelity} />
            <img src={afyaRekod} />
            <img src={mtn} />
            <img src={ayoba} />
        </div>
    </div>

    <Instruct/>
    <Template/>
    <Steps/>
    <Enhance/>
    <Footer/>
    </div>
  )
}

export default Header