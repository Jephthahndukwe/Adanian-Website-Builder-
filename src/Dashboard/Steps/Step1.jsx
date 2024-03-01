import { useState } from "react";
import Step2 from "./Step2";
import Step3 from './Step3'



const Step1 = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formDataStep1, setFormDataStep1] = useState({
        answer: '',
    });
    const [formDataStep2, setFormDataStep2] = useState('');
    const [formDataStep3, setFormDataStep3] = useState('');

     // Function to handle input change for Step 1 form
     const handleInputChangeStep1 = (e) => {
        const { name, value } = e.target;
        setFormDataStep1(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInputChangeStep2 = (e) => {
        const value = e.target.value;
        setFormDataStep2(value);
    };

    const handleInputChangeStep3 = (e) => {
        const value = e.target.value;
        setFormDataStep3(value);
    };

    const nextStep = () => {
        if (currentStep === 5) {
            // Submit form or move to the next page
            return;
        }

        // Move to the next step
        setCurrentStep(currentStep + 1);
    };

    // Function to move to the previous step
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

  return (
    <div>
        {/* Step bar */}
        <div className="flex gap-[12px] mt-[13px]">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className={`bg-[#${currentStep >= step ? '00AABC' : 'ECECEC'}] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]`}>
                        <h1 className="text-[20px] pt-2">{step}</h1>
                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-[#1E4830] text-[16px] font-[600] mt-[15px]">Step by Step Creation</h1>
                <p className="text-[#1E4830] lg:text-[14px] xs:text-[12px] font-[400] mt-[5px]">Our intuitive, user-friendly interface turns your vision into reality, no tech expertise required.</p>
            </div>

            {/* Form */}
                {currentStep === 1 && (
                    <form onSubmit={nextStep}>
                        <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] lg:w-[1020px] xs:w-[100%] py-[32px] lg:ps-[24px] xs:ps-[10px] xs:pr-[10px] lg:pr-[52px] mt-[36px]">
                            <h1 className="text-[#000] lg:text-[20px] xs:text-[17px] font-[600]">What kind of website are you building?</h1>
                            <input 
                                type="text" 
                                name="answer" 
                                value={formDataStep3.otherField}
                                onChange={handleInputChangeStep1} 
                                placeholder="Enter you business or website type" 
                                required 
                                className="mt-[15px] font-[400] text-[14px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px] mt-3 lg:ms-2" 
                                style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                            />
                            <div className="flex lg:gap-[25px] xs:gap-[10px] lg:ms-[9px] mt-[13px]">
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Online Store</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Portfolio</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Blog</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Consultant</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Technology Company</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Restuarant</h2>
                                <h2 className="text-[#000] lg:text-[12px] xs:text-[9px] font-[300]">Event</h2>
                            </div>
                            <div className="flex justify-between items-center mt-[24px]">
                                <h3 className="text-[#000] text-[10px] font-[300]">Note: you can change this anytime</h3>
                                <div className="flex gap-[16px] items-center">
                                    <button style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#0AADBF] text-[12px] font-[400]">Cancel</button>
                                    <button type="submit" disabled={!formDataStep1.answer} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}

                    {/* Step 2 Form */}
                    {currentStep === 2 && (
                        <Step2 nextStep={nextStep} prevStep={prevStep} formDataStep2={formDataStep2} handleInputChangeStep2={handleInputChangeStep2} />
                    )}

                    {/* Step 3 Form */}
                    {currentStep === 3 && (
                        <Step3 nextStep={nextStep} prevStep={prevStep} formDataStep3={formDataStep3} handleInputChangeStep3={handleInputChangeStep3} />
                    )}
    </div>
  )
}

export default Step1