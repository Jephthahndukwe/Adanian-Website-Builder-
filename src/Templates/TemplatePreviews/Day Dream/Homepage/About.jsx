import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar';
import Navbar from '../Component/Navbar';
import fash25 from '../../../../assets/images/fash25.png'
import fash26 from '../../../../assets/images/fash26.png'
import Footer from '../Component/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const About = () => {

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

      if(response.data.template == 'Day Dream') {
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
        enter="transition-opacity ease-in-out duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
         {/* {data && ( */}
        <div>
           <TemplatePreviewNavbar/>
            <div className='bg-[#fff] mt-[-4rem]'>
                <div className='lg:mt-[7rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo' style={{ color: data && data.data && data.data.texts && data.data.texts.heading18 ? data.data.texts.heading18.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading18 ? data.data.texts.heading18.text : 'About Us' }</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3' style={{ color: data && data.data && data.data.texts && data.data.texts.heading19 ? data.data.texts.heading19.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading19 ? data.data.texts.heading19.text : 'I am a paragraph. Click here to add your own text.' }</p>
                </div>
                    <div className='lg:mb-[5rem]'>
                        <div className='lg:px-[40px] mt-[7rem]'>
                            <div className='lg:flex items-center'>
                                <div className='bg-[#385354] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[100vh]'>
                                    <div className='lg:pt-[8rem] lg:ps-[5rem] xs:pt-[7rem] lg:px-0 xs:px-[40px]'>
                                        <img src={data && data.data.images.selectedImage24 ? data.data.images.selectedImage24 : fash25} className='relative' />
                                        <img src={data && data.data.images.selectedImage25 ? data.data.images.selectedImage25 : fash26} className='absolute lg:mt-[-31rem] lg:ms-[4rem] xs:mt-[-30rem] xs:ms-[2rem] lg:w-[30%] xs:w-[75%]' />
                                    </div>
                                </div>
                                <div className='bg-[#CDD2C8] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh]'>
                                    <div className='lg:pt-[10rem] lg:ps-[4rem] xs:pr-[2rem] xs:pt-[4rem] xs:ps-[1rem] lg:pr-[4rem] lg:pb-0 xs:pb-[5rem]'>
                                        <h1 className='text-start font-Namdhinggo italic text-[34px] font-[100]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading20 ? data.data.texts.heading20.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading20 ? data.data.texts.heading20.text : 'Let’s Get Comfortable' }</h1>
                                        <p className='leading-[32px] mt-[2.5rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading21 ? data.data.texts.heading21.color : '#8b9186' }}>{data && data.data && data.data.texts && data.data.texts.heading21 ? data.data.texts.heading21.text : 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.' }</p>
                                        <p className='leading-[32px] mt-[2rem] text-start font-Namdhinggo italic lg:text-[17px] xs:text-[19px] font-[100] lg:w-[90%] xs:w-[100%]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading22 ? data.data.texts.heading22.color : '#8b9186' }}>{data && data.data && data.data.texts && data.data.texts.heading22 ? data.data.texts.heading22.text : 'This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.' }</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <Footer/>
            </div>
        </div>
         {/* )} */}
    </Transition>
  )
}

export default About