import { useRef } from 'react';
import { Link } from 'react-router-dom'
import mark from '../assets/icons/Check icon.svg'
import PropTypes from 'prop-types';


const Sponsors = ({ showSponsorBox, showExhibitorBox, setShowSponsorBox, setShowExhibitorBox, handleElementClick }) => {

    const sponsorRef = useRef(null);
    const exhibitorRef = useRef(null);

    const handleSponsorClick = () => {
        setShowSponsorBox(true);
        setShowExhibitorBox(false);
        sponsorRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleExhibitorClick = () => {
        setShowSponsorBox(false);
        setShowExhibitorBox(true);
        exhibitorRef.current.scrollIntoView({ behavior: 'smooth' });    };



    const handleClick = () => {
        // Recipient email address
        const emailAddress = 'nigeria@adanianlabs.io';
        // Subject of the email
        const subject = encodeURIComponent('Adanian Lab Pricing PLan');
        // Body of the email
        const body = encodeURIComponent(`Hello, I would like to sign up for the {} sponsorship package for {insert your company name}. Could you please send me the payment invoice for this package?`);
    
        // Construct the URL for Gmail compose window
        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${emailAddress}&su=${subject}&body=${body}`;
    
        // Open Gmail with the pre-filled email
        window.open(gmailUrl);
    };


  return (
    <div className='font'>
        <div className="flex">
           <div className="bg-[#0161A2] lg:px-[50px] xs:px-[100px] lg:w-[680px] xs:w-[180px] h-[60px] pt-2 cursor-pointer flex justify-center" onClick={handleSponsorClick}>
                <span className="text-center text-[#fff] text-[30px] font-[800]" onClick={handleElementClick}>SPONSORS</span>
           </div>
           <div className="bg-[#eee] lg:px-[50px] xs:px-[100px] xs:w-[180px] py-[8px] lg:w-[680px] h-[60px] cursor-pointer flex justify-center" onClick={handleExhibitorClick}>
                <span className="text-center text-[#494B4A] text-[30px] font-[800]" onClick={handleElementClick}>EXHIBITORS</span>
           </div>
        </div>
            <div ref={sponsorRef} id="sponsorSection" className="flex justify-center" style={{ display: showSponsorBox ? 'block' : 'none' }}>
            <div className="lg:flex gap-5 lg:mt-[4rem] xs:mt-[1rem] mb-[7rem] lg:px-[50px] xs:px-[15px]">
                <div className="lg:w-[390px] lg:h-[600px] bg-[#FFF] shadow-xl p-[15px] lg:mt-0 xs:mt-[2rem] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-[#CD7F32] text-[25px] font-[700]" onClick={handleElementClick}>Bronze | <span className="text-[29px] font-[700]">₦5m</span></h2>
                    <hr className='mt-5'/>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Customized Grant or Benefit for <br className='lg:block xs:hidden'/> Selected SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Sponsored Prizes for Top Performing <br className='lg:block xs:hidden'/> SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Mentions.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Branded Materials</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Dedicated Exhibition Space with <br className='lg:block xs:hidden'/> Enhanced Branding</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured in Press Releases</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Logo placement on event materials</span></h3>
                    <Link to='/' onClick={handleClick}><p className='border-[1px] border-solid border-[#494B4A] text-[18px] text-[#494B4A] font-[500] text-center p-[8px] rounded-[4px] mt-5 hover:bg-[#494B4A] hover:text-[#fff] transition duration-300 ease-in-out'>Order now</p></Link>
                </div>
                <div className="lg:w-[390px] lg:h-[720px] bg-[#FFF] shadow-xl p-[15px] lg:mt-0 xs:mt-[2rem] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-[#FCC200] text-[25px] font-[700]" onClick={handleElementClick}>Gold | <span className="text-[29px] font-[700]">₦7.5m</span></h2>
                    <hr className='mt-5'/>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Customized Grant or Benefit for <br className='lg:block xs:hidden'/> Selected SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Sponsored Prizes for Top Performing <br className='lg:block xs:hidden'/> SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Mentions.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Branded Materials</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Dedicated Exhibition Space with <br/> Enhanced Branding</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Exclusive Speaking Opportunity during <br className='lg:block xs:hidden'/> Ceremony</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured in Press Releases</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured in Press Releases</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Logo placement on event materials</span></h3>
                    <Link to='/' onClick={handleClick}><p className='bg-[#494B4A] text-[18px] text-[#fff] font-[500] text-center p-[8px] rounded-[4px] mt-5 hover:bg-[#fff] hover:border-[1px] hover:border-solid border-[#494B4A] hover:text-[#494B4A] transition duration-300 ease-in-out'>Order now</p></Link>
                </div>
                <div className="lg:w-[390px] bg-[#FFF] shadow-xl p-[15px] lg:mt-0 xs:mt-[2rem] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-[#FCC200] text-[25px] font-[700]" onClick={handleElementClick}>Platinum | <span className="text-[29px] font-[700]">₦15m</span></h2>
                    <hr className='mt-5'/>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Customized Grant or Benefit for <br className='lg:block xs:hidden'/> Selected SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Sponsored Prizes for Top Performing <br className='lg:block xs:hidden'/> SMEs</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Mentions.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Branded Materials</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Dedicated Exhibition Space with <br className='lg:block xs:hidden'/> Enhanced Branding</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Exclusive Speaking Opportunity during <br className='lg:block xs:hidden'/> Ceremony</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured in Press Releases</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured in Press Releases</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Featured Interviews with Sponsor <br className='lg:block xs:hidden'/> Representative</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Priority Access to SMEs for <br className='lg:block xs:hidden'/> Collaboration</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Logo placement on event materials</span></h3>
                    <Link to='/' onClick={handleClick}><p className='border-[1px] border-solid border-[#494B4A] text-[18px] text-[#494B4A] font-[500] text-center p-[8px] rounded-[4px] mt-5 hover:bg-[#494B4A] hover:text-[#fff] transition duration-300 ease-in-out'>Order now</p></Link>
                </div>
            </div>
        </div>

{/* EXHIBITOR  */}  
            <div ref={exhibitorRef} id="exhibitorSection" className="flex justify-center" style={{ display: showExhibitorBox ? 'block' : 'none' }}>
            <div className="lg:flex gap-[5rem] lg:mt-[4rem] xs:mt-[1rem] mb-[7rem] lg:px-[70px] xs:px-[15px]">
                <div className="lg:w-[574px] lg:h-[500px] bg-[#FFF] shadow-xl p-[15px] lg:mt-0 xs:mt-[2rem] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-[#CD7F32] text-[25px] font-[700]" onClick={handleElementClick}>Bronze | <span className="text-[29px] font-[700]">₦2.5m</span></h2>
                    <hr className='mt-5'/>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>2x3 meters booth size</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Promotional Reach</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Mentions.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Full Access to Event</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>30 Seconds Showcase Video Reel</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>15 Professional Photos</span></h3>
                    <Link to='/' onClick={handleClick}><p className='border-[1px] border-solid border-[#494B4A] text-[18px] text-[#494B4A] font-[500] text-center p-[8px] rounded-[4px] mt-5 hover:bg-[#494B4A] hover:text-[#fff] transition duration-300 ease-in-out'>Order now</p></Link>
                </div>
                <div className="lg:w-[574px] lg:h-[600px] bg-[#FFF] shadow-xl p-[15px] lg:mt-0 xs:mt-[2rem] hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-[#FCC200] text-[25px] font-[700]" onClick={handleElementClick}>Gold | <span className="text-[29px] font-[700]">₦7.5m</span></h2>
                    <hr className='mt-5'/>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>3x4 meters booth size</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Promotional Reach</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Mentions.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Media Interview.</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Full Access to Event</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>60 Seconds Showcase Video Reel</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>25 Professional Photos</span></h3>
                    <h3 className='flex mt-5 gap-3 text-[18px] font-[500] text-[#262626]' onClick={handleElementClick}><img src={mark} /> <span>Access to VIP Dinner [Post Event]</span></h3>
                    <Link to='/' onClick={handleClick}><p className='bg-[#494B4A] text-[18px] text-[#fff] font-[500] text-center p-[8px] rounded-[4px] mt-5 hover:bg-[#fff] hover:border-[1px] hover:border-solid border-[#494B4A] hover:text-[#494B4A] transition duration-300 ease-in-out'>Order now</p></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

Sponsors.propTypes = {
    showSponsorBox: PropTypes.bool.isRequired,
    showExhibitorBox: PropTypes.bool.isRequired,
    setShowSponsorBox: PropTypes.func.isRequired,
    setShowExhibitorBox: PropTypes.func.isRequired,
    handleElementClick: PropTypes.func.isRequired
};

export default Sponsors