import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro4 from '../../../../assets/images/restro4.jpg'
import restro5 from '../../../../assets/images/restro5.png'
import Footer from '../Components/Footer'
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'


const About = () => {

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


    // IMAGE EDITING
    const useImageUpload = (setImage, setErrorMessage, maxSize, maxWidth, maxHeight) => {
        return (event) => {
            const selectedFile = event.target.files[0];
    
            // Check if file size is within limits
            if (selectedFile.size > maxSize) {
                setErrorMessage(`File size exceeds ${maxSize / (1024 * 1024)}MB. Please select a smaller file.`);
                setTimeout(() => {
                    setErrorMessage('');
                }, 10000); // Hide the error message after 10 seconds
                return;
            }
    
            // Check if image dimensions are within limits
            const img = new Image();
            img.onload = function () {
                if (this.width > maxWidth || this.height > maxHeight) {
                    setErrorMessage(`Image dimensions exceed ${maxWidth}x${maxHeight} pixels. Please select a smaller image.`);
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 10000); // Hide the error message after 10 seconds
                    return;
                }
                const imageUrl = URL.createObjectURL(selectedFile);
                setImage(imageUrl);
                setErrorMessage('');
            };
            img.src = URL.createObjectURL(selectedFile);
        };
    };
    
    const handleImageClick = (inputId) => {
        document.getElementById(inputId).click();
    };
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    
    const onSelectFile = useImageUpload(setSelectedImage, setErrorMessage, 2 * 1024 * 1024, 3264, 4928);
    
    const handleImageClick1 = () => {
        handleImageClick('fileInput1');
    };
    
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [errorMessage2, setErrorMessage2] = useState('');
    
    const onSelectFile2 = useImageUpload(setSelectedImage2, setErrorMessage2, 2 * 1024 * 1024, 555, 800);
    
    const handleImageClick2 = () => {
        handleImageClick('fileInput2');
    };
    

  return (
    <div>
        <TemplateEditNavbar/>
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[50px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>About Us</h2>
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {selectedImage ? (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${selectedImage})`,  backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed mt-[5rem]' onClick={handleImageClick}>
                         <div className='lg:flex justify-center items-center h-[100vh] lg:px-0 xs:px-[20px] lg:pt-0 xs:pt-[5rem]'>
                            <div>
                                <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[40px] lg:ms-[32rem] lg:text-start xs:text-center text-[#fff] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>The Restaurant</h2>
                                <p className='text-[#fff] lg:text-[16px] xs:text-[14.5px] mt-[2rem] lg:ms-[18rem] lg:w-[55%] leading-[28px] text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${restro4})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed mt-[5rem]' onClick={() => document.getElementById('fileInput').click()}>
                        <div className='lg:flex justify-center items-center h-[100vh] lg:px-0 xs:px-[20px] lg:pt-0 xs:pt-[5rem]'>
                            <div>
                                <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[40px] lg:ms-[32rem] lg:text-start xs:text-center text-[#fff] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>The Restaurant</h2>
                                <p className='text-[#fff] lg:text-[16px] xs:text-[14.5px] mt-[2rem] lg:ms-[18rem] lg:w-[55%] leading-[28px] text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out</p>
                            </div>
                        </div>
                    </div>
                )}
                <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
                {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
                <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] xs:px-[10px] mt-[5rem] pb-[6rem]'>
                    <div>
                        {/* <img src={restro5} className='w-[180vw]' /> */}
                        {selectedImage2 ? (
                            <img src={selectedImage2} alt="Selected Image" className="w-[180vw]" onClick={handleImageClick2} />
                        ) : (
                            <img src={restro5} alt="Frame" className="w-[180vw]" onClick={() => document.getElementById('fileInput2').click()} />
                        )}
                            <input id="fileInput2" type='file' name='images' onChange={onSelectFile2} style={{ display: 'none' }} />
                    </div>
                    <div className='lg:mt-0 xs:mt-[4rem]'>
                        <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:ms-[12rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Our Kitchen</h1>
                        <p className='mt-[2rem] text-center text-[16px] leading-[24px] lg:ms-[5rem] text-[#7c6c50] lg:w-[80%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
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

export default About