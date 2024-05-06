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
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'



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

    // TEXT EDITING
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

    const store = useSelector((state) => state.store)
    const { storeDetails } = store

// SAVING DATA TO BACKEND
      const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage1', file1);
        formData.append('selectedImage2', file2);
        formData.append('selectedImage3', file3);
        formData.append('selectedImage4', file4);
        formData.append('selectedImage5', file5);
        formData.append('selectedImage6', file6);
        formData.append('selectedImage7', file7);
        formData.append('selectedImage8', file8);
        formData.append('selectedImage9', file9);
        formData.append('selectedImage10', file10);
        formData.append('selectedImage11', file11);

      const texts = {
        heading1: heading1,
        heading2: heading2,
        heading3: heading3,
        heading4: heading4,
        heading5: heading5,
        heading6: heading6,
        heading7: heading7,
        heading8: heading8,
        heading9: heading9,
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
                toast.success('Homepage saved successfully.');
            } else {
                console.error('Upload failed:', response.statusText);
                toast.error('Changes Failed. Try again later!');
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
          // navigate('/dashboard')
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
                <div className='lg:flex items-center justify-between'>
                  <div className='relative overflow-hidden lg:w-[40%]'>
                  <input type="file" onChange={handleImageChange3} />
                  <img src={preview3 || fash3} className='object-cover transition duration-300 transform hover:scale-105 w-[100%]' />
                    <h2 className='font-Namdhinggo font-[100] lg:text-[30px] xs:text-[25px] w-[100%] italic mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px] hover:w-[100%]' onClick={() => openModal(heading3, setHeading3)} style={{ color: heading3.color}}>{heading3.text}</h2>
                </div>
                  <div className='lg:mt-[-8rem] xs:mt-[5rem] lg:relative lg:overflow-hidden lg:w-[40%]'>
                    <input type="file" onChange={handleImageChange4} />
                      <img 
                          src={preview4 || fash4} className='object-cover transition duration-300 transform hover:scale-105 lg:w-[50%]'
                      />
                    <h2 className='font-Namdhinggo lg:text-[30px] xs:text-[25px] w-[100%] font-[100] italic mt-4 hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading4, setHeading4)} style={{ color: heading4.color}}>{heading4.text}</h2>
                  </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-7rem]'>
                <div 
                  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview5 || fash5})`, backgroundPosition: 'start', backgroundRepeat: 'no-repeat',}} className='lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[155vh] object-contain lg:block xs:hidden'
                >
                  <input type="file" onChange={handleImageChange5} />
                </div>
                <div style={{ backgroundImage: `url(${preview5 || fash5})`,  backgroundPosition: 'start', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block mt-[15rem]'>
                  <input type="file" onChange={handleImageChange5} className='lg:hidden xs:block' />
                </div>

              <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[95vh] lg:mt-0 xs:mt-[-27rem]'>
                  <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                      <h2 className='font-Namdhinggo text-[16px] font-[100] italic text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading5, setHeading5)} style={{ color: heading5.color}}>{heading5.text}</h2>
                      <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                        <div>
                        <input type="file" onChange={handleImageChange6} />
                            <img 
                              src={preview6 || fash6}  className='lg:w-[70%] xs:w-[90%]'
                            />
                        <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem] hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading6, setHeading6)} style={{ color: heading6.color}}>{heading6.text}</h1>
                        </div>
                        <p className='mt-[14rem] lg:ps-[8.5rem] xs:ps-[5.5rem]'><Link to='/DayDreamEditLookbook' className='text-[#f2ede6] hover:text-[#f2ede6] lg:text-[17px] xs:text-[22px] font-Namdhinggo font-[100] italic'>View More</Link></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='pt-[8rem] bg-[#F2EDE6] lg:px-0 xs:px-[20px]'>
                  <h1 className='text-center font-Namdhinggo font-[100] italic lg:text-[35px] xs:text-[38px] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'  onClick={() => openModal(heading7, setHeading7)} style={{ color: heading7.color}}>{heading7.text}</h1>
                  <div className='flex flex-wrap items-center relative overflow-hidden gap-[1rem] px-[10px] lg:ms-[4rem] mt-[5rem]'>
                    <div className='lg:w-[18%] xs:w-[100%]'>
                      <input type="file" onChange={handleImageChange7} />
                      <img src={preview7 || fash7}  className='object-cover transition duration-300 transform hover:scale-105' />
                    </div>
                    <div className='lg:w-[18%] xs:w-[100%]'>
                      <input type="file" onChange={handleImageChange8} />
                      <img src={preview8 ||fash8}  className='object-cover transition duration-300 transform hover:scale-105' />
                    </div>
                   <div className='lg:w-[18%] xs:w-[100%]'>
                      <input type="file" onChange={handleImageChange9} />
                      <img src={preview9 || fash9}  className='object-cover transition duration-300 transform hover:scale-105' />
                   </div>
                    <div className='lg:w-[18%] xs:w-[100%]'>
                      <input type="file" onChange={handleImageChange10} />
                      <img src={preview10 || fash10}  className='object-cover transition duration-300 transform hover:scale-105' />
                    </div>
                    <div className='lg:w-[18%] xs:w-[100%]'>
                      <input type="file" onChange={handleImageChange11} />
                      <img src={preview11 || fash11}  className='object-cover transition duration-300 transform hover:scale-105' />
                    </div>
                  </div>
                  <div className='mt-[10rem] pb-[3rem]'>
                    <h1 className='text-center text-[33px] font-Namdhinggo italic font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading8, setHeading8)} style={{ color: heading8.color}}>{heading8.text}</h1>
                    <p className='text-center text-[22px] mt-2 font-Namdhinggo font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading9, setHeading9)} style={{ color: heading9.color}}>{heading9.text}</p>
                    <hr className='lg:w-[80%] xs:w-[100%] h-[2px] bg-[#4a573e] lg:ms-[10rem] mt-[4rem]'/>
                  </div>
              </div>
              <Footer/>
            
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
        </div>
    </div>
    </Transition>
  )
}

export default Homepage