import React from 'react'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import Navbar from '../Components/Navbar'
import restro7 from '../../../../assets/images/restro7.png'
import Footer from '../Components/Footer'

const Menu = () => {
  return (
    <div>
        <div className='bg-[#faf8f1] pt-[2rem] pb-[6rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] px-[180px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100]'>Menu</h2>
                </div>
                <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restro7})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[50vh] bg-fixed mt-[5rem]'></div>
                    <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center'>Starters</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3'>I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <div className='flex flex-wrap gap-[2rem] items-center lg:px-[80px] xs:px-[10px] mt-[4rem]'>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Soup of the Day</h2>
                                <div className='w-[30%
                                ]'>
                                    <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Seasonal Garden Salad</h2>
                                <div className='w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Caesar Salad</h2>
                                <div className='w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Endive & Roquefort Salad</h2>
                                <div className='w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Salmon Carpaccio & Citrus Dressing</h2>
                                <div className='w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center w-[80%] ms-[2rem]'>Steak Tartare</h2>
                                <div className='w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                        </div>
                </div>
                <div className='mt-[7rem] lg:px-0 xs:px-[10px]'>
                        <h2 className='font-Namdhinggo text-[30px] text-center'>Main Courses</h2>
                        <p className='lg:text-[17px] xs:text-[15px] leading-[28px] text-center mt-3'>I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
                        <div className='flex flex-wrap gap-[2rem] items-center lg:px-[80px] xs:px-[10px] mt-[4rem]'>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>White Fish Fillet & Mussels Stew</h2>
                                <div className='w-[30%
                                ]'>
                                    <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br /> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>Sirloin Steak & Grilled Asparagus</h2>
                                <div className='lg:w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>Roasted Chicken with Garlic Cream</h2>
                                <div className='lg:w-[30%
                                ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>Lawrence Burger 10oz</h2>
                                <div className='w-[30%
                             lg:   ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>Sweet Potato Ravioli</h2>
                                <div className='w-[30%
                             lg:   ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                           <div>
                                <h2 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center lg:w-[80%] xs:w-[100%] lg:ms-[2rem]'>Spinach Black Risotto</h2>
                                <div className='w-[30%
                             lg:   ]'>
                                <p className='font-Namdhinggo lg:text-[16px] xs:text-[17px] text-center mt-4'>I’m a dish description. Click “Edit Menu” <br/> to open the Restaurant Menu editor and change my text.</p>
                                </div>
                                <h3 className='font-Namdhinggo lg:text-[20px] xs:text-[28px] text-center mt-4'>$9.99</h3>
                           </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Menu