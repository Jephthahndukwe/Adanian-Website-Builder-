import React, { useState } from 'react';
import OnlineStore1 from '../../assets/images/onlinestore1.png'
import OnlineStore2 from '../../assets/images/onlinestore2.png'
import OnlineStore3 from '../../assets/images/onlinestore3.png'
import OnlineStore4 from '../../assets/images/onlinestore4.png'
import OnlineStore5 from '../../assets/images/onlinestore5.png'
import OnlineStore6 from '../../assets/images/onlinestore6.png'
import Portfolio1 from '../../assets/images/Portfolio1.png'
import Portfolio2 from '../../assets/images/Portfolio2.png'
import Portfolio3 from '../../assets/images/Portfolio3.png'
import Portfolio4 from '../../assets/images/Portfolio4.png'
import Portfolio5 from '../../assets/images/Portfolio5.png'
import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'
import Blog3 from '../../assets/images/blog3.png'
import Educational1 from '../../assets/images/educational1.png'
import Educational2 from '../../assets/images/educational2.png'
import Educational3 from '../../assets/images/educational3.png'
import template2 from '../../assets/images/template2.png';
import template3 from '../../assets/images/template3.png';
import PropTypes from 'prop-types';


const imageData = {
  'Online Store': [
    { src: OnlineStore1 },
    { src: OnlineStore2 },
    { src: OnlineStore3 },
    { src: OnlineStore4 },
    { src: OnlineStore5 },
    { src: OnlineStore6 },
    // Add more online store images
  ],
  'Portfolio': [
    { src: Portfolio1 },
    { src: Portfolio2 },
    { src: Portfolio3 },
    { src: Portfolio4 },
    { src: Portfolio5 },
    // Add more Portfolio images
  ],
  'Blog': [
    { src: Blog1 },
    { src: Blog2 },
    { src: Blog3 },
    // Add more Blog images
  ],
  'Educational': [
    { src: Educational1 },
    { src: Educational2 },
    { src: Educational3 },
    // Add more Educational images
  ],
  'Service Business': [
    { src: template3 },
    // Add more restaurant images
  ],
  'Restaurant': [
    { src: template3 },
    // Add more restaurant images
  ],
  'IT & Technology': [
    { src: template3 },
    // Add more IT & Technology images
  ],
  'HealthCare': [
    { src: template3 },
    // Add more HealthCare images
  ],
  'Fashion': [
    { src: template3 },
    // Add more Fashion images
  ],
  'Entertainment': [
    { src: template3 },
    // Add more Entertainment images
  ],
};

export const Navbar = ({ setCategory, setSearchQuery }) => {
  const handleClick = category => {
    setCategory(category);
  };

  return (
    <div className="px-[30px] py-[20px] flex justify-between items-center">
      <ul className="flex gap-[15px] items-center">
        {Object.keys(imageData).map(category => (
          <li
            key={category}
            className="text-[13px] text-[#666666cc] font-[400] leading-[24px] cursor-pointer"
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <h2 className="text-[15px] text-[#0AADBF] font-[500] cursor-pointer" onClick={() => handleClick('All')}>
        All Templates
      </h2>
    </div>
  );
};

const ImageDisplay = ({ category }) => {
  const images = category === 'All' ? Object.values(imageData).flat() : imageData[category];


  return (
    <div className='px-[50px] mt-[2rem]'>
        <h1 className='text-[#000] text-[20px] font-[700] leading-[32px]'>{category} Website Templates</h1>
        <div className="lg:flex justify-start items-center flex-wrap gap-[2rem] mt-[2rem]">
        {images.map((image, index) => (
            <img key={index} src={image.src} alt={category} className="m-2 lg:w-[30%] xs:w-[100%]" />
        ))}
        </div>
    </div>
  );
};

const TemplateStructure = ({ setSearchQuery }) => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <ImageDisplay category={category} />
    </div>
  );
};

TemplateStructure.propTypes = {
    setSearchQuery: PropTypes.func.isRequired // Ensure setSearchQuery is a function
  };

export default TemplateStructure;
