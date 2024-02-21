import { useState } from 'react';
import { Link } from 'react-router-dom';
import TestingStep2 from './TestingStep2';

function TestingSteps() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formDataStep1, setFormDataStep1] = useState({
        answer: '',
        domain: ''
    });
    const [formDataStep2, setFormDataStep2] = useState('');

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

            {/* Form */}
            {currentStep === 1 && (
                <form onSubmit={nextStep}>
                    <div style={{ boxShadow: `4px 4px 20px 0px rgba(128, 128, 128, 0.15)`}} className="bg-[#fff] rounded-[24px] lg:w-[1020px] xs:w-[100%] py-[32px] lg:ps-[24px] xs:ps-[10px] xs:pr-[10px] lg:pr-[52px] mt-[36px]">
                        <h1 className="text-[#000] lg:text-[20px] xs:text-[17px] font-[600]">What kind of website are you building?</h1>
                        <input 
                            type="text" 
                            name="answer" 
                            value={formDataStep1.answer} 
                            onChange={handleInputChangeStep1} 
                            placeholder="Answer" 
                            required 
                            className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" 
                            style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                        />
                        <input 
                            type="text" 
                            name="domain" 
                            value={formDataStep1.domain} 
                            onChange={handleInputChangeStep1} 
                            placeholder="Domain name/.com" 
                            required 
                            className="mt-[15px] font-[400] text-[12px] lg:w-[940px] xs:w-[100%] h-[1px] py-[10px] outline-none pb-[25px]" 
                            style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF' }}
                        />
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
                                <button type="submit" disabled={!formDataStep1.answer || !formDataStep1.domain} className="bg-[#00AABC] rounded-[100px] flex justify-center items-center p-[10px] h-[24px] text-[#fff] text-[12px] font-[400]">Next</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}

            {/* Step 2 Form */}
            {currentStep === 2 && (
                <TestingStep2 formDataStep2={formDataStep2} handleInputChangeStep2={handleInputChangeStep2} />
            )}

            {/* Repeat for each step */}
        </div>
    );
}

export default TestingSteps;