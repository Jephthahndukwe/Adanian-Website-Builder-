import { useState } from "react";
import { Link } from "react-router-dom"
import TemplateMap from "../TemplateMap"
import Question from "./Question";

const Step1 = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
        <form>
                        <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] lg:w-[1020px] xs:w-[100%] py-[32px] lg:ps-[24px] xs:ps-[10px] xs:pr-[10px] lg:pr-[52px] mt-[36px]">
                            <h1 className="text-[#000] lg:text-[20px] xs:text-[17px] font-[600]">What kind of website  are you building?</h1>
                            <input type="text" placeholder="Answer" required className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}/>
                            <input type="text" placeholder="Domain name/.com" required className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}/>
                            <div className="flex gap-[25px] ms-[10px] mt-[5px]">
                                <h2 className="text-[#000] text-[16px] font-[400]">.com</h2>
                                <h2 className="text-[#000] text-[16px] font-[400]">.blog</h2>
                                <h2 className="text-[#000] text-[16px] font-[400]">.shop</h2>
                                <h2 className="text-[#000] text-[16px] font-[400]">.design</h2>
                                <h2 className="text-[#000] text-[16px] font-[400]">.tech</h2>
                            </div>
                            <div className="flex justify-between items-center mt-[24px]">
                                <h3 className="text-[#000] text-[10px] font-[300]">Note: you can change this anytime</h3>
                                <div className="flex gap-[16px] items-center">
                                    <Link to='/' style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#0AADBF] text-[12px] font-[400]">Cancel</Link>
                                    <button type='submit'><Link to='/' className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Save</Link></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-[53px] px-[18px]">
                        <div className="flex items-center gap-[8px]">
                            <h3  className="text-[#000] text-[10px] font-[300]">Or pick</h3>
                            <h3 className="text-[#000] text-[10px] font-[500]">Template</h3>
                        </div>
                        <div className="flex flex-wrap gap-[16px]">
                            {
                                TemplateMap.map((index) => (
                                    <div key={index.id}>
                                        <div className="mt-[2rem] cursor-pointer" onClick={() => setShow(true)}>
                                            <img src={index.Image} className="w-[317px] h-[218.75px] object-fill" />
                                            <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">{index.heading}</h2>
                                            <h3 className="text-[#000] text-[11px] font-[400] mt-[16px] w-[317px]">{index.text}</h3>
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
  )
}

export default Step1