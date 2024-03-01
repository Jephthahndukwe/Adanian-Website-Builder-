import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../stylings/style.css'
import '../stylings/event.css'
// import '../stylings/student.css'
import NavBar from '../NavBar'
import { FaSearch, FaCalendar } from 'react-icons/fa'
import frame from '../images/Frame 119.png'
import image from '../images/image 2.png'
import frame2 from '../images/Frame 162.png'
import group from '../images/Group 2.png'
import Programs from './Programs'
import program from '../images/program.png'
import program2 from '../images/program2.png'
import program3 from '../images/program3.png'
import Future from './Future'
import ProgramTwo from './ProgramTwo'
import data from "./EventTemplate"
import Footer from '../Footer'
import { Editor } from '@tinymce/tinymce-react';



const Event = () => {
  const [searchTerms, setSearchTerms] = useState("");


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
        <div className="container pt-6 ">
            <div className='event'>
                <h1 className='f-style text-uppercase text-white' onClick={handleElementClick}>events</h1>
                <hr className='line text-white'/><div className='span'></div>
                <p className='f-style text-white' onClick={handleElementClick}>Soair is a great way to learn a new skill, and our upcoming event <br className='none'/> is the perfect opportunity to get started. We'll be covering the basics <br className='none'/> of different skills, as well as some more advanced topics. Our experienced <br className='none'/> instructors will be available to answer any questions you may have. <br className='none'/> Don't miss out on this chance to expand your skillet </p>
                <input placeholder='Events...' className='mt-3 f-style' onChange={(event) => {
                  setSearchTerms(event.target.value);
                }}/>
                {/* <FaSearch className='search f-style fs-5'/> */}
                <div className='eventSide float-lg-end float-sm-none w-[40%]'>
                    {/* <img src={frame} className='image' loading='lazy'/> */}
                    {selectedImage ? (
                        <img src={selectedImage} alt="Selected Image" className="image" onClick={handleImageClick} />
                    ) : (
                        <img src={frame} alt="Frame" className="image" onClick={() => document.getElementById('fileInput').click()} />
                    )}
                    <input id="fileInput" type='file' name='images' onChange={onSelectFile} style={{ display: 'none' }} />
                </div>
            </div>
        </div>
       
        </div>
        <img src={frame2} className='frame mt-auto'/>  
   </div>
    <Programs handleElementClick={handleElementClick}/>

     <center>
          <div className="container">
            <div className='student'>
            <div className='row program-img ms-sm-5'>
          {
                    data
                    .filter((val) => {
                      if(searchTerms == "") {
                        return val;
                      } else if(val.place.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return val;
                      }else if(val.date.toLowerCase().includes(searchTerms.toLowerCase())) {
                        return val;
                      }
                    })
                    .map((val) => {
                      return (
                        <div className='col-lg-6 col-md-6 col-sm-6 mt-6'>
                        <img src={val.image} className='image' loading='lazy'/>
                        <div className='program-text'>
                          <h2 className='f-style text-uppercase text-start ms-2 pt-4' onClick={handleElementClick}>{val.place}</h2>
                          <p className='f-style ms-2 text-start' onClick={handleElementClick}>{val.text}</p>
                          <div className='ms-2 d-flex'>
                            <FaCalendar className='mt-1'/>
                            <p className='f-style ms-2' onClick={handleElementClick}>{val.date}</p>
                          </div>
                      </div>
                    </div>
                      )
                    })
                  } 

              
                </div>
            </div>
        </div>
     </center>

    <Future handleElementClick={handleElementClick}/>
    {/* <ProgramTwo handleElementClick={handleElementClick}/> */}
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

export default Event