import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import clock from '../../../assets/icons/clock.svg'


const Adoption = ({heading, text, btnText, radius, my}) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
      <AnimatePresence>
        <MOTION.section
          ref={ref}
          initial={{ y: 50, opacity: 0 }} 
          exit={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        className='w-[92%] m-auto text-center py-[64px] bg-[#3182ED] px-4' style={{borderRadius: radius ? radius : '0px', marginTop: my ? my : '120px', marginBottom: my ? my : '120px'}} >
        <div className='w-full flex justify-center'>
            <img src={clock} alt="icon" />
        </div>
        <h2 className='poppins-semibold text-[32px] text-[#fff] my-3'>{heading}</h2>
        <div className='flex justify-center'>
          <p className='poppins-medium text-[20px] text-[#FFFFFFCC] text-center w-full sm:w-[60%]'>{text}</p>
        </div>
        <button className='text-[#3182ED] poppins-medium text-[20px] bg-[#FFFFFF] py-3 px-5 mt-[44px] rounded-[8px]'>{btnText}</button>
    </MOTION.section>
    </AnimatePresence>
  )
}

export default Adoption