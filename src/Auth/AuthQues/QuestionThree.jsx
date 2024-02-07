import { useState } from 'react';
import mark from '../../assets/icons/mark.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';



function Option({ text, isActive, onClick }) {
  return (
    <div
      className={`bg-[#fff] border-[1px] border-solid border-[#D98D2A40] rounded-[20px] flex justify-center items-center w-[150px] h-[150px] cursor-pointer`}
      onClick={onClick}
    >
      <div>
        <img src={mark} alt={text} />
        <h1 className={`text-${isActive ? '[#FB9613]' : 'black'} text-[36px] leading-[16px] font-[500] text-center mt-[20px]`}>
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


const QuestionThree = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  return (
    <div className="mt-[119px] px-[10px]">
        <h1 className="text-[#000] text-center text-[25px] font-[500] leading-[16px]">Sponsorship</h1>
        <h3 className="text-[#000] text-center text-[18px] font-[400] leading-[16px] mt-[2rem]">Are you under enlisted for a sponsorship plan</h3>
      <div className="flex justify-center mt-[40px]">
        <div className="flex gap-[50px] items-center">
          <Option text="Yes" isActive={activeIndex === 0} onClick={() => handleClick(0)} />
          <Option text="No" isActive={activeIndex === 1} onClick={() => handleClick(1)} />
        </div>
      </div> 
      <div className="mt-[67px] flex justify-center">
        <button type="submit" className="bg-[#00AABC] rounded-[100px] w-[120px] h-[40px] py-[12px] px-0 flex justify-center items-center text-center text-[#fff] text-[18px] font-[400] leading-[16px]" style={{ boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}><Link to='/questionfour'>Continue</Link></button>
      </div>
    </div>
  )
}

export default QuestionThree