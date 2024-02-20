import { Link } from "react-router-dom"
import TemplateMap from "../TemplateMap"
import { FaTimes } from 'react-icons/fa'  
import Question from "./Question"
import { useState } from "react"


export const Step2 = () => {  
    const [show, setShow] = useState(false);
    
  return (
    <div>
        <form>
                        <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] w-[854px] py-[32px] ps-[24px] pr-[52px] mt-[36px]">
                            <div className="flex justify-end items-end">
                                <FaTimes className="text-[24px] cursor-pointer"/>
                            </div>
                            <h1 className="text-[#000] text-[20px] font-[600]">Write your first blog post</h1>
                            <p className="text-[12px] font-[400] mt-[15px]" style={{ color: `rgba(102, 102, 102, 0.80)` }}>This could be about your business, launch date etc.</p>
                            <textarea placeholder="Enterprenuer.com is a new................................................................................." rows={2} cols={50} className="flex justify-end items-center w-[778px] border-[1px] border-solid border-[#666] font-[400] text-[12px] text-[#666] rounded-[8px] bg-[#fff] mt-[15px] ps-[10px] pt-[11px] pb-[80px] outline-none"></textarea>
                            <div className="flex justify-between items-center mt-[24px]">
                                <h3 className="text-[#000] text-[11px] font-[300]">Note: you can edit text</h3>
                                <div className="flex gap-[16px] items-center">
                                    <Link to='/' style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#0AADBF] text-[12px] font-[400]">Skip</Link>
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
