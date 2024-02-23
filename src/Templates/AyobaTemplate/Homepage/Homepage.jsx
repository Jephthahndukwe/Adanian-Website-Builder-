import { useState, useEffect } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import ayoba from '../assets/ayoba 2.png';
import woman from '../assets/women_chopped.png';
import rectangle from '../assets/Rectangle 1.png';
import Gain from "./Gain";
import { Link } from "react-router-dom";
import '../TemplateOne.css';
import { Editor } from '@tinymce/tinymce-react';


const Homepage = () => {
    // const [showSponsorBox, setShowSponsorBox] = useState(true); 
    // const [showExhibitorBox, setShowExhibitorBox] = useState(false);

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
    <div>
        <Navbar
             handleElementClick={handleElementClick}
        />
        <div className="font">
            <div>
                    <div className="lg:px-[60px] xs:px-[12px] mt-[5rem] lg:flex justify-between">
                        <div>
                            <img src={ayoba} className="lg:w-[400px] xs:w-[300px] lg:h-[122px] object-contain" />
                            <h2 className="text-[#0061A1] lg:text-[24px] xs:text-[17.7px] tracking-[0.7px] font-[600]"><span className="text-[#FDB933]">SME</span> ACCELERATOR, Nigeria 2023</h2>
                            <div className="flex gap-2 mt-[3rem] items-center" onClick={handleElementClick}>
                                <span className="text-[#333] lg:text-[27px] xs:text-[20px] font-[700]">Exhibition</span> 
                                <div className="w-[2px] h-[25px] bg-[#494B4A]"/> 
                                <span className="text-[#333] lg:text-[27px] lg:text-[25px] xs:text-[20px] font-[700]">Graduation</span> 
                                <div className="w-[2px] h-[25px] bg-[#494B4A]"/>
                                <span className="text-[#333] lg:text-[27px] lg:text-[25px] xs:text-[20px] font-[700]">Awards</span>
                            </div>
                            <h2 className="text-[#FDB933] xs:text-[17.7px] lg:text-[22.7px] font-[700] mt-[10px]" onClick={handleElementClick}>
                                <span className="text-[#FDB933]"><span>27th Mar 2024</span> | Lagos Oriental Hotel.</span>
                            </h2>
                           <p className="lg:mt-[8rem] xs:mt-[3rem] relative"><Link to='/' className="bg-[#0161A2] lg:w-[400px] xs:w-[50px] text-[#fff] lg:text-[24px] xs:text-[14px] font-[400] h-[77px] rounded-[8px] lg:p-[20px] xs:p-[12px]">Download Concept Note</Link></p>
                        </div>
                        <div>
                            <img src={woman} className="lg:absolute lg:w-[387px] lg:h-[650px] lg:ms-[-23rem] lg:mt-[-1.7rem] xs:mt-[5rem]"  />
                        </div>
                    </div>
                </div>
                <div className="lg:mt-[-7.6rem]">
                    <img src={rectangle} className="lg:block w-[100%] xs:hidden" />
                </div>
        </div>
        <Gain handleElementClick={handleElementClick}/>
        <Footer handleElementClick={handleElementClick}/>

        {editableElement && (
                <div
                    className="editor-wrapper"
                    style={{
                        position: 'absolute',
                        top: editableElement.offsetTop + editableElement.offsetHeight,
                        left: editableElement.offsetLeft,
                    }}
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

export default Homepage