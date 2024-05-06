import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='py-[15px]'>
        <h1 className='text-[#00305B] mt-3 font-[500] text-center text-[18px]'>© 2035 by Knoll & Walters LLP. Powered and secured by <Link to='/' className='text-[#00305B] hover:text-[#00305B]'>Adanian Labs</Link></h1>
    </div>
  )
}

export default Footer