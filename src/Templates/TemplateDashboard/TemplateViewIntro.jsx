import Logo from '../../assets/images/ADANIAN LOGO 1.png'
import intro from '../../assets/icons/intro.svg'
import { Link } from 'react-router-dom'

const TemplateViewIntro = () => {
    return (
        <div>
          <div className='px-[30px] py-[20px]'>
            <img src={Logo} className='lg:w-[150px] xs:w-[150px]' />
          </div>
          <div className='flex justify-center items-center h-[70vh] px-[10px]'>
            <div>
                <div className='flex justify-center items-center'>
                    <img src={intro} />
                </div>
                <h1 className='text-[#000624] lg:text-[24px] xs:text-[20px] font-[700] leading-[36px] mt-[1rem] text-center'>Choosing a new design will create a brand new site</h1>
                <h3 className='text-[#000624] lg:text-[16px] xs:text-[16px] leading-[24px] font-[400] mt-3 text-center'>Your previous site will be saved under My Sites.</h3>
                <div className='flex justify-center items-center mt-[1.5rem]'>
                    <Link to='/SoairEditHome' className='bg-[#00AABC] lg:w-[35%] xs:w-[50%] rounded-[50px] py-[10px] px-[20px] text-[#fff] text-[16px] font-[500] no-underline hover:text-[#fff] text-center flex justify-center items-center'>Create a New Site</Link>
                </div>
                <span className='flex justify-center items-center mt-[1rem]'>
                    <Link to='/dashboard' className='text-[#00AABC] lg:text-[14px] xs:text-[13px] font-[500] underline'>Customize Previous Design</Link>
                </span>
            </div>
          </div>
        </div>
    )
}

export default TemplateViewIntro