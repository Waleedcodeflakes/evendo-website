import React, {useState} from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import user from '../../../assets/icons/user.svg'
import emailIcon from '../../../assets/icons/email.svg'
import hashtag from '../../../assets/icons/hashtag.svg'
import cross from '../../../assets/icons/close-circle.svg'
import crossSignup from '../../../assets/icons/closeSubmit.svg'
import tickSignup from '../../../assets/icons/tickSubmit.svg'
import axios from 'axios';

const Navbar = ({setShowSignup}) => {
    const navigate = useNavigate();
    const [navLinks, setNavLinks] = useState(false);

    const [signup, setSignup] = useState(false)
    const [form, setForm] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [noOfVendors, setNoOfVendors] = useState('')
    const [showSubmitPopup, setshowSubmitPopup] = useState(false)

    const api = 'https://aspbackend.hifahdevs.com/api/registerInterest/register-interest'
  // setshowSubmitPopup(true);
  // console.log({firstName, lastName, email, noOfVendors});
  // send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!firstName || !lastName || !email || !noOfVendors) {
      alert("please fill out the fields!")
      return
    }
    try { 
     const res  = await axios.post(api, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        noOfVendors: noOfVendors,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
        alert("Query submitted! wait for response!")
      // console.log("Response : ",res.data);

    } catch (error) {
      console.log( "Error : ",error);
      
    } finally {
      // Clear form fields after submission
      setshowSubmitPopup(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setNoOfVendors('');
    }
  }

  return (
    <section className='w-full fixed top-0 bg-[#fff] shadow-[0px_0px_24px_0px_#0000001F] z-20'>
        <div className='w-[92%] m-auto gap-10 flex justify-between items-center py-2 md:py-3'>
            <div className='cursor-pointer'>
                <h1 onClick={() => navigate('/')} className='lexend-bold text-[#3182ED] text-[40px]'>VendComm</h1>
            </div>
            <nav className='md:block'>
                <ul className='hidden md:flex gap-12'>
                    <li className='inline-block poppins-medium text-sm lg:text-[17px]  py-0 cursor-pointer'><NavLink to="/" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Home</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-[17px]  py-0 cursor-pointer  capitalize'><NavLink  to="/features" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Features</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-[17px]  py-0 cursor-pointer'> <NavLink  to="/pricing" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Pricing</NavLink></li>
                    <li className='inline-block poppins-medium text-sm lg:text-[17px]  py-0 cursor-pointer'> <NavLink  to="/faqs" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>FAQ</NavLink></li>
                </ul>
            </nav>
            <div className='hidden md:flex items-center ml-4'>
                {/* <li className='inline-block text-[#3182ED] poppins-medium text-sm lg:text-[17px] mx-2 cursor-pointer bg-[#3182ED14] py-[10px] px-9 rounded-[8px]'> <a  href="#">Sign In</a></li> */}
                <li className='inline-block text-[#fff] poppins-medium text-sm lg:text[17px] mx-4 cursor-pointer bg-[#3182ED] py-[10px] px-5 rounded-[8px]'> <p onClick={() => setSignup(true)}>Get Started </p></li>
            </div>
            <div className='block md:hidden'>
                <Menu onClick={() => setNavLinks(true)} className='w-6 h-6' />
            </div>
            {navLinks && (
                <div className='w-full h-screen bg-[#00000080] fixed top-0 left-0 z-50'>
                    <div className='w-[70%] h-full bg-[#fff] p-6 relative'>
                        <div className='flex justify-end'>
                            <button onClick={() => setNavLinks(false)} className='text-[#3182ED] poppins-medium text-sm lg:text-xl cursor-pointer rounded-[8px]'><X className='w-6 h-8'/></button>
                        </div>  
                        <nav className='mt-10'>
                            <ul className='flex flex-col gap-8'>
                                <li onClick={() => setNavLinks(false)} className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'><NavLink to="/" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Home</NavLink></li>
                                <li onClick={() => setNavLinks(false)} className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer  capitalize'><NavLink  to="/features" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Features</NavLink></li>
                                <li onClick={() => setNavLinks(false)} className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'> <NavLink  to="/pricing" className={({ isActive }) =>`${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>Pricing</NavLink></li>
                                <li onClick={() => setNavLinks(false)} className='inline-block poppins-medium text-sm lg:text-xl  py-0 cursor-pointer'> <NavLink  to="/faqs" className={({ isActive }) =>
                                `${isActive ? 'text-[#3182ED]' : 'text-[#33333399]'}`}>FAQ</NavLink></li>
                                {/* <li onClick={() => setNavLinks(false)} className='inline-block text-center text-[#3182ED] poppins-medium text-sm lg:text-xl mx-2 cursor-pointer bg-[#3182ED14] py-[10px] px-9 rounded-[8px]'> <a  href="#">Sign In</a></li> */}
                                <li onClick={() => setNavLinks(false)} className='inline-block text-center text-[#fff] poppins-medium text-sm lg:text-xl mx-4 cursor-pointer bg-[#3182ED] py-[10px] px-5 rounded-[8px]'> <a onClick={() => {setSignup(true)}} href="#">Get Started </a></li> 
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
        {/* signup form for small devices */}
        {signup && 
        <div className=' fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[50px] overflow-hidden bg-opacity-50 flex items-center justify-center z-50 p-4'>
        <div className={`relative block max-w-full bg-white/40 backdrop-blur-[50px] rounded-[20px] px-8 py-8`}>
            <div className='flex items-center justify-between mb-6'>
                <h2 className="text-xl poppins-semibold text-[#fff] w-[90%]">Want early access? Join waitlist!</h2>
                <X onClick={() => {setSignup(false); setShowSignup(false);}} className='w-8 h-8 cursor-pointer text-[#fff]' />
            </div>
                <form className="space-y-4">
                <label htmlFor="name" className="text-base poppins-medium text-[#fff] pb-3">Name</label>
                {/* fname and lname inputs */}
                <div className='mt-2 mb-6'>
                    <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full'>
                    <div className='flex items-center gap-2 w-full pr-2'>
                        <img src={user} alt="icon" />
                    <input 
                        value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        type="text" 
                        placeholder="First name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                        <img src={cross} alt="icon" />
                    </div>
                    <div className='flex justify-between items-center mt-4 border border-[#E9E9E9] rounded-lg p-3 w-full'>
                    <div className='flex items-center gap-2 w-full pr-2'>
                        <img src={user} alt="icon" />
                    <input 
                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                        type="text" 
                        placeholder="Last name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                        <img src={cross} alt="icon" />
                    </div>

                </div>
                {/* email */}
                <label htmlFor="name" className="text-base poppins-medium text-[#fff] pt-3">Email</label>
                <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-2 mb-6'>
                    <div className='flex items-center gap-2 w-full'>
                        <img src={emailIcon} alt="icon" />
                    <input 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                </div>
                {/* vendors */}
                <label htmlFor="name" className="text-base poppins-medium text-[#fff] pt-3">Average number of vendors for an event</label>
                <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-2'>
                    <div className='flex items-center gap-2 w-full'>
                        <img src={hashtag} alt="icon" />
                    <input 
                        value={noOfVendors} onChange={(e) => setNoOfVendors(e.target.value)}
                        type="text" 
                        placeholder="No of vendors" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                </div>
                <input
                    type="submit" 
                    value="Sign up for waitlist"
                    onClick={(e) => handleSubmit(e)}
                    className="w-full bg-[#3182ED] cursor-pointer text-[#fff] py-2 rounded-[50px] poppins-medium text-lg transition mt-10"
                    />
                </form>
            </div>
        </div>
        }

        {showSubmitPopup && 
              <div className='fixed top-0 left-0 w-full h-full bg-[#00000080] backdrop-blur-[24px] overflow-hidden bg-opacity-50 flex items-center justify-center z-50 p-4'>
                <div className='bg-white rounded-[32px] p-8 max-w-[502px] w-full text-center relative'>
                  <div className='absolute right-8 top-8 cursor-pointer' onClick={() => {setshowSubmitPopup(false); setSignup(false); setForm(false); setShowSignup(false);}}>
                    <img src={crossSignup} alt="icon" />
                  </div>
                  <div className='flex justify-center w-full'>
                    <img src={tickSignup} alt="icon" />
                  </div>
                  <h2 className='text-[22px] poppins-semibold mb-4 text-[#333]'>Thanks for Joining!</h2>
                  <p className='text-[15px] poppins-medium mb-10 px-0 sm:px-10 text-[#333333B2]'>We are excited to have you on board! Stay tuned, we will be launching soon!</p>
                  </div>
              </div>
              }


    </section>
  )
}

export default Navbar