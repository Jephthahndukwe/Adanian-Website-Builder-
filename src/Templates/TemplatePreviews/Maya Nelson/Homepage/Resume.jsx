import React, { useState, useEffect } from 'react'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
import Navbar from '../Components/Navbar'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';


const Resume = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    // Set show to true after the component is mounted to trigger the animation
    setShow(true);
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ayoba.adanianlabs.io/api/user/getwebsite/Chika Store');
      setData(response.data);

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
                <div className='bg-[#E6DACE] mt-[8rem] pt-[6rem] pb-[5rem]'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='bg-blue-600 py-[0px] h-[20px] px-[10px]'/>
                        <h1 className='text-[38px] font-Urbanist font-[900] mt-2'>Resume</h1>
                    </div>
                    <div className='lg:px-[330px] xs:px-[10px] mt-[5rem]'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[27px] font-Urbanist font-[900]'>Experience</h2>
                                <h2><Link to='' className='text-[14px] hover:text-[#000] hover:bg-transparent hover:border-[2px] hover:border-solid hover:border-blue-600 bg-blue-600 py-[10px] px-[20px] rounded-[100px] text-[#fff] no-underline'>DOWNLOAD CV</Link></h2>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                    <div className='w-[50%] lg:mt-[-5rem]'>
                                        <h2 className='text-[22px] font-Urbanist font-[800]' style={{ color: data.data && data.data.texts && data.data.texts.heading7 ? data.data.texts.heading7.color : "#1E88E5" }}>{data.data && data.data.texts && data.data.texts.heading7 ? data.data.texts.heading7.text : '2035 - Present'}</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2' style={{ color: data.data && data.data.texts && data.data.texts.heading8 ? data.data.texts.heading8.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading8 ? data.data.texts.heading8.text : 'JOB POSITION'}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading9 ? data.data.texts.heading9.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading9 ? data.data.texts.heading9.text : 'Company Name'}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading10 ? data.data.texts.heading10.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading10 ? data.data.texts.heading10.text : 'Company Location'}</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]' style={{ color: data.data && data.data.texts && data.data.texts.heading11 ? data.data.texts.heading11.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading11 ? data.data.texts.heading11.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'}</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4' style={{ color: data.data && data.data.texts && data.data.texts.heading12 ? data.data.texts.heading12.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading12 ? data.data.texts.heading12.text : 'I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                    <div className='w-[50%] lg:mt-[-5rem]'>
                                        <h2 className='text-[22px] font-Urbanist text-blue-600 font-[800]'>2035 - Present</h2>
                                        <h2 className='text-[18px] font-Urbanist font-[300] mt-2' style={{ color: data.data && data.data.texts && data.data.texts.heading13 ? data.data.texts.heading13.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading13 ? data.data.texts.heading13.text : 'JOB POSITION'}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.text : 'Company Name'}</h2>
                                        <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading15 ? data.data.texts.heading15.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading15 ? data.data.texts.heading15.text : 'Company Location'}</h2>
                                    </div>
                                    <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]' style={{ color: data.data && data.data.texts && data.data.texts.heading16 ? data.data.texts.heading16.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading16 ? data.data.texts.heading16.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'}</p>
                                        <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4' style={{ color: data.data && data.data.texts && data.data.texts.heading17 ? data.data.texts.heading17.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading17 ? data.data.texts.heading17.text : 'I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[7rem]'>
                            <h2 className='text-[27px] font-Urbanist font-[900]'>Education</h2>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist font-[800]' style={{ color: data.data && data.data.texts && data.data.texts.heading18 ? data.data.texts.heading18.color : "#1E88E5" }}>{data.data && data.data.texts && data.data.texts.heading18 ? data.data.texts.heading18.text : '2035 - 2035'}</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2' style={{ color: data.data && data.data.texts && data.data.texts.heading19 ? data.data.texts.heading19.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading19 ? data.data.texts.heading19.text : 'UNIVERSITY NAME'}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading20 ? data.data.texts.heading20.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading20 ? data.data.texts.heading20.text : 'Degree Level'}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading21 ? data.data.texts.heading21.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading21 ? data.data.texts.heading21.text : 'University Location'}</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]' style={{ color: data.data && data.data.texts && data.data.texts.heading22 ? data.data.texts.heading22.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading22 ? data.data.texts.heading22.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'}</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4' style={{ color: data.data && data.data.texts && data.data.texts.heading23 ? data.data.texts.heading23.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading23 ? data.data.texts.heading23.text : 'I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                                </div>
                                </div>
                            </div>
                            <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] lg:pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                                <div className='lg:flex justify-between items-center'>
                                <div className='w-[50%] lg:mt-[-5rem]'>
                                    <h2 className='text-[22px] font-Urbanist font-[800]' style={{ color: data.data && data.data.texts && data.data.texts.heading24 ? data.data.texts.heading24.color : "#1E88E5" }}>{data.data && data.data.texts && data.data.texts.heading24 ? data.data.texts.heading24.text : '2035 - 2035'}</h2>
                                    <h2 className='text-[18px] font-Urbanist font-[300] mt-2' style={{ color: data.data && data.data.texts && data.data.texts.heading25 ? data.data.texts.heading25.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading25 ? data.data.texts.heading25.text : 'UNIVERSITY NAME'}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading26 ? data.data.texts.heading26.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading26 ? data.data.texts.heading26.text : 'Degree Level'}</h2>
                                    <h2 className='text-[14px] font-Urbanist font-[400] mt-3' style={{ color: data.data && data.data.texts && data.data.texts.heading27 ? data.data.texts.heading27.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading27 ? data.data.texts.heading27.text : 'University Location'}</h2>
                                </div>
                                <div className='lg:w-[50%] xs:w-[100%] mt-[4rem]'>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[105%]' style={{ color: data.data && data.data.texts && data.data.texts.heading28 ? data.data.texts.heading28.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading28 ? data.data.texts.heading28.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.'}</p>
                                    <p className='lg:text-[16px] xs:text-[18px] font-Urbanist leading-[26px] lg:w-[110%] mt-4' style={{ color: data.data && data.data.texts && data.data.texts.heading29 ? data.data.texts.heading29.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading29 ? data.data.texts.heading29.text : 'I’m a great place for you to tell a story and let your users know a little more about you.'}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#fff] w-[100%] mt-[3rem] py-[50px] pt-[-50rem] lg:px-[40px] xs:px-[20px] pr-[50px]'>
                            <h2 className='text-[25px] font-Urbanist font-[800]' style={{ color: data.data && data.data.texts && data.data.texts.heading30 ? data.data.texts.heading30.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading30 ? data.data.texts.heading30.text : 'Professional skillset'}</h2>
                            <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading31 ? data.data.texts.heading31.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading31 ? data.data.texts.heading31.text : 'Entrepreneurial Mindset'}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading32 ? data.data.texts.heading32.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading32 ? data.data.texts.heading32.text : 'Go-to-Market Planning'}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading33 ? data.data.texts.heading33.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading33 ? data.data.texts.heading33.text : 'Teamwork & Collaboration'}</h1>
                                </div>
                                <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-8rem] lg:-ms-5'>
                                    <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                    <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading34 ? data.data.texts.heading34.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading34 ? data.data.texts.heading34.text : 'Digital Analytics'}</h1>
                                </div>
                            </div>
                            <div className='w-[80%]'>
                                <h2 className='text-[25px] font-Urbanist font-[800] lg:mt-[5rem]' style={{ color: data.data && data.data.texts && data.data.texts.heading35 ? data.data.texts.heading35.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading35 ? data.data.texts.heading35.text : 'Languages'}</h2>
                                <div className='flex flex-wrap gap-[4rem] items-center mt-4'>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading36 ? data.data.texts.heading36.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading36 ? data.data.texts.heading36.text : 'English (native)'}</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-0 xs:mt-[-4rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading37 ? data.data.texts.heading37.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading37 ? data.data.texts.heading37.text : 'French (proficient)'}</h1>
                                    </div>
                                    <div className='flex gap-2 justify-center items-center lg:mt-[-4rem] xs:mt-[-6rem]'>
                                        <span className='bg-blue-600 py-[0px] h-[15px] px-[8px]'/>
                                        <h1 className='text-[14px] font-Urbanist font-[400] mt-[10px]' style={{ color: data.data && data.data.texts && data.data.texts.heading38 ? data.data.texts.heading38.color : "#000" }}>{data.data && data.data.texts && data.data.texts.heading38 ? data.data.texts.heading38.text : 'Spanish (proficient)'}</h1>
                                    </div>
                                </div>
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

export default Resume