import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Step1 from "./Steps/Step1"
import { Step2 } from "./Steps/Step2"

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        <div className="flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar/>

                <div className="h-[100%] p-[2rem] overflow-auto overflow-y-scroll w-[82%]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   <h1 className="">Welcome back, User Y</h1>
                   <div className="flex gap-[12px] mt-[13px]">
                   <div className='bg-[#00AABC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>1</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>2</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>3</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>4</h1>
                    </div>
                    <div className='bg-[#ECECEC] rounded-[12px] text-[#fff] flex justify-center items-center w-[62px] h-[30px] p-[8px]'>
                        <h1>5</h1>
                    </div>
                    </div>
                    <div>
                        <h1 className="text-[#1E4830] text-[16px] font-[600] mt-[5px]">Step by Step Creation</h1>
                        <p className="text-[#1E4830] text-[14px] font-[400] mt-[5px]">Our intuitive, user-friendly interface turns your vision into reality, no tech expertise required.</p>
                    </div>
                    
                    {/* <Step1/> */}
                    <Step2/>

                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard