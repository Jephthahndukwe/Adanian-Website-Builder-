import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const LinkModal = ({ onSave, onCancel }) => {
    const [url, setUrl] = useState('');
  
    const handleSave = () => {
      onSave(url);
      setUrl('');
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg p-6 z-10">
          <input
            type="text"
            placeholder="Enter URL"
            className="border border-gray-300 rounded-md p-2 w-full mb-4"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
  

const Navbar = () => {

  const [show, setShow] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSaveUrl = (url) => {
    setLinkUrl(url);
    closeModal();
  };


  return (
    <div>
      <button className='text-[#fff] text-[16px] font-[300] bg-[#7c6c50] py-[15px] px-[30px] xs:block lg:hidden mt-[-2rem] w-[100%]'>Order Online</button>
        <div className='lg:flex justify-between items-center lg:pb-[50px] xs:pb-5 lg:pt-0 xs:pt-5 lg:px-[100px] xs:px-[20px]'>
          {/* <h1><Link to='/LawrenceHome' className='font-Namdhinggo text-[#20303c] hover:text-[#20303c] text-[30px] tracking-[0.8rem] leading-[24px] font-[100] no-underline'>LAWRENCE</Link></h1> */}
          <div className='flex justify-between items-center'>
              <div className='hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]'>
                <h1><Link to='/LawrenceEditHome' className='font-Namdhinggo text-[#20303c] hover:text-[#20303c] lg:text-[30px] xs:text-[22px] tracking-[0.8rem] leading-[24px] font-[100] no-underline'>LAWRENCE</Link></h1>
              </div>
              <FaBars onClick={() => setShow(true)} className='text-[#7c6c50] text-[22px] lg:hidden xs:block'/>
           </div>
          <div className='lg:flex xs:hidden items-center justify-center gap-[7rem]'>
              <ul className='flex justify-center items-center gap-[2rem] mt-3 shadow-none'>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditReservation' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Reservation</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditMenu' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Menu</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditAbout' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>About</Link></li>
                  <li className='text-[#20303c] text-[16px] leading-[24px] font-[400]'><Link to='/LawrenceEditContact' className='text-[#20303c] text-[16px] leading-[24px] font-[400] no-underline hover:text-[#20303c]'>Contact</Link></li>
              </ul>
              {/* <button className='text-[#fff] text-[16px] font-[300] bg-[#7c6c50] py-[10px] px-[30px]'>Order Online</button> */}
            <div className='linkHover'>
                <p className='bg-[#c7c5c0] rounded-[100px] px-[10px] text-center py-[5px] text-[12px] absolute -mt-[37px] pHovered transition-opacity duration-300 transform cursor-pointer' onClick={openModal}>Click to edit URL</p>
                <Link to={linkUrl} target={`_${linkUrl}`} className='text-[#fff] text-[16px] font-[300] bg-[#7c6c50] py-[10px] px-[30px] no-underline hover:text-[#fff]'>
                    Order Online
                </Link>
            </div>
            {modalVisible && (
                <LinkModal onSave={handleSaveUrl} onCancel={closeModal} />
            )}
          </div>
      </div>

      {show ? 
          <div className='xs:flex lg:hidden absolute left-0 top-0 justify-between items-center lg:pb-[50px] py-[10px] lg:px-[100px] xs:px-[10px] ms-[-0.6rem] -mt-3'>
          <div className='lg:flex w-[100vw] overflow-x-hidden overflow-y-hidden h-[110vh] bg-[#faf8f1] items-center justify-center gap-[7rem] pt-[3rem] ps-[-5rem]'>
          <div className='flex justify-end items-end px-[20px]'>
          <FaTimes onClick={() => setShow(false)} className='text-[#7c6c50] text-[30px] lg:hidden xs:block'/>
          </div>
              <ul className='lg:flex pt-[3rem] justify-center items-center text-center gap-[2rem] mt-3 shadow-none'>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[400]'><Link to='/LawrenceEditReservation' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Reservation</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditMenu' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Menu</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditAbout' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>About</Link></li>
                  <li className='text-[#20303c] leading-[24px] mt-[4rem] font-[500]'><Link to='/LawrenceEditContact' className='text-[#20303c] text-[23px] leading-[24px] font-[500] no-underline hover:text-[#20303c]'>Contact</Link></li>
              </ul>
              
          </div>
      </div>
      : null
      }
    </div>
  )
}

export default Navbar