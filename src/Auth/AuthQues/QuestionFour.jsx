import { Link } from 'react-router-dom';

const QuestionFour = () => {
  return (
    <div className="mt-[70px] mb-[5rem] px-[10px]">
        <h1 className="text-[#000] text-center text-[25px] font-[500] leading-[16px]">Sponsorship</h1>
        <h3 className="text-[#000] text-center text-[18px] font-[400] leading-[22px] mt-[2rem]">Are you under enlisted for a sponsorship plan</h3>
        <div className="lg:flex justify-center mt-[2rem]">
            <form>
                <label htmlFor="Name" className="text-[#000] text-[12px] font-[400]">Name</label><br/>
                <input type="text" placeholder="First, Last Name" className="bg-[#fff] rounded-[4px] lg:w-[500px] xs:w-[100%] h-[50px] py-[17px] px-[8px] mt-[10px] outline-[#FB9613]" style={{ border: `1px solid #E8E8E8`, boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset`}} /><br/><br/>

                <label htmlFor="Name" className="text-[#000] text-[12px] font-[400] mt-[10px]">Business Address</label><br/>
                <input type="email" placeholder="Input email associated with sponsors" className="bg-[#fff] rounded-[4px] lg:w-[500px] xs:w-[100%] h-[50px] py-[17px] px-[8px] mt-[10px] outline-[#FB9613]" style={{ border: `1px solid #E8E8E8`, boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset`}} /><br/><br/>

                <label htmlFor="Name" className="text-[#000] text-[12px] font-[400] mt-[10px]">Business Name</label><br/>
                <input type="text" placeholder="Business Name" className="bg-[#fff] rounded-[4px] lg:w-[500px] xs:w-[100%] h-[50px] py-[17px] px-[8px] mt-[10px] outline-[#FB9613]" style={{ border: `1px solid #E8E8E8`, boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset`}} /><br/><br/>

                <label htmlFor="Name" className="text-[#000] text-[12px] font-[400] mt-[10px]">Sponsor Name</label><br/>
                <input type="text" placeholder="Sponsor Name" className="bg-[#fff] rounded-[4px] lg:w-[500px] xs:w-[100%] h-[50px] py-[17px] px-[8px] mt-[10px] outline-[#FB9613]" style={{ border: `1px solid #E8E8E8`, boxShadow: `0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset, 0px 3px 3px -2px rgba(0, 0, 0, 0.02) inset, 0px 4px 4px -3px rgba(0, 0, 0, 0.02) inset, 0px 8px 8px -7px rgba(0, 0, 0, 0.02) inset, 0px 12px 12px -11px rgba(0, 0, 0, 0.01) inset, 0px 16px 16px -15px rgba(0, 0, 0, 0.01) inset`}} /><br/>
            </form>
        </div>
        <div className="mt-[67px] flex justify-center">
            <button type="submit" className="bg-[#00AABC] rounded-[100px] w-[120px] h-[40px] py-[12px] px-0 flex justify-center items-center text-center text-[#fff] text-[18px] font-[400] leading-[16px]" style={{ boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}><Link to='/questionfive'>Continue</Link></button>
        </div>
    </div>
  )
}

export default QuestionFour