import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Navbar from '../../Sections/Navbar/Navbar';
import Footer from '../../Sections/Footer/Footer';
import FAQs from '../../Sections/FAQs/FAQs';
import Avatar1 from '../../../assets/img/Avatar1.svg'
import Avatar2 from '../../../assets/img/Avatar2.svg'
import Avatar3 from '../../../assets/img/Avatar3.svg'


const FaqsPage = () => {

    const [showSignup, setShowSignup] = useState(false)

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return (
    <div>
      <Navbar showSignup={showSignup} setShowSignup={setShowSignup}/>
      <div className='bg-[#3182ED0F] py-28'>
        <AnimatePresence>
      <MOTION.div
        // initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }} 
      className='w-full m-auto relative text-center mt-22'>
            <MOTION.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}  className='text-[#3182ED] text-base poppins-medium'>FAQs</MOTION.p>
        <MOTION.h2 initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -70, opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}  className='poppins-semibold text-[30px] md:text-[40px] lg:text-[48px] text-[#101828] pt-2 pb-4'>We’re here to help</MOTION.h2>
        <MOTION.p initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -90, opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}  className='poppins-medium text-[20px] text-[#475467] mb-10'>Have questions? We’re here to help.</MOTION.p>
        <MOTION.button initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}transition={{ duration: 1, ease: "easeInOut" }}  onClick={() => setShowSignup(true)} className='cursor-pointer poppins-medium text-base text-white rounded-[8px] py-3 px-5 bg-[#3182ED]'>Get started</MOTION.button>
      </MOTION.div>
      </AnimatePresence>
      </div>
      <FAQs my="54px" />
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
                <img className='w-[56px] h-[56px] absolute top-[-2px] z-10' src={Avatar2} alt="avatar" />
                <img className='w-[56px] h-[56px]' src={Avatar3} alt="avatar" />
            </div>
            <h2
            className='poppins-semibold text-base md:text-lg lg:text-[20px] text-[#101828] pb-3'>Still have questions?</h2>
            <p
            
            className='poppins-regular text-sm md:text-base lg:text-[18px] text-[#475467] mb-8'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <button
            onClick={() => setShowSignup(true)}
            className='poppins-medium text-base text-white cursor-pointer rounded-[8px] py-3 px-5 bg-[#3182ED]'>Get in touch</button>
        </MOTION.div>
        </AnimatePresence>
    </div>
      <div className='bg-[#fff] w-full h-10'></div>
      <Footer/>
    </div>
  )
}

export default FaqsPage