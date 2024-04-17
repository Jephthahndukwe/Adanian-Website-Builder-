import React from 'react'
import Logo from '../../assets/images/ADANIAN LOGO 1.png'
import { Link } from 'react-router-dom'

const TemplateEditNavbar = ({ onSave, onPreview, onPublish, handleUpload }) => {
  return (
    <div className='lg:flex justify-between items-center lg:px-[20px] py-[5px]'>
        <div className='lg:block xs:hidden'>
            <img src={Logo} className='w-[70%]' />
        </div>
        <div>
            <ul className='flex items-center lg:gap-[1.5rem] xs:gap-[3rem] mt-2'>
                <li><Link to='' onClick={handleUpload} className='no-underline text-[#00AABC] text-[14px] hover:text-[#00AABC]'>Save</Link></li>
                <li><Link to='' onClick={onPreview} className='no-underline text-[#00AABC] border-[#00AABC] border-[1px] border-solid py-[7px] px-[20px] rounded-[50px] text-[14px] hover:bg-[#00AABC] hover:text-[#fff]'>Preview</Link></li>
                <li><Link to='' onClick={onPublish} className='no-underline text-[#fff] bg-[#00AABC] text-[14px] px-[30px] py-[8px] rounded-[50px] hover:text-[#fff]'>Publish</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default TemplateEditNavbar