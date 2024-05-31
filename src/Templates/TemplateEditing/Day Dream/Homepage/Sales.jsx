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
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';



const Sales = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set show to true after the component is mounted to trigger the animation
      setShow(true);
    }, []);

   
    // State variables for each heading
const [heading23, setHeading23] = useState({ id: 'heading23', text: 'See Through Our Collections', color: '#4a573e' });
const [heading24, setHeading24] = useState({ id: 'heading24', text: 'I’m a paragraph. Click here to add your own text..', color: '#4a573e' });

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
    const [file12, setFile12] = useState(null);
    const [file13, setFile13] = useState(null);
    const [file14, setFile14] = useState(null);
    const [file15, setFile15] = useState(null);
    const [file16, setFile16] = useState(null);
    const [file17, setFile17] = useState(null);
    const [file18, setFile18] = useState(null);
    const [file19, setFile19] = useState(null);
    const [file20, setFile20] = useState(null);
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
    const [preview12, setPreview12] = useState(null)
    const [preview13, setPreview13] = useState(null)
    const [preview14, setPreview14] = useState(null)
    const [preview15, setPreview15] = useState(null)
    const [preview16, setPreview16] = useState(null)
    const [preview17, setPreview17] = useState(null)
    const [preview18, setPreview18] = useState(null)
    const [preview19, setPreview19] = useState(null)
    const [preview20, setPreview20] = useState(null)

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
            setFile3(selectedImage3)
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
    const handleImageChange12 = (e) => {
        const selectedImage12 = e.target.files[0];
        if (selectedImage12) {
            setFile12(selectedImage12)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview12(reader.result);
            };
            reader.readAsDataURL(selectedImage12);
        }
    };
    const handleImageChange13 = (e) => {
        const selectedImage13 = e.target.files[0];
        if (selectedImage13) {
            setFile13(selectedImage13)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview13(reader.result);
            };
            reader.readAsDataURL(selectedImage13);
        }
    }; const handleImageChange14 = (e) => {
        const selectedImage14 = e.target.files[0];
        if (selectedImage14) {
            setFile14(selectedImage14)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview14(reader.result);
            };
            reader.readAsDataURL(selectedImage14);
        }
    }; const handleImageChange15 = (e) => {
        const selectedImage15 = e.target.files[0];
        if (selectedImage15) {
            setFile15(selectedImage15)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview15(reader.result);
            };
            reader.readAsDataURL(selectedImage15);
        }
    }; const handleImageChange16 = (e) => {
        const selectedImage16 = e.target.files[0];
        if (selectedImage16) {
            setFile16(selectedImage16)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview16(reader.result);
            };
            reader.readAsDataURL(selectedImage16);
        }
    }; const handleImageChange17 = (e) => {
        const selectedImage17 = e.target.files[0];
        if (selectedImage17) {
            setFile17(selectedImage17)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview17(reader.result);
            };
            reader.readAsDataURL(selectedImage17);
        }
    }; const handleImageChange18 = (e) => {
        const selectedImage18 = e.target.files[0];
        if (selectedImage18) {
            setFile18(selectedImage18)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview18(reader.result);
            };
            reader.readAsDataURL(selectedImage18);
        }
    }; const handleImageChange19 = (e) => {
        const selectedImage19 = e.target.files[0];
        if (selectedImage19) {
            setFile19(selectedImage19)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview19(reader.result);
            };
            reader.readAsDataURL(selectedImage19);
        }
    }; const handleImageChange20 = (e) => {
        const selectedImage20 = e.target.files[0];
        if (selectedImage20) {
            setFile20(selectedImage20)
            const reader = new FileReader();
            reader.onload = () => {
            setPreview20(reader.result);
            };
            reader.readAsDataURL(selectedImage20);
        }
    };

    const store = useSelector((state) => state.store)
    const { storeDetails } = store

     // SAVING DATA TO BACKEND
     const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage26', file1);
        formData.append('selectedImage27', file2);
        formData.append('selectedImage28', file3);
        formData.append('selectedImage29', file4);
        formData.append('selectedImage30', file5);
        formData.append('selectedImage31', file6);
        formData.append('selectedImage32', file7);
        formData.append('selectedImage33', file8);
        formData.append('selectedImage34', file9);
        formData.append('selectedImage35', file10);
        formData.append('selectedImage36', file11);
        formData.append('selectedImage37', file12);
        formData.append('selectedImage38', file13);
        formData.append('selectedImage39', file14);
        formData.append('selectedImage40', file15);
        formData.append('selectedImage41', file16);
        formData.append('selectedImage42', file17);
        formData.append('selectedImage43', file18);
        formData.append('selectedImage44', file19);
        formData.append('selectedImage45', file20);

        const texts = {
            heading23: heading23,
            heading24: heading24,
          }
    
          console.log(texts);
    
    
            let stringifiedObject = JSON.stringify(texts);
            // let joiner = textArray.join("*")
            formData.append('template', 'DayDream');
            formData.append('texts', stringifiedObject);
            console.log(formData);

        try {
            const response = axios.patch(`https://ayoba.adanianlabs.io/api/user/upload_file/${storeDetails.nameOfStore}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            if (response.data) {
                console.log('Files uploaded:', data.files);
                toast.success('Sales page saved successfully.');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error uploading files:');
        }
    };

    console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Day Dream') {
          toast.success(`You have started editing ${res.data.template}`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if(storeDetails) {
        getWebsite()
      }
  }, [])



  return (
    <Transition
        show={show}
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <div>
            <TemplateEditNavbar handleUpload={handleUpload}/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] text-[#4a573e] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading23, setHeading23)} style={{ color: heading23.color}}>{heading23.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] text-[#4a573e] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading24, setHeading24)} style={{ color: heading24.color}}>{heading24.text}</p>
                </div>
                <div className='mb-[5rem]'>
                <div className='flex flex-wrap lg:ms-[9rem] gap-[2rem] mt-[7rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange2} className='w-[110px]' /> 
                        </div>
                        <img src={preview || fashSale1} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 1"/>
                        <img src={preview2 || fashSale2} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 2"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange3} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange4} className='w-[110px]' /> 
                        </div>
                        <img src={preview3 || fashSale3} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 3"/>
                        <img src={preview4 || fashSale4} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 4"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange5} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange6} className='w-[110px]' /> 
                        </div>
                        <img src={preview5 || fashSale5} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 5"/>
                        <img src={preview6 || fashSale6} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 6"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange7} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange8} className='w-[110px]' /> 
                        </div>
                        <img src={preview7 || fashSale9} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 9"/>
                        <img src={preview8 || fashSale10} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 10"/>
                    </div>
                </div>
                <div className='flex flex-wrap lg:ms-[9rem] lg:mt-[27rem] gap-[2rem] xs:mt-[34rem] items-center lg:px-0 xs:px-[2rem] lg:mb-[-7rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange9} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange10} className='w-[110px]' /> 
                        </div>
                        <img src={preview9 || fashSale12} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 12"/>
                        <img src={preview10 || fashSale13} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 13"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange11} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange12} className='w-[110px]' /> 
                        </div>
                        <img src={preview11 || fashSale14} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 14"/>
                        <img src={preview12 || fashSale15} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 15"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange13} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange14} className='w-[110px]' /> 
                        </div>
                        <img src={preview13 || fashSale18} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 18"/>
                        <img src={preview14 || fashSale19} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 19"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[32rem]">
                        <div className='absolute mt-[-2rem] flex gap-[1rem] items-center'>
                            <input type="file" onChange={handleImageChange15} className='w-[110px]' /> 
                            <input type="file" onChange={handleImageChange16} className='w-[110px]' /> 
                        </div>
                        <img src={preview15 || fashSale20} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 20"/>
                        <img src={preview16 || fashSale21} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 21"/>
                    </div>
                </div>
                    <div className='lg:flex flex-wrap lg:ms-[9rem] mt-[30rem] gap-[2rem] xs:mt-[32rem] lg:px-0 xs:px-[2rem] items-center'>
                        <div className="relative w-full md:w-[70vw] lg:w-[20%]">
                            <input type="file" onChange={handleImageChange17} className='w-[110px]' /> 
                            <img src={preview17 || fashSale7} className="h-[60vh] xs:w-[50vh] lg:w-[100%]" alt="Fashion Sale 7"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <input type="file" onChange={handleImageChange18} className='w-[110px]' /> 
                            <img src={preview18 || fashSale8} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 8"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <input type="file" onChange={handleImageChange19} className='w-[110px]' /> 
                            <img src={preview19 || fashSale11} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 11"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <input type="file" onChange={handleImageChange20} className='w-[110px]' /> 
                            <img src={preview20 || fashSale16} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 16"/>
                        </div>
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

    </Transition>
  )
}

export default Sales