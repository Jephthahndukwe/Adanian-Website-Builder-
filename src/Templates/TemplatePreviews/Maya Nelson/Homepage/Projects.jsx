import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar';
import Navbar from '../Components/Navbar';
import portfo2 from '../../../../assets/images/portfo2.png'
import portfo3 from '../../../../assets/images/portfo3.png'
import portfo4 from '../../../../assets/images/portfo4.png'
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Projects = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Set show to true after the component is mounted to trigger the animation
      setShow(true);
    }, []);

    const [data, setData] = useState(null);

  const store = useSelector((state) => state.store)
  const { storeDetails } = store

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}`);
      // setData(response.data);

      if(response.data.template == 'Maya Nelson') {
          setData(response.data);
      }

      console.log(response.data)

      if(response.data) {
            console.log('fetched successfully')
            setTimeout(() => {
              toast.success('Fetched Successfully');
            }, 1000);
      } else {
          console.log('Error fetching')
          setTimeout(() => {
            toast.error('Error Fetching');
          }, 1000);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Transition
      show={show}
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
        <div>
            <TemplatePreviewNavbar/>
            <div>
               <div>
                <Navbar/>
               </div>
                <div className='bg-[#E6DACE] mt-[8rem] pt-[6rem] pb-[7rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Projects</h1>
                    </div>
                    <p className='lg:ms-[20rem] lg:mt-5 xs:mt-4 lg:text-[16px] xs:text-[17px] px-[20px] font-Urbanist font-[400] leading-[26px] lg:w-[53%] text-center tracking-[1px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading40 ? data.data.texts.heading40.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading40 ? data.data.texts.heading40.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                    <div className='lg:px-[330px] xs:px-[20px] mt-[5rem]'>
                        <div className='lg:flex items-center'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist font-[900]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading41 ? data.data.texts.heading41.color : "#1E88E5" }}>{data && data.data && data.data.texts && data.data.texts.heading41 ? data.data.texts.heading41.text : 'Project name 01'}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading42 ? data.data.texts.heading42.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading42 ? data.data.texts.heading42.text : 'Role Title'}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading43 ? data.data.texts.heading43.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading43 ? data.data.texts.heading43.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={data && data.data.images.selectedImage2 ? data.data.images.selectedImage2 : portfo2} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[900]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading44 ? data.data.texts.heading44.color : "#1E88E5" }}>{data && data.data && data.data.texts && data.data.texts.heading44 ? data.data.texts.heading44.text : 'Project name 02'}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading45 ? data.data.texts.heading45.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading45 ? data.data.texts.heading45.text : 'Role Title'}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading46 ? data.data.texts.heading46.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading46 ? data.data.texts.heading46.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={data && data.data.images.selectedImage3 ? data.data.images.selectedImage3 : portfo3} className='w-full h-[60vh]' />
                            </div>
                        </div>
                        <div className='lg:flex items-center mt-[5rem]'>
                            <div className='bg-[#fff] lg:w-[170vw] lg:h-[60vh] xs:h-[45vh] pt-[4rem]'>
                                <div className='flex gap-[2rem]'>
                                    <div className='bg-blue-600 px-[5px] py-[10px]'/>
                                    <div>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[900]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading47 ? data.data.texts.heading47.color : "#1E88E5" }}>{data && data.data && data.data.texts && data.data.texts.heading47 ? data.data.texts.heading47.text : 'Project name 03'}</h2>
                                        <h2 className='text-[16px] font-Urbanist font-[800]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading48 ? data.data.texts.heading48.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading48 ? data.data.texts.heading48.text : 'Role Title'}</h2>
                                    </div>
                                </div>
                                <p className='text-[14px] font-Urbanist font-[400] leading-[26px] tracking-[1px] mt-[2rem] lg:ms-[1rem] xs:ms-[-0.5rem] lg:w-[100%] xs:w-[105%] px-[30px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading49 ? data.data.texts.heading49.color : "#000" }}>{data && data.data && data.data.texts && data.data.texts.heading49 ? data.data.texts.heading49.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                            </div>
                            <div className='lg:w-[120vw]'>
                                <img src={data && data.data.images.selectedImage4 ? data.data.images.selectedImage4 : portfo4} className='w-full h-[60vh]' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </Transition>
  )
}

export default Projects