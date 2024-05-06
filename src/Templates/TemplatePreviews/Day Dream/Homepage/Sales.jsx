import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar';
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
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';



const Sales = () => {

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
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo' style={{ color: data && data.data && data.data.texts && data.data.texts.heading23 ? data.data.texts.heading23.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading23 ? data.data.texts.heading23.text : 'See Through Our Collections' }</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3' style={{ color: data && data.data && data.data.texts && data.data.texts.heading24 ? data.data.texts.heading24.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading24 ? data.data.texts.heading24.text : 'I am a paragraph. Click here to add your own text.' } </p>
                </div>
                <div className='mb-[5rem]'>
                <div className='flex flex-wrap lg:ms-[9rem] gap-[2rem] mt-[5rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={data && data.data.images.selectedImage26 ? data.data.images.selectedImage26 : fashSale1} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 1"/>
                        <img src={data && data.data.images.selectedImage27 ? data.data.images.selectedImage27 : fashSale2} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 2"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={data && data.data.images.selectedImage28 ? data.data.images.selectedImage28 : fashSale3} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 3"/>
                        <img src={data && data.data.images.selectedImage29 ? data.data.images.selectedImage29 : fashSale4} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 4"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={data && data.data.images.selectedImage30 ? data.data.images.selectedImage30 : fashSale5} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 5"/>
                        <img src={data && data.data.images.selectedImage31 ? data.data.images.selectedImage31 : fashSale6} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 6"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={data && data.data.images.selectedImage32 ? data.data.images.selectedImage32 : fashSale9} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 9"/>
                        <img src={data && data.data.images.selectedImage33 ? data.data.images.selectedImage33 : fashSale10} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 10"/>
                    </div>
                </div>
                <div className='flex flex-wrap lg:ms-[9rem] lg:mt-[27rem] gap-[2rem] xs:mt-[37rem] items-center lg:px-0 xs:px-[2rem]'>
                    <div className="relative w-full md:w-[50%] lg:w-[20%]">
                        <img src={data && data.data.images.selectedImage34 ? data.data.images.selectedImage34 : fashSale12} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 12"/>
                        <img src={data && data.data.images.selectedImage35 ? data.data.images.selectedImage35 : fashSale13} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 13"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={data && data.data.images.selectedImage36 ? data.data.images.selectedImage36 : fashSale14} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 14"/>
                        <img src={data && data.data.images.selectedImage37 ? data.data.images.selectedImage37 : fashSale15} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 15"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[35rem]">
                        <img src={data && data.data.images.selectedImage38 ? data.data.images.selectedImage38 : fashSale18} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 18"/>
                        <img src={data && data.data.images.selectedImage39 ? data.data.images.selectedImage39 : fashSale19} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 lg:h-[60vh] xs:h-[70vh]" alt="Fashion Sale 19"/>
                    </div>
                    <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[37rem]">
                        <img src={data && data.data.images.selectedImage40 ? data.data.images.selectedImage40 : fashSale20} className="absolute inset-0 transition-opacity opacity-100 hover:opacity-0" alt="Fashion Sale 20"/>
                        <img src={data && data.data.images.selectedImage41 ? data.data.images.selectedImage41 : fashSale21} className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100" alt="Fashion Sale 21"/>
                    </div>
                </div>
                    <div className='lg:flex flex-wrap lg:ms-[9rem] mt-[27rem] gap-[2rem] lg:mt-[27rem] xs:mt-[37rem] lg:px-0 xs:px-[2rem] items-center'>
                        <div className="relative w-full md:w-[70vw] lg:w-[20%]">
                            <img src={data && data.data.images.selectedImage42 ? data.data.images.selectedImage42 : fashSale7} className="h-[60vh] xs:w-[50vh] lg:w-[100%]" alt="Fashion Sale 7"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={data && data.data.images.selectedImage43 ? data.data.images.selectedImage43 : fashSale8} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 8"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={data && data.data.images.selectedImage44 ? data.data.images.selectedImage44 : fashSale11} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 11"/>
                        </div>
                        <div className="relative w-full md:w-[50%] lg:w-[20%] lg:mt-0 xs:mt-[3rem]">
                            <img src={data && data.data.images.selectedImage45 ? data.data.images.selectedImage45 : fashSale16} className='h-[60vh] xs:w-[50vh] lg:w-[100%]' alt="Fashion Sale 16"/>
                        </div>
                    </div>
                </div>
                


            </div>
            </div>
            <Footer/>
        </div>
         {/* )} */}
       
    </Transition>
  )
}

export default Sales