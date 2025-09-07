import React, {useState} from 'react'
import heroBg from '../../../assets/icons/heroBg.svg'
import user from '../../../assets/icons/user.svg'
import email from '../../../assets/icons/email.svg'
import hashtag from '../../../assets/icons/hashtag.svg'
import cross from '../../../assets/icons/close-circle.svg'
import tickEmp from '../../../assets/icons/tick-circle-emp.svg'
import { X } from 'lucide-react'

const Hero = () => {

  const [signup, setSignup] = useState(false)

  const texts=["All Invoices in one place", "Vendor Memory Bank", "Seamless Communication"];
  return (
    <section className='w-full'>
        <div 
          className="relative w-full h-screen bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Overlay (optional for dark effect) */}
          <div className="absolute w-[460px] h-[385px] top-0 left-[-172px] rounded-full bg-[#3182ED66] blur-[414px]"></div>

          <div className="absolute w-[777px] h-[700px] top-0 right-0 rounded-full bg-[#3182ED0A] blur-[200px]"></div>

          <div className="relative w-[92%] m-auto h-full flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side Content */}
            <div className="text-white w-full md:w-[50%] space-y-5 ">
              <p className='poppins-medium text-sm sm:text-base text-[#3182ED] bg-[#3182ED47] px-3 py-[6px] rounded-[60px] w-fit mt-10 lg:mt-0'>Coming Soon - Early Access Available</p>
              <h1 className="text-[34px] md:text-[44px] lg:text-[54px] poppins-semibold mt-1">
                Streamline Your Event Vendor With Ease
              </h1>
              <p className="text-sm md:text-lg lg:text-xl poppins-medium text-[#FFFFFFCC]">
                A complete platform that puts all your vendor communication, invoices, and coordination in one place. No more digging into emails, missing payments, or missing a follow-up.
              </p>
              <div className='my-8'>
                {texts.map((text, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-5">
                    <div className="w-4 h-4 rounded-full"><img src={tickEmp} alt="icon" /></div>
                    <p className="text-sm md:text-sm lg:text-base poppins-medium text-[#FFFFFFCC]">{text}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setSignup(true)} className="bg-[#FFFFFF14] text-white poppins-medium border border-[#FFFFFF] py-3 px-5 text-lg rounded-lg transition">Free Early Sign-up</button>
            </div>
            {/* Right Side Signup Form */}
            <div className={`relative hidden md:block max-w-[40%] bg-white/40 backdrop-blur-[50px] rounded-[20px] px-8 py-12`}>
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
                        placeholder="Enter first name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                        <img src={cross} alt="icon" />
                    </div>
                    <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full'>
                      <div className='flex items-center gap-2'>
                        <img src={user} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Enter last name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      />
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
                        placeholder="Enter Email" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                  </div>
                  {/* vendors */}
                  <label htmlFor="name" className="text-base poppins-medium text-white pt-3">Average number of vendors for an event</label>
                  <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5'>
                      <div className='flex items-center gap-2'>
                        <img src={hashtag} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Enter no of vendors" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#3182ED] text-white py-2 rounded-[50px] poppins-medium text-lg transition mt-10"
                  >
                    Sign up for waitlist
                  </button>
                </form>
            </div>
          </div>
        </div>
        {/* signup form for small devices */}
        {signup && 
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[50px] overflow-hidden bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className={`relative block max-w-full bg-white/40 backdrop-blur-[50px] rounded-[20px] px-8 py-8`}>
            <div className='flex items-center justify-between mb-6'>
                <h2 className="text-xl poppins-semibold text-white">Want early access? Join waitlist!</h2>
                <X onClick={() => setSignup(false)} className='w-8 h-8 text-white' />
            </div>
                <form className="space-y-4">
                  <label htmlFor="name" className="text-base poppins-medium text-white pb-3">Name</label>
                  {/* fname and lname inputs */}
                  <div className='mt-2 mb-6'>
                    <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full'>
                      <div className='flex items-center gap-2'>
                        <img src={user} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Enter first name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                        <img src={cross} alt="icon" />
                    </div>
                    <div className='flex justify-between items-center mt-4 border border-[#E9E9E9] rounded-lg p-3 w-full'>
                      <div className='flex items-center gap-2'>
                        <img src={user} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Enter last name" 
                        className="w-full border-none outline-none text-[#fff] placeholder:text-[#FFFFFFDB] text-sm"
                      />
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
                        placeholder="Enter Email" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                  </div>
                  {/* vendors */}
                  <label htmlFor="name" className="text-base poppins-medium text-white pt-3">Average number of vendors for an event</label>
                  <div className='flex justify-between items-center border border-[#E9E9E9] rounded-lg p-3 w-full mt-5'>
                      <div className='flex items-center gap-2'>
                        <img src={hashtag} alt="icon" />
                      <input 
                        type="text" 
                        placeholder="Enter no of vendors" 
                        className="w-full border-none outline-none text-white placeholder:text-[#FFFFFFDB] text-sm"
                      />
                      </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#3182ED] text-white py-2 rounded-[50px] poppins-medium text-lg transition mt-10"
                  >
                    Sign up for waitlist
                  </button>
                </form>
            </div>
        </div>
  }

    </section>
  )
}

export default Hero