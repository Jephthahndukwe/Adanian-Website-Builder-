import React, { useState } from 'react';
import template1 from '../../assets/images/template1.png';
import template2 from '../../assets/images/template2.png';
import template3 from '../../assets/images/template3.png';
import PropTypes from 'prop-types';


const imageData = {
  'Online Store': [
    { src: template1 },
    { src: template2 },
    // Add more online store images
  ],
  'Portfolio': [
    { src: template3 },
    // Add more Portfolio images
  ],
  'Blog': [
    { src: template3 },
    // Add more Blog images
  ],
  'Educational': [
    { src: template3 },
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

const ImageDisplay = ({ category, searchQuery }) => {
  const images = category === 'All' ? Object.values(imageData).flat() : imageData[category];


  return (
    <div className='px-[50px] mt-[2rem]'>
        <h1 className='text-[#000] text-[20px] font-[700] leading-[32px]'>{category} Website Templates</h1>
        <div className="flex justify-start items-center flex-wrap gap-[2rem] mt-[2rem]">
        {images.map((image, index) => (
            <img key={index} src={image.src} alt={category} className="m-2 w-[30%]" />
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
