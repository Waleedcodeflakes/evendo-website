import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import Navbar from '../../Sections/Navbar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import Pricing from '../../Sections/Pricing/Pricing';
import FAQs from '../../Sections/FAQs/FAQs';


const PricingPage = () => {

    const [showSignup, setShowSignup] = useState(false);
  
  return (
    <div>
      <Navbar setShowSignup={setShowSignup} showSignup={showSignup} />
      <div className='w-full m-auto bg-[#3182ED0F] relative pt-30 md:pt-54 pb-18 md:pb-38'>
        {/* <div className="absolute w-[290px] h-[225px] top-0 left-[-172px] rounded-full bg-[#A465FD66] blur-[134px]"></div> */}
        <MOTION.h2 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        className='poppins-semibold text-[30px] text-center md:text-[44px] lg:text-[54px] text-[#333333] px-2'>Simple, transparent pricing
        </MOTION.h2>
        <MOTION.p 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        className='poppins-medium text-base md:text-[20px] text-center text-[#333333CC] mb-2 px-2 mt-6'>Choose the plan that's right for your business. Start with a free trial and upgrade as you grow.
        </MOTION.p>
      </div>
      <div className='bg-[#fff] py-1'>
        <Pricing setShowSignup={setShowSignup} my="20px" />
      </div>
      <div className='h-[100px] w-full relative bg-white'>
        <div className="absolute w-[290px] h-[90px] top-0 left-0 bg-[#A465FD66] blur-[114px] z-[10]"></div>
      </div>
      <FAQs my="44px" className="relative z-50 bg-white" />
      <div className='h-[100px] w-full relative bg-white'>
        <div className="absolute w-[290px] h-[90px] top-0 right-0 bg-[#A465FD66] blur-[114px] z-[10]"></div>
      </div>
      <Footer/>
    </div>
  )
}

export default PricingPage