import { useState } from 'react';
import template1 from '../../assets/images/template1.png'
import template2 from '../../assets/images/template2.png'
import template3 from '../../assets/images/template3.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function ImageComponent({ src, title, isActive, onClick }) {
  return (
    <div
      className={`hover:border-[1px] hover:border-solid hover:border-[#FB9613] hover:p-[15px] border-[1px] border-solid border-[#fff] p-[15px] rounded-[5px] ${
        isActive ? 'bg-[#FB9613]' : ''
      }`}
      onClick={onClick}
    >
      <img src={src} className='w-[300px]' alt={title} />
      <h2 className={`${isActive ? 'border-b-[#fff] text-white' : 'border-b-[#FB9613] text-[#FB9613]' } text-[18px] font-[400] leading-[17px] border-b-[1px] w-[75px] border-b-[solid] mt-[10px] pb-[5px]`}>
        {title}
      </h2>
    </div>
  );
}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const templates = [
    { src: template1, title: 'Business' },
    { src: template2, title: 'Portfolio' },
    { src: template3, title: 'Company' },
  ];

  return (
    <div className='mt-[119px] px-[10px] lg:mb-0 xs:mb-[3rem]'>
      <h1 className="text-[#000] text-[18px] font-[500] leading-[16px] text-center">Who do you want to build websites for?</h1>
      <h3 className="text-[#000] text-[14px] font-[400] leading-[16px] text-center mt-[12px]">Select all the options that apply to you</h3>
    <div className='flex justify-center'>
      <div className='lg:flex justify-center gap-[20px] items-center mt-[1rem]'>
        {templates.map((template, index) => (
          <ImageComponent
            key={index}
            src={template.src}
            title={template.title}
            isActive={index === activeIndex} 
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
    <div className="mt-[67px] flex justify-center">
      <button type="submit" className="bg-[#00AABC] rounded-[100px] w-[120px] h-[40px] py-[12px] px-0 flex justify-center items-center text-center text-[#fff] text-[18px] font-[400] leading-[16px]" style={{ boxShadow: `0px 0.5px 0.5px 0px rgba(255, 255, 255, 0.20) inset, 0px 29px 23px -16px rgba(255, 255, 255, 0.04) inset, 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25)` }}><Link to='/questionthree'>Continue</Link></button>
    </div>
    </div>
  );
}

export default App;
