import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Navbar from '../../Sections/Navbar/Navbar';
import Adoption from '../../Sections/Adoption/Adoption';
import Footer from '../../Sections/Footer/Footer';
import finance from '../../../assets/img/finance.svg'


const Features = () => {

  const featuresData = [
  {
    id: 1,  
    title: "Event Scheduling",
    description: "Effortlessly plan and schedule events with our intuitive calendar interface",
  },
  {
    id: 2,  
    title: "Attendee Management",
    description: "Manage attendee information, track participation, and personalize experiences.",
  },
  {
    id: 3,  
    title: "Analytics & Reporting",
    description: "Gain insights into event performance with detailed analytics and customizable reports.",
  },
  {
    id: 4,  
    title: "Ticking & Registration",
    description: "Streamline ticketing and registration processes with secure and user-friendly tools.",
  },
  {
    id: 5,  
    title: "Real-Time Commination",
    description: "Facilitate real-time communication between attendees, speakers, and organizers.",
  },
  {
    id: 6,  
    title: "Workflow AutoNation",
    description: "Automate repetitive tasks and workflows to save time and improve efficiency.",
  },
]

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });
    // Framer motion variants for staggered animation
    const container = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.3, // gap between cards
            },
        },
    };

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };


  return (
    <div>
      <Navbar/>
      <div className='bg-[#3182ED0F] text-center py-[120px]'>
        <div className='w-full sm:w-[78%] m-auto flex flex-col gap-6 px-3 sm:px-0'>
            <MOTION.h2
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }} 
            className='poppins-semibold text-[36px] md:text-[44px] lg:text-[54px]'>Unlock the Power of Seamless <br/><span className='text-[#3182ED]'>Event Management</span></MOTION.h2>
            <MOTION.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='poppins-semibold text-[16px] md:text-[18px] lg:text-[20px] text-[#333333CC]'>The complete platform for event companies to manage vendors, streamline communication, and deliver flawless events. Built specifically for event professionals who demand excellence.</MOTION.p>
        </div>
      </div>
      {/* <KeyFeatures/> */}
      <div className='w-[92%] m-auto my-20'>
        <h3 className='poppins-semibold text-[24px] md:text-[26px] lg:text-[32px] text-[#333333]'>Key Feature</h3>
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
              className='bg-[#FFFFFF] shadow-[0px_4px_14px_0px_#00000014] rounded-[16px] py-8 px-5'>
                  <img src={finance} alt="icon" />
                  <h4 className='poppins-medium text-[24px] text-[#333333E5] mt-6 mb-3'>{feature.title}</h4>
                  <p className='poppins-medium text-[18px] text-[#333333B2] mb-2'>{feature.description}</p>
              </MOTION.div>
              </AnimatePresence>
            ))}
        </MOTION.div>
        </AnimatePresence>
      </div>
      {/* focus */}
      <div className='w-[92%] m-auto mt-[120px]'>
        <h2 className='poppins-semibold text-[24px] md:text-[26px] lg:text-[32px] text-[#333333]'>Secure, Compliant, and Reliable</h2>
        <p className='poppins-medium text-[18px] text-[#333333CC] mb-2 w-full sm:w-[80%]'>EventFlow prioritizes the security and reliability of your data. We adhere to industry-leading security standards and compliance regulations to ensure your events run smoothly and your information is protected.</p>
      </div>
      <Adoption 
        heading="Easy Adoption for Vendors at no extra cost"
        text="Save up to 15+ hours per event by streamlining vendor coordination and management."
        btnText="See How it Works"
        my="120px"
      />
      <Footer/>
    </div>
  )
}

export default Features