import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import slide1 from '../../../../assets/images/home-slide-1.jpg';
import slide2 from '../../../../assets/images/home-slide-2.jpg';
import slide3 from '../../../../assets/images/home-slide-3.jpg';
import { Link } from 'react-router-dom';
import icon1 from '../../../../assets/icons/icon-1.png' 
import icon2 from '../../../../assets/icons/icon-2.png' 
import icon3 from '../../../../assets/icons/icon-3.png' 
import icon4 from '../../../../assets/icons/icon-4.png' 
import icon5 from '../../../../assets/icons/icon-5.png' 
import icon6 from '../../../../assets/icons/icon-6.png' 
import { FaStar } from "react-icons/fa";
import img1 from '../../../../assets/images/img1.png'
import img2 from '../../../../assets/images/img2.png'
import img3 from '../../../../assets/images/img3.png'
import gallery1 from '../../../../assets/images/gallery-img-1.jpg'
import gallery2 from '../../../../assets/images/gallery-img-2.jpg'
import gallery3 from '../../../../assets/images/gallery-img-3.jpg'
import gallery4 from '../../../../assets/images/gallery-img-4.jpg'
import gallery5 from '../../../../assets/images/gallery-img-5.jpg'
import gallery6 from '../../../../assets/images/gallery-img-6.jpg'
import gallery7 from '../../../../assets/images/gallery-img-7.jpg'
import gallery8 from '../../../../assets/images/gallery-img-8.jpg'
import gallery9 from '../../../../assets/images/gallery-img-9.jpg'
import gallery10 from '../../../../assets/images/gallery-img-10.jpg'
import gallery11 from '../../../../assets/images/gallery-img-11.jpg'
import gallery12 from '../../../../assets/images/gallery-img-12.jpg'
import gallery13 from '../../../../assets/images/gallery-img-13.jpg'
import Footer from '../Components/Footer';


const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: slide1, content: 'travel around the world' },
    { src: slide2, content: 'discover the new places' },
    { src: slide3, content: 'make your tour worthwhile' }
  ];

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ overflow: 'hidden' }}> {/* Set overflow to hidden */}
  <div className="">
    <div className="">
      {images.map((image, index) => (
        <div
          key={index}
          className={`swiper-slide slide text-center flex items-center justify-center bg-cover bg-center min-h-[50rem] min-w-[100%] transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        >
          <div className="content w-full lg:pt-[30vh] xs:h-[-10vh]">
            <span className="block lg:text-[2rem] xs:text-[1.2rem] text-white pb-[1rem]">
                explore, discover, travel
            </span>
            <h3 className="lg:text-[3rem] xs:text-[1.4rem] text-white uppercase leading-[1px] py-[1rem]">
             {image.content}
            </h3>
            <Link
              to="/destination1"
              className="inline-block bg-gray-800 lg:mt-[3rem] xs:mt-3 text-white text-[1rem] lg:py-[1rem] xs:py-[0.8rem] px-[3rem] cursor-pointer hover:bg-purple-800 hover:text-white no-underline"
            >
              Discover More
            </Link>
          </div>
        </div>
      ))}
        <div>
        <button
            className="absolute top-1/2 lg:mt-[7rem] xs:mt-[18rem] left-0 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white"
            onClick={goToPrevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 lg:mt-[7rem] xs:mt-[18rem] right-0 transform -translate-y-1/2 px-4 py-2 bg-black bg-opacity-50 text-white"
            onClick={goToNextSlide}
          >
            Next
          </button>
        </div>
    </div>
  </div>
        </div>

        <div className="mt-[50rem]">
            <h1 className="text-center mb-[3rem] text-[2.8rem] uppercase text-[#222]"> our services </h1>
            <div className='flex justify-center items-center'>
                <div className="flex flex-wrap items-center gap-[1.5rem] px-[20px]">
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[1.8rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon1} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>adventure</h3>
                    </div>
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[1.8rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon2} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>tour guide</h3>
                    </div>
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[1.8rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon3} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>trekking</h3>
                    </div>
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[2rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon4} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>camp fire</h3>
                    </div>
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[1.8rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon5} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>off road</h3>
                    </div>
                    <div className="lg:py-[2rem] lg:px-[3rem] xs:py-[1rem] xs:px-[2rem] text-center bg-purple-800 cursor-pointer hover:bg-[#222]">
                    <img src={icon6} className='w-[100%]' />
                    <h3 className='text-[#fff] text-[1.2rem] capitalize pt-[1rem]'>camping</h3>
                    </div>
                </div>
                </div>
        </div>

        <div className='bg-[#f7f7f7] pt-[5rem] mt-[5rem] pb-[5rem]'>
            <h1 className="text-center mb-[3rem] lg:text-[2.8rem] xs:text-[2rem] uppercase text-[#222]">Our Upcoming <br /> Tour Package</h1>
           <div className='flex justify-start items-start lg:px-[130px] xs:px-[20px]'>
                <div className='lg:flex items-center gap-[2rem]'>
                    <div>
                       <div className="hover:scale-[1.04] hover:brightness-[100%] hover:hue-rotate-[45deg] cursor-pointer"  style={{ transition: `all .3s cubic-bezier(.445,.05,.55,.95)`, willChange: 'filter' }}>
                            <img src={img1} />
                            <h3 className='absolute mt-[-23rem] ms-[16rem] text-[25px] font-[600] text-[#fff]'>$499</h3>
                       </div>
                        <div className="flex items-center justify-between pt-[24px]">
                            <div className="location">
                                <h4 className='text-[24px] font-[600] mb-[8px]'>London</h4>
                                <p className='text-[15px] text-[#222]'>4h - 5h</p>
                            </div>
                            <div className="flex">
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="hover:scale-[1.04] hover:brightness-[100%] hover:hue-rotate-[45deg] cursor-pointer"  style={{ transition: `all .3s cubic-bezier(.445,.05,.55,.95)`, willChange: 'filter' }}>
                            <img src={img2} />
                            <h3 className='absolute mt-[-23rem] ms-[16rem] text-[25px] font-[600] text-[#fff]'>$499</h3>
                        </div>
                        <div className="flex items-center justify-between pt-[24px]">
                            <div className="location">
                                <h4 className='text-[24px] font-[600] mb-[8px]'>London</h4>
                                <p className='text-[15px] text-[#222]'>4h - 5h</p>
                            </div>
                            <div className="flex">
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className="hover:scale-[1.04] hover:brightness-[100%] hover:hue-rotate-[45deg] cursor-pointer" style={{ transition: `all .3s cubic-bezier(.445,.05,.55,.95)`, willChange: 'filter' }}>
                            <img src={img3} />
                            <h3 className='absolute mt-[-23rem] ms-[16rem] text-[25px] font-[600] text-[#fff]'>$499</h3>
                       </div>
                        <div className="flex items-center justify-between pt-[24px]">
                            <div className="location">
                                <h4 className='text-[24px] font-[600] mb-[8px]'>London</h4>
                                <p className='text-[15px] text-[#222]'>4h - 5h</p>
                            </div>
                            <div className="flex">
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                                <FaStar className='text-[orangered] text-[20px]' />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>

    <div className="mt-[5rem]">
        <div className="text-center mb-[2rem]">
            <span className='text-[#29d9d5] text-[1.5rem] capitalize'>our gallery</span>
            <h1 className='text-[2.8rem] capitalize text-[#333]'>we record memories</h1>
        </div>
        <div className="lg:px-[130px] xs:px-[20px]" style={{ WebkitColumns: '3 10rem', columns: '3 10rem', webkitColumnGap: '1.5rem', columnGap: '1.5rem' }}>
            <div className="mb-[1rem]" style={{ webkitColumnBreakInside: 'avoid', breakInside: 'avoid' }}>
                <img src={gallery1} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>iceland</h3>
            </div>
            <div>
                <img src={gallery2} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Greenland</h3>
            </div>
            <div>
                <img src={gallery3} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Italy</h3>
            </div>
            <div>
                <img src={gallery4} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Thailand</h3>
            </div>
            <div>
                <img src={gallery5} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Brazil</h3>
            </div>
            <div>
                <img src={gallery6} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Australia</h3>
            </div>
            <div>
                <img src={gallery7} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Iceland</h3>
            </div>
            <div>
                <img src={gallery8} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>alaska</h3>
            </div>
            <div>
                <img src={gallery9} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>maldive</h3>
            </div>
            <div>
                <img src={gallery10} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>London</h3>
            </div> 
            <div>
                <img src={gallery11} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>China</h3>
            </div>
            <div>
                <img src={gallery12} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>California</h3>
            </div>
            <div>
                <img src={gallery13} className='w-[100%] rounded-[1rem] mb-[1rem]' />
                <span className='text-[1rem] text-[#aaa]'>travel spot</span>
                <h3 className='mt-[0.6rem] text-[1.5rem] text-[#333] font-[400]'>Canada</h3>
            </div>
        </div>
    </div>


    <div class="text-center mt-[5rem]" style={{ boxShadow: `0 .5rem 1rem rgba(0,0,0,.1)`, background: `rgba(0, 0, 0, 0.05)` }}>
        <div class="max-w-[45rem] my-0 mx-auto pt-[4rem] pb-[3rem]">
            <h3 className='text-[2.5rem] uppercase text-[#222]'>upto 50% off</h3>
            <p className='text-[1rem] text-[#777] leading-[2] py-[1rem] px-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempora assumenda, debitis aliquid nesciunt maiores quas! Magni cumque quaerat saepe!</p>
            <Link
              to="/destination1"
              className="inline-block bg-gray-800 text-white text-[1rem] py-[0.8rem] px-[3rem] cursor-pointer hover:bg-purple-800 hover:text-white no-underline"
            >
              Book Now
            </Link>
        </div>
    </div>

   <div>
   <Footer/>
   </div>

    </div>
  );
};

export default Homepage;













// import React from 'react'
// import Navbar from '../Components/Navbar'
// import slide1 from '../../../../assets/images/home-slide-1.jpg'
// import slide2 from '../../../../assets/images/home-slide-2.jpg'
// import slide3 from '../../../../assets/images/home-slide-3.jpg'
// import { Link } from 'react-router-dom'

// const Homepage = () => {
//   return (
//     <div>
//         <Navbar/>
//         <section className="p-0">
//             <div className="swiper home-slider">
//                 <div className="swiper-wrapper">
//                 <div
//               className="swiper-slide slide text-center flex items-center justify-center bg-cover bg-center min-h-screen"
//               style={{ backgroundImage: `url(${slide1})` }}
//             >
//               <div className="content w-full">
//                 <span className="block text-[2.2rem] text-white pb-[1rem]">
//                   explore, discover, travel
//                 </span>
//                 <h3 className="text-[4vw] text-white uppercase leading-[1px] py-[1rem]">
//                   travel around the world
//                 </h3>
//                 <Link
//                   to="/destination1"
//                   className="inline-block bg-gray-800 mt-[3rem] text-white text-[1rem] py-[1rem] px-[3rem] cursor-pointer hover:bg-purple-800 hover:text-white no-underline"
//                 >
//                   Discover More
//                 </Link>
//               </div>
//             </div>
//                 </div>
//             </div>
//         </section>

//     </div>
//   )
// }

// export default Homepage