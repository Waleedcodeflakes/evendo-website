import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Navbar from '../../Sections/Navbar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import FAQs from '../../Sections/FAQs/FAQs';
import Avatar1 from '../../../assets/img/Avatar1.svg'
import Avatar2 from '../../../assets/img/Avatar2.svg'
import Avatar3 from '../../../assets/img/Avatar3.svg'


const FaqsPage = () => {

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return (
    <div>
      <Navbar/>
      <div className='w-[92%] m-auto mt-[96px] mb-[136px] relative text-center'>
            <p className='text-[#3182ED] text-base poppins-medium'>FAQs</p>
        <h2 className='poppins-semibold text-[30px] md:text-[40px] lg:text-[48px] text-[#101828] pt-3 pb-6'>We’re here to help</h2>
        <p className='poppins-medium text-[20px] text-[#475467] mb-10'>Have questions? We’re here to help.</p>
        <button className='poppins-medium text-base text-white rounded-[8px] py-3 px-5 bg-[#3182ED]'>Get started</button>
      </div>
      <div className='bg-[#F9FAFB] w-full h-20'></div>
      <FAQs my="44px" />
    <div className='bg-[#F9FAFB] w-full pt-[64px] pb-[96px]'>
      <AnimatePresence>
        <MOTION.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }} 
        animate={inView ?  {y: 0, opacity: 1} : {} }
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }} 
        className='w-[85%] m-auto text-center bg-white rounded-[16px] p-8'>
            <div className='flex justify-center gap-2 mb-6 relative'>
                <img className='w-[56px] h-[56px]' src={Avatar1} alt="avatar" />
                <img className='w-[56px] h-[56px] absolute top-[-2px] z-20' src={Avatar2} alt="avatar" />
                <img className='w-[56px] h-[56px]' src={Avatar3} alt="avatar" />
            </div>
            <h2
            className='poppins-semibold text-base md:text-lg lg:text-[20px] text-[#101828] pb-3'>Still have questions?</h2>
            <p
            
            className='poppins-regular text-sm md:text-base lg:text-[18px] text-[#475467] mb-8'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button
            className='poppins-medium text-base text-white rounded-[8px] py-3 px-5 bg-[#3182ED]'>Get in touch</button>
        </MOTION.div>
        </AnimatePresence>
    </div>
      <div className='bg-[#fff] w-full h-10'></div>
      <Footer/>
    </div>
  )
}

export default FaqsPage