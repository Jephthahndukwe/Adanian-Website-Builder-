import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from '../assets/images/Avatar.png'
import group from '../assets/icons/group.svg'


    const truncateText = (text, limit) => {
        const words = text.split('');
        return words.slice(0, limit).join(' ');
    };

    const text = 'Ifunanya Duru';
    const truncatedText = truncateText(text, 13);


const Sidebar = () => {
  return (
    <div className="lg:grid xs:hidden gap-[24px] overflow-auto overflow-y-scroll bg-[#ECECEC] w-[271px] h-[100%] pt-[32px] pb-[24px] px-[9px]"  style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
        <div>
            <div>
                <h1 className="text-[14px] font-[600] text-[#000] flex items-center gap-3">Finish setting up your website <MdOutlineKeyboardArrowRight className="text-[18px]"/></h1>
                <h3 className="text-[14px] font-[400] text-[#000] mt-[5px]">1/8 Progress</h3>
                <hr className="w-[231px] h-[4px] mt-[8px] bg-[#fff]"/>
            </div>
            <div className="mt-[32px]">
                {/* <h1 className="text-[#000] text-[16px] font-[400]">Set Up</h1> */}
                <Link to='/Dashboard' className="text-[#000] text-[16px] font-[400] no-underline">Home</Link>
                <Link to='/appplugins' className="no-underline"><h1 className="text-[#000] text-[16px] font-[400] mt-2">App and Plug-ins</h1></Link>
                <hr className="w-[231px] h-[4px] mt-[10px] bg-[#999898]"/>
            </div>
            {/* <div className="mt-[32px]">
                <h1 className="text-[#000] text-[16px] font-[400]">Portfolio</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">New</h1>
                <hr className="w-[231px] h-[4px] mt-[10px] bg-[#999898]"/>
            </div>
            <div className="mt-[32px]">
                <h1 className="text-[#000] text-[16px] font-[400]">Contacts</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">Communciations</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">Automations</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">Analytics</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">Payment and shipping</h1>
                <hr className="w-[231px] h-[4px] mt-[10px] bg-[#999898]"/>
            </div>
            <div className="mt-[32px]">
                <h1 className="text-[#000] text-[16px] font-[400]">Settings</h1>
                <h1 className="text-[#000] text-[16px] font-[400] mt-[7px]">Developers Tools</h1>
                <hr className="w-[231px] h-[4px] mt-[10px] bg-[#999898]"/>
            </div> */}
        </div>
        <div className="bg-[#35314C] rounded-[5px] relative bottom-0 flex items-center gap-[12px] mt-[10rem] w-[230px] h-[50px] py-[5px] px-[24px] cursor-pointer">
            <img src={Avatar} />
            <h1 className="text-[#fff] text-[12px] font-[400]">{truncatedText}</h1>
            <img src={group}/>
        </div>
    </div>
  )
}

export default Sidebar