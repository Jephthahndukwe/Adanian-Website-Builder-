import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
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
import Educational4 from '../../assets/images/educational4.png'
import Services1 from '../../assets/images/services1.png'
import Services2 from '../../assets/images/services2.png'
import Services3 from '../../assets/images/services3.png'
import Food1 from '../../assets/images/food1.png'
import Food2 from '../../assets/images/food2.png'
import Food3 from '../../assets/images/food3.png'
import Food4 from '../../assets/images/food4.png'
import Technology1 from '../../assets/images/technology1.png'
import Technology2 from '../../assets/images/technology2.png'
import Technology3 from '../../assets/images/technology3.png'
import Healthcare1 from '../../assets/images/health1.png'
import Healthcare2 from '../../assets/images/health2.png'
import Fashion1 from '../../assets/images/fashion1.png'
import Fashion2 from '../../assets/images/fashion2.png'
import Fashion3 from '../../assets/images/fashion3.png'
import Entertainment1 from '../../assets/images/entertainment1.png'
import Entertainment2 from '../../assets/images/entertainment2.png'
import Entertainment3 from '../../assets/images/entertainment3.png'
import Entertainment4 from '../../assets/images/entertainment4.png'


const imageData = {
  'Educational': [
    { src: Educational4, text: 'School Website' },
    { src: Educational1, text: 'Online School' },
    { src: Educational2, text: 'College' },
    { src: Educational3, text: 'Education Blog' },
    // Add more Educational images
  ],
  'Online Store': [
    { src: OnlineStore1, text: 'Accessories Store' },
    { src: OnlineStore2, text: 'Electronics Store' },
    { src: OnlineStore3, text: 'Stationery Store' },
    { src: OnlineStore4, text: 'T- Shirt Store' },
    { src: OnlineStore5, text: 'Beauty Shop' },
    { src: OnlineStore6, text: 'Supermarket' },
    // Add more online store images
  ],
  'Portfolio': [
    { src: Portfolio1, text: 'Photographer' },
    { src: Portfolio2, text: 'Fashion Designer' },
    { src: Portfolio3, text: 'Fashion Designer' },
    { src: Portfolio4, text: 'Graphic Designer' },
    { src: Portfolio5, text: 'Videographer' },
    // Add more Portfolio images
  ],
  'Blog': [
    { src: Blog1, text: 'Personal Blog' },
    { src: Blog2, text: 'Travel Blog' },
    { src: Blog3, text: 'Personal Blog' },
    // Add more Blog images
  ],
  'Service Business': [
    { src: Services1, text: 'Cleaning Company' },
    { src: Services2, text: 'Home Improvement Company' },
    { src: Services3, text: 'Recycling Facility' },
    // Add more restaurant images
  ],
  'Restaurant': [
    { src: Food1, text: 'Dinner Restaurant' },
    { src: Food2, text: 'Restaurant' },
    { src: Food3, text: 'Farm' },
    { src: Food4, text: 'Forestry Company' },
    // Add more restaurant images
  ],
  'IT & Technology': [
    { src: Technology1, text: 'AI Company' },
    { src: Technology2, text: 'Tech Company' },
    { src: Technology3, text: 'IT Services Company' },
    // Add more IT & Technology images
  ],
  'HealthCare': [
    { src: Healthcare1, text: 'Home Healthcare Company' },
    { src: Healthcare2, text: 'Medical Clinic' },
    // Add more HealthCare images
  ],
  'Fashion': [
    { src: Fashion1, text: 'Clothing Store' },
    { src: Fashion2, text: 'Shoe Store' },
    { src: Fashion3, text: 'Clothing Store' },
    // Add more Fashion images
  ],
  'Entertainment': [
    { src: Entertainment1, text: 'Event Planning Company' },
    { src: Entertainment2, text: 'Club' },
    { src: Entertainment3, text: 'DJ' },
    { src: Entertainment4, text: 'Event Venue' },
    // Add more Entertainment images
  ],
};

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
       <div className="py-[50px] lg:px-[40px] xs:px-[20px] lg:flex justify-between items-center">
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

      <div className="lg:px-[30px] xs:px-[20px] py-[20px] lg:flex justify-between items-center">
      <ul className="flex flex-wrap gap-[15px] items-center">
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
      <h2 className="text-[15px] text-[#0AADBF] font-[500] cursor-pointer lg:mt-0 xs:mt-[1.5rem] flex justify-end items-end" onClick={() => handleClick('All')}>
        All Templates
      </h2>
    </div>
    </div>
  );
};

const ImageDisplay = ({ category, searchResults, searchQuery  }) => {
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
                        <Link to='/templateviewintro' className='bg-[#00AABC] rounded-[50px] hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#00AABC] hover:text-[#00AABC] py-[10px] text-[#fff] w-[150%] flex justify-center items-center text-[18px] font-[500] cursor-pointer no-underline'>Edit</Link>
                        <Link to='/SoairHome' className='border-[1px] border-solid hover:bg-[#00AABC] text-[#00AABC] hover:text-[#fff] mt-[1rem] border-[#00AABC] rounded-[50px] p-[10px] w-[150%] flex justify-center items-center text-[18px] font-[500] cursor-pointer no-underline'>view</Link>
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
