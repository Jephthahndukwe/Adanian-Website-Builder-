import { useState } from 'react'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Step1  from "./Steps/Step1"
import { Link } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import TemplateMap from "./TemplateMap"
import Question from "./Steps/Question";


const Dashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
        <Navbar className='xs:hidden lg:block' />
        <div className="lg:flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar className='xs:hidden lg:block'/>

                <div className="h-[100%] lg:px-[2rem] xs:px-[10px] overflow-auto overflow-y-scroll lg:w-[82%] xs:w-[100%]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   <h1 className="text-[#000] text-[24px] font-[600]">Welcome back, User Y</h1>                    
                    <Step1/>

                    <div className="mt-[53px] px-[18px]">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-[8px]'>
                                <h3  className="text-[#000] text-[13px] font-[400]">Your Sites</h3>
                                {/* <h3 className="text-[#000] text-[10px] font-[500]">Template</h3> */}
                            </div>
                            <div className='border-[1px] border-solid border-[#00AABC] hover:bg-[#00AABC] text-[#00AABC] py-[5px] px-[20px] rounded-[100px] hover:text-[#fff]'>
                                <Link to='/website' className='flex gap-[8px] justify-center items-center text-[14px] font-[400] no-underline hover:text-[#fff] text-[#00AABC]'><FaPencilAlt /> Design Site</Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-[16px]">
                            {
                                TemplateMap.map((index) => (
                                    <div key={index.id}>
                                        <div className="mt-[2rem] cursor-pointer" onClick={() => setShow(true)}>
                                            <img src={index.Image} className="w-[317px] h-[218.75px] object-fill" />
                                            <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">{index.heading}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            show ? <Question show={show} setShow={setShow} /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard