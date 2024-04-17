import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro7 from '../../../../assets/images/restro7.png'
import Footer from '../Components/Footer'
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';


const Menu = () => {

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
          if (this.width > 980 || this.height > 685) {
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
        <div className='bg-[#faf8f1] pt-[2rem] pb-[6rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] px-[180px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Menu</h2>
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {selectedImage ? (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${selectedImage})`,  backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[50vh] bg-fixed mt-[5rem]' onClick={handleImageClick} />
                ) : (
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restro7})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[50vh] bg-fixed mt-[5rem]' onClick={() => document.getElementById('fileInput').click()} />
                )}
                <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
                    <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>Starters</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <div className='flex flex-wrap gap-[2rem] items-center lg:px-[80px] xs:px-[10px] mt-[4rem]'>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Soup of the Day</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4 '>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Seasonal Garden Salad</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Caesar Salad</h2>
                                <div className='w-[100%] ' onClick={handleElementClick}>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Endive & Roquefort Salad</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Salmon Carpaccio & Citrus Dressing</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>Steak Tartare</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={handleElementClick}>$9.99</h3>
                           </div>
                        </div>
                </div>
                <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center hover:border-[1px] hover:border-solid hover:border-[#000]'>Main Courses</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000]'>I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <div className='flex flex-wrap gap-[2rem] items-center lg:px-[80px] xs:px-[10px] mt-[4rem]'>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>White Fish Fillet & Mussels Stew</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                    <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br /> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>Sirloin Steak & Grilled Asparagus</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>Roasted Chicken with Garlic Cream</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>Lawrence Burger 10oz</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>Sweet Potato Ravioli</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem] hover:border-[1px] hover:border-solid hover:border-[#000]'>Spinach Black Risotto</h2>
                                <div className='w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]'>$9.99</h3>
                           </div>
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

export default Menu