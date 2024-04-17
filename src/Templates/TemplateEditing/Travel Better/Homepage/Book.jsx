import React from 'react'
import Navbar from '../Components/Navbar'
import bgimg from '../../../../assets/images/header-bg-3.png'
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'


const Book = () => {
  return (
    <div>
        <TemplateEditNavbar/>
      <Navbar/>
      <div class="h-[70vh]" style={{ background: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <h1 className='text-center lg:text-[6rem] xs:text-[3rem] pt-[20vh] uppercase text-[#fff]' style={{ textShadow: '0 1.5rem 3rem rgba(0,0,0,.3)' }}>Book Now</h1>
        </div>

        <div className="booking">
            <h1 className="text-center mb-[3rem] lg:text-[2.6rem] xs:text-[2rem] uppercase text-[#222] ">book your trip!</h1>
            <form className="pt-[5rem] pb-[5rem] bg-[#eee] ">
                <div className="flex flex-wrap gap-[2rem] lg:px-[140px] xs:px-[10px]">
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>name :</span>
                        <input type="text" placeholder="enter your name" name="name" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>email :</span>
                        <input type="email" placeholder="enter your email" name="email" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>phone :</span>
                        <input type="text" placeholder="enter your number" name="phone" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>address :</span>
                        <input type="text" placeholder="enter your address" name="address" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>where to :</span>
                        <input type="text" placeholder="place you want to visit" name="location" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>how many :</span>
                        <input type="number" placeholder="number of guests" name="guests" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>arrivals :</span>
                        <input type="date" name="arrivals" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                    <div className="" style={{ flex: '1 1 30rem' }}>
                        <span className='text-[1rem] text-[#777] capitalize'>leaving :</span>
                        <input type="date" name="leaving" required className='w-[97%] py-[0.5rem] px-[0.8rem] text-[1rem] text-[#777] mt-[1.5rem] border-[1px] border-solid border-[#222] outline-none' />
                    </div>
                </div>
                <input type="submit" defaultValue="submit" className="inline-block bg-[#333] mt-[3rem] text-[#fff] text-[1.2rem] py-[0.5rem] px-[3rem] cursor-pointer lg:ms-[8.5rem] xs:ms-[0.7rem]" name="send" />
            </form>
        </div>


    <Footer/>
    </div>
  )
}

export default Book
