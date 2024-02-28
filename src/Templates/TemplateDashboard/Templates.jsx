import Navbar from "../../Dashboard/Navbar"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TemplateStructure from "./TemplateStructure";

const Templates = () => {
    const [expanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const expandSearch = () => {
      setExpanded(true);
    };
  
    const collapseSearch = () => {
      setExpanded(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            expandSearch();
        }
    };

    return (
        <div>
           <div className="shadow-md">
            <Navbar/>
           </div>
            <div className="py-[50px] px-[40px] flex justify-between items-center">
                <h1 className="text-[#000000] text-[32px] font-[700]">Pick the Website Template You Love</h1>
                <label className="flex items-center">
                    <input 
                        type="search" 
                        placeholder="Search all templates..."
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={expandSearch}
                        onBlur={collapseSearch}
                        className="mt-[15px] font-[400] text-[14px] h-[1px] py-[10px] outline-none pb-[25px]" 
                        style={{ color: `rgba(102, 102, 102, 0.80)`, borderBottom: '1px solid #0AADBF', width: expanded ? '400px' : '300px', transition: 'width 0.3s ease' }}
                    />
                    <FaSearch className="ms-[-1rem] text-[15px]" style={{color: `rgba(102, 102, 102, 0.80)` }} />
                </label>
            </div>
            <hr className="w-[100%] h-[1px] bg-[#eee]"/>
            <TemplateStructure setSearchQuery={setSearchQuery}/>
        </div>
    )
}

export default Templates