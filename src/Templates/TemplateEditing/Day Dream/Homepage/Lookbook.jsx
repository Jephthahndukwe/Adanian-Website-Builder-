import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import fash6 from '../../../../assets/images/fash6.jpg'
import fash13 from '../../../../assets/images/fash13.png'
import fash14 from '../../../../assets/images/fash14.png'
import fash12 from '../../../../assets/images/fash12.png'
import fash15 from '../../../../assets/images/fash15.png'
import fash16 from '../../../../assets/images/fash16.png'
import fash17 from '../../../../assets/images/fash17.png'
import fash18 from '../../../../assets/images/fash18.png'
import fash19 from '../../../../assets/images/fash19.png'
import fash20 from '../../../../assets/images/fash20.png'
import fash21 from '../../../../assets/images/fash21.png'
import fash22 from '../../../../assets/images/fash22.png'
import Footer from '../Component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';


const Lookbook = () => {
    

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  useEffect(() => {
    AOS.init();
}, []);

// State variables for each heading
const [heading10, setHeading10] = useState({ id: 'heading10', text: 'Explore Our Lookbook', color: '#4a573e' });
const [heading11, setHeading11] = useState({ id: 'heading11', text: 'I’m a paragraph. Click here to add your text', color: '#4a573e' });
const [heading12, setHeading12] = useState({ id: 'heading12', text: 'Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK', color: '#f2ede6' });
const [heading13, setHeading13] = useState({ id: 'heading13', text: 'At Home. In Style.', color: '#f2ede6' });
const [heading14, setHeading14] = useState({ id: 'heading14', text: 'Put Your Best Set Forward', color: '#f2ede6' });
const [heading15, setHeading15] = useState({ id: 'heading15', text: 'I’m a paragraph. This is where people can read more.', color: '#f2ede6' });
const [heading16, setHeading16] = useState({ id: 'heading16', text: 'I’m a paragraph. I’m a great place to add more info about your products.', color: '#f2ede6' });
const [heading17, setHeading17] = useState({ id: 'heading17', text: 'Off-Duty Chic', color: '#f2ede6' });

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


    const store = useSelector((state) => state.store)
    const { storeDetails } = store

     // SAVING DATA TO BACKEND
     const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage12', file1);
        formData.append('selectedImage13', file2);
        formData.append('selectedImage14', file3);
        formData.append('selectedImage15', file4);
        formData.append('selectedImage16', file5);
        formData.append('selectedImage17', file6);
        formData.append('selectedImage18', file7);
        formData.append('selectedImage19', file8);
        formData.append('selectedImage20', file9);
        formData.append('selectedImage21', file10);
        formData.append('selectedImage22', file11);
        formData.append('selectedImage23', file12);

        const texts = {
            heading10: heading10,
            heading11: heading11,
            heading12: heading12,
            heading13: heading13,
            heading14: heading14,
            heading15: heading15,
            heading16: heading16,
            heading17: heading17,
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
                toast.success('Lookbook page saved successfully');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            toast.error('Error uploading page');
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
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading10, setHeading10)} style={{ color: heading10.color}}>{heading10.text}</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading11, setHeading11)} style={{ color: heading11.color}}>{heading11.text}</p>
                </div>
                   <div className='lg:px-[40px]'>
                   <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-12rem]'>
                            <div style={{ backgroundImage: `url(${preview || fash12})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[155vh] object-contain lg:block xs:hidden'>
                                <input type="file" onChange={handleImageChange} />
                            </div>
                            <div style={{ backgroundImage: `url(${preview || fash12})`,  backgroundPosition: 'start', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block mt-[15rem]'>
                                <input type="file" onChange={handleImageChange} className='lg:hidden xs:block' />
                            </div>

                        <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[95vh] lg:mt-0 xs:mt-[-28rem]'>
                            <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                                <h2 className='font-Namdhinggo text-[16px] font-[100] italic text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-down" data-aos-duration="1000" onClick={() => openModal(heading12, setHeading12)} style={{ color: heading12.color}}>{heading12.text}</h2>
                                <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                                    <div>
                                        <input type="file" onChange={handleImageChange2} />
                                        <img src={preview2 || fash6} className='lg:w-[70%] xs:w-[90%]' data-aos="fade-left" data-aos-duration="1000" />

                                    <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]'  data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading13, setHeading13)} style={{ color: heading13.color}}>{heading13.text}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                   </div>
                   <div className='lg:px-[40px]'>
                   <div className='lg:flex items-center mt-[7rem] '>                      
                        <div style={{ backgroundImage: `url(${preview3 || fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:block xs:hidden'>
                        <input type="file" onChange={handleImageChange3} />  
                        </div>

                        <div style={{ backgroundImage: `url(${preview3 || fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:hidden xs:block'>
                        <input type="file" onChange={handleImageChange3} />  
                        <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[45px] lg:w-[60%] xs:w-[80%] font-[100] italic text-start ps-[1rem] pt-[28rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading14, setHeading14)} style={{ color: heading14.color}}>{heading14.text}</h2>
                        </div>
                        <div className='bg-[#013b3e] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[90vh] lg:mt-0 xs:mt-[-32rem]'>
                            <div className='lg:pt-[7rem] lg:ps-[7rem]'>
                                <h2 className='font-Namdhinggo text-[50px] w-[60%] font-[100] italic text-start lg:block xs:hidden hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading14, setHeading14)} style={{ color: heading14.color}}>{heading14.text}</h2>
                                <div className='lg:pt-[10rem] lg:ps-[8rem] xs:pt-[4rem] xs:ps-[2rem]'>
                                <input type="file" onChange={handleImageChange4} />                                          
                                <img src={preview4 || fash14} className='lg:w-[75%] xs:w-[70%]' data-aos="fade-left" data-aos-duration="1000" />
                                    <p className='font-Namdhinggo lg:text-[17px] xs:text-[20px] lg:w-[60%] xs:w-[75%] font-[100] italic text-start lg:mt-4 xs:mt-[4rem] lg:ms-0 xs:ms-[4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-left" data-aos-duration="1000" onClick={() => openModal(heading15, setHeading15)} style={{ color: heading15.color}}>{heading15.text}</p>
                                </div>
                            </div>
                        </div >
                    </div>
                   </div>
                   <div  className='lg:px-[40px]'>
                        <div className='lg:flex items-center gap-[-5rem] lg:mt-[7rem] xs:mt-[5rem]'>
                            <div className='bg-[#013B3E] lg:w-[50vw] xs:w-[100vw] lg:h-[175vh] xs:h-[100vh] lg:pt-[7rem] xs:pt-[3rem] lg:ps-[5rem] xs:px-[1rem]'>
                                <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo italic font-[100] text-start lg:w-[40%] xs:w-[90%] lg:ps-0 xs:ps-[0.5rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading16, setHeading16)} style={{ color: heading16.color}}>{heading16.text}</p>
                                <div className='lg:absolute lg:mt-[3rem] lg:ms-[20.7rem] lg:pt-0 xs:pt-[3rem] lg:ps-0 xs:ps-[3rem]'>
                                <input type="file" onChange={handleImageChange5} />                                                
                                <img src={preview5 || fash16} data-aos="fade-right" data-aos-duration="1000" />
                                </div>
                            </div>
                            <div>
                            <input type="file" onChange={handleImageChange6} className='absolute' />                                                       
                            <img src={preview6 || fash15} className='lg:h-[175vh]' />
                        </div>
                    </div>
                    </div>
                    <div className='lg:px-[40px]'>
                        <div className='lg:flex items-center mt-[7rem]'>                                 
                            <div style={{ backgroundImage: `url(${preview7 || fash17})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill'>
                                <input type="file" onChange={handleImageChange7} />
                            </div>
                                <div style={{ backgroundImage: `url(${preview8 || fash18})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill lg:mt-0 xs:mt-[-32rem]'>
                                <input type="file" onChange={handleImageChange8} />
                                    <div className='lg:pt-[14rem] lg:ps-[6rem] xs:pt-[6rem] xs:ps-[3rem]'>
                                        <input type="file" onChange={handleImageChange9} />
                                        <img src={preview9 || fash19} className='lg:w-[82%] xs:w-[90%]' data-aos="zoom-in-left" data-aos-duration="1000" />
                                        <h2 className='lg:mt-[-19rem] xs:mt-[-12rem] italic font-Namdhinggo xs:text-[55px] lg:text-[70px] lg:ms-[1rem] xs:ms-[-1rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' data-aos="fade-right" data-aos-duration="1000" onClick={() => openModal(heading17, setHeading17)} style={{ color: heading17.color}}>{heading17.text}</h2>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div  className='lg:px-[40px] lg:mb-[5rem]'>
                        <div className='lg:flex items-center lg:mt-[7rem] xs:mt-[-23rem]'>
                                <div style={{ backgroundImage: `url(${preview10 || fash20})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill'>
                                <input type="file" onChange={handleImageChange10} />
                                    <div className='lg:pt-[12.3rem] xs:pt-[4rem] lg:ms-0 xs:ms-[3rem]'>
                                    <input type="file" onChange={handleImageChange11} className='lg:ms-[8rem]' />
                                        <img src={preview11 || fash22} className='lg:px-[8rem] lg:w-[100%] xs:w-[75%]' data-aos="zoom-in-right"  data-aos-duration="1000" />
                                    </div>
                                </div>

                                <div style={{ backgroundImage: `url(${preview12 || fash21})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill lg:mt-0 xs:mt-[-5rem] lg:ms-[-0.3rem]' >
                                    <input type="file" onChange={handleImageChange12} />
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

    </Transition>
  )
}

export default Lookbook