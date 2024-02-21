import { useState } from "react";
import TemplateMap from "../TemplateMap"
import Question from "./Question";
import Step2 from "./Step2";

const Step1 = () => {
    const [show, setShow] = useState(false);


    const [currentStep, setCurrentStep] = useState(1);
    const [formDataStep1, setFormDataStep1] = useState({
        answer: '',
        domain: ''
    });
    const [formDataStep2, setFormDataStep2] = useState('');

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

     // Function to clear form fields
     const clearForm = () => {
        setFormDataStep1({ answer: '', domain: '' });
    };


  return (
    <div>
        {/* Step bar */}
        <div className="flex gap-[12px] mt-[13px]">
                {[1, 2, 3, 4, 5].map(step => (
                    <div key={step} className={`bg-[#${currentStep >= step ? '00AABC' : 'ECECEC'}] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]`}>
                        <h1>{step}</h1>
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
                                value={formDataStep1.otherField}
                                onChange={handleInputChangeStep1} 
                                placeholder="Answer" 
                                required 
                                className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" 
                                style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                            />
                            <label>
                                <input 
                                    type="text" 
                                    name="domain"
                                    value={formDataStep1.otherField}
                                    onChange={handleInputChangeStep1} 
                                    placeholder="Domain name/.com" 
                                    required 
                                    className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" 
                                    style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                                />

                            </label>
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
                                    <button style={{ border: `0.5px solid #0AADBF` }} className="rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#0AADBF] text-[12px] font-[400]" onClick={clearForm}>Cancel</button>
                                    <button type="submit" disabled={!formDataStep1.answer || !formDataStep1.domain} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}

                    {/* Step 2 Form */}
                    {currentStep === 2 && (
                        <Step2 nextStep={nextStep} prevStep={prevStep} formDataStep2={formDataStep2} handleInputChangeStep2={handleInputChangeStep2} />
                    )}
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