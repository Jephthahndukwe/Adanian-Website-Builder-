import React from 'react'
import Navbar from '../Components/Navbar'
import TemplatePreviewNavbar from './../../../TemplateDashboard/TemplatePreviewNavbar';
import Law1 from '../../../../assets/images/Law1.jpg'
import Law2 from '../../../../assets/images/Law2.png'
import Law3 from '../../../../assets/images/Law3.png'
import Law4 from '../../../../assets/images/Law4.png'
import Law5 from '../../../../assets/images/Law5.png'
import Law6 from '../../../../assets/images/Law6.jpg'
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <div>
        <TemplatePreviewNavbar/>
        <div>
            <Navbar/>
            <div id='Home' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${Law1})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='lg:h-[100vh] xs:h-[90vh] bg-fixed lg:pt-0 xs:pt-[7rem] lg:ps-0 xs:ps-[2rem]'>
                <div className='lg:bg-[#0c305663] xs:bg-[#0c3056d2] lg:h-[100vh] lg:w-[45vw] xs:w-[100%] lg:pt-[15rem] lg:px-[11rem] xs:pt-[5rem] lg:pb-0 xs:pb-[3rem] xs:px-[2rem]'>
                    <h1 className='text-[#fff] font-[200] lg:w-[100%] xs:w-[80%] xs:text-[40px] lg:text-[45px] leading-[55px]'><span className='font-[800]'>BOUTIQUE</span> LAW FIRM</h1>
                    <p className='text-[#fff] lg:text-[17px] xs:text-[18px] lg:mt-0 xs:mt-5'>Specializing in Commercial Law & Litigation, Insolvency & Fraud</p>
                </div>
            </div>


            {/* Practice area */}

            <div className='lg:flex items-center gap-[2rem]' id='practice-area'>
                <div className='bg-[#EAF4F6] lg:h-[100vh] lg:w-[45%] xs:w-[100%] lg:px-[13rem] lg:pt-[5rem] xs:pt-[2rem] lg:pb-0 xs:pb-[1rem] xs:px-[1.5rem]'>
                    <h1 className='text-[#00305B] font-[300] text-[42px] leading-[50px] lg:w-[100%] xs:w-[50%]'><span className='font-[700]'>PRACTICE</span> AREAS</h1>
                </div>
                <div className='lg:mt-0 xs:mt-[2rem] lg:ms-0 xs:ms-[1.5rem] lg:mb-0 xs:mb-[3rem]'>
                    <div className='lg:flex items-center gap-[3rem]'>
                        <div className='flex items-start gap-[1rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>LITIGATION</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-[1rem] lg:mt-0 xs:mt-[2rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>BUSINESS</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                    </div>
                   <div className='lg:flex items-center gap-[3rem] lg:mt-[3rem] xs:mt-[2rem]'>
                    <div className='flex items-start gap-[1rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>INSOLVENCY</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-[1rem] lg:mt-0 xs:mt-[2rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>FRAUD</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                   </div>
                   <div className='lg:flex items-center gap-[3rem] lg:mt-[3rem] xs:mt-[2rem]'>
                    <div className='flex items-start gap-[1rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>DISPUTE RESOLUTION</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-[1rem] lg:mt-0 xs:mt-[2rem]'>
                            <div className='bg-[#41B7C4] p-[5px] mt-2' />
                            <div>
                                <h1 className='text-[20px] font-[400] text-[#476A89]'>TAX</h1>
                                <p className='text-[#476A89] text-[14px] leading-[24px] w-[80%]'>I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                            </div>
                        </div>
                   </div>
                </div>
            </div>

            {/* our vision */}
            <div className='bg-[#00305B] pt-[5rem] pb-[5rem] px-[20px]' id='our-vision'>
                <h1 className='text-[40px] font-[400] text-[#fff] text-center'>OUR VISION</h1>
                <p className='text-[16px] text-[#fff] text-center lg:w-[70%] lg:ms-[13rem] leading-[26px] mt-[4rem]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <p className='text-[16px] text-[#fff] text-center lg:w-[70%] lg:ms-[13rem] leading-[26px] mt-[3rem]'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                <p className='text-[16px] text-[#fff] text-center lg:w-[70%] lg:ms-[13rem] leading-[26px] mt-[3rem]'>At Wix we’re passionate about making templates that allow you to build fabulous websites and it’s all thanks to the support and feedback from users like you! Keep up to date with New Releases and what’s Coming Soon in Wixellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum.</p>
            </div>


            <div style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${Law2})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='h-[100vh] bg-fixed'>
            </div>


            {/* attorney */}
            <div className='bg-[#EAF4F6] pt-[5rem] pb-[5rem] px-[10px]' id='our-attorney'>
                <h1 className='lg:text-[45px] xs:text-[40px] font-[300] text-[#00305B] text-center'>OUR ATTORNEYS</h1>
                <div className='flex items-center justify-center mt-[5rem] lg:ms-0 xs:ms-[5rem]'>
                    <div className='flex flex-wrap items-center gap-[7rem]'>
                        <div>
                            <img src={Law3} className='w-[100%]' />
                            <h2 className='text-[#00305B] text-[20px] mt-4 text-center font-[400]'>AIDEN WALTERS</h2>
                            <h3 className='text-[15px] font-[400] text-[#00305B] text-center'>PARTNER</h3>
                            <hr className='h-[1px] w-[100%] bg-[#00305B] mt-[2rem]' />
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-4'>Tel: 123-456-7890</h3>
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-2'>info@mysite.com</h3>
                        </div>
                        <div>
                            <img src={Law4} className='w-[100%]' />
                            <h2 className='text-[#00305B] text-[20px] mt-4 text-center font-[400]'>JULIA KNOLL</h2>
                            <h3 className='text-[15px] font-[400] text-[#00305B] text-center'>PARTNER</h3>
                            <hr className='h-[1px] w-[100%] bg-[#00305B] mt-[2rem]' />
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-4'>Tel: 123-456-7890</h3>
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-2'>info@mysite.com</h3>
                        </div>
                        <div>
                            <img src={Law5} className='w-[100%]' />
                            <h2 className='text-[#00305B] text-[20px] mt-4 text-center font-[400]'>JAMES LOPEZ</h2>
                            <h3 className='text-[15px] font-[400] text-[#00305B] text-center'>PARTNER</h3>
                            <hr className='h-[1px] w-[100%] bg-[#00305B] mt-[2rem]' />
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-4'>Tel: 123-456-7890</h3>
                            <h3 className='text-[#00305B] text-[16px] font-[400] text-center mt-2'>info@mysite.com</h3>
                        </div>
                    </div>
                </div>
            </div>


            {/* contact */}
            <div style={{backgroundImage: `linear-gradient(to bottom, #00315bd0, #00315bd0), url(${Law6})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className='h-[] bg-fixed' id='contact'>
                <div className='lg:flex gap-[3rem]'>
                    <div className='bg-[#0c3056c0] lg:w-[45vw] lg:pt-[8rem] lg:px-[13rem] xs:pt-[1.5rem] lg:pb-0 xs:pb-[1.5rem] xs:px-[1rem]'>
                        <h1 className='text-[#fff] font-[400] xs:text-[35px] xs:w-[90%] lg:w-[100%] lg:text-[45px] leading-[55px]'>CONTACT KNOLL & WALTERS</h1>
                    </div>
                    <div className='lg:pt-[8rem] xs:pt-[3rem] pb-[5rem] lg:px-0 xs:px-[20px]'>
                        <h1 className='text-[#fff] text-[20px] font-[400]'><span className='font-[800]'>OUR</span> ADDRESS</h1>
                        <h4 className='text-[#fff] lg:text-[16px] xs:text-[18px] leading-[26px] font-[400] mt-5 w-[100%]'>500 Terry Francine St. San Francisco, CA 94158​</h4>
                        <h3 className='text-[#fff] lg:text-[16px] xs:text-[18px] font-[400] w-[100%]'><span className='font-[800]'>Email:</span> info@mysite.com</h3>
                        <h3 className='text-[#fff] lg:text-[16px] xs:text-[18px] font-[400] w-[100%]'><span className='font-[800]'>Tel:</span> 123-456-7890</h3>
                        <form>
                            <h2 className='text-[#fff] lg:text-[16px] xs:text-[18px] leading-[26px] mt-[4rem] font-[400]'>For any general inquiries, please fill in the following contact form:</h2>
                            <label className='text-[#fff] mt-3'>First Name *</label><br/>
                            <input type="text" className='mt-2 py-[4px] px-[5px] outline-none w-[100%]' /><br/>
                            <label className='text-[#fff] mt-3'>Last Name *</label><br/>
                            <input type="text" className='mt-2 py-[4px] px-[5px] outline-none w-[100%]' /><br/>
                            <label className='text-[#fff] mt-3'>Email *</label><br/>
                            <input type="email" className='mt-2 py-[4px] px-[5px] outline-none w-[100%]' /><br/>
                            <label className='text-[#fff] mt-3'>Subject *</label><br/>
                            <input type="text" className='mt-2 py-[4px] px-[5px] outline-none w-[100%]' /><br/>
                            <label className='text-[#fff] mt-3'>Message *</label><br/>
                            <textarea cols='30' rows='4' className='mt-2 py-[4px] px-[5px] outline-none w-[100%]' />
                            <button type='submit' className='bg-[#00315bd0] py-[7px] px-[10px] w-[100%] mt-2 border-[1px] border-solid border-[#fff] text-[#fff]'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Homepage