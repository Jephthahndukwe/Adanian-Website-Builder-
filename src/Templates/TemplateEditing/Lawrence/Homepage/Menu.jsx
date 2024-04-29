import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro7 from '../../../../assets/images/restro7.png'
import Footer from '../Components/Footer'
import { Editor } from '@tinymce/tinymce-react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';


const Menu = () => {

      // State variables for each heading
const [heading27, setHeading27] = useState({ id: 'heading27', text: 'Menu', color: '#000' });
const [heading28, setHeading28] = useState({ id: 'heading28', text: 'Starters', color: '#000' });
const [heading29, setHeading29] = useState({ id: 'heading29', text: 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading30, setHeading30] = useState({ id: 'heading30', text: 'Soup of the Day', color: '#000' });
const [heading31, setHeading31] = useState({ id: 'heading31', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading32, setHeading32] = useState({ id: 'heading32', text: '$9.99', color: '#000' });
const [heading33, setHeading33] = useState({ id: 'heading33', text: 'Seasonal Garden Salad', color: '#000' });
const [heading34, setHeading34] = useState({ id: 'heading34', text: "I'm a dish description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.", color: '#000' });
const [heading35, setHeading35] = useState({ id: 'heading35', text: '$9.99', color: '#000' });
const [heading36, setHeading36] = useState({ id: 'heading36', text: 'Caesar Salad', color: '#000' });
const [heading37, setHeading37] = useState({ id: 'heading37', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading38, setHeading38] = useState({ id: 'heading38', text: '$9.99', color: '#000' });
const [heading39, setHeading39] = useState({ id: 'heading39', text: 'Endive & Roquefort Salad', color: '#000' });
const [heading40, setHeading40] = useState({ id: 'heading40', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading41, setHeading41] = useState({ id: 'heading41', text: '$9.99', color: '#000' });
const [heading42, setHeading42] = useState({ id: 'heading42', text: 'Salmon Carpaccio & Citrus Dressing', color: '#000' });
const [heading43, setHeading43] = useState({ id: 'heading43', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading44, setHeading44] = useState({ id: 'heading44', text: '$9.99', color: '#000' });
const [heading45, setHeading45] = useState({ id: 'heading45', text: 'Steak Tartare', color: '#000' });
const [heading46, setHeading46] = useState({ id: 'heading46', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading47, setHeading47] = useState({ id: 'heading47', text: '$9.99', color: '#000' });
const [heading48, setHeading48] = useState({ id: 'heading48', text: 'Main Courses', color: '#000' });
const [heading49, setHeading49] = useState({ id: 'heading49', text: 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading50, setHeading50] = useState({ id: 'heading50', text: 'White Fish Fillet & Mussels Stew', color: '#000' });
const [heading51, setHeading51] = useState({ id: 'heading51', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading52, setHeading52] = useState({ id: 'heading52', text: '$9.99', color: '#000' });
const [heading53, setHeading53] = useState({ id: 'heading53', text: 'Sirloin Steak & Grilled Asparagus', color: '#000' });
const [heading54, setHeading54] = useState({ id: 'heading54', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading55, setHeading55] = useState({ id: 'heading55', text: '$9.99', color: '#000' });
const [heading56, setHeading56] = useState({ id: 'heading56', text: 'Roasted Chicken with Garlic Cream', color: '#000' });
const [heading57, setHeading57] = useState({ id: 'heading57', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading58, setHeading58] = useState({ id: 'heading58', text: '$9.99', color: '#000' });
const [heading59, setHeading59] = useState({ id: 'heading59', text: 'Lawrence Burger 10oz', color: '#000' });
const [heading60, setHeading60] = useState({ id: 'heading60', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading61, setHeading61] = useState({ id: 'heading61', text: '$9.99', color: '#000' });
const [heading62, setHeading62] = useState({ id: 'heading62', text: 'Sweet Potato Ravioli', color: '#000' });
const [heading63, setHeading63] = useState({ id: 'heading63', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading64, setHeading64] = useState({ id: 'heading64', text: '$9.99', color: '#000' });
const [heading65, setHeading65] = useState({ id: 'heading65', text: 'Spinach Black Risotto', color: '#000' });
const [heading66, setHeading66] = useState({ id: 'heading66', text: 'I’m a dish description. Click “Edit Menu” to open the Restaurant Menu editor and change my text.', color: '#000' });
const [heading67, setHeading67] = useState({ id: 'heading67', text: '$9.99', color: '#000' });

// Define state variables for up to 10 headings
// Add additional headings as needed...

const [isModalOpen, setModalOpen] = useState(false);
const [currentHeading, setCurrentHeading] = useState(null);
const [inputText, setInputText] = useState('');
const [inputColor, setInputColor] = useState('');

// Function to open the modal for editing a specific heading
const openModal = (heading, setHeadingState) => {
    setCurrentHeading({ heading, setHeadingState });
    setInputText(heading.text);
    setInputColor(heading.color);
    setModalOpen(true);
};

// Function to handle save button click
const handleSave = () => {
    // Update the current heading based on the input values
    currentHeading.setHeadingState({
        ...currentHeading.heading,
        text: inputText,
        color: inputColor,
    });
    setModalOpen(false);
};

// Function to handle cancel button click
const handleCancelClick = () => {
    setModalOpen(false);
};


// IMAGE EDITING
const [file1, setFile1] = useState(null);
const [preview, setPreview] = useState(null)

const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
};

const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
        setFile1(selectedImage)
        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result);
        };
    reader.readAsDataURL(selectedImage);
    }
};

 // SAVING DATA TO BACKEND
 const handleUpload = async () => {
    const formData = new FormData();
    formData.append('selectedImage1', file1);

    const textArray = [
      JSON.stringify(heading27),
      JSON.stringify(heading28),
      JSON.stringify(heading29),
      JSON.stringify(heading30),
      JSON.stringify(heading31),
      JSON.stringify(heading32),
      JSON.stringify(heading33),
      JSON.stringify(heading34),
      JSON.stringify(heading35),
      JSON.stringify(heading36),
      JSON.stringify(heading37),
      JSON.stringify(heading38),
      JSON.stringify(heading39),
      JSON.stringify(heading40),
      JSON.stringify(heading41),
      JSON.stringify(heading42),
      JSON.stringify(heading43),
      JSON.stringify(heading44),
      JSON.stringify(heading45),
      JSON.stringify(heading46),
      JSON.stringify(heading47),
      JSON.stringify(heading48),
      JSON.stringify(heading49),
      JSON.stringify(heading50),
      JSON.stringify(heading51),
      JSON.stringify(heading52),
      JSON.stringify(heading53),
      JSON.stringify(heading54),
      JSON.stringify(heading55),
      JSON.stringify(heading56),
      JSON.stringify(heading57),
      JSON.stringify(heading58),
      JSON.stringify(heading59),
      JSON.stringify(heading60),
      JSON.stringify(heading61),
      JSON.stringify(heading62),
      JSON.stringify(heading63),
      JSON.stringify(heading64),
      JSON.stringify(heading65),
      JSON.stringify(heading66),
      JSON.stringify(heading67),
    // Add additional text state variables here if needed...
  ];

  console.log(textArray);
    
    // Append each text item (including ID, text, and color) to the FormData object
    // textArray.forEach(({ id, text, color }, index) => {
    //     formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
    // });
    // formData.append('texts', textArray)
    let joiner = textArray.join("*")
    formData.append('template', 'Lawrence');
    formData.append('texts', joiner);
    console.log(formData);

    try {
        const response = axios.patch('https://ayoba.adanianlabs.io/api/user/upload_file/ChikaStore', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(response.data);

        if (response.data) {
            setTimeout(() => {
                toast.success('Menu page saved successfully');
            }, 500);
        } else {
            setTimeout(() => {
                toast.error('Failed to save template, Please try again later.');
            }, 500);
        }

        // if (response.data) {
        //     const data = await response.json();
        //     console.log('Files uploaded:', data.files);
        //     alert('Files uploaded:');
        // } else {
        //     console.error('Upload failed:', response.statusText);
        //     alert('Upload failed:');
        // }
    } catch (error) {
        console.error('Error uploading files:', error);
        setTimeout(() => {
            toast.error('Failed to save template, Please try again later.');
        }, 500);
    }
};

  return (
    <div>
        <TemplateEditNavbar/>
        <div className='bg-[#faf8f1] pt-[2rem] pb-[6rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] px-[180px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading27, setHeading27)} style={{ color: heading27.color}}>{heading27.text}</h2>
                </div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${preview || restro7})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[50vh] bg-fixed mt-[5rem]'>
                    <input type="file" onChange={handleImageChange} />
                    </div>
                    <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading28, setHeading28)} style={{ color: heading28.color}}>{heading28.text}</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading29, setHeading29)} style={{ color: heading29.color}}>{heading29.text}</p>
                        <div className='flex flex-wrap gap-[4rem] mt-[4rem] lg:px-[30px]'>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading30, setHeading30)} style={{ color: heading30.color}}>{heading30.text}</h2>
                                <div className=' hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading31, setHeading31)} style={{ color: heading31.color}}>{heading31.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading32, setHeading32)} style={{ color: heading32.color}}>{heading32.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading33, setHeading33)} style={{ color: heading33.color}}>{heading33.text}</h2>
                                <div className=' hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading34, setHeading34)} style={{ color: heading34.color}}>{heading34.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading35, setHeading35)} style={{ color: heading35.color}}>{heading35.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading36, setHeading36)} style={{ color: heading36.color}}>{heading36.text}</h2>
                                <div className=''>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading37, setHeading37)} style={{ color: heading37.color}}>{heading37.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading38, setHeading38)} style={{ color: heading38.color}}>{heading38.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading39, setHeading39)} style={{ color: heading39.color}}>{heading39.text}</h2>
                                <div className=' hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading40, setHeading40)} style={{ color: heading40.color}}>{heading40.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading41, setHeading41)} style={{ color: heading41.color}}>{heading41.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading42, setHeading42)} style={{ color: heading42.color}}>{heading42.text}</h2>
                                <div className=' hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading43, setHeading43)} style={{ color: heading43.color}}>{heading43.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading44, setHeading44)} style={{ color: heading44.color}}>{heading44.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center ms-[] hover:border-[1px] hover:border-solid hover:border-[#000] w-[100%]' onClick={() => openModal(heading45, setHeading45)} style={{ color: heading45.color}}>{heading45.text}</h2>
                                <div className=' hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                   <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading46, setHeading46)} style={{ color: heading46.color}}>{heading46.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading47, setHeading47)} style={{ color: heading47.color}}>{heading47.text}</h3>
                           </div>
                        </div>
                </div>
                <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading48, setHeading48)} style={{ color: heading48.color}}>{heading48.text}</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading49, setHeading49)} style={{ color: heading49.color}}>{heading49.text}</p>
                        <div className='flex flex-wrap gap-[4rem] lg:px-[30px] mt-[4rem]'>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading50, setHeading50)} style={{ color: heading50.color}}>{heading50.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                    <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading51, setHeading51)} style={{ color: heading51.color}}>{heading51.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading52, setHeading52)} style={{ color: heading52.color}}>{heading52.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading53, setHeading53)} style={{ color: heading53.color}}>{heading53.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading54, setHeading54)} style={{ color: heading54.color}}>{heading54.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading55, setHeading55)} style={{ color: heading55.color}}>{heading55.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading56, setHeading56)} style={{ color: heading56.color}}>{heading56.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading57, setHeading57)} style={{ color: heading57.color}}>{heading57.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading58, setHeading58)} style={{ color: heading58.color}}>{heading58.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading59, setHeading59)} style={{ color: heading59.color}}>{heading59.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading60, setHeading60)} style={{ color: heading60.color}}>{heading60.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading61, setHeading61)} style={{ color: heading61.color}}>{heading61.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading62, setHeading62)} style={{ color: heading62.color}}>{heading62.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading63, setHeading63)} style={{ color: heading63.color}}>{heading63.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading64, setHeading64)} style={{ color: heading64.color}}>{heading64.text}</h3>
                           </div>
                           <div className='lg:w-[30%] px-4'>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading65, setHeading65)} style={{ color: heading65.color}}>{heading65.text}</h2>
                                <div className='hover:border-[1px] hover:border-solid hover:border-[#000]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4' onClick={() => openModal(heading66, setHeading66)} style={{ color: heading66.color}}>{heading66.text}</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4 hover:border-[1px] hover:border-solid hover:border-[#000]' onClick={() => openModal(heading67, setHeading67)} style={{ color: heading67.color}}>{heading67.text}</h3>
                           </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>

         {/* Popup modal */}
         {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden pt-[5%]">
                <div className="bg-[#fff] px-[20px] py-[10px] rounded-[5px] shadow-lg w-[50%]">
                <p className="mb-4">Edit text:</p>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                <p className="mb-4">Change text color:</p>
                <input
                    type="color"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                {/* Save and Cancel buttons */}
                <div className='flex justify-end space-x-4'>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                    <button onClick={handleCancelClick} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                </div>
                </div>
                </div>
            )}

    </div>
  )
}

export default Menu