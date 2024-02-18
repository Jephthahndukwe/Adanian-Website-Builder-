import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import img from '../assets/images/Component 7.png'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar/>

                <div className="h-[100%] p-[2rem] overflow-auto overflow-y-scroll w-[82%]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   <h1 className="">Welcome back, User Y</h1>
                   <div className="flex gap-[12px] mt-[13px]">
                   <div className='bg-[#00AABC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>1</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>2</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>3</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>4</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>5</h1>
                    </div>
                    </div>
                    <div>
                        <h1 className="text-[#1E4830] text-[16px] font-[600] mt-[5px]">Step by Step Creation</h1>
                        <p className="text-[#1E4830] text-[14px] font-[400] mt-[5px]">Our intuitive, user-friendly interface turns your vision into reality, no tech expertise required.</p>
                    </div>
                    <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] w-[1020px] h-[224px] py-[32px] ps-[24px] pr-[52px] mt-[36px]">
                        <h1 className="text-[#000] text-[20px] font-[600]">What kind of website  are you building?</h1>
                        <h3 className="text-[12px] font-[400] mt-[15px]" style={{ color: `rgba(102, 102, 102, 0.80)` }}>Answer</h3>
                        <hr className="bg-[#0AADBF] w-[940px] h-[2px] mt-[15px]" />
                        <h3 className="text-[12px] font-[400] mt-[15px]" style={{ color: `rgba(102, 102, 102, 0.80)` }}>Domain name/.com</h3>
                        <hr className="bg-[#0AADBF] w-[940px] h-[2px] mt-[15px]"/>
                        <div className="flex justify-between items-center mt-[24px]">
                            <h3 className="text-[#000] text-[10px] font-[300]">Note: you can change this anytime</h3>
                            <div className="flex gap-[16px] items-center">
                                <Link to='/' style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#0AADBF] text-[12px] font-[400]">Cancel</Link>
                                <Link to='/' className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Save</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[53px] px-[18px]">
                        <div className="flex items-center gap-[8px]">
                            <h3  className="text-[#000] text-[10px] font-[300]">Or pick</h3>
                            <h3 className="text-[#000] text-[10px] font-[500]">Template</h3>
                        </div>
                        <div className="mt-[17px] flex flex-wrap gap-[16px]">
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                            <div>
                                <img src={img} className="w-[317px] h-[218.75px]" />
                                <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">FOODMART WEBSITE</h2>
                                <h3 className="text-[#000] text-[10px] font-[400] mt-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className="xs:hidden lg:block"/> eiusmod tempor incididunt ut labore et dolor aliqua.</h3>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard