import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pb-[1rem] pt-[10rem]'>
      <h3 className='text-center text-[#fff] text-[14px]'> © 2035 by Q Productions. Powered and secured by <Link to='/' className='text-[#fff] hover:text-[#fff]'>Adanian Labs</Link></h3>
    </div>
  )
}

export default Footer