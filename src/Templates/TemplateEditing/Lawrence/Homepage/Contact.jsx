import React, { useState, useEffect } from 'react'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import Navbar from '../Components/Navbar'
import restro6 from '../../../../assets/images/restro6.jpg'
import Footer from '../Components/Footer'
import { Editor } from '@tinymce/tinymce-react';


const Contact = () => {

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
         if (this.width > 3264 || this.height > 4928) {
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
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[80px] w-[90vw]'>
                <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Contact</h2>
            </div>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restro6})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[150vh] bg-fixed mt-[5rem]'>
                <div className='lg:flex justify-center items-center h-[150vh]'>
                    <form className='text-[#fff] lg:pt-0 xs:pt-[5rem]'>
                        <h1 className='font-Namdhinggo text-[50px] lg:w-[60%] text-center lg:ms-[14rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>We Welcome Your Feedback</h1>
                       <div className='lg:ms-[7rem] mt-[4rem] lg:px-0 xs:px-[20px]'>
                       <div className='lg:flex gap-[1rem]'>
                        <span>
                            <label>First Name</label><br/>
                            <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span><br/>
                        <span>
                            <label className='xs:mt-4 lg:mt-0'>Last Name</label><br/>
                            <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span><br/>
                        <span>
                            <label className='xs:mt-4 lg:mt-0'>Email</label><br/>
                            <input type='email' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] mt-2 outline-none w-[100%]' />
                        </span>
                        </div>
                        <br/>
                        <label>Subject</label><br/>
                        <input type='text' className='bg-transparent border-[2px] border-solid border-[#d6d5cf] p-[5px] w-[100%] mt-2 outline-none' /><br/>
                        <label className='mt-[1rem]'>Leave us a message...</label><br/>
                        <textarea type='text' rows='6' cols='4' className='bg-transparent border-[2px] border-solid overflow-hidden resize-none border-[#d6d5cf] mt-2 w-[100%] p-[5px]  text-start outline-none' />
                        <button type='submit' className='bg-[#7c6c50] w-[100%] p-[10px] mt-4 hover:bg-[#493f30]'>Submit</button>
                       </div>
                    </form>
                </div>
            </div>
            <div className='mt-[7rem] pb-[5rem] lg:px-0 xs:px-[10px]'>
                <h2 className='text-center font-Namdhinggo text-[45px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Come Visit Us</h2>
                <p className='text-center lg:w-[37%] lg:ms-[27rem] mt-[2rem] font-Namdhinggo text-[19px] leading-[30px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I'm a paragraph. Click here to add your own text and edit me. It's easy. Body placeholder for text paragraph. A paragraph is a self-contained unit of text.</p>
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

export default Contact