import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';

const Reservation = () => {

 // Get today's date in the format YYYY-MM-DD
 const today = new Date().toISOString().split('T')[0];

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

  // IMAGE EDIT 1
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const onSelectFile = (event) => {
      const selectedFile = event.target.files[0];

      // Check if file size is within limits (e.g., 2 MB)
      if (selectedFile.size > 2 * 1024 * 1024) {
          setErrorMessage('File size exceeds 2MB. Please select a smaller file.');
          setTimeout(() => {
              setErrorMessage('');
          }, 10000); // Hide the error message after 10 seconds
          return;
      }

      // Check if image dimensions are within limits (e.g., 800x600)
      const img = new Image();
      img.onload = function () {
          if (this.width > 5139 || this.height > 3426) {
              setErrorMessage('Image dimensions exceed 5139x3426 pixels. Please select a smaller image.');
              setTimeout(() => {
                  setErrorMessage('');
              }, 10000); // Hide the error message after 10 seconds
              return;
          }
          const imageUrl = URL.createObjectURL(selectedFile);
          setSelectedImage(imageUrl);
          setErrorMessage('');
      };
      img.src = URL.createObjectURL(selectedFile);
  };

  const handleImageClick = () => {
      document.getElementById('fileInput').click();
  };

  return (
    <div>
        <TemplateEditNavbar/>
        <div className='bg-[#faf8f1] pt-[2rem]'>
        <Navbar/>
        <div className='mt-[4rem] py-[30px] pb-[90px]'>
                <h2 className='font-Namdhinggo text-center font-[100] lg:text-[50px] xs:text-[40px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Make a reservation</h2>
                <h3 className='text-center text-[16px] font-[400] mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>To help us find the best table for you, select the preferred party size, date, and time of your reservation.</h3>
                <form>
                    <div className='lg:flex justify-center gap-[1rem] items-center mt-[5rem] px-[10px]'>
                    <span>
                        <label className='font-Namdhinggo text-[17px]'>Party size</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[12px] bg-[#faf8f1] px-[8px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1 guest</option>
                            <option selected className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5 guests</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6 guests</option>
                        </select>
                    </span><br/>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-4'>Date</label><br/>
                        <input type="date" id="date" defaultValue={today} className='border-[1px] mt-2 border-solid border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[10px] bg-[#faf8f1] px-[8px] font-Namdhinggo text-[18px] outline-none' />
                    </span><br/>
                    <span>
                        <label className='font-Namdhinggo text-[17px] lg:mt-0 xs:mt-4'>Time</label><br/>
                        <select className='border-[1px] border-solid mt-2 border-[#a3a49f] lg:w-[300px] xs:w-[100%] py-[12px] bg-[#faf8f1] px-[8px] pr-[90px] outline-none font-Namdhinggo text-[18px]'>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:00 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:15 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:35 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>11:45 AM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>12:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>1:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>2:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>3:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>4:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>5:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>6:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>7:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>8:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:00 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:15 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:35 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>9:45 PM</option>
                            <option className='font-Namdhinggo text-[18px] text-[#7c6c50]'>10:00 PM</option>
                        </select>
                    </span>
                    </div>
                    <div className='xs:px-[20px] lg:px-[170px]'>
                            <div className='lg:w-[93%] xs:w-[100%] lg:ms-[2rem] h-[2px] bg-[#d6d5cf] mt-[5rem]' />
                                <div className='flex justify-center items-center lg:ms-[2rem]'>
                                    <div>
                                    <h3 className='lg:text-start xs:text-center mt-[3rem] text-[18px] font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Choose an available time slot:</h3>
                                        <div className='flex flex-wrap items-center gap-[1rem] mt-[2rem]'>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]' >
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        <div className='relative'>
                                            <div className='flex justify-center items-center border-[1px] border-solid border-[#7c6c50] py-[5px] lg:px-[52.4px] xs:px-[15px]'>
                                                <span className='font-Namdhinggo text-[18px]'>10:45 AM</span>
                                            </div>
                                            <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
                                                <div className='w-full h-full bg-[#7c6c50] transform -skew-y-12' style={{ width: '200%', height: '3%' }}></div>
                                            </div>
                                        </div>
                                        
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button type='submit' className='bg-[#7c6c50] py-[10px] px-[20px] mt-[3rem] text-[#fff]'>Reserve Now</button>
                                </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
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

export default Reservation