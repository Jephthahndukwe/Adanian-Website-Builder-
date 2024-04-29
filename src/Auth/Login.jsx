import { useState, useEffect } from 'react'
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import Google from '../assets/icons/google.svg'
import facebook from '../assets/icons/facebook.svg'
import mail from '../assets/icons/mail.svg'
import img from '../assets/images/loginImg.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Action/UserAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const userAuth = useSelector((state) => state.userAuth)
  const { user, error } = userAuth

 

  // useEffect(() => {
  //   if(user) {
  //     navigate('/dashboard')
  //   }
  // }, user, navigate)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  const handleGoogleAuth = () => {
    try {
        window.location.href = 'https://ayoba.adanianlabs.io/api/user/auth/google'
    } catch (err) {
        toast.error(err?.data?.message || err.error)

    }
}

// const google = () => {
//   window.open("https://ayoba.adanianlabs.io/api/user/auth/google", "_self");
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
                      {/* <GoogleLogin
                        clientId="YOUR_GOOGLE_CLIENT_ID"
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => ( */}
                          <button
                            // onClick={renderProps.onClick}
                            // disabled={renderProps.disabled}
                            className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[85px] text-[#333] text-[16px] font-[400]'
                            onClick={handleGoogleAuth}>
                            <img src={Google} alt="Google Icon" />
                            Continue with Google
                          </button>
                        {/* )}
                      /> */}
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

    <ToastContainer position="fixed top-0 left-0 flex justify-start items-left" closeOnClick={false} />
    </div>
  );
};

export default Login;