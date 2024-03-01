import React, { useState, useEffect } from 'react'
import '../stylings/contact.css'
import { FaSearch, FaPhoneSquare, FaLocationArrow, FaEnvelope } from 'react-icons/fa'
import NavBar from '../NavBar'
import frame2 from '../images/Frame 162.png'
import image from '../images/image 2.png'
import image1 from '../images/image 15.png'
import image2 from '../images/image 12 (1).png'
import image3 from '../images/image 13.png'
import image4 from '../images//image 14.png'
import ContactFuture from './ContactFuture'
import Footer from '../Footer'
import { Editor } from '@tinymce/tinymce-react';



const Contact = () => {

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


  return (
    <>
     <div>
        <NavBar/>

        <div className='background2'>
            <div className="container pt-7">
                <div className='event'>
                    <h1 className='f-style text-uppercase text-white' onClick={handleElementClick}>REACH OUT TO US</h1>
                    <hr className='line text-white'/><div className='span'></div>
                    <div className='d-flex'>
                      <FaPhoneSquare className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2' onClick={handleElementClick}>09091920347, 08065089535</p>
                    </div>
                    <div className='d-flex'>
                      <FaLocationArrow className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2' onClick={handleElementClick}>SOAIR HUB Nigerian Airforce Base Ikeja <br className='none'/> www.soairafrica.com</p>
                    </div>
                    <div className='d-flex'>
                      <FaEnvelope className='f-style text-white mt-1'/>
                      <p className='f-style text-white ms-2' onClick={handleElementClick}>soairafrica@gmail.com</p>
                    </div>
                    <div className='icons mt-sm-6 d-flex'>
                    <a href='' target='_blank'><img src={image1} className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image2}  className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image3} className='social-img text-center me-3'/></a>
                    <a href='' target='_blank'><img src={image4} className='social-img text-center me-3'/></a>
                    </div>
                    <div className='contact float-lg-end float-sm-none ms-sm-7'>
                        <form>
                          <input  type='text' placeholder='First Name' className='f-style' required/>
                          <input type='text' placeholder='Last Name' className='f-style' required /><br/>
                          <input type='email' placeholder='Email Address' className='mail f-style' required/><br/>
                          <textarea type='text' placeholder='Message' className='f-style' required/><br/>
                          <button type='submit' className='f-style text-white ms-sm-5 mt-3'>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        
            </div>
            <img src={frame2} className='frame FRAMEE mt-aut'/>
      </div>

    <ContactFuture handleElementClick={handleElementClick} />
    <Footer handleElementClick={handleElementClick} />

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

export default Contact