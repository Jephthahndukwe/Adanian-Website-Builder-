import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import imageData from './TemplatesMap';


export const Navbar = ({ setCategory, setSearchResults  }) => {

  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const expandSearch = () => {
    setExpanded(true);
  };

  const collapseSearch = () => {
    setExpanded(false);
    setSuggestions([]);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const matchedSuggestions = [];
  
    // Check category names
    Object.keys(imageData).forEach(category => {
      if (category.toLowerCase().includes(query)) {
        matchedSuggestions.push(category);
      }
    });
  
    // Check image texts
    Object.values(imageData).forEach(images => {
      images.forEach(image => {
        if (image.text && image.text.toLowerCase().includes(query)) {
          matchedSuggestions.push(image.text);
        }
      });
    });
  
    setSuggestions(matchedSuggestions);
  };

  const handleSearchSubmit = () => {
    const resultsSet = new Set(); // Using Set to avoid duplicates
    const query = searchQuery.toLowerCase();
    
    // Search through category names
    Object.keys(imageData).forEach(category => {
      if (category.toLowerCase().includes(query)) {
        imageData[category].forEach(image => resultsSet.add(image)); // Add all images from matching category
      }
    });
    
    // Search through image texts
    Object.keys(imageData).forEach(category => {
      imageData[category].forEach(image => {
        if (image.text && image.text.toLowerCase().includes(query)) {
          resultsSet.add(image); // Add matching images
        }
      });
    });
  
    const results = [...resultsSet]; // Convert Set back to an array
    setSearchResults(results);
    collapseSearch(); // Collapse search bar after search
  };


  const handleClick = (category) => {
    setCategory(category);
    setSearchResults([]); // Reset search results when clicking on a category
  };

  return (
    <div>
       <div className="pt-[50px] lg:px-[40px] xs:px-[20px] lg:flex justify-between items-center">
            <h1 className="text-[#000000] lg:text-[32px] xs:text-[25px] font-[700]">Pick the Website Template You Love</h1>
            <label className="flex items-center lg:mt-0 xs:mt-[2rem]">
                <input 
                    type="search" 
                    placeholder="Search all templates..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onClick={expandSearch}
                    onBlur={collapseSearch}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSearchSubmit();
                      }
                    }}
                    className="mt-[15px] font-[400] text-[14px] h-[1px] py-[10px] outline-none pb-[25px]" 
                    style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF', width: expanded ? '400px' : '300px', transition: 'width 0.3s ease' }}
                />
                <FaSearch className="ms-[-1rem] text-[15px]" onClick={handleSearchSubmit} style={{color: `rgba(102, 102, 102, 0.80)` }} />
                  </label>
        </div>
        <hr className="w-[100%] h-[1px] bg-[#eee]"/>

      <div className="lg:px-[30px] xs:px-[10px] pt-[20px] lg:flex justify-between items-center">
      <ul className="flex flex-wrap gap-[15px] items-center lg:ms-0 xs:ms-[-2rem] ">
        {Object.keys(imageData).map(category => (
          <li
            key={category}
            className="text-[13px] text-[#666666cc] hover:text-[#0AADBF] font-[400] leading-[24px] cursor-pointer"
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <h2 className="text-[15px] text-[#0AADBF] font-[500] cursor-pointer lg:mt-0 xs:mt-[1.5rem] flex justify-end items-end" onClick={() => handleClick('All')}>
        All Templates
      </h2>
    </div>
    </div>
  );
};

export const ImageDisplay = ({ category, searchResults, searchQuery  }) => {
  const images = category === 'All' ? Object.values(imageData).flat() : imageData[category];
  const displayImages = searchResults.length > 0 ? searchResults : images;


  return (
    <div className='lg:px-[50px] xs:px-[20px] mt-[2rem] lg:mb-0 xs:mb-[4rem] bg-[#f5f7f7] pt-[2rem]'>
        <h1 className='text-[#000] lg:text-[20px] xs:text-[18px] font-[700] leading-[32px]'>{category} Website Templates</h1>
        <div className='lg:flex justify-start items-center flex-wrap gap-[2rem] mt-[2rem]'>
          {displayImages.map((image, index) => {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [images[index], images[randomIndex]] = [images[randomIndex], images[index]];
            return (
              <div className=''>
                  <div className='relative'>
                    <div className="bg-[#F1F1F1E6] lg:w-[95.8%] xs:w-[100%] h-[80%] absolute flex items-center justify-center transition-opacity duration-300 ms-[0.5rem] opacity-0 hover:opacity-100">
                      <div className='ms-[-1.5rem]'>
                        <Link to={image.edit} className='bg-[#00AABC] rounded-[50px] hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#00AABC] hover:text-[#00AABC] py-[10px] text-[#fff] w-[150%] flex justify-center items-center text-[18px] font-[500] cursor-pointer no-underline'>Edit</Link>
                        <Link to={image.preview} className='border-[1px] border-solid hover:bg-[#00AABC] text-[#00AABC] hover:text-[#fff] mt-[1rem] border-[#00AABC] rounded-[50px] p-[10px] w-[150%] flex justify-center items-center text-[18px] font-[500] cursor-pointer no-underline'>view</Link>
                      </div>
                    </div>
                    <img key={index} src={image.src} alt={`${category}, ${`Image ${index + 1}`}`} className="m-2 lg:mt-0 xs:mt-[3rem]" />
                    <h1 className='mt-[2rem] mb-[1rem] ms-[0.5rem] text-[#000] text-[16px] leading-[22px] font-[500]'>{image.text}</h1>
                  </div>
              </div>
            )
          })}
        </div>
    </div>
  );
};

const TemplateStructure = () => {
  const [category, setCategory] = useState('All');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchResults={setSearchResults}  />
      <ImageDisplay category={category} searchResults={searchResults} />
      
    </div>
  );
};

export default TemplateStructure;
