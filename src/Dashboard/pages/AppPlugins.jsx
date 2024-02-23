import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import facebook from '../../assets/images/facebook.png'
import { FaStar } from "react-icons/fa";

const AppPlugins = () => {
    return (
        <div>
            <Navbar/>
             <div className="lg:flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar className='xs:hidden lg:block'/>

                <div className="h-[100%] lg:px-[2rem] xs:px-[10px] overflow-auto overflow-y-scroll pt-5 lg:w-[82%] xs:w-[100%]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   <h1 className='text-[#000624] text-[28px] leading-[36px] font-[700]'>Manage Apps</h1>
                   <h3 className='text-[#333853] text-[16px] font-[400] leading-[24px] mt-2'>Manage the apps on your site or go to the App Market to add new ones.</h3>

                   <div className='mt-[10rem]'>
                    <h3 className='flex justify-between items-center text-[#000624] text-[18px] font-[700] leading-[24px] mt-2'>Recommended for you <span className='text-[#5999ff] text-[16px] font-[400]'>See More Apps</span></h3>
                    <hr className='mt-[1.5rem]'/>
                    <div className='mt-[2rem]'>
                        <div className='bg-[#fff] rounded-[10px] w-[350px] shadow-2xl p-[18px]  transition-transform duration-300 transform hover:scale-105 hover:-translate-y-2 hover:translateZ-10 cursor-pointer'>
                            <img src={facebook}/>
                            <h2 className='text-[#000624] text-[18px] font-[700] leading-[24px] mt-3'>Social Media Icons</h2>
                            <p className='text-[#000624] text-[14px] font-[400] mt-2'>Boost your social following w/ social <br/> app icons</p>
                            <div className='flex items-center justify-between mt-[2.5rem] text-[#000624] text-[12px] font-[400]'>
                                <h2>Free plan available</h2>
                                <h4 className='flex items-center'><FaStar className='mr-[5px] mt-[-5px] text-[16px] text-[#fdb10c]' /><span className='font-[700]'>4.5</span> (565)</h4>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AppPlugins