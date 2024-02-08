import africa from '../assets/images/africa-cruise-safari.png'

const Steps = () => {
  return (
    <div style={{background: `var(--Main-colour, #FB9613)`}} className="lg:ps-[30px] lg:pr-[90px] lg:px-0 xs:px-[20px] py-[40px] mt-[7rem]">
        <div className="flex flex-wrap gap-auto items-center justify-between">
            <div>
                <img src={africa} width='500px' height='500px' />
            </div>
            <div>
                <h1 className='text-[#000] lg:text-[56px] xs:text-[40px] font-[400] leading-[60px]'>Steps to create a website</h1>
                <h5 className='text-[#000] text-[20px] font-[400] leading-[32px] mt-[11px]'>Spreading ease in 7 easy steps</h5>
                <ol className='mt-[18px] ms-5'>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Sign Up:
                        <ul>
                            <li className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Create a free account on a website builder platform.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Choose Your Website Type:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Decide what kind of website you want to make.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Customize or Use Templates:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Personalize a template or have a website made for you.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Design with Ease:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Easily add design features by dragging and dropping elements.</li>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Insert text, galleries, videos, and more.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Prepare for Business:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Enhance your site with features like an online store, portfolio, or blog.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Publish Your Website:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Make your site live and start establishing your professional online presence.</li>
                        </ul>
                    </li>
                    <li className='text-[#000] text-[18px] font-[600] leading-[32px] list-decimal'>Attract Visitors:
                        <ul>
                            <li  className='text-[#000] text-[18px] font-[400] leading-[32px] list-disc ms-8'>Drive traffic to your site using built-in SEO tools and marketing solutions.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Steps