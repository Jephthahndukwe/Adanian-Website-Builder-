// import { Link } from "react-router-dom"
import { FaTimes } from 'react-icons/fa'  
import PropTypes from 'prop-types';


const Step2 = ({ formDataStep2, handleInputChangeStep2, nextStep, prevStep }) => {  
    
  return (
    <div>
       <form onSubmit={nextStep}>
            <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] w-[854px] py-[32px] ps-[24px] pr-[52px] mt-[36px]">
                <div className="flex justify-end items-end">
                    <FaTimes className="text-[24px] cursor-pointer"/>
                </div>
                <h1 className="text-[#000] text-[20px] font-[600]">Write your first blog post</h1>
                <p className="text-[12px] font-[400] mt-[15px]" style={{ color: `rgba(102, 102, 102, 0.80)` }}>This could be about your business, launch date etc.</p>
                <textarea 
                    placeholder="Enterprenuer.com is a new................................................................................." 
                    rows='2' 
                    cols='50' 
                    value={formDataStep2} 
                    onChange={handleInputChangeStep2} 
                    className="flex justify-end items-center w-[778px] border-[1px] border-solid border-[#666] font-[400] text-[12px] text-[#666] rounded-[8px] bg-[#fff] mt-[15px] ps-[10px] pt-[11px] pb-[80px] outline-none" 
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
    formDataStep2: PropTypes.string.isRequired,
    handleInputChangeStep2: PropTypes.bool.isRequired,
    prevStep: PropTypes.bool.isRequired,
    nextStep: PropTypes.bool.isRequired,
};

export default Step2