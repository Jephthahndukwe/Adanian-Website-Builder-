import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
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


  return (
    <Transition
      show={show}
      enter="transition-opacity ease-in-out	duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
    <div>
      <TemplateEditNavbar/>
        <div className='lg:mt-[-2.8rem] pt-[1rem]'>
          <div>
         <div className='lg:absolute top-[7rem] left-6 lg:mt-[5rem]'>
         <Navbar/>
         </div>
            <div className='lg:flex items-center lg:-mt-5'>
              <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${fash})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill bg-fixed'></div>
              <div  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${fash2})`, backgroundPosition: `end`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill'>
                  <div className='pt-[16rem] lg:ps-[3rem] xs:ps-[1rem]'>
                    <h1 className='text-[#f2ede6] italic font-[300] font-Namdhinggo tracking-[3px] text-[45px] leading-[60px] lg:w-[70%]'>Comfy Chic Loungewear</h1>
                    <p className='text-[#f2ede6] italic font-[100] lg:mt-2 text-[18px] lg:w-[40%] xs:w-[70%] xs:mt-[1rem] font-Namdhinggo leading-[30px]'>I'm a paragraph. Click here to add your text</p>
                    <Link to='/DayDreamSales' className='text-[#f2ede6] hover:text-[#f2ede6] text-[18px] font-Namdhinggo italic'>Sales Collection</Link>
                  </div>
              </div>
            </div>
            <div className='lg:px-[80px] xs:px-[20px] lg:mt-[10rem] xs:mt-[5rem]'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='relative overflow-hidden'>
                    <img src={fash3} className='object-cover transition duration-300 transform hover:scale-105' />
                    <h2 className='text-[#4a573e] font-Namdhinggo font-[100] lg:text-[30px] xs:text-[25px] italic mt-4'>25% Off Loungewear Sets</h2>
                </div>
                  <div className='lg:mt-[-8rem] xs:mt-[5rem] relative overflow-hidden'>
                    <img src={fash4} className='object-cover transition duration-300 transform hover:scale-105' />
                    <h2 className='text-[#4a573e] font-Namdhinggo lg:text-[30px] xs:text-[25px] font-[100] italic mt-4'>Introducing: Comfort Zone</h2>
                  </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:mt-[10rem] xs:mt-[-7rem]'>
            <div style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${fash5})`,
              backgroundPosition: 'start',
              backgroundRepeat: 'no-repeat',
            }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[155vh] object-contain lg:block xs:hidden'></div>
              <img src={fash5} className='w-[100vw] h-[155vh] object-contain lg:hidden xs:block' />
              <div className='bg-[#822D12] lg:w-[50vw] xs:w-[100vw] lg:h-[170vh] xs:h-[95vh] lg:mt-0 xs:mt-[-14rem]'>
                  <div className='lg:pt-[18rem] xs:pt-[4rem]'>
                      <h2 className='text-[#f2ede6] font-Namdhinggo text-[16px] font-[100] italic text-center'>Day. DREAM  •  LOUNGEWEAR  •  2035 LOOKBOOK</h2>
                      <div className='lg:ps-[10rem] xs:ps-[2.8rem] pt-[1rem]'>
                        <div>
                        <img src={fash6} className='lg:w-[70%] xs:w-[90%]' />
                        <h1 className='lg:mt-[-17rem] xs:mt-[-15rem] italic font-Namdhinggo lg:text-[63px] xs:text-[47px] xs:ms-[-2rem] lg:ms-[-4rem] text-[#f2ede6]'>At Home. In Style.</h1>
                        </div>
                        <p className='mt-[14rem] lg:ps-[8.5rem] xs:ps-[5.5rem]'><Link to='/DayDreamLookbook' className='text-[#f2ede6] hover:text-[#f2ede6] lg:text-[17px] xs:text-[22px] font-Namdhinggo font-[100] italic'>View More</Link></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='pt-[8rem] bg-[#F2EDE6] lg:px-0 xs:px-[20px]'>
                  <h1 className='text-[#4a573e] text-center font-Namdhinggo font-[100] italic lg:text-[35px] xs:text-[38px]'>Follow @DayDream on Instagram</h1>
                  <div className='flex flex-wrap items-center relative overflow-hidden gap-[1rem] px-[10px] lg:ms-[4rem] mt-[5rem]'>
                    <img src={fash7} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={fash8} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={fash9} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={fash10} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                    <img src={fash11} className='lg:w-[18%] xs:w-[100%] object-cover transition duration-300 transform hover:scale-105' />
                  </div>
                  <div className='mt-[10rem] pb-[3rem]'>
                    <h1 className='text-center text-[33px] font-Namdhinggo italic font-[100] text-[#4a573e]'>Stay Comfy</h1>
                    <p className='text-center text-[22px] mt-2 font-Namdhinggo font-[100] text-[#4a573e]'>Follow for Updates & Special Offers</p>
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