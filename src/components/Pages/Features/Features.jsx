import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Navbar from '../../Sections/Navbar/Navbar';
// import Adoption from '../../Sections/Adoption/Adoption';
import Footer from '../../Sections/Footer/Footer';
import clock from '../../../assets/icons/clock.svg'
import KeyFeatures from '../../Sections/KeyFeatures/KeyFeatures';


const Features = () => {
  const [showSignup, setShowSignup] = useState(false)

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return (
    <div>
      <Navbar setShowSignup={setShowSignup} showSignup={showSignup} />
      <div className='mt-18 md:mt-20'>
      <div className='bg-[#3182ED0F] text-center py-[120px]'>
        <div className='w-full sm:w-[78%] m-auto flex flex-col gap-6 px-3 sm:px-0'>
            <MOTION.h2
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }} 
            className='poppins-semibold text-[36px] md:text-[44px] lg:text-[54px]'>Unlock the Power of Seamless <br/><span className='text-[#3182ED]'>Event Management</span></MOTION.h2>
            <MOTION.p 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='poppins-semibold text-[16px] md:text-[18px] lg:text-[20px] text-[#333333CC]'>The complete platform for event companies to manage vendors, streamline communication, and deliver flawless events. Built specifically for event professionals who demand excellence.</MOTION.p>
        </div>
      </div>
      </div>
      {/* <KeyFeatures/> */}
      {/* <div className='w-[92%] m-auto my-20'>
        <h3 className='poppins-semibold text-[24px] md:text-[26px] lg:text-[32px] text-[#333333]'>Key Features</h3>
        <AnimatePresence>
        <MOTION.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
          {featuresData.map((feature) => (
            <AnimatePresence key={feature.id}>
              <MOTION.div
              ref={ref}
              variants={item}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className='rounded-[16px] py-8 px-5' style={{backgroundColor: feature.bgColor}}>
                  <img src={finance} alt="icon" />
                  <h4 className='poppins-medium text-[20px] text-[#333333E5] mt-6 mb-3'>{feature.title}</h4>
                  <p className='poppins-medium text-[16px] text-[#333333B2] mb-2'>{feature.description}</p>
              </MOTION.div>
              </AnimatePresence>
            ))}
        </MOTION.div>
        </AnimatePresence>
      </div> */}
      <KeyFeatures/>
      {/* focus */}
      <div className='w-[92%] m-auto mt-[120px]'>
        <h2 className='poppins-semibold text-[24px] md:text-[26px] lg:text-[32px] text-[#333333]'>Secure, Compliant, and Reliable</h2>
        <p className='poppins-medium text-[18px] text-[#333333CC] mb-2 w-full sm:w-[80%]'>EventFlow prioritizes the security and reliability of your data. We adhere to industry-leading security standards and compliance regulations to ensure your events run smoothly and your information is protected.</p>
      </div>
      <AnimatePresence>
        <MOTION.section
            ref={ref}
            initial={{ y: 50, opacity: 0 }} 
            animate={inView ? { y: 0, opacity: 1 } : {}}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='w-[92%] m-auto text-center py-[64px] bg-[#3182ED] px-4 mt-20 mb-20' >
            <div className='w-full flex justify-center'>
                <img src={clock} alt="icon" />
            </div>
            <h2 className='poppins-semibold text-[30px] text-[#fff] my-3'>Easy Adoption for Vendors at no extra cost</h2>
            <div className='flex justify-center'>
              <p className='poppins-medium text-[18px] text-[#FFFFFFCC] text-center w-full sm:w-[60%]'>Save up to 15+ hours per event by streamlining vendor coordination and management.</p>
            </div>
            <button onClick={() => setShowSignup(true)} className='text-[#3182ED] poppins-medium text-[16px] cursor-pointer bg-[#FFFFFF] py-3 px-5 mt-[44px] rounded-[8px]'>See How it Works</button>
        </MOTION.section>
      </AnimatePresence>
      <Footer/>
    </div>
  )
}

export default Features