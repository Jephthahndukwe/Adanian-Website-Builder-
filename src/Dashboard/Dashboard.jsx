import { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Step1  from "./Steps/Step1"
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import TemplateMap from "./TemplateMap"
import Question from "./Steps/Question";
import { useDispatch, useSelector } from 'react-redux';
import { googleAuth, logout } from '../../Redux/Action/UserAction';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setCredentials } from '../Auth/Slice/userSlice';



const Dashboard = () => {
  const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const {id} = useParams();

    
    const getUser = async () => {
        try {
            fetch(`https://ayoba.adanianlabs.io/api/user/google/success/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                    credentials: 'include', // Include cookies in the request
                })
                .then(response => response.json())
                .then(data => console.log('Response Data:', data))
                .catch(error => console.error('Error:', error));
        } catch (error) {
            toast.error(error?.data?.message || error?.error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    // const logoutHandler = () => {
    //     dispatch(logout())
    //   }

    const store = useSelector((state) => state.store)
    const { storeDetails } = store

    const [savedTemplates, setSavedTemplates] = useState([]);

    useEffect(() => {
      const fetchSavedTemplates = async () => {
        try {
          const response = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}`);
          setSavedTemplates(response.data);
        } catch (error) {
          console.error('Error fetching saved templates:', error);
        }
      };
  
      fetchSavedTemplates();

    }, []);


  return (
    <div>
        <Navbar className='xs:hidden lg:block' />
        <div className="lg:flex flex-star items-center justify-center m-auto">
            <div className="relative w-[100vw] h-[95vh] flex items-center justify-center overflow-hidden">
                <Sidebar className='xs:hidden lg:block'/>

                <div className="h-[100%] lg:px-[2rem] xs:px-[10px] overflow-auto overflow-y-scroll lg:w-[82%] xs:w-[100%] mt-[3rem] mb-[3rem]" style={{ scrollbarWidth: `none`, msOverflowStyle: `none` }}>
                   {/* <h1 className="text-[#000] text-[24px] font-[600]">Welcome back, User Y</h1>                     */}
                    <Step1/>

                    <div className="mt-[53px] px-[18px]">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-[8px]'>
                                <h3  className="text-[#000] text-[13px] font-[400]">Your Sites</h3>
                                {/* <h3 className="text-[#000] text-[10px] font-[500]">Template</h3> */}
                            </div>
                            <div className='border-[1px] border-solid border-[#00AABC] hover:bg-[#00AABC] text-[#00AABC] py-[5px] px-[20px] rounded-[100px] hover:text-[#fff]'>
                                <Link to='/website' className='flex gap-[8px] justify-center items-center text-[14px] font-[400] no-underline hover:text-[#fff] text-[#00AABC]'><FaPencilAlt /> Design New Site</Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-[16px]">
                                {/* <h1>{storeDetails.nameOfStore}</h1> */}
                            {/* {
                                TemplateMap.map((index) => (
                                    <div key={index.id}>
                                        <div className="mt-[2rem]">
                                            <img src={index.Image} className="w-[317px] h-[218.75px] fill" />
                                            <h2 className="text-[#000] text-[14px] font-[500] mt-[16px]">{index.heading}</h2>
                                            <h3 className='text-[#000] text-[12px] font-[400] mt-2'>{index.text}</h3>
                                        </div>
                                    </div>
                                ))
                            } */}

                            {savedTemplates.length > 0 ? (
                                    savedTemplates.map((template, index) => (
                                    <div key={index}>
                                        <img src={template.data.data.images.selectedImage1} alt={`Template ${index}`} />
                                        {/* <h2>{template.heading}</h2> */}
                                        {/* <p>{template.text}</p> */}
                                    </div>
                                    ))
                                ) : (
                                    <p>No saved templates found.</p>
                                )}
                        </div>
                        {/* {
                            show ? <Question show={show} setShow={setShow} /> : null
                        } */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Dashboard