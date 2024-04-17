import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import Navbar from '../Component/Navbar';
import fash25 from '../../../../assets/images/fash25.png'
import fash26 from '../../../../assets/images/fash26.png'
import Footer from '../Component/Footer';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';

const About = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  // State variables for each heading
const [heading1, setHeading1] = useState({ id: 'heading1', text: 'About Us', color: '#4a573e' });
const [heading2, setHeading2] = useState({ id: 'heading2', text: 'I’m a paragraph. Click here to add your own text.', color: '#4a573e' });
const [heading3, setHeading3] = useState({ id: 'heading3', text: 'Lets Get Comfortable', color: '#4a573e' });
const [heading4, setHeading4] = useState({ id: 'heading4', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you..', color: '#8b9186' });
const [heading5, setHeading5] = useState({ id: 'heading5', text: 'This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.', color: '#8b9186' });

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

 // State variables for each image
 const [image1, setImage1] = useState({
    id: 'image1',
    URL: fash25, // Replace with the initial image URL
    caption: 'Image 1 caption',
    alt: 'Image 1 alt text',
    maxWidth: 800, // Maximum allowed width for image1
    maxHeight: 600, // Maximum allowed height for image1
    maxFileSize: 2 * 1024 * 1024, // 2 MB in bytes
 })

const [image2, setImage2] = useState({
    id: 'image2',
    URL: fash26, // Replace with the initial image URL
    caption: 'Image 2 caption',
    alt: 'Image 2 alt text',
    maxWidth: 347, // Maximum allowed width for image2
    maxHeight: 456, // Maximum allowed height for image2
    maxFileSize: 2 * 1024 * 1024, // 2 MB in bytes
});

// Add more state variables for additional images and their validation rules as needed...

// State variables for modal
const [isModalOpen2, setModalOpen2] = useState(false);
const [currentImage, setCurrentImage] = useState(null);
const [newImageFile, setNewImageFile] = useState(null);
const [error, setError] = useState('');

// Function to open the modal for editing an image
const openModal2 = (image, setImageState) => {
    setCurrentImage({ image, setImageState });
    setModalOpen2(true);
};

// Handle file selection in the modal
const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // Validate the file
    if (file) {
        const { maxWidth, maxHeight, maxFileSize } = currentImage.image;

        // Check file size
        if (file.size > maxFileSize) {
            setError(`The file size exceeds the allowed limit of ${maxFileSize} bytes.`);
            return;
        }

        // Check image dimensions
        const image = new Image();
        const fileURL = URL.createObjectURL(file);

        // Load the image to check dimensions
        image.onload = () => {
            const { width, height } = image;

            // Check if dimensions exceed the limits
            if (width > maxWidth || height > maxHeight) {
                setError(`The image dimensions exceed the allowed limit of ${maxWidth}x${maxHeight} pixels.`);
            } else {
                // If file and dimensions are valid, set the new image file
                setNewImageFile(file);
                setError('');
            }
        };

        // Set image src to file URL to trigger onload
        image.src = fileURL;
    }
};

// Function to handle saving the edited image properties
const handleSave2 = () => {
    if (newImageFile) {
        // Create a URL for the selected file using URL.createObjectURL
        const fileURL = URL.createObjectURL(newImageFile);

        // Update the URL of the current image
        currentImage.setImageState((prevImage) => ({
            ...prevImage,
            URL: fileURL,
        }));
    }

    // Close the modal and reset error state
    setModalOpen2(false);
    setNewImageFile(null);
    setError('');
};

// Function to handle canceling the edit
const handleCancel = () => {
    setModalOpen2(false);
    setNewImageFile(null);
    setError('');
};

      // UPLOADING OF IMAGES AND TEXT TO BACKEND
// Function to upload images and text to the backend
const uploadImagesAndText = async (imagesArray, textArray) => {
    // Create a new FormData object
    const formData = new FormData();
  
    // Append each image to the FormData object
    imagesArray.forEach((image, index) => {
        if (image) {
            // Append each image file using a unique key based on its index
            formData.append(`image${index + 1}`, image);
        }
    });
  
    // Append each text item (including ID, text, and color) to the FormData object
    textArray.forEach(({ id, text, color }, index) => {
        formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
    });
  
    try {
        // Send the POST request with FormData
        const response = await axios.patch('https://good-pear-butterfly-gown.cyclic.app/api/user/upload_file/nameOfStore', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
  
        // Handle the server response
        console.log('Response from server:', response.data);
        alert('Template saved successfully!');
    } catch (error) {
        // Handle any errors
        console.error('Error saving template', error);
        alert('Error saving template', error);
    }
  };
  
  // Function to handle the "Save" button click
  const handleSaveClick = () => {
    // Create an array of selected images from the state variables
    const imagesArray = [
        selectedImage,
        selectedImage2,
    ];
  
    // Create an array of text items from the state variables
    const textArray = [
        heading1,
        heading2,
        heading3,
        heading4,
        heading5,
        // Add additional text state variables here if needed...
    ];
  
    // Call the uploadImagesAndText function with the array of images and text
    uploadImagesAndText(imagesArray, textArray);
  };

  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
           <TemplateEditNavbar handleSaveClick={handleSaveClick}/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[7rem] lg:px-0 xs:px-[40px]'>
                                        <img src={image1.URL} alt={image1.alt} title={image1.caption} onClick={() => openModal2(image1, setImage1)} className='relative' />

                                        <img src={image2.URL} alt={image2.alt} title={image2.caption} onClick={() => openModal2(image2, setImage2)} className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-30rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]' />
                                    </div>
                                </div>
                                <div className='bg-[#CDD2C8] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh]'>
                                    <div className='lg:pt-[10rem] lg:ps-[4rem] xs:pr-[2rem] xs:pt-[4rem] xs:ps-[1rem] lg:pr-[4rem] lg:pb-0 xs:pb-[5rem]'>
                                        <h1 className='text-start font-Namdhinggo italic text-[34px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h1>
                                        <p className='leading-[32px] mt-[2.5rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</p>
                                        <p className='leading-[32px] mt-[2rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</p>
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

            {/* Popup modal */}
            {/* Modal for editing image properties */}
            {isModalOpen2 && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden pt-[5%]">
                   <div className="bg-[#fff] px-[20px] py-[10px] rounded-[5px] shadow-lg w-[50%]">
                        <h2>Edit Image Properties</h2>

                         {/* Error message */}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {/* Input for editing caption */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className='border p-2 w-full mb-4'
                        />

                        {/* Buttons for saving or canceling changes */}
                       <div className='flex justify-end space-x-4'>
                        <button onClick={handleSave2} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Save
                            </button>
                            <button onClick={handleCancel} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                                Cancel
                            </button>
                       </div>
                   </div>
                </div>
            )}


            </div>
        </div>
    </Transition>
  )
}

export default About