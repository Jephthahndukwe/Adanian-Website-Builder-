import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import '../stylings/style.css'
import { Link } from 'react-router-dom'
import frame from '../images/Frame 162.png'
import StartCourse from './StartCourse'
import Solutions from './Solutions'
import HomeContact from './HomeContact'
import Imageslide from './Imageslide'
import ImageSlider from './ImageSlider'
import Footer from '../Footer'
import { Editor } from '@tinymce/tinymce-react';
// import TemplateEditNavbar from '../../../../TemplateDashboard/TemplateEditNavbar'

const Home = () => {

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
     {/* <TemplateEditNavbar/> */}
    <div>
      <NavBar/>
        <div className='home background2'>
            <div className="container pt-sm-6">
                <div className='head f-style text-white pt-6'>
                    <h1 className='text-uppercase fs-3' onClick={handleElementClick}>giving tech the african feeling</h1>
                    <hr className='line'/><div className='span'></div>
                    <p className='f-style' onClick={handleElementClick}>School Of Artificial Intelligence and Robotics (SOAIR) is a first ever <br className='none'/> futuristic institution in Africa that focuses on training and preparing <br className='none'/> Africans for the unknown future with some advanced level of Technology, <br className='none'/> Research and Development. School Of Artificial Intelligence & Robotics (SOAIR) <br className='none'/> is an EduTech and Technology R&D company that Trains and Build Solutions <br className='none'/> technologically for Africans and the World at large. </p>
                    <Link to='/SoairEditCourse'><button className='btn-generally me-4' onClick={handleElementClick}>ENROLL</button></Link>
                    <Link to='/SoairEditEvent'><button className='btn-generally btn-second' onClick={handleElementClick}>EVENTS</button></Link>
                </div>
                <div className='eventSide float-lg-end float-sm-none slider'>
                  <Imageslide slides={ImageSlider} loading='lazy'/>
                </div>
            </div>
        </div>
        <img src={frame} className='frame'/>
    </div>

    <StartCourse handleElementClick={handleElementClick}/>
    <Solutions handleElementClick={handleElementClick}/>
    <HomeContact handleElementClick={handleElementClick}/>
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

export default Home