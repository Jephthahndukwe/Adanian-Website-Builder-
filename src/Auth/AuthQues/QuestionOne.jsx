import { Link } from "react-router-dom"

const QuestionOne = () => {
  return (
    <div className="mt-[10rem] px-[10px]">
        <h1 className="text-[#000] text-[18px] leading-[16px] text-center font-[500]">Let&apos;s Know you</h1>
        <div className="lg:flex justify-center">
          <form className="mt-[34px]">
              <label htmlFor="first name" className="text-[#000] text-[12px] leading-[12.1px] font-[400]">First Name</label><br/>
              <input type="text" placeholder="First, Last Name"
                  className="border-[1px] border-solid border-[#E8E8E8] lg:w-[400px] xs:w-[100%] h-[50px] rounded-[4px] bg-[#fff] mt-[5px] p-3 outline-none"
                  style={{ boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset` }}/><br/><br/>
              <label htmlFor="occupation" className="text-[#000] text-[12px] leading-[12.1px] font-[400]">Occupation</label><br/>
              <input type="text" placeholder="What do you do" 
                  className="border-[1px] border-solid border-[#E8E8E8] lg:w-[400px] xs:w-[100%] h-[50px] rounded-[4px] bg-[#fff] mt-[5px] p-3 outline-none"
                  style={{ boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset` }} /><br/>
                <div className="mt-[67px] flex justify-center">
                  <button type="submit" className="bg-[#00AABC] rounded-[100px] w-[120px] h-[40px] py-[12px] px-0 flex justify-center items-center text-center text-[#fff] text-[18px] font-[400] leading-[16px]" style={{ boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}><Link to='/questiontwo'>Continue</Link></button>
                </div>
          </form>
        </div>
    </div>
  )
}

export default QuestionOne