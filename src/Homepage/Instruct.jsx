import { Link } from "react-router-dom"


const Instruct = () => {
  return (
    <div style={{background: `var(--Main-colour, #FB9613)`}} className="py-[103px] lg:px-[70px] xs:px-[20px] mt-5">
        <div className="lg:flex gap-[70px] items-center">
            <div>
                <h1 className="text-[#000] text-[56px] font-[400] leading-[76.8px] text-start">You Instruct, <br/> We Work</h1>
                <div className="border-t-[1px] border-t-[solid] border-t-[#353535] w-[330px] h-[5px] mt-[65px]" />
                <h3 className="mt-[65px]"><Link to='/' className="text-[#fff] text-[20px] font-[400] leading-[28px] bg-[#000] rounded-[100px] py-[14px] px-[24px] hover:bg-[#fff] hover:text-[#000]">Watch Tutorial</Link></h3>
            </div>
            <div className="lg:ms-[75px]">
                <p className="text-[#000] text-[17px] font-[400] leading-[44px]  text-start lg:mt-0 xs:mt-[5rem]">
                    &quot;Embark on the exciting journey of website building! Whether you&quot;re crafting a personal blog, a professional portfolio, or an online store, the process involves selecting a platform, choosing a design, and adding content that reflects your unique style and purpose. With user-friendly tools and customizable templates, you have the creative freedom to shape your digital presence. Start building your website today and showcase your ideas, products, or services to the world!&quot;
                </p>
            </div>
        </div>
    </div>
  )
}

export default Instruct