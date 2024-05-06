import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import TemplatePreviewNavbar from '../../../TemplateDashboard/TemplatePreviewNavbar'
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
import axios from 'axios'
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
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {/* {data && ( */}
    <div>
      <TemplatePreviewNavbar/>
        <div className='lg:mt-[-2.8rem] pt-[1rem] overflow-hidden'>
          <div>
         <div className='lg:absolute top-[7rem] left-6 lg:mt-[5rem]'>
         <Navbar/>
         </div>
            <div className='lg:flex items-center lg:-mt-5'>
              <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data && data.data.images.selectedImage1 ? data.data.images.selectedImage1 : fash})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill bg-fixed'></div>
              <div  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data && data.data.images.selectedImage2 ? data.data.images.selectedImage2 : fash2})`, backgroundPosition: `end`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill'>
                  <div className='pt-[16rem] lg:ps-[3rem] xs:ps-[1rem]'>
                    <h1 className='italic font-[300] font-Namdhinggo tracking-[3px] text-[45px] leading-[60px] lg:w-[70%]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading1 ? data.data.texts.heading1.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading1 ? data.data.texts.heading1.text : 'Comfy Chic Loungewears' }</h1>
                    <p className='italic font-[100] lg:mt-2 text-[18px] lg:w-[40%] xs:w-[70%] xs:mt-[1rem] font-Namdhinggo leading-[30px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading2 ? data.data.texts.heading2.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading2 ? data.data.texts.heading2.text : 'Im a paragraph. Click here to add your text' }</p>
                    <Link to='/DayDreamSales' className='text-[#f2ede6] hover:text-[#f2ede6] text-[18px] font-Namdhinggo italic'>Sales Collection</Link>
                  </div>
              </div>
            </div>
            <div className='lg:px-[80px] xs:px-[20px] lg:mt-[10rem] xs:mt-[5rem]'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='relative overflow-hidden'>
                    <img src={data && data.data.images.selectedImage3 ? data.data.images.selectedImage3 : fash3}className='object-cover transition duration-300 transform hover:scale-105' />
                    <h2 className='font-Namdhinggo font-[100] lg:text-[30px] xs:text-[25px] italic mt-4' style={{ color: data && data.data && data.data.texts && data.data.texts.heading3 ? data.data.texts.heading3.color : "#4a573e" }}>{data && data.data && data.data.texts && data.data.texts.heading3 ? data.data.texts.heading3.text : '25% Off Loungewear Sets' }</h2>
                </div>
                  <div className='lg:mt-[-8rem] xs:mt-[5rem] relative overflow-hidden'>
                    <img src={data && data.data.images.selectedImage4 ? data.data.images.selectedImage4 : fash4}className='object-cover transition duration-300 transform hover:scale-105' />
                    <h2 className='font-Namdhinggo lg:text-[30px] xs:text-[25px] font-[100] italic mt-4' style={{ color: data && data.data && data.data.texts && data.data.texts.heading4 ? data.data.texts.heading4.color : "#4a573e" }}>{data && data.data && data.data.texts && data.data.texts.heading4 ? data.data.texts.heading4.text : 'Introducing: Comfort Zone' }</h2>
                  </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-7rem]'>
            <div style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${data && data.data.images.selectedImage5 ? data.data.images.selectedImage5 : fash5})`,
              backgroundPosition: 'start',
              backgroundRepeat: 'no-repeat',
            }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[155vh] object-contain lg:block xs:hidden'></div>
              <img src={data && data.data.images.selectedImage5 ? data.data.images.selectedImage5 : fash5} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' />
              <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[95vh] lg:mt-0 xs:mt-[-14rem]'>
                  <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                      <h2 className='font-Namdhinggo text-[16px] font-[100] italic text-center' style={{ color: data && data.data && data.data.texts && data.data.texts.heading5 ? data.data.texts.heading5.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading5 ? data.data.texts.heading5.text : 'Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK' }</h2>
                      <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                        <div>
                        <img src={data && data.data.images.selectedImage6 ? data.data.images.selectedImage6 : fash6} className='lg:w-[70%] xs:w-[90%]' />
                        <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading6 ? data.data.texts.heading6.color : "#f2ede6" }}>{data && data.data && data.data.texts && data.data.texts.heading6 ? data.data.texts.heading6.text : 'At Home. In Style.' }</h1>
                        </div>
                        <p className='mt-[14rem] lg:ps-[8.5rem] xs:ps-[5.5rem]'><Link to='/DayDreamLookbook' className='text-[#f2ede6] hover:text-[#f2ede6] lg:text-[17px] xs:text-[22px] font-Namdhinggo font-[100] italic'>View More</Link></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='pt-[8rem] bg-[#F2EDE6] lg:px-0 xs:px-[20px]'>
                  <h1 className='text-center font-Namdhinggo font-[100] italic lg:text-[35px] xs:text-[38px]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading7 ? data.data.texts.heading7.color : "#4a573e" }}>{data && data.data && data.data.texts && data.data.texts.heading7 ? data.data.texts.heading7.text : 'Follow @DayDream on Instagram' }</h1>
                  <div className='flex flex-wrap items-center relative overflow-hidden gap-[1rem] px-[10px] lg:ms-[4rem] mt-[5rem]'>
                    <img src={data && data.data.images.selectedImage7 ? data.data.images.selectedImage7 : fash7} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={data && data.data.images.selectedImage8 ? data.data.images.selectedImage8 : fash8}className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={data && data.data.images.selectedImage9 ? data.data.images.selectedImage9 : fash9} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={data && data.data.images.selectedImage10 ? data.data.images.selectedImage10 : fash10} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={data && data.data.images.selectedImage11 ? data.data.images.selectedImage11 : fash11} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                  </div>
                  <div className='mt-[10rem] pb-[3rem]'>
                    <h1 className='text-center text-[33px] font-Namdhinggo italic font-[100]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading8 ? data.data.texts.heading8.color : "#4a573e" }}>{data && data.data && data.data.texts && data.data.texts.heading8 ? data.data.texts.heading8.text : 'Stay Comfy' }</h1>
                    <p className='text-center text-[22px] mt-2 font-Namdhinggo font-[100]' style={{ color: data && data.data && data.data.texts && data.data.texts.heading9 ? data.data.texts.heading9.color : "#4a573e" }}>{data && data.data && data.data.texts && data.data.texts.heading9 ? data.data.texts.heading9.text : 'Follow for Updates & Special Offers' }</p>
                    <hr className='lg:w-[80%] xs:w-[100%] h-[2px] bg-[#4a573e] lg:ms-[10rem] mt-[4rem]'/>
                  </div>
              </div>
              <Footer/>
          </div>
        </div>
    </div>
      {/* )} */}
    </Transition>
  )
}

export default Homepage