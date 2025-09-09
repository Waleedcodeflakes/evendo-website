import React from 'react'
// import { motion as MOTION, AnimatePresence } from 'framer-motion';
import Navbar from '../../Sections/Navbar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import Pricing from '../../Sections/Pricing/Pricing';
import FAQs from '../../Sections/FAQs/FAQs';


const PricingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-[92%] m-auto mb-[80px] relative'>
        <div className="absolute w-[290px] h-[225px] top-0 left-[-172px] rounded-full bg-[#A465FD66] blur-[134px]"></div>
        <h2 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        className='poppins-semibold text-[34px] md:text-[44px] mt-[120px] lg:text-[54px] text-[#333333]'>Simple, transparent pricing
        </h2>
        <p 
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        className='poppins-medium text-[20px] text-[#333333CC] mb-2 w-full sm:w-[80%]'>Choose the plan that's right for your business. Start with a free trial and upgrade as you grow.
        </p>
      </div>
      <div className='bg-[#F3F7FE] py-1'>
        <Pricing my="20px" />
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