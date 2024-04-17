import React, { useState } from 'react';
import axios from 'axios';
import fash from '../src/assets/images/fash.png'


const Testfile = () => {
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const [preview, setPreview] = useState(null)

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

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('selectedImage', file1);
        formData.append('selectedImage2', file2);

        console.log(formData);

        try {
            const response = axios.patch('https://ayoba.adanianlabs.io/api/user/upload_file/ChikaStore', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Files uploaded:', data.files);
                alert('Files uploaded:');
            } else {
                console.error('Upload failed:', response.statusText);
                alert('Upload failed:');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error uploading files:');
        }
    };

    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${preview || fash})`, backgroundPosition: `start`, backgroundRepeat: `no-repeat` }} className='lg:w-[50vw] xs:w-[100vw] lg:h-[180vh] xs:h-[100vh] object-fill bg-fixed' />
            <input type="file" onChange={handleImageChange} />
            <input type="file" onChange={handleFile2Change} />
            <button onClick={handleUpload}>Upload Images</button>
        </div>
    );
};

export default Testfile;