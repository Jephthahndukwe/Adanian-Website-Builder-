import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import restro4 from '../../../../assets/images/restro4.jpg'
import restro5 from '../../../../assets/images/restro5.png'
import Footer from '../Components/Footer'
import TemplateEditNavbar from '../../../TemplateDashboard/TemplateEditNavbar'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useSelector } from 'react-redux'


const About = () => {

   // State variables for each heading
const [heading68, setHeading68] = useState({ id: 'heading68', text: 'About Us', color: '#000' });
const [heading69, setHeading69] = useState({ id: 'heading69', text: 'The Restaurant', color: '#fff' });
const [heading70, setHeading70] = useState({ id: 'heading70', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out', color: '#fff' });
const [heading71, setHeading71] = useState({ id: 'heading71', text: 'Our Kitchen', color: '#000' });
const [heading72, setHeading72] = useState({ id: 'heading72', text: 'I’m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.', color: '#000' });

// Define state variables for up to 10 headings
// Add additional headings as needed...

const [isModalOpen, setModalOpen] = useState(false);
const [currentHeading, setCurrentHeading] = useState(null);
const [inputText, setInputText] = useState('');
const [inputColor, setInputColor] = useState('');

// Function to open the modal for editing a specific heading
const openModal = (heading, setHeadingState) => {
    setCurrentHeading({ heading, setHeadingState });
    setInputText(heading.text);
    setInputColor(heading.color);
    setModalOpen(true);
};

// Function to handle save button click
const handleSave = () => {
    // Update the current heading based on the input values
    currentHeading.setHeadingState({
        ...currentHeading.heading,
        text: inputText,
        color: inputColor,
    });
    setModalOpen(false);
};

// Function to handle cancel button click
const handleCancelClick = () => {
    setModalOpen(false);
};


 // IMAGE EDITING
 const [file1, setFile1] = useState(null);
 const [file2, setFile2] = useState(null);
 const [preview, setPreview] = useState(null)
 const [preview2, setPreview2] = useState(null)

 const handleFile1Change = (e) => {
     setFile1(e.target.files[0]);
 };
 const handleFile2Change = (e) => {
     setFile2(e.target.files[0]);
 };

 const handleImageChange = (e) => {
     const selectedImage = e.target.files[0];
     if (selectedImage) {
         setFile1(selectedImage)
         const reader = new FileReader();
         reader.onload = () => {
             setPreview(reader.result);
         };
     reader.readAsDataURL(selectedImage);
     }
 };
 const handleImageChange2 = (e) => {
     const selectedImage2 = e.target.files[0];
     if (selectedImage2) {
         setFile2(selectedImage2)
         const reader = new FileReader();
         reader.onload = () => {
         setPreview2(reader.result);
         };
         reader.readAsDataURL(selectedImage2);
     }
 };    

 const store = useSelector((state) => state.store)
    const { storeDetails } = store


  // SAVING DATA TO BACKEND
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('selectedImage1', file1);
    formData.append('selectedImage2', file2);

    const texts = {
        heading68: heading68,
        heading69: heading69,
        heading70: heading70,
        heading71: heading71,
        heading72: heading72,
      }

      console.log(texts);


        let stringifiedObject = JSON.stringify(texts);
        // let joiner = textArray.join("*")
        formData.append('template', 'Lawrence');
        formData.append('texts', stringifiedObject);
        console.log(formData);

    try {
        const response = axios.patch(`https://ayoba.adanianlabs.io/api/user/upload_file/${store.Details.nameOfStore}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log(response.data);

        if (response.data) {
            console.log(response.data)
            toast.success('Reservation page saved successfully');
        }
    } catch (error) {
        console.error('Error uploading files:', error);
        toast.error('Failed to save template, Please try again later.');
    }
};

console.log(storeDetails)

    const getWebsite = async () => {
      try {
        const res = await axios.get(`https://ayoba.adanianlabs.io/api/user/getwebsite/${storeDetails.nameOfStore}
        `);
        console.log(res.data)
        if (res.data.template !== 'Lawrence') {
          toast.success(`You have started editing ${res.data.template}`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if(storeDetails) {
        getWebsite()
      }
  }, [])

  return (
    <div>
        <TemplateEditNavbar handleUpload={handleUpload}/>
        <div className='bg-[#faf8f1] pt-[2rem]'>
            <Navbar/>
            <div>
                <div className='bg-[#a89d8a] py-[70px] lg:px-[180px] xs:px-[50px] w-[90vw]'>
                    <h2 className='font-Namdhinggo text-[60px] font-[100] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading68, setHeading68)} style={{ color: heading68.color}}>{heading68.text}</h2>
                </div>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview || restro4})`, backgroundPosition: `center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className='w-[100%] h-[100vh] bg-fixed mt-[5rem]'>
                    <input type="file" onChange={handleImageChange} />
                        <div className='lg:flex justify-center items-center h-[100vh] lg:px-0 xs:px-[20px] lg:pt-0 xs:pt-[5rem]'>
                            <div>
                                <h2 className='font-Namdhinggo lg:text-[50px] xs:text-[40px] lg:ps-[32rem] lg:text-start xs:text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px]' onClick={() => openModal(heading69, setHeading69)} style={{ color: heading69.color}}>{heading69.text}</h2>
                                <p className='lg:text-[16px] xs:text-[14.5px] mt-[2rem] lg:ms-[18rem] lg:w-[55%] leading-[28px] text-center hover:border-[1px] hover:border-solid hover:border-[#fff] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading70, setHeading70)} style={{ color: heading70.color}}>{heading70.text}</p>
                            </div>
                        </div>
                    </div>
                <div className='lg:flex justify-center items-center gap-[4rem] lg:px-[100px] xs:px-[10px] mt-[5rem] pb-[6rem]'>
                    <div>
                        <input type="file" onChange={handleImageChange2} />
                        <img src={preview2 || restro5} alt="Frame" className="w-[180vw]" />
                    </div>
                    <div className='lg:mt-0 xs:mt-[4rem]'>
                        <h1 className='text-[45px] font-Namdhinggo lg:text-start xs:text-center lg:ps-[12rem] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px]' onClick={() => openModal(heading71, setHeading71)} style={{ color: heading71.color}}>{heading71.text}</h1>
                        <p className='mt-[2rem] text-center text-[16px] leading-[24px] lg:ms-[5rem] text-[#7c6c50] lg:w-[80%] hover:border-[1px] hover:border-solid hover:border-[#000] hover:py-[10px] hover:px-[10px]' onClick={() => openModal(heading72, setHeading72)} style={{ color: heading72.color}}>{heading72.text}</p>
                    </div>
                </div>
            </div>
        </div>
            <Footer/>

             {/* Popup modal */}
         {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden pt-[5%]">
                <div className="bg-[#fff] px-[20px] py-[10px] rounded-[5px] shadow-lg w-[50%]">
                <p className="mb-4">Edit text:</p>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                <p className="mb-4">Change text color:</p>
                <input
                    type="color"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    className='border p-2 w-full mb-4'
                />
                <br /><br />
                {/* Save and Cancel buttons */}
                <div className='flex justify-end space-x-4'>
                    <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
                    <button onClick={handleCancelClick} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                </div>
                </div>
                </div>
            )}
    </div>
  )
}

export default About