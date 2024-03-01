import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { FaPalette } from "react-icons/fa";
import { FaFileLines, FaImage  } from "react-icons/fa6";




export const Tooltip = ({children}) => {
    return (
        <div className='absolute inset-y-0 left-12 group-hover:flex items-center hidden'>
            <div className='whitespace-nowrap relative px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-gray-900 text-[13px]'>
                <div className='absolute inset-y-0 flex items-center -left-1'>
                    <div className='w-2 h-2 rotate-45 bg-white'></div>
                </div>
                {children}
            </div>
        </div>
    )
}






const TemplateEditor = () => {
    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <aside className="h-screen w-18 border-r border-gray-200 bg-white flex flex-col items-center">
                <div className='h-18 w-full flex items-center justify-center border-b border-grey-200'>
                    <h1 className="text-[40px]">L</h1>
                </div>
                <nav className='flex flex-col flex-1 gap-y-4 pt-10'>
                    <Link to='' className='group relative rounded-xl bg-gray-100 p-2 text-green-600 hover:bg-grey-50'>
                        <CiSquarePlus className='h-6 w-6 stroke-current' />
                        <Tooltip>Add element <span className='text-gray-400'>(A)</span></Tooltip>
                    </Link>
                    <Link to='' className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100'>
                        <LuLayoutPanelLeft className='h-6 w-6 stroke-current' />
                        <Tooltip>Layout <span className='text-gray-400'>(Y)</span></Tooltip>
                    </Link>
                    <Link to='' className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100'>
                        <FaPalette className='h-6 w-6 stroke-current' />
                        <Tooltip>Themes <span className='text-gray-400'>(T)</span></Tooltip>
                    </Link>
                    <Link to='' className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100'>
                        <FaFileLines className='h-6 w-6 stroke-current' />
                        <Tooltip>Assets <span className='text-gray-400'>(S)</span></Tooltip>
                    </Link>
                    <Link to='' className='group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100'>
                        <FaImage className='h-6 w-6 fill-current' />
                        <Tooltip>Images <span className='text-gray-400'>(I)</span></Tooltip>
                    </Link>
                </nav>
            </aside>
        </div>
    )
}

export default TemplateEditor