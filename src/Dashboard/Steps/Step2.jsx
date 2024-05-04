// import { Link } from "react-router-dom"
import { FaTimes } from 'react-icons/fa'  
import PropTypes from 'prop-types';


const Step2 = ({ nameOfStore, handleInputChangeStep2, nextStep, prevStep }) => {  
    
  return (
    <div>
       <form onSubmit={nextStep}>
                <h1 className="text-[#000] text-[20px] font-[600] mt-[3rem]">Let’s get your store up and running</h1>
                <p className="text-[12px] font-[400] mt-[15px]" style={{ color: `rgba(102, 102, 102, 0.80)` }}>Just a few questions and we’ll provide everything you need to start selling.</p>
            <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] lg:w-[1020px] xs:w-[100%] py-[32px] lg:ps-[24px] xs:ps-[10px] xs:pr-[10px] lg:pr-[52px] mt-[36px]">
                <h3 className="text-[#000] text-[17px] font-[500]">What’s the name of your store?</h3>
                <input 
                    type="text" 
                    value={nameOfStore}
                    onChange={handleInputChangeStep2} 
                    placeholder="My store" 
                    required 
                    className="font-[400] text-[14px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px] mt-3" 
                    style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                />
                <div className="flex justify-between items-center mt-[24px]">
                    <h3 className="text-[#000] text-[11px] font-[300]">Note: you can edit text</h3>
                    <div className="flex gap-[16px] items-center">
                        <button type="button" onClick={prevStep} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Previous</button>
                        <button type="submit" onClick={nextStep} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Next</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}


Step2.propTypes = {
    nameOfStore: PropTypes.string.isRequired,
    handleInputChangeStep2: PropTypes.bool.isRequired,
    prevStep: PropTypes.bool.isRequired,
    nextStep: PropTypes.bool.isRequired,
};

export default Step2