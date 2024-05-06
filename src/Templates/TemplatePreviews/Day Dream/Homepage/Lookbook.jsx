import React, { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar';
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
import toast from 'react-hot-toast';
import axios from 'axios';
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
            <div className='bg-[#fff] mt-[-4rem] overflow-hidden'>
                <div className='lg:mt-[7rem] xs:mt-[3.9rem]'>
                    <Navbar/>
                </div>
                <div className='lg:mt-[20rem] xs:mt-[15rem] lg:px-0 xs:px-[30px]'>
                    <h1 className='lg:text-[40px] xs:text-[30px] font-[100] text-center italic font-Namdhinggo' style={{ color: data && data.data && data.data.texts && data.data.texts.heading10 ? data.data.texts.heading10.color : '#4a573e' }}>{data && data.data && data.data.texts && data.data.texts.heading10 ? data.data.texts.heading10.text : 'Explore Our Lookbook' }</h1>
                    <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo font-[100] italic text-center mt-3' style={{ color: data && data.data && data.data.texts && data.data.texts.heading11 ? data.data.texts.heading11.color : "#4a573e"}}>{data && data.data && data.data.texts && data.data.texts.heading11 ? data.data.texts.heading11.text : 'I’m a paragraph. Click here to add your own text.' }</p>
                </div>
                   <div className='lg:px-[40px]'>
                   <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-12rem]'>
                        <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage12 ? data.data.images.selectedImage12 : fash12})`, backgroundPosition: 'start',backgroundRepeat: 'no-repeat'}} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[155vh] object-contain lg:block xs:hidden'></div>
                        <img src={data && data.data.images.selectedImage13 ? data.data.images.selectedImage13 : fash12} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' />
                        <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[95vh] lg:mt-0 xs:mt-[-14rem]'>
                            <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                                <h2 className='font-Namdhinggo text-[16px] font-[100] italic text-center' data-aos="fade-down" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading12 ? data.data.texts.heading12.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading12 ? data.data.texts.heading12.text : 'Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK' }</h2>
                                <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                                    <div>
                                    <img src={data && data.data.images.selectedImage14 ? data.data.images.selectedImage14 : fash6} className='lg:w-[70%] xs:w-[90%]' data-aos="fade-left" data-aos-duration="1000" />
                                    <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem]'  data-aos="fade-right" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading13 ? data.data.texts.heading13.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading13 ? data.data.texts.heading13.text : 'At Home. In Style.' }</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                   </div>
                   <div className='lg:px-[40px]'>
                   <div className='lg:flex items-center mt-[7rem] '>
                        <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage15 ? data.data.images.selectedImage15 : fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:block xs:hidden'>
                        </div>
                        <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage16 ? data.data.images.selectedImage16 : fash13})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] h-[164vh] lg:hidden xs:block'>
                        <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[45px] lg:w-[60%] xs:w-[80%] font-[100] italic text-start ps-[1rem] pt-[28rem]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.text : 'Put Your Best Set Forward' }</h2>
                        </div>
                        <div className='bg-[#013b3e] lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[90vh] lg:mt-0 xs:mt-[-32rem]'>
                            <div className='lg:pt-[7rem] lg:ps-[7rem]'>
                                <h2 className='font-Namdhinggo text-[50px] w-[60%] font-[100] italic text-start lg:block xs:hidden' data-aos="fade-right" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading14 ? data.data.texts.heading14.text : 'Put Your Best Set Forward' }</h2>
                                <div className='lg:pt-[10rem] lg:ps-[8rem] xs:pt-[4rem] xs:ps-[2rem]'>
                                    <img src={data && data.data.images.selectedImage17 ? data.data.images.selectedImage17 : fash14} className='lg:w-[75%] xs:w-[70%]' data-aos="fade-left" data-aos-duration="1000" />
                                    <p className='font-Namdhinggo lg:text-[17px] xs:text-[20px] lg:w-[60%] xs:w-[75%] font-[100] italic text-start lg:mt-4 xs:mt-[4rem] lg:ms-0 xs:ms-[4rem]' data-aos="fade-left" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading15 ? data.data.texts.heading15.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading15 ? data.data.texts.heading15.text : 'I’m a paragraph. This is where people can read more.' }</p>
                                </div>
                            </div>
                        </div >
                    </div>
                   </div>
                   <div  className='lg:px-[40px]'>
                        <div className='lg:flex items-center lg:mt-[7rem] xs:mt-[5rem]'>
                            <div className='bg-[#013B3E] lg:w-[50vw] xs:w-[100vw] lg:h-[175vh] xs:h-[100vh] lg:pt-[7rem] xs:pt-[3rem] lg:ps-[5rem] xs:px-[1rem]'>
                                <p className='lg:text-[17px] xs:text-[19px] font-Namdhinggo italic font-[100] text-start lg:w-[40%] xs:w-[90%] lg:ps-0 xs:ps-[0.5rem]' data-aos="fade-right" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading16 ? data.data.texts.heading16.color : "#f2ede6"}}>{data && data.data && data.data.texts && data.data.texts.heading16 ? data.data.texts.heading16.text : 'I’m a paragraph. I’m a great place to add more info about your products.' }</p>
                                <div className='lg:absolute lg:mt-[3rem] lg:ms-[20.7rem] lg:pt-0 xs:pt-[3rem] lg:ps-0 xs:ps-[3rem]'>
                                    <img src={data && data.data.images.selectedImage18 ? data.data.images.selectedImage18 : fash16}  data-aos="fade-right" data-aos-duration="1000" />
                                </div>
                            </div>
                            <div>
                                <img src={data && data.data.images.selectedImage19 ? data.data.images.selectedImage19 : fash15} className='lg:h-[175vh]' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:px-[40px]'>
                        <div className='lg:flex items-center mt-[7rem]'>
                            <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage20 ? data.data.images.selectedImage20 : fash17})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill'></div>
                            <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage21 ? data.data.images.selectedImage21 : fash18})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] h-[165vh] object-fill lg:mt-0 xs:mt-[-32rem]'>
                                <div className='lg:pt-[14rem] lg:ps-[6rem] xs:pt-[6rem] xs:ps-[3rem]'>
                                    <img src={data && data.data.images.selectedImage22 ? data.data.images.selectedImage22 : fash19} className='lg:w-[82%] xs:w-[90%]' data-aos="zoom-in-left" data-aos-duration="1000" />
                                    <h2 className='lg:mt-[-19rem] xs:mt-[-12rem] italic font-Namdhinggo xs:text-[55px] lg:text-[70px] lg:ms-[1rem] xs:ms-[-1rem]' data-aos="fade-right" data-aos-duration="1000" style={{ color: data && data.data && data.data.texts && data.data.texts.heading17 ? data.data.texts.heading17.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading17 ? data.data.texts.heading17.text : 'Off-Duty Chic' }</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  className='lg:px-[40px] lg:mb-[5rem]'>
                        <div className='lg:flex items-center lg:mt-[7rem] xs:mt-[-23rem]'>
                            <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage23 ? data.data.images.selectedImage23 : fash20})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill'>
                                <img src={data && data.data.images.selectedImage24 ? data.data.images.selectedImage24 : fash22} className='lg:pt-[12.3rem] xs:pt-[4rem] lg:ms-0 xs:ms-[3rem] lg:px-[8rem] lg:w-[100%] xs:w-[75%]' data-aos="zoom-in-right"  data-aos-duration="1000" />
                            </div>
                            <div style={{ backgroundImage: `url(${data && data.data.images.selectedImage23 ? data.data.images.selectedImage23 : fash21})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat`, backgroundSize: 'contain' }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[164vh] xs:h-[100vh] object-fill lg:mt-0 xs:mt-[-5rem] lg:ms-[-0.3rem]'>
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

export default Lookbook