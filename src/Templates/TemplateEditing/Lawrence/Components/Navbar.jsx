import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [show, setShow] = useState(false)

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
    <div>
      <button className='text-[#fff] text-[16px] font-[300] bg-[#7c6c50] py-[15px] px-[30px] xs:block lg:hidden mt-[-2rem] w-[100%]'>Order Online</button>
        <div className='lg:flex justify-between items-center lg:pb-[50px] xs:pb-5 lg:pt-0 xs:pt-5 lg:px-[100px] xs:px-[20px]'>
          {/* <h1><Link to='/LawrenceHome' className='font-Namdhinggo text-[#20303c] hover:text-[#20303c] text-[30px] tracking-[0.8rem] leading-[24px] font-[100] no-underline'>LAWRENCE</Link></h1> */}
          <div className='flex justify-between items-center'>
              <div onClick={handleElementClick} className='hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                <h1><Link to='/LawrenceEditHome' className='font-Namdhinggo text-[#20303c] hover:text-[#20303c] lg:text-[30px] xs:text-[22px] tracking-[0.8rem] leading-[24px] font-[100] no-underline'>LAWRENCE</Link></h1>
              </div>
              <FaBars onClick={() => setShow(true)} className='text-[#7c6c50] text-[22px] lg:hidden xs:block'/>
           </div>
          <div className='lg:flex xs:hidden items-center justify-center gap-[7rem]'>
              <ul className='flex justify-center items-center gap-[2rem] mt-3 shadow-none'>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditReservation' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Reservation</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditMenu' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Menu</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditAbout' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>About</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditContact' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Contact</Link></li>
              </ul>
              <button className='text-[#fff] text-[16px] font-[300] bg-[#7c6c50] py-[10px] px-[30px]'>Order Online</button>
          </div>
      </div>

      {show ? 
          <div className='xs:flex lg:hidden absolute left-0 top-0 justify-between items-center lg:pb-[50px] py-[10px] lg:px-[100px] xs:px-[10px] ms-[-0.6rem] -mt-3'>
          <div className='lg:flex w-[100vw] overflow-x-hidden overflow-y-hidden h-[110vh] bg-[#faf8f1] items-center justify-center gap-[7rem] pt-[3rem] ps-[-5rem]'>
          <div className='flex justify-end items-end px-[20px]'>
          <FaTimes onClick={() => setShow(false)} className='text-[#7c6c50] text-[30px] lg:hidden xs:block'/>
          </div>
              <ul className='lg:flex pt-[3rem] justify-center items-center text-center gap-[2rem] mt-3 shadow-none'>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[400]'><Link to='/LawrenceEditReservation' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Reservation</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditMenu' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Menu</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditAbout' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>About</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditContact' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Contact</Link></li>
              </ul>
              
          </div>
      </div>
      : null
      }

        {editableElement && (
            <div
                className="editor-wrapper fixed h-[50vh] flex justify-center items-center top-0 left-[3rem]"
            >
                <Editor
                    initialValue={editorContent}
                    apiKey="weyuzxfz4rnkmcfm9egz0vqo4qwek3fq6aucwzeudmatw48t"
                    init={{
                        height: 150,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                    }}
                    onEditorChange={handleEditorChange}
                />
            </div>
        )}
    </div>
  )
}

export default Navbar