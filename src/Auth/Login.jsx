import { useState } from 'react'
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import Google from '../assets/icons/google.svg'
import facebook from '../assets/icons/facebook.svg'
import mail from '../assets/icons/mail.svg'
import img from '../assets/images/loginImg.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { toast } from 'react-toastify'
import { useAuth } from '../../Redux/Context/User'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth()

  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //form function
  const submitHandler = async (e) => {
    e.preventDefault()
      try {
        const res = await axios.post('https://ayoba.adanianlabs.io/api/user/login', { 
          email, 
          password,
        });
        if(res && res.data.success) {
          // toast.success(res.data && res.data.message)
          alert(res.data && res.data.message)
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(res.data));
          navigate('/dashboard');
        }
        else {
          // toast.error(res.data.message)
          alert(res.data.message)
        }
      } catch (error) {
      console.log(error)
      // toast.error('Something went wrong')
      alert('Something went wrong')
  }
} 

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };


  // const navigate = useNavigate(); // Initialize the navigate function

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     // Send login data to backend
  //     const response = await axios.post('https://ayoba.adanianlabs.io/api/user/login', { email, password });
  //     const { userId } = response.data;

  //      // Store user ID in state, context, or local storage
  //      localStorage.setItem('userId', userId);

  //     // Handle successful login
  //     console.log('Login successful:', response.data);

  //     // Redirect user to dashboard
  //     navigate('/dashboard');

  //     //Handle login message
  //     toast.success("Login Successful");
  //   } catch (error) {

  //     // Handle login error
  //     console.error('Login failed:', error);
  //     alert('Login failed. Please try again.');
  //   }
  // };


  return (
    <div className='flex justify-center items-center'>
        <div className='lg:flex'>
       <div className=''>
        <div className='flex justify-center items-center mt-5'>
                <Link to='/'><img src={Logo} /></Link>
        </div>
            <h1 className='text-[#333] text-center text-[35px] font-[500] mt-[16px] lg:block xs:hidden'>Log in</h1>
            <div className='lg:p-[37px] lg:flex gap-[37px] mt-[40px]'> 
                <div>
                    <h2 className='text-[#333] text-center text-[24px] font-[500]'>Log in</h2>
                    <form className='mt-5' onSubmit={submitHandler}>
                        <label htmlFor='email' className='text-[#666] text-[16px] font-[400]'>Email address</label><br/>
                        <input 
                          type='email' 
                          style={{border: `1px solid rgba(102, 102, 102, 0.35)`}} 
                          className='rounded-[12px] w-[354px] h-[50px] p-3 mt-3 outline-none' 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor='password' className='text-[#666] text-[16px] font-[400] flex justify-between items-center mt-5 w-[354px]'>Password <span onClick={toggleShowPassword} className='cursor-pointer'>{showPassword ? 'Hide' : 'Show'}</span></label>
                        <input 
                          type={showPassword ? 'text' : 'password'}
                          onChange={handlePasswordChange}
                          value={password}
                          style={{border: `1px solid rgba(102, 102, 102, 0.35)`}} 
                          className='rounded-[12px] w-[354px] h-[50px] p-3 mt-3 outline-none' /><br/>
                        <button type='submit' className='bg-[#666] mt-4 rounded-[32px] w-[354px] h-[50px] py-[12px]flex justify-center items-center text-[#fff] text-center text-[18px] font-[500]'>Log in</button>
                    </form>
                </div>
                <div className='lg:mt-[-2rem] xs:mt-[1rem] xs:flex xs:gap-3 xs:items-center xs:justify-center lg:block'>
                    <div className='lg:h-[170px] lg:w-[2px] xs:h-[2px] xs:w-[150px] lg:ms-2' style={{background: `rgba(102, 102, 102, 0.25)`}}/>
                    <h2 className='mt-[23px] mb-[23px] text-[#333] text-[16px] font-[100]'>OR</h2>
                    <div className='lg:h-[170px] lg:w-[2px] xs:h-[2px] xs:w-[150px] lg:ms-2' style={{background: `rgba(102, 102, 102, 0.25)`}}/>
                </div>
                <div className='lg:mt-[3rem] xs:mt-[-4rem]'>
                    <button className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[85px] text-[#333] text-[16px] font-[400]'><img src={Google} /> Continue with Google</button>
                    <button className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[24px] text-[#333] text-[16px] font-[400]'><img src={facebook} /> Continue with Facebook</button>
                </div>     
            </div>
              <div className='lg:mt-[10px] xs:mt-[3rem] lg:mb-0 xs:mb-[2rem]'>
                <p className='text-center'><a href='#' className='text-[#111] text-[16px] font-[500]'><Link to='/signup'>Can&apos;t log in?</Link></a></p>
                <p className='mt-[10px] text-[#666] text-center text-[14px] font-[400]'>Secure Login with reCAPTCHA subject to <br/> Google <Link to='/' className='text-[#333] underline'>Terms</Link> & <Link to='/questionone' className='text-[#333] underline'>Privacy</Link></p>
              </div>
       </div>
       <div className='xs:hidden lg:block'>
            <img src={img} width='524px' height='900px'/>
       </div>
    </div>
    </div>
  );
};

export default Login;