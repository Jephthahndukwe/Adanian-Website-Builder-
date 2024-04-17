import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Component/Navbar';
import fashSale1 from '../../../../assets/images/fashSale1.webp'
import fashSale2 from '../../../../assets/images/fashSale2.webp'
import fashSale3 from '../../../../assets/images/fashSale3.webp'
import fashSale4 from '../../../../assets/images/fashSale4.webp'
import fashSale5 from '../../../../assets/images/fashSale5.webp'
import fashSale6 from '../../../../assets/images/fashSale6.webp'
import fashSale7 from '../../../../assets/images/fashSale7.webp'
import fashSale8 from '../../../../assets/images/fashSale8.webp'
import fashSale9 from '../../../../assets/images/fashSale9.webp'
import fashSale10 from '../../../../assets/images/fashSale10.webp'
import fashSale11 from '../../../../assets/images/fashSale11.webp'
import fashSale12 from '../../../../assets/images/fashSale12.webp'
import fashSale13 from '../../../../assets/images/fashSale13.webp'
import fashSale14 from '../../../../assets/images/fashSale14.webp'
import fashSale15 from '../../../../assets/images/fashSale15.webp'
import fashSale16 from '../../../../assets/images/fashSale16.webp'
import fashSale17 from '../../../../assets/images/fashSale17.webp'
import fashSale18 from '../../../../assets/images/fashSale18.webp'
import fashSale19 from '../../../../assets/images/fashSale19.webp'
import fashSale20 from '../../../../assets/images/fashSale20.webp'
import fashSale21 from '../../../../assets/images/fashSale21.webp'
import fashSale22 from '../../../../assets/images/fashSale22.webp'
import Footer from '../Component/Footer';
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';



const Sales = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set show to true after the component is mounted to trigger the animation
      setShow(true);
    }, []);

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
   const useImageUpload = (setImage, setErrorMessage, maxSize, maxWidth, maxHeight, inputId) => {
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

      const onSelectFile = useImageUpload(setSelectedImage, setErrorMessage, 2 * 1024 * 1024, 635, 1000, 'fileInput');

      const handleImageClick1 = () => {
          handleImageClick('fileInput');
      };

      const [selectedImage2, setSelectedImage2] = useState(null);
      const [errorMessage2, setErrorMessage2] = useState('');

      const onSelectFile2 = useImageUpload(setSelectedImage2, setErrorMessage2, 2 * 1024 * 1024, 347, 456, 'fileInput2');

      const handleImageClick2 = () => {
          handleImageClick('fileInput2');
      };

      const [selectedImage3, setSelectedImage3] = useState(null);
      const [errorMessage3, setErrorMessage3] = useState('');

      const onSelectFile3 = useImageUpload(setSelectedImage3, setErrorMessage3, 2 * 1024 * 1024, 635, 1000, 'fileInput3');

      const handleImageClick3 = () => {
          handleImageClick('fileInput3');
      };

      const [selectedImage4, setSelectedImage4] = useState(null);
      const [errorMessage4, setErrorMessage4] = useState('');

      const onSelectFile4 = useImageUpload(setSelectedImage4, setErrorMessage4, 2 * 1024 * 1024, 310, 430, 'fileInput4');

      const handleImageClick4 = () => {
          handleImageClick('fileInput4');
      };

      const [selectedImage5, setSelectedImage5] = useState(null);
      const [errorMessage5, setErrorMessage5] = useState('');

      const onSelectFile5 = useImageUpload(setSelectedImage5, setErrorMessage5, 2 * 1024 * 1024, 431, 621, 'fileInput5');

      const handleImageClick5 = () => {
          handleImageClick('fileInput5');
      };

      const [selectedImage6, setSelectedImage6] = useState(null);
      const [errorMessage6, setErrorMessage6] = useState('');

      const onSelectFile6 = useImageUpload(setSelectedImage6, setErrorMessage6, 2 * 1024 * 1024, 635, 1000,      'fileInput6');

      const handleImageClick6 = () => {
          handleImageClick('fileInput6');
      };

      const [selectedImage7, setSelectedImage7] = useState(null);
      const [errorMessage7, setErrorMessage7] = useState('');

      const onSelectFile7 = useImageUpload(setSelectedImage7, setErrorMessage7, 2 * 1024 * 1024, 635, 1000,      'fileInput7');

      const handleImageClick7 = () => {
          handleImageClick('fileInput7');
      };

      const [selectedImage8, setSelectedImage8] = useState(null);
      const [errorMessage8, setErrorMessage8] = useState('');

      const onSelectFile8 = useImageUpload(setSelectedImage8, setErrorMessage8, 2 * 1024 * 1024, 635, 1000,      'fileInput8');

      const handleImageClick8 = () => {
          handleImageClick('fileInput8');
      };

      const [selectedImage9, setSelectedImage9] = useState(null);
      const [errorMessage9, setErrorMessage9] = useState('');

      const onSelectFile9 = useImageUpload(setSelectedImage9, setErrorMessage9, 2 * 1024 * 1024, 443, 551,      'fileInput9');

      const handleImageClick9 = () => {
          handleImageClick('fileInput9');
      };

      const [selectedImage10, setSelectedImage10] = useState(null);
      const [errorMessage10, setErrorMessage10] = useState('');

      const onSelectFile10 = useImageUpload(setSelectedImage10, setErrorMessage10, 2 * 1024 * 1024, 635, 1000,      'fileInput10');

      const handleImageClick10 = () => {
          handleImageClick('fileInput10');
      };

      const [selectedImage11, setSelectedImage11] = useState(null);
      const [errorMessage11, setErrorMessage11] = useState('');

      const onSelectFile11 = useImageUpload(setSelectedImage11, setErrorMessage11, 2 * 1024 * 1024, 386, 604,      'fileInput11');

      const handleImageClick11 = () => {
          handleImageClick('fileInput11');
      };

      const [selectedImage12, setSelectedImage12] = useState(null);
      const [errorMessage12, setErrorMessage12] = useState('');

      const onSelectFile12 = useImageUpload(setSelectedImage12, setErrorMessage12, 2 * 1024 * 1024, 635, 1000,      'fileInput12');

      const handleImageClick12 = () => {
          handleImageClick('fileInput12');
      };

  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
            <TemplateEditNavbar/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] text-[#4a573e] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>See Through Our Collections</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] text-[#4a573e] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={handleElementClick}>I'm a paragraph. Click here to add your own text.</p>
                </div>
                <div className='mb-[5rem]'>
                <div className='flex flex-wrap lg:ms-[9rem] gap-[2rem] mt-[5rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={fashSale1} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 1"/>
                        <img src={fashSale2} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 2"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale3} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 3"/>
                        <img src={fashSale4} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 4"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale5} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 5"/>
                        <img src={fashSale6} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 6"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale9} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 9"/>
                        <img src={fashSale10} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 10"/>
                    </div>
                </div>
                <div className='flex flex-wrap lg:ms-[9rem] lg:mt-[27rem] gap-[2rem] xs:mt-[32rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={fashSale12} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 12"/>
                        <img src={fashSale13} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 13"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale14} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 14"/>
                        <img src={fashSale15} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 15"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale18} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 18"/>
                        <img src={fashSale19} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 19"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[30rem]">
                        <img src={fashSale20} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 20"/>
                        <img src={fashSale21} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 21"/>
                    </div>
                </div>
                    <div className='lg:flex flex-wrap lg:ms-[9rem] mt-[27rem] gap-[2rem] xs:mt-[32rem] lg:px-0 xs:px-[2rem] items-center'>
                        <div className="relative w-full md:w-[70vw] lg:w-[20%]">
                            <img src={fashSale7} className="h-[60vh] xs:w-[50vh] lg:w-[100%]" alt="Fashion Sale 7"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale8} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 8"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale11} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 11"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={fashSale16} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 16"/>
                        </div>
                    </div>
                </div>
                


            </div>
            </div>
        </div>
       {/* <div className='relative'> */}
        <Footer/>
       {/* </div> */}
    </Transition>
  )
}

export default Sales