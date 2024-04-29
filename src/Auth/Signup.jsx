import { useEffect, useState  } from 'react'
import Logo from '../assets/images/ADANIAN LOGO 1.png'
import Google1 from '../assets/icons/google.svg'
import facebook from '../assets/icons/facebook.svg'
import mail from '../assets/icons/mail.svg'
import img from '../assets/images/loginImg.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../Redux/Action/UserAction'
import { REGISTER_USER_RESET } from '../../Redux/Constant/Types' 
import toast from 'react-hot-toast'


const Signup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(''); // Add state for email
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state as the user types
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const userRegister = useSelector((state) => state.userRegister)
  const {user, error} = userRegister

  useEffect(() => {
    if(user) {
      navigate('/dashboard')
    }
  }, user, navigate)

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
    }
    dispatch(register(data))
  }

  useEffect(() => {
    return () => {
      dispatch({type: REGISTER_USER_RESET})
    }
  }, [dispatch])


  // GOOGLE SIGNUP
  // const google = () => {
  //   window.open("https://ayoba.adanianlabs.io/api/user/auth/google", "_self");
  // };

  const handleGoogleAuth = () => {
    try {
        window.location.href = 'https://ayoba.adanianlabs.io/api/user/auth/google'
    } catch (err) {
        toast.error(err?.data?.message || err.error)

    }
}


  return (
    <div className='flex justify-center items-center'>
        <div className='lg:flex'>
       <div className=''>
        <div className='flex justify-center items-center mt-5'>
                <Link to='/'><img src={Logo} /></Link>
        </div>
            <h1 className='text-[#333] text-center text-[35px] font-[500] mt-[16px] lg:block xs:hidden'>Create Account</h1>
            <div className='lg:p-[37px] lg:flex gap-[37px] mt-[40px]'> 
                <div>
                    <h2 className='text-[#333] text-center text-[24px] font-[500]'>Sign up</h2>
                    <form className='mt-5' onSubmit={submitHandler}>
                        <label htmlFor='email' className='text-[#666] text-[16px] font-[400]'>Email address</label><br/>
                        <input 
                          type='email' 
                          value={email}
                          onChange={handleEmailChange}
                          style={{border: `1px solid rgba(102, 102, 102, 0.35)`}} 
                          className='rounded-[12px] w-[354px] h-[50px] p-3 mt-3 outline-none' 
                        />
                        <label htmlFor='password'  className='text-[#666] text-[16px] font-[400] flex justify-between items-center mt-5 w-[354px]'>Password <span onClick={toggleShowPassword} className='cursor-pointer'>{showPassword ? 'Hide' : 'Show'}</span></label>
                        <input 
                          style={{border: `1px solid rgba(102, 102, 102, 0.35)`}} 
                          className='rounded-[12px] w-[354px] h-[50px] p-3 mt-3 outline-none'
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={handlePasswordChange}
                        /><br/>
                        <label htmlFor='password'  className='text-[#666] text-[16px] font-[400] flex justify-between items-center mt-5 w-[354px]'>Confirm Password <span onClick={toggleShowConfirmPassword} className='cursor-pointer'>{showConfirmPassword ? 'Hide' : 'Show'}</span></label>
                        <input 
                          style={{border: `1px solid rgba(102, 102, 102, 0.35)`}} 
                          className='rounded-[12px] w-[354px] h-[50px] p-3 mt-3 outline-none'
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange} /><br/>
                        {!passwordsMatch && <p style={{ color: 'red' }} className='mt-[10px] text-[14px] font-[400] leading-[16px]'>Passwords do not match</p>}
                        <button type='submit' className='bg-[#666] mt-4 rounded-[32px] w-[354px] h-[50px] py-[12px]flex justify-center items-center text-[#fff] text-center text-[18px] font-[500]'>Sign Up</button>
                    </form>
                </div>
                <div className='lg:mt-[-1rem] xs:mt-[1rem] xs:flex xs:gap-3 xs:items-center xs:justify-center lg:block'>
                    <div className='lg:h-[170px] lg:w-[2px] xs:h-[2px] xs:w-[150px] lg:ms-2 bg-[#666]' style={{background: `rgba(102, 102, 102, 0.25)`}}/>
                    <h2 className='mt-[23px] mb-[23px] text-[#333] text-[16px] font-[100]'>OR</h2>
                    <div className='lg:h-[170px] lg:w-[2px] xs:h-[2px] xs:w-[150px] lg:ms-2 bg-[#666]' style={{background: `rgba(102, 102, 102, 0.25)`}}/>
                </div>
                <div className='lg:mt-[3rem] xs:mt-[-4rem]'>
                        <button
                          className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[85px] text-[#333] text-[16px] font-[400]'
                          onClick={handleGoogleAuth}
                        >
                          <img src={Google1} alt="Google Icon" />
                          Sign up with Google
                        </button>
                          {/* <GoogleLogin
                            clientId="http://683842650235-shjd2i5go4s5v6i1rqa2hr5mjtjbdbo2.apps.googleusercontent.com"
                            buttonText="Sign up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={renderProps => (
                              <button
                                className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[85px] text-[#333] text-[16px] font-[400]'
                                onClick={renderProps.onClick}
                                // disabled={renderProps.disabled}
                              >
                                <img src={Google1} alt="Google Icon" />
                                Sign up with Google
                              </button>
                            )}
                          /> */}

                    <button className='flex gap-3 w-[354px] h-[50px] py-[15.5px] px-[55px] justify-center items-center rounded-[40px] border-[1px] border-solid border-[#333] bg-[#fff] mt-[24px] text-[#333] text-[16px] font-[400]'><img src={facebook} /> Continue with Facebook</button>
                </div>     
            </div>
              <div className='lg:mt-[25px] xs:mt-[3rem] lg:mb-0 xs:mb-[2rem]'>
                <p className='text-center'><Link to='/login' className='text-[#111] text-[16px] font-[500]'>Already have an account? log in</Link></p>
              </div>
       </div>
       <div className='xs:hidden lg:block'>
            <img src={img} width='524px' height='900px' />
       </div>
    </div>
    </div>
  );
};

export default Signup;