import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import fash from '../../../../assets/images/fash.png'
import fash2 from '../../../../assets/images/fash2.png'
import fash3 from '../../../../assets/images/fash3.jpg'
import fash4 from '../../../../assets/images/fash4.jpg'
import fash5 from '../../../../assets/images/fash5.jpg'
import fash6 from '../../../../assets/images/fash6.jpg'
import fash7 from '../../../../assets/images/fash7.jpg'
import fash8 from '../../../../assets/images/fash8.jpg'
import fash9 from '../../../../assets/images/fash9.jpg'
import fash10 from '../../../../assets/images/fash10.jpg'
import fash11 from '../../../../assets/images/fash11.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import { Transition } from '@headlessui/react';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import axios from 'axios';


const Homepage = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  const mediaQueryStyles = {
    '@media (min-width: 360px)': {
      backgroundSize: 'contain'
    }
  };


    // State variables for each heading
    const [heading1, setHeading1] = useState({ id: 'heading1', text: 'Comfy Chic Loungewear', color: '#f2ede6' });
    const [heading2, setHeading2] = useState({ id: 'heading2', text: 'I’m a paragraph. Click here to add your text', color: '#f2ede6' });
    const [heading3, setHeading3] = useState({ id: 'heading3', text: '25% Off Loungewear Sets', color: '#4a573e' });
    const [heading4, setHeading4] = useState({ id: 'heading4', text: 'Introducing: Comfort Zone', color: '#4a573e' });
    const [heading5, setHeading5] = useState({ id: 'heading5', text: 'Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK', color: '#f2ede6' });
    const [heading6, setHeading6] = useState({ id: 'heading6', text: 'At Home. In Style.', color: '#f2ede6' });
    const [heading7, setHeading7] = useState({ id: 'heading7', text: 'Follow @DayDream on Instagram', color: '#4a573e' });
    const [heading8, setHeading8] = useState({ id: 'heading8', text: 'Stay Comfy', color: '#4a573e' });
    const [heading9, setHeading9] = useState({ id: 'heading9', text: 'Follow for Updates & Special Offers', color: '#4a573e' });
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


    // IMAGE EDTING
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [file3, setFile3] = useState(null);
    const [file4, setFile4] = useState(null);
    const [file5, setFile5] = useState(null);
    const [file6, setFile6] = useState(null);
    const [file7, setFile7] = useState(null);
    const [file8, setFile8] = useState(null);
    const [file9, setFile9] = useState(null);
    const [file10, setFile10] = useState(null);
    const [file11, setFile11] = useState(null);
    const [preview, setPreview] = useState(null)
    const [preview2, setPreview2] = useState(null)
    const [preview3, setPreview3] = useState(null)
    const [preview4, setPreview4] = useState(null)
    const [preview5, setPreview5] = useState(null)
    const [preview6, setPreview6] = useState(null)
    const [preview7, setPreview7] = useState(null)
    const [preview8, setPreview8] = useState(null)
    const [preview9, setPreview9] = useState(null)
    const [preview10, setPreview10] = useState(null)
    const [preview11, setPreview11] = useState(null)

    const handleFile1Change = (e) => {
        setFile1(e.target.files[0]);
    };
    const handleFile2Change = (e) => {
        setFile2(e.target.files[0]);
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
    const handleImageChange2 = (e) => {
      const selectedImage2 = e.target.files[0];
      if (selectedImage2) {
        setFile2(selectedImage2)
        const reader = new FileReader();
        reader.onload = () => {
          setPreview2(reader.result);
        };
        reader.readAsDataURL(selectedImage2);
      }
  };
  const handleImageChange3 = (e) => {
    const selectedImage3 = e.target.files[0];
    if (selectedImage3) {
      setFile3(selectedImage2)
      const reader = new FileReader();
      reader.onload = () => {
        setPreview3(reader.result);
      };
      reader.readAsDataURL(selectedImage3);
    }
};
const handleImageChange4 = (e) => {
  const selectedImage4 = e.target.files[0];
  if (selectedImage4) {
    setFile4(selectedImage4)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview4(reader.result);
    };
    reader.readAsDataURL(selectedImage4);
  }
};
const handleImageChange5 = (e) => {
  const selectedImage5 = e.target.files[0];
  if (selectedImage5) {
    setFile5(selectedImage5)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview5(reader.result);
    };
    reader.readAsDataURL(selectedImage5);
  }
};
const handleImageChange6 = (e) => {
  const selectedImage6 = e.target.files[0];
  if (selectedImage6) {
    setFile6(selectedImage6)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview6(reader.result);
    };
    reader.readAsDataURL(selectedImage6);
  }
};
const handleImageChange7 = (e) => {
  const selectedImage7 = e.target.files[0];
  if (selectedImage7) {
    setFile7(selectedImage7)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview7(reader.result);
    };
    reader.readAsDataURL(selectedImage7);
  }
};
const handleImageChange8 = (e) => {
  const selectedImage8 = e.target.files[0];
  if (selectedImage8) {
    setFile8(selectedImage8)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview8(reader.result);
    };
    reader.readAsDataURL(selectedImage8);
  }
};
const handleImageChange9 = (e) => {
  const selectedImage9 = e.target.files[0];
  if (selectedImage9) {
    setFile9(selectedImage9)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview9(reader.result);
    };
    reader.readAsDataURL(selectedImage9);
  }
};
const handleImageChange10 = (e) => {
  const selectedImage10 = e.target.files[0];
  if (selectedImage10) {
    setFile10(selectedImage10)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview10(reader.result);
    };
    reader.readAsDataURL(selectedImage10);
  }
};
const handleImageChange11 = (e) => {
  const selectedImage11 = e.target.files[0];
  if (selectedImage11) {
    setFile11(selectedImage11)
    const reader = new FileReader();
    reader.onload = () => {
      setPreview11(reader.result);
    };
    reader.readAsDataURL(selectedImage11);
  }
};




  // IMAGE EDITING
  const useImageUpload = (setImage, setErrorMessage, maxSize, maxWidth, maxHeight, inputId) => {
    return (e) => {
        const selectedFile = e.target.files[0];

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

      const [selectedImage, setSelectedImage] = useState(fash);
      const [errorMessage, setErrorMessage] = useState('');

      const onSelectFile = useImageUpload(setSelectedImage, setErrorMessage, 2 * 1024 * 1024, 675, 1160, 'fileInput');

      const handleImageClick1 = (e) => {
          // setSelectedImage(e.target.files[0]);
          handleImageClick('fileInput');

          // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile(e); // Call the function you defined for handling file selection
        }
      };


      const [selectedImage2, setSelectedImage2] = useState(fash2);
      const [errorMessage2, setErrorMessage2] = useState('');

      const onSelectFile2 = useImageUpload(setSelectedImage2, setErrorMessage2, 2 * 1024 * 1024, 675, 1160, 'fileInput2');

      const handleImageClick2 = () => {
        // setSelectedImage2(e.target.files[0]);
          handleImageClick('fileInput2');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile2(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage3, setSelectedImage3] = useState(fash3);
      const [errorMessage3, setErrorMessage3] = useState('');

      const onSelectFile3 = useImageUpload(setSelectedImage3, setErrorMessage3, 2 * 1024 * 1024, 498, 629, 'fileInput3');

      const handleImageClick3 = () => {
        // setSelectedImage3(e.target.files[0]);
          handleImageClick('fileInput3');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile3(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage4, setSelectedImage4] = useState(fash4);
      const [errorMessage4, setErrorMessage4] = useState('');

      const onSelectFile4 = useImageUpload(setSelectedImage4, setErrorMessage4, 2 * 1024 * 1024, 497, 497, 'fileInput4');

      const handleImageClick4 = () => {
        // setSelectedImage4(e.target.files[0]);
          handleImageClick('fileInput4');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile4(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage5, setSelectedImage5] = useState(fash5);
      const [errorMessage5, setErrorMessage5] = useState('');

      const onSelectFile5 = useImageUpload(setSelectedImage5, setErrorMessage5, 2 * 1024 * 1024, 673, 1080, 'fileInput5');

      const handleImageClick5 = () => {
        // setSelectedImage5(e.target.files[0]);
          handleImageClick('fileInput5');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile5(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage6, setSelectedImage6] = useState(fash6);
      const [errorMessage6, setErrorMessage6] = useState('');

      const onSelectFile6 = useImageUpload(setSelectedImage6, setErrorMessage6, 2 * 1024 * 1024, 347, 453,      'fileInput6');

      const handleImageClick6 = () => {
        // setSelectedImage6(e.target.files[0]);
          handleImageClick('fileInput6');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile6(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage7, setSelectedImage7] = useState(fash7);
      const [errorMessage7, setErrorMessage7] = useState('');

      const onSelectFile7 = useImageUpload(setSelectedImage7, setErrorMessage7, 2 * 1024 * 1024, 1080, 1080,      'fileInput7');

      const handleImageClick7 = () => {
        // setSelectedImage7(e.target.files[0]);
          handleImageClick('fileInput7');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile7(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage8, setSelectedImage8] = useState(fash8);
      const [errorMessage8, setErrorMessage8] = useState('');

      const onSelectFile8 = useImageUpload(setSelectedImage8, setErrorMessage8, 2 * 1024 * 1024, 1080, 1080,      'fileInput8');

      const handleImageClick8 = () => {
        // setSelectedImage8(e.target.files[0]);
          handleImageClick('fileInput8');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile8(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage9, setSelectedImage9] = useState(fash9);
      const [errorMessage9, setErrorMessage9] = useState('');

      const onSelectFile9 = useImageUpload(setSelectedImage9, setErrorMessage9, 2 * 1024 * 1024, 1080, 1080,      'fileInput9');

      const handleImageClick9 = () => {
        // setSelectedImage9(e.target.files[0]);
          handleImageClick('fileInput9');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile9(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage10, setSelectedImage10] = useState(fash10);
      const [errorMessage10, setErrorMessage10] = useState('');

      const onSelectFile10 = useImageUpload(setSelectedImage10, setErrorMessage10, 2 * 1024 * 1024, 1080, 1080,      'fileInput10');

      const handleImageClick10 = () => {
        // setSelectedImage10(e.target.files[0]);
          handleImageClick('fileInput10');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile10(e); // Call the function you defined for handling file selection
        }
      };

      const [selectedImage11, setSelectedImage11] = useState(fash11);
      const [errorMessage11, setErrorMessage11] = useState('');

      const onSelectFile11 = useImageUpload(setSelectedImage11, setErrorMessage11, 2 * 1024 * 1024, 1080, 1080,      'fileInput11');

      const handleImageClick11 = () => {
        // setSelectedImage11(e.target.files[0]);
          handleImageClick('fileInput11');

           // Handle the file selection
        if (e.target && e.target.files && e.target.files[0]) {
          // Use the selected file to perform the operations you want
          onSelectFile11(e); // Call the function you defined for handling file selection
        }
      };


      const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage', file1);
        formData.append('selectedImage2', file2);

        console.log(formData);

        try {
            const response = axios.patch('https://ayoba.adanianlabs.io/api/user/upload_file/ChikaStore', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            if (response.data.data.status == 'ok') {
                const data = await response.json();
                console.log('Files uploaded:', data.files);
                alert('Files uploaded:');
            } else {
                console.error('Upload failed:', response.statusText);
                alert('Upload failed:');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error uploading files:');
        }
    };

     // UPLOADING OF IMAGES AND TEXT TO BACKEND
// Function to upload images and text to the backend
// const uploadImagesAndText = async () => {
//   // Create a new FormData object
//   const formData = new FormData();

//   // Append each image to the FormData object
//   // imagesArray.forEach((image, index) => {
//   //     if (image) {
//   //         // Append each image file using a unique key based on its index
//   //         formData.append(`image${index + 1}`, image);
//   //     }
//   // });
//   formData.append('selectedImage', selectedImage);
//   formData.append('selectedImage2', selectedImage2);
//   formData.append('selectedImage3', selectedImage3);
//   formData.append('selectedImage4', selectedImage4);
//   formData.append('selectedImage5', selectedImage5);
//   formData.append('selectedImage6', selectedImage6);
//   formData.append('selectedImage7', selectedImage7);
//   formData.append('selectedImage8', selectedImage8);
//   formData.append('selectedImage9', selectedImage9);
//   formData.append('selectedImage10', selectedImage10);
//   formData.append('selectedImage11', selectedImage11);

//   // Append each text item (including ID, text, and color) to the FormData object
//   // textArray.forEach(({ id, text, color }, index) => {
//   //     formData.append(`text${index + 1}`, JSON.stringify({ id, text, color }));
//   // });

//   try {
//       // Send the POST request with FormData
//       const response = await axios.patch('https://ayoba.adanianlabs.io/api/user/upload_file', formData, {
//           headers: {
//               'Content-Type': 'multipart/form-data',
//           },
//       });


//       if (response.ok) {
//         const data = await response.json();
//         console.log('Files uploaded:', data.files);
//         alert('Files uploaded:');
//     } else {
//         console.error('Upload failed:', response.statusText);
//         alert('Upload failed:');
//     }

//       // Handle the server response
//       // console.log('Response from server:', response.data);
//       // alert('Template saved successfully!');
//   } catch (error) {
//       // Handle any errors
//       console.error('Error saving template', error);
//       alert('Error saving template', error);
//   }
// };

// Function to handle the "Save" button click
// const handleSaveClick = () => {
//   // Create an array of selected images from the state variables
//   const imagesArray = [
//       selectedImage,
//       selectedImage2,
//       selectedImage3,
//       selectedImage4,
//       selectedImage5,
//       selectedImage6,
//       selectedImage7,
//       selectedImage8,
//       selectedImage9,
//       selectedImage10,
//       selectedImage11,
//   ];

//   console.log(imagesArray);

//   // Create an array of text items from the state variables
//   // const textArray = [
//   //     heading1,
//   //     heading2,
//   //     heading3,
//   //     heading4,
//   //     heading5,
//   //     heading6,
//   //     heading7,
//   //     heading8,
//   //     heading9,
//   //     // Add additional text state variables here if needed...
//   // ];

//   // console.log(textArray);

//   // Call the uploadImagesAndText function with the array of images and text

//   uploadImagesAndText(imagesArray);
// };

  return (
    <Transition
      show={show}
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
    <div>
      <TemplateEditNavbar handleUpload={handleUpload} />
        <div className='pt-[1rem]'>
          <div>
         <div className='lg:absolute top-[10rem] left-6'>
         <Navbar/>
         </div>
            <div className='lg:flex items-center lg:-mt-5'>

              <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview || fash})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill bg-fixed'>
                <input type="file" onChange={handleImageChange} />
              </div>

              <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview2 || fash2})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill' >
              <input type="file" onChange={handleImageChange2} />
                <div className='pt-[16rem] lg:ps-[3rem] xs:ps-[1rem] z-50'>
                  <h1 className='italic font-[300] font-Namdhinggo tracking-[3px] text-[45px] leading-[60px] lg:w-[70%] hover:border-[1px] hover:border-solid hover:border-[#ffff] hover:py-[10px] hover:px-[10px] z-50' onClick={() => openModal(heading1, setHeading1)} style={{ color: heading1.color}}>{heading1.text}</h1>
                  <p className='text-[#f2ede6] italic font-[100] lg:mt-2 text-[18px] lg:w-[40%] xs:w-[70%] xs:mt-[1rem] font-Namdhinggo leading-[30px] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading2, setHeading2)} style={{ color: heading2.color}}>{heading2.text}</p>
                  <Link to='/DayDreamEditSales' className='text-[#f2ede6] hover:text-[#f2ede6] text-[18px] font-Namdhinggo italic'>Sales Collection</Link>
                </div>
              </div>

            </div>
            <div className='lg:px-[80px] xs:px-[20px] lg:mt-[10rem] xs:mt-[5rem]'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='relative overflow-hidden w-[40%]'>
                  <input type="file" onChange={handleImageChange3} />
                  <img src={preview3 || fash3} className='object-cover transition duration-300 transform hover:scale-105 w-[100%]' />
                    <h2 className='font-Namdhinggo font-[100] lg:text-[30px] xs:text-[25px] w-[100%] italic mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px] hover:w-[100%]' onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h2>
                       {/* Popup modal */}
                        {isModalOpen && (
                          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden">
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
                  <div className='lg:mt-[-8rem] xs:mt-[5rem] relative overflow-hidden w-[40%]'>
                  {errorMessage4 && <p style={{ color: 'red' }}>{errorMessage4}</p>}
                    {selectedImage4 ? (
                      <img 
                          src={selectedImage4} className='object-cover transition duration-300 transform hover:scale-105 w-[50%]' onClick={handleImageClick4}
                      />
                    ) : (

                      <img 
                          src={selectedImage4} className='object-cover transition duration-300 transform hover:scale-105 w-[100%]' onClick={() => document.getElementById('fileInput4').click()}
                      />
                    )}
                    <input id="fileInput4" type='file' name='images' onChange={onSelectFile4} style={{ display: 'none' }}/>

                    <h2 className='font-Namdhinggo lg:text-[30px] xs:text-[25px] w-[100%] font-[100] italic mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</h2>
                  </div>
                </div>
            </div>
            {errorMessage5 && <p style={{ color: 'red' }}>{errorMessage5}</p>}
            {errorMessage6 && <p style={{ color: 'red' }}>{errorMessage6}</p>}
            <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-7rem]'>
              {selectedImage5 ? (
                <div 
                  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${selectedImage5})`, backgroundPosition: 'start', backgroundRepeat: 'no-repeat',}} className='lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[155vh] object-contain lg:block xs:hidden' onClick={handleImageClick5}
                />
              ) : (

                <div 
                  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${selectedImage5})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[155vh] object-contain lg:block xs:hidden' onClick={() => document.getElementById('fileInput5').click()}
                />
              )}
                <input id="fileInput5" type='file' name='images' onChange={onSelectFile5} style={{ display: 'none' }}/>

                {selectedImage5 ? (
                  <img 
                    src={selectedImage5}  className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' onClick={handleImageClick5}
                  />
                ) : (
                  <img
                    src={selectedImage5}  className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' onClick={() => document.getElementById('fileInput5').click()}
                  />
                )}
                <input id="fileInput5" type='file' name='images' onChange={onSelectFile5} style={{ display: 'none' }}/>

              <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[95vh] lg:mt-0 xs:mt-[-14rem]'>
                  <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                      <h2 className='font-Namdhinggo text-[16px] font-[100] italic text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</h2>
                      <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                        <div>
                        {selectedImage6 ? (
                            <img 
                              src={selectedImage6}  className='lg:w-[70%] xs:w-[90%]' onClick={handleImageClick6}
                            />
                          ) : (
                            <img
                              src={selectedImage6}  className='lg:w-[70%] xs:w-[90%]' onClick={() => document.getElementById('fileInput6').click()}
                            />
                          )}
                          <input id="fileInput6" type='file' name='images' onChange={onSelectFile6} style={{ display: 'none' }}/>
                        <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}</h1>
                        </div>
                        <p className='mt-[14rem] lg:ps-[8.5rem] xs:ps-[5.5rem]'><Link to='/DayDreamEditLookbook' className='text-[#f2ede6] hover:text-[#f2ede6] lg:text-[17px] xs:text-[22px] font-Namdhinggo font-[100] italic'>View More</Link></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='pt-[8rem] bg-[#F2EDE6] lg:px-0 xs:px-[20px]'>
                  <h1 className='text-center font-Namdhinggo font-[100] italic lg:text-[35px] xs:text-[38px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'  onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}</h1>
                  {errorMessage7 && <p style={{ color: 'red' }}>{errorMessage7}</p>}
                  {errorMessage8 && <p style={{ color: 'red' }}>{errorMessage8}</p>}
                  {errorMessage9 && <p style={{ color: 'red' }}>{errorMessage9}</p>}
                  {errorMessage10 && <p style={{ color: 'red' }}>{errorMessage10}</p>}
                  {errorMessage11 && <p style={{ color: 'red' }}>{errorMessage11}</p>}
                  <div className='flex flex-wrap items-center relative overflow-hidden gap-[1rem] px-[10px] lg:ms-[4rem] mt-[5rem]'>
                    {selectedImage7 ? (
                      <img
                        src={selectedImage7}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={handleImageClick7}
                      />
                    ) : (
                      <img
                        src={selectedImage7}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={() => document.getElementById('fileInput7').click()}
                      />
                    )}
                    <input id="fileInput7" type='file' name='images' onChange={onSelectFile7} style={{ display: 'none' }}/>
                    {selectedImage8 ? (
                      <img
                        src={selectedImage8}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={handleImageClick8}
                      />
                    ) : (
                      <img
                        src={selectedImage8}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={() => document.getElementById('fileInput8').click()}
                      />
                    )}
                    <input id="fileInput8" type='file' name='images' onChange={onSelectFile8} style={{ display: 'none' }}/>
                    {selectedImage9 ? (
                      <img
                        src={selectedImage9}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={handleImageClick9}
                      />
                    ) : (
                      <img
                        src={selectedImage9}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={() => document.getElementById('fileInput9').click()}
                      />
                    )}
                    <input id="fileInput9" type='file' name='images' onChange={onSelectFile9} style={{ display: 'none' }}/>
                    {selectedImage10 ? (
                      <img
                        src={selectedImage10}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={handleImageClick10}
                      />
                    ) : (
                      <img
                        src={selectedImage10}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={() => document.getElementById('fileInput10').click()}
                      />
                    )}
                    <input id="fileInput10" type='file' name='images' onChange={onSelectFile10} style={{ display: 'none' }}/>
                    {selectedImage11 ? (
                      <img
                        src={selectedImage11}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={handleImageClick11}
                      />
                    ) : (
                      <img
                        src={selectedImage11}  className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' onClick={() => document.getElementById('fileInput11').click()}
                      />
                    )}
                    <input id="fileInput11" type='file' name='images' onChange={onSelectFile11} style={{ display: 'none' }}/>
                  </div>
                  <div className='mt-[10rem] pb-[3rem]'>
                    <h1 className='text-center text-[33px] font-Namdhinggo italic font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</h1>
                    <p className='text-center text-[22px] mt-2 font-Namdhinggo font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading9, setHeading9)} style={{ color: heading9.color}}>{heading9.text}</p>
                    <hr className='lg:w-[80%] xs:w-[100%] h-[2px] bg-[#4a573e] lg:ms-[10rem] mt-[4rem]'/>
                  </div>
              </div>
              <Footer/>
            
          </div>
        </div>
    </div>
    </Transition>
  )
}

export default Homepage