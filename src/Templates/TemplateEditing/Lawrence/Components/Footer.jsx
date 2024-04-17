import React, { useState, useEffect } from 'react'
import { FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import { FaTripadvisor } from "react-icons/fa";


const Footer = () => {

    const [editableElement, setEditableElement] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
         // Load content from local storage when component mounts
         const savedContent = localStorage.getItem('editorContent');
         if (savedContent) {
         setEditorContent(savedContent);
         }
    }, []);

    const handleElementClick = (event) => {
         const element = event.target;
         setEditableElement(element);
         setEditorContent(element.innerHTML);
    };

    useEffect(() => {
         const handleClickOutside = (event) => {
         if (editableElement && !editableElement.contains(event.target)) {
              // Clicked outside the editable element, remove the editor
              setEditableElement(null);
         }
         };

         document.addEventListener('click', handleClickOutside);

         return () => {
         document.removeEventListener('click', handleClickOutside);
         };
    }, [editableElement]);

    const handleEditorChange = (content) => {
         if (editableElement) {
         editableElement.innerHTML = content;
         setEditorContent(content);
         // Save the edited content to local storage
         localStorage.setItem('editorContent', content);
         }
    };

  return (
    <div className='bg-[#090f0f] py-[70px] pb-[100px] lg:px-[130px] xs:px-[20px] pt-[8rem] flex justify-center items-center'>
        <div>
            <div className='flex flex-wrap justify-between items-center'>
                <div>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>Address</h2>
                    <h4 className='text-[22px] w-[55%] leading-[30px] mt-[2rem] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>500 Terry Francine Street San Francisco, CA 94158</h4>
                </div>
                <div className='lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>Contact Us</h2>
                    <h3 className='text-[22px] leading-[30px] mt-[2rem] w-[50%] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px] hover:w-[60%]'>info@mysite.com 123 456 6780</h3>
                </div>
                <div className='lg:mt-0 xs:mt-[2rem]'>
                    <h2 className='text-[35px] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>Opening Hours</h2>
                    <h3 className='text-[22px] leading-[30px] mt-[2rem] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>Mon - Fri: 11am - 10pm</h3>
                    <h3 className='text-[22px] leading-[30px] text-[#fff] font-[100] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>Sat - Sun: 11am - 12am</h3>
                </div>
            </div>
            <div className='w-[100%] h-[1px] bg-[#fff] mt-[3rem]' />
            <div className='flex flex-wrap justify-between items-center mt-[3rem]'>
                <h3 className='text-[18px] text-[#fff] font-[100] leading-[24px] text-center font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'>© 2035 Lawrence. Powered and secured by <Link to='/' className='text-[18px] text-[#fff] font-[100] font-Namdhinggo hover:text-[#fff]'>Adanian Labs</Link></h3>
                <div className='flex gap-[10px] items-center lg:ms-0 xs:ms-[7.5rem] lg:mt-0 xs:mt-[3rem]'>
                    <FaTwitter className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                    <FaInstagram className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                    <FaTripadvisor className='text-[#fff] lg:text-[18px] xs:text-[22px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer