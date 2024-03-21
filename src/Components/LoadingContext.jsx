import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../assets/videoPreloader-3.v2.mp4'

const LoadingPage = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div className='fixed top-0 left-0' style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
     <video autoPlay loop style={{ width: '30%', height: '30%' }}>
        <source src={loader} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingPage;
