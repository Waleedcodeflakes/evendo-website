import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import heroBg from '../../../assets/icons/heroBg.svg'
import user from '../../../assets/icons/user.svg'
import email from '../../../assets/icons/email.svg'
import hashtag from '../../../assets/icons/hashtag.svg'
import cross from '../../../assets/icons/close-circle.svg'
import crossSignup from '../../../assets/icons/closeSubmit.svg'
import tickSignup from '../../../assets/icons/tickSubmit.svg'
import tickEmp from '../../../assets/icons/tick-circle-emp.svg'
import { X } from 'lucide-react'

const Hero = ({onScroll, showSignup, setShowSignup}) => {

  const [signup, setSignup] = useState(false)
  const [form, setForm] = useState(true)
  const [showSubmitPopup, setshowSubmitPopup] = useState(false)

  const texts=["Payments or follow-ups" ,"All Invoices in one place", "Vendor Memory Bank","Consolidated Communication", "Seamless Cordination", "Task Management"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    setshowSubmitPopup(true);
  }

  return (
    <section className='w-full'>
      {/* <AnimatePresence> */}
      <div 
        className="relative w-full h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay (optional for dark effect) */}
        <div className="absolute w-[460px] h-[385px] top-0 left-[-172px] rounded-full bg-[#3182ED66] blur-[414px]"></div>

        <div className="absolute w-[777px] h-[700px] top-0 right-0 rounded-full bg-[#3182ED0A] blur-[200px]"></div>

        
        <div className="relative w-[92%] m-auto h-full flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side Content */}
          <AnimatePresence>
          <MOTION.div className="text-white w-full md:w-[50%] space-y-5 "
            initial={{ x: -30, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className='poppins-medium text-xs sm:text-sm text-[#3182ED] bg-[#3182ED47] px-3 py-[6px] rounded-[60px] w-fit mt-10 lg:mt-0'>Coming Soon - Early Access Available</p>
            <h1 className="text-[30px] md:text-[36px] lg:text-[44px] poppins-semibold mt-1" style={{lineHeight: '1.4'}}>
              Manage Your Event Vendors With Ease
            </h1>
            <p className="text-sm md:text-[15px] lg:text-[17px] poppins-medium text-[#FFFFFFCC]">
              A complete platform that puts all your vendor communication, invoices, and coordination in one place. No more digging into emails, missing payments, or missing a follow-up.
            </p>
            <div className='my-8'>
              {texts.map((text, index) => (
                <div key={index} className="flex items-center space-x-3 mb-5">
                  <div className="w-4 h-4 rounded-full"><img src={tickEmp} alt="icon" /></div>
                  <p className="text-sm md:text-sm lg:text-[15px] poppins-medium text-[#FFFFFFCC]">{text}</p>
                </div>
              ))}
            </div>
            <div className='flex items-center gap-3'>
              <button onClick={() => setSignup(true)} className="bg-[#FFFFFF14] cursor-pointer text-white poppins-medium border border-[#FFFFFF] py-3 px-5 text-sm rounded-lg transition">Free Early Sign-up</button>
              <button onClick={onScroll} className="bg-[#FFFFFF14] cursor-pointer text-white poppins-medium border border-[#FFFFFF] py-3 px-5 text-sm rounded-lg transition">Watch Demo</button>
            </div>
          </MOTION.div>
          </AnimatePresence>
          {/* Right Side Signup Form */}
          {form &&
          <AnimatePresence>
            <MOTION.div
            initial={{ x: 30, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`relative hidden md:block max-w-[40%] bg-white/40 backdrop-blur-[50px] rounded-[20px] px-8 py-12`}>
              <h2 className="text-2xl poppins-semibold text-white mb-6">Want early access? Join waitlist!</h2>
                <form className="space-y-4">
                  <label htmlFor="name" className="text-base poppins-medium text-white pb-3">Name</label>
                  {/* fname and lname inputs */}
                  <div className='flex items-center gap-4 mt-2 mb-6'>
                    <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full'>
                      <div className='flex items-center gap-2'>
                        <img src={user} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="First name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      required />
                      </div>
                        <img src={cross} alt="icon" />
                    </div>
                    <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full'>
                      <div className='flex items-center gap-2'>
                        <img src={user} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Last name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      required />
                      </div>
                        <img src={cross} alt="icon" />
                    </div>

                  </div>
                  {/* email */}
                  <label htmlFor="name" className="text-base poppins-medium text-white pt-3">Email</label>
                  <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5 mb-6'>
                      <div className='flex items-center gap-2'>
                        <img src={email} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Email" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      required />
                      </div>
                  </div>
                  {/* vendors */}
                  <label htmlFor="name" className="text-base poppins-medium text-white pt-3">Average number of vendors for an event</label>
                  <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5'>
                      <div className='flex items-center gap-2'>
                        <img src={hashtag} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="No of vendors" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      required />
                      </div>
                  </div>
                  <input
                    type="submit" 
                    value="Sign up for waitlist"
                    onClick={(e) => handleSubmit(e)}
                    className="w-full bg-[#3182ED] cursor-pointer text-white py-2 rounded-[50px] poppins-medium text-lg transition mt-10"
                  />
                </form>
            </MOTION.div>
          </AnimatePresence>
          }
        </div>
      </div>
      {/* </AnimatePresence> */}
      {/* signup form for small devices */}
      {(signup || showSignup) && 
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
                    <div className='flex items-center gap-2'>
                      <img src={user} alt="icon" />
                    <input 
                      type="text" 
                      placeholder="First name" 
                      className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                      <img src={cross} alt="icon" />
                  </div>
                  <div className='flex justify-between items-center mt-4 border border-[#E9E9E9] rounded-lg p-3 w-full'>
                    <div className='flex items-center gap-2'>
                      <img src={user} alt="icon" />
                    <input 
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
                <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5 mb-6'>
                    <div className='flex items-center gap-2'>
                      <img src={email} alt="icon" />
                    <input 
                      type="text" 
                      placeholder="Email" 
                      className="w-full border-none outline-none text-[#fff] placeholder:text-[#fff] text-sm"
                    required />
                    </div>
                </div>
                {/* vendors */}
                <label htmlFor="name" className="text-base poppins-medium text-[#fff] pt-3">Average number of vendors for an event</label>
                <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5'>
                    <div className='flex items-center gap-2'>
                      <img src={hashtag} alt="icon" />
                    <input 
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
      {/* submit popup */}
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

export default Hero