import React, { useState, useEffect } from 'react'
import '../stylings/style.css'
import '../stylings/event.css'
import '../stylings/student.css'
import NavBar from '../NavBar'
import { FaSearch, FaCalendar } from 'react-icons/fa'
import frame from '../images/Frame 119 (1).png'
import image from '../images/image 2.png'
import frame2 from '../images/Frame 162.png'
import group from '../images/Group 2.png'
import selectData from './SelectTemplate'
import Footer from '../Footer'
import { Editor } from '@tinymce/tinymce-react';


const Student = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [selectTerms, setSelectTerms] = useState("");


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
                    <h1 className='f-style text-uppercase text-white' onClick={handleElementClick}>our students</h1>
                    <hr className='line text-white'/><div className='span'></div>
                    <h3 className='f-style text-white' onClick={handleElementClick}>SOAIR is for everyone...</h3>
                    <p className='f-style text-white' onClick={handleElementClick}>connect with so many here, build strong and networks . <br className='none'/> after all we are just setting up the best for you</p>
                    <input placeholder='Students...' className='mt-3 f-style' onChange={(event) => {
                      setSearchTerms(event.target.value);
                    }}/>
                    {/* <FaSearch className='search f-style fs-5'/> */}
                    <div className='eventSide float-lg-end float-sm-none'>
                        <img src={frame} className='image' loading='lazy'/>
                    </div>
                </div>
            </div>
        
            </div>
            <img src={frame2} className='frame FRAMEE mt-auto'/>
      </div>


      <div class="container">
      <div className='programs d-sm-flex mt-5'>
          <h1 className='f-style text-uppercase fs-2 text-center' onClick={handleElementClick}>our students</h1>
        </div>

         <center>
         <div className='student'>
      <div className='row program-img program-img2 ms-sm-5'>
          {
            selectData
            .filter((val) => {
              if(searchTerms == "") {
                return val;
              } else if(val.name.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }else if(val.date.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }else if(val.work.toLowerCase().includes(searchTerms.toLowerCase())) {
                return val;
              }
            })
            .map((val) => {
              return(
                <div className='col-lg-6 col-md-6 col-sm-6 mt-6 hey' key={val.id}>
                <img src={val.image} className='image' loading='lazy'/>
                <div className='program-text program2'>
                  <h2 className='f-style text-uppercase ms-2 pt-4 text-start' onClick={handleElementClick}>{val.name}</h2>
                  <p className='f-style ms-2 text-start' onClick={handleElementClick}>{val.work}</p>
                  <p className='f-style ms-2 text-capitalize text-start' onClick={handleElementClick}>{val.text}</p>
                  <p className='f-style ms-2 student-link text-start'><a href='' target='_blank'>{val.link}</a></p>
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
         </center>
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
    </>
  )
}

export default Student