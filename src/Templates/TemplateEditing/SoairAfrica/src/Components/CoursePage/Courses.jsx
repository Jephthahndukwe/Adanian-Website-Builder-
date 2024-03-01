import React, { useState, useEffect } from 'react'
import '../stylings/Course.css'
import NavBar from '../NavBar'
import frame2 from '../images/Frame 162.png'
import image from '../images/image 2.png'
import frame from '../images/Frame 119 (2).png'
import certificate from '../images/Certificate.png'
import office from '../images/Office.png'
import beginner from '../images/Beginner.png'
import internship from '../images/Internship.png'
import Startcourse from './Startcourse'
import Testimonials from './Testimonials'
import Footer from '../Footer'
import { Editor } from '@tinymce/tinymce-react';


const Courses = () => {

  const [editableElement, setEditableElement] = useState(null);
    const [editorContent, setEditorContent] = useState('');

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


        // Image Editing
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
          if (this.width > 800 || this.height > 600) {
              setErrorMessage('Image dimensions exceed 800x600 pixels. Please select a smaller image.');
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
      <>
      <div>
        <NavBar/>

           <div className='background3'>
          <div className="container pt-6">
            <div className='event course-event'>
                <h2 className='f-style text-uppercase text-white' onClick={handleElementClick}>DID YOU KNOW?</h2>
                <h4 className='f-style text-white text-uppercase mt-4' onClick={handleElementClick}>MANY UNIVERSITY COURSES WILL <br className='none'/> BE IRRELEVANT SOON, <br className='none'/> REGISTER FOR THE FUTURE TODAY!</h4>
                <div className='d-flex mt-4'>
                  <img src={certificate} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2' onClick={handleElementClick}>Earn your certificate</p>
                </div>
                <div className='d-flex'>
                  <img src={office} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2' onClick={handleElementClick}>accessibility to hub workspace</p>
                </div>
                <div className='d-flex'>
                  <img src={beginner} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2' onClick={handleElementClick}>military pattern of training</p>
                </div>
                <div className='d-flex'>
                  <img src={internship} className='courseimage'/>
                  <p className='f-style text-white text-capitalize ms-2' onClick={handleElementClick}>one month internship with a company</p>
                </div>
                <div className='eventSide float-lg-end float-sm-none w-[50%]'>
                    {/* <img src={frame} className='image image2'/> */}
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected Image" className="image2 image" onClick={handleImageClick} />
                    ) : (
                        <img src={frame} alt="Frame" className="image image2" onClick={() => document.getElementById('fileInput').click()} />
                    )}
                    <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
                </div>
            </div>
        </div>
       
        </div>
        <img src={frame2} className='frame mt-auto'/>  
   </div>       

      <Startcourse handleElementClick={handleElementClick}/>
      <Testimonials handleElementClick={handleElementClick}/>
      <Footer handleElementClick={handleElementClick}/>

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
      </>
    )
}

export default Courses