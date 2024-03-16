import React, { useState, useEffect } from 'react'
import logo from '../assets/images/ADANIAN LOGO 1.png'
import { BsStars } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Lawrence from '../Templates/TemplatePreviews/Lawrence/Homepage/Homepage'

const Typewriter = ({ texts, speed }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [allText, setAllText] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (finished) return clearInterval(interval);
  
        setTypedText(prevTypedText => prevTypedText + texts[textIndex][typedText.length]);
        setAllText(prevAllText => prevAllText + texts[textIndex][typedText.length]);
  
        if (typedText.length === texts[textIndex].length - 1) {
          clearInterval(interval);
          setTextIndex(prevTextIndex => prevTextIndex);
          setFinished(true);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [speed, texts, textIndex, typedText, finished]);
    return <div className="typewriter">{allText}</div>; // Add className for styling
  };

  const Typewriter2 = ({texts2, speed2}) => {
  const [textIndex2, setTextIndex2] = useState(0);
    const [finished2, setFinished2] = useState(false);
    const [typedText2, setTypedText2] = useState('');
    const [allText2, setAllText2] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (finished2) return clearInterval(interval);
  
        setTypedText2(prevTypedText => prevTypedText + texts2[textIndex2][typedText2.length]);
        setAllText2(prevAllText => prevAllText + texts2[textIndex2][typedText2.length]);
  
        if (typedText2.length === texts2[textIndex2].length - 1) {
          clearInterval(interval);
          setTextIndex2(prevTextIndex => prevTextIndex);
          setFinished2(true);
        }
      }, speed2);
  
      return () => clearInterval(interval);
    }, [speed2, texts2, textIndex2, typedText2, finished2]);
    return <div className="typewriter">{allText2}</div>; // Add className for styling
  };
  


const ManualDashboard = () => {

    const speed = 50; // Typing speed in milliseconds
    
    const texts = [
        "Your site's ready for you!\n\nTo adjust the content and design, click on what you want to change in the editor"
      ];

      const speed2 = 50; // Typing speed in milliseconds
    
    const texts2 = [
        "SITE BRIEF",
        "Based on your site profile, My Site, your Local Business site has a site structure which includes 1 page. it's content is generated based on your site description.",
        "Your site theme features a techy design with shades of black and yellow. it's layout a clean, simple design with a classic look."
      ];

          // Determine the base URL based on the environment
      const baseUrl = process.env.NODE_ENV === 'production' ? 'https://adanian-website-builder.vercel.app/LawrenceHome' : 'http://localhost:5173';

      // Construct the full URL for the iframe src
      const iframeSrc = `${baseUrl}/LawrenceHome`;

      

  return (
    <div className='bg-[#f0f4fe]'>
        <div className='lg:flex items-center gap-[1rem] lg:px-[20px] lg:py-[20px]'>
            <div className='lg:w-[45%] xs:w-[100%] h-[93vh] bg-[#fff] rounded-[20px] shadow-md'>
                <div className='bg-[#fff] py-[20px] px-[20px] rounded-[20px]'>
                    <img src={logo} className='w-[20%]' />
                </div>
               <div className='py-[20px] px-[20px] h-[65vh] overflow-auto overflow-y-scroll' style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                <div className="flex gap-[1.5rem] rounded-[30px] bg-[#f8f8fa] px-[30px] py-[15px] pt-[1.5rem]">
                        <BsStars className='text-[25px] text-blue-600' />
                        <span>
                            {/* <Typewriter texts={texts} speed={speed} /> */}
                            <p className='text-[15px] font-[400] text-[#555] font-Poppins'>Your site's ready for you!</p>
                            <p className='text-[15px] font-[400] text-[#555] font-Poppins'>To adjust the content and design, click on what you want to change in the editor</p>
                        </span>
                    </div>
                    <div className="flex gap-[1.5rem] rounded-[30px] bg-[#f8f8fa] px-[30px] py-[15px] pt-[1.5rem] mt-3">
                        <BsStars className='text-[55px] -mt-4 text-blue-600' />
                        <span>
                            {/* <Typewriter2 texts2={texts2} speed2={speed2}/> */}
                            <p className='text-[15px] font-[600] text-[#222] font-Poppins'>SITE BRIEF</p>
                            <p className='text-[15px] font-[400] leading-[28px] text-[#555] font-Poppins'>Based on your site profile, My Site, your Local Business site has a site structure which includes 1 page. it's content is generated based on your site description.</p>
                            <p className='text-[15px] font-[400] leading-[28px] text-[#555] font-Poppins'>Your site theme features a techy design with shades of black and yellow. it's layout a clean, simple design with a classic look.</p>
                        </span>
                    </div>
               </div>

                <div className='bg-[#fff] px-[20px] py-[20px] flex justify-end items-end'>
                    <Link to='' className='lg:text-[16px] xs:text-[13px] text-center font-[500] leading-[24px] text-[#fff] hover:text-[#fff] bg-[#00AABC] hover:bg-[#116dff] py-[9px] px-[20px] lg:w-[50%] xs:w-[65%] rounded-[100px] no-underline'>Continue with this Design</Link>
                </div>
            </div>
            <div className='lg:w-[55%] xs:w-[100%] bg-[#fff] rounded-[20px] h-[93vh] shadow-md lg:mt-0 xs:mt-[5rem]' style={{ }}>
                <iframe style={{scrollbarWidth: '0'}} src={iframeSrc} frameborder="0" className='h-[100%] w-[100%] rounded-[20px] overflow-auto overflow-y-hidden' />
            </div>
        </div>
    </div>
  )
}

export default ManualDashboard