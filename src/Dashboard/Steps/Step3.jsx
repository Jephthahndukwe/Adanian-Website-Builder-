import { Link } from "react-router-dom"
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types';


function Option({ text, isActive, onClick, formDataStep3, handleInputChangeStep3 }) {
    return (
      <div className="" onClick={onClick}
      >
        <div>
          <h1 className={`${isActive ? 'border-[#00AABC] border-[1px] border-solid' : 'border-[#eee] border-[1px] border-solid'} lg:text-[14px] xs:text-[11px] leading-[16px] font-[500] text-center mt-[20px] lg:p-[20px] xs:p-[15px] cursor-pointer rounded-[10px]`} value={formDataStep3} onChange={handleInputChangeStep3}>
            {text}
          </h1>
        </div>
      </div>
    );
  }
  
  Option.propTypes = {
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };



const Step3 = ({ formDataStep3, handleInputChangeStep3, nextStep, prevStep }) => {  

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };


  return (
    <div>
       <form onSubmit={nextStep}>
            <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] lg:w-[1020px] xs:w-[100%] py-[32px] lg:ps-[24px] xs:ps-[10px] xs:pr-[10px] lg:pr-[52px] mt-[36px]">
                <h3 className="text-[#000] text-[17px] font-[500]">Do you already have an online store?</h3>
                <h3 className="text-[#000] text-[12px] font-[400] mt-2">We’ll set up your Dashboard with tools based on your needs.</h3>
                <div className="flex">
                <div className="flex gap-[30px] items-center">
                    <Option text="No, I’m just starting out" isActive={activeIndex === 0} onClick={() => handleClick(0)} />
                    <Option text="Yes, I’m already selling online" isActive={activeIndex === 1} onClick={() => handleClick(1)} />
                </div>

                {/* <input 
                    type="text" 
                    value={formDataStep2}
                    onChange={handleInputChangeStep2} 
                    placeholder="My store" 
                    required 
                    className="mt-[15px] font-[400] text-[14px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px] mt-3" 
                    style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                /> */}
                </div> 
                <div className="flex justify-between items-center mt-[24px]">
                    <h3 className="text-[#000] text-[11px] font-[300]">Note: you can edit text</h3>
                    <div className="flex gap-[16px] items-center">
                        <button type="button" onClick={prevStep} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Previous</button>
                        <button type="submit" className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Done</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}


Step3.propTypes = {
    formDataStep3: PropTypes.string.isRequired,
    handleInputChangeStep3: PropTypes.bool.isRequired,
    prevStep: PropTypes.bool.isRequired,
    nextStep: PropTypes.bool.isRequired,
};

export default Step3