import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Step1 from "./Steps/Step1"
import Step1  from "./Steps/Step1"

const Dashboard = () => {
  return (
    <div>
        <Navbar className='xs:hidden lg:block' />
        <div className="lg:flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar className='xs:hidden lg:block'/>

                <div className="h-[100%] lg:px-[2rem] xs:px-[10px] overflow-auto overflow-y-scroll lg:w-[82%] xs:w-[100%]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   <h1 className="text-[#000] text-[24px] font-[600]">Welcome back, User Y</h1>                    
                    <Step1/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard