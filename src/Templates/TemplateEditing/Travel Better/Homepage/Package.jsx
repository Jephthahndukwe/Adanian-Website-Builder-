import React from 'react'
import Navbar from '../Components/Navbar'
import bgimg from '../../../../assets/images/header-bg-2.png'
import img1 from '../../../../assets/images/img-1.jpg'
import img2 from '../../../../assets/images/img-2.jpg'
import img3 from '../../../../assets/images/img-3.jpg'
import img4 from '../../../../assets/images/img-4.jpg'
import img5 from '../../../../assets/images/img-5.jpg'
import img6 from '../../../../assets/images/img-6.jpg'
import img7 from '../../../../assets/images/img-7.jpg'
import img8 from '../../../../assets/images/img-8.jpg'
import img9 from '../../../../assets/images/img-9.jpg'
import img10 from '../../../../assets/images/img-10.jpg'
import img11 from '../../../../assets/images/img-11.jpg'
import img12 from '../../../../assets/images/img-12.jpg'
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'


const Package = () => {
  return (
    <div>
        <TemplateEditNavbar/>
        <Navbar/>
        <div class="h-[70vh]" style={{ background: `url(${bgimg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <h1 className='text-center lg:text-[6rem] xs:text-[3rem] pt-[20vh] uppercase text-[#fff]' style={{ textShadow: '0 1.5rem 3rem rgba(0,0,0,.3)' }}>Package</h1>
        </div>

        <div className="packages mb-[6rem]">
            <div>
                <h2 className="text-center mb-[3rem] lg:text-[2.6rem] xs:text-[2rem] uppercase text-[#222]">Our Most Popular <br /> Destination!</h2>
            </div>
            <div className="flex flex-wrap gap-[3rem] mt-[5rem] items-center lg:px-[120px] xs:px-[20px]">
                <div className="relative">
                    <img src={img1} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img2} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img3} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img4} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img5} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img6} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img6} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img7} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img8} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img9} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img10} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img11} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>
                <div className="relative">
                    <img src={img12} className='w-[100%] h-[420px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                </div>

            </div>
        </div>
        
       {/* <div className="packages" id="destination">
            <di>
                <h2 className="text-center mb-[3rem] text-[2.6rem] uppercase text-[#222]">Our Most Popular <br /> Destination!</h2>
            </di>
            <div className="flex flex-wrap gap-[2rem] mt-[5rem] items-center">
                <div ctext-Name="relative">
                <img src="img/img-1.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-2.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-3.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-4.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-5.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-6.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-7.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-8.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-9.jpg" className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }} />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-10.jpg className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }}" />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-11.jpg className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%] hover:brightness-[100%] hover:hue-rotate-[45deg] hover:scale-[1.04] hover:cursor-pointer' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }}" />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className='text-[#fff] text-[1.4rem] inline-block py-[0.1rem] px-[1rem] bg-[#000] cursor-pointer hover:bg-[#222]'>book now</a></p>
                </div>
                <div className="relative">
                <img src="img/img-12.jpg className='w-[100%] h-[500px] cover rounded-[15px] brightness-[80%]' style={{ transition: `all .3s cubic-bezier(.495, .05, .55, .95)`, willChange: 'filter' }}" />
                <h5 className='absolute text-[22px] font-[500] text-[#fff] left-[15px] bottom-[60px]'>adventure &amp; tour</h5>
                <p className='absolute font-[15px] text-[#fff] left-[15px] bottom-[20px] tracking-[2px]'><a href="book.html" className="btns">book now</a></p>
                </div>
            </div>
            
        </div> */}


            <Footer/>
    </div>
  )
}

export default Package