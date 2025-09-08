import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";


const FeaturesRight = ({img, title, desc, smallText}) => {

  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
  });

  return (
    <section className='relative'>
        <div className='w-full block sm:flex items-center justify-between gap-[64px] relative'>
            <div className="absolute w-[293px] h-[281px] top-0 left-5 rounded-full bg-[#A465FD66] blur-[184px]"></div>
            <AnimatePresence>
            <MOTION.div 
              ref={ref}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              initial={{ x: -50, opacity: 0 }} 
              exit={{ x: -50, opacity: 0 }}
            className='w-full sm:w-[50%] flex flex-col justify-center relative mb-[2rem] sm:mb-0'>
                <p className='poppins-medium text-sm text-[#3182ED]'>{smallText}</p>
                <h3 className='poppins-semibold text-[30px] text-[#333]'>{title}</h3>
                <p className='poppins-medium text-[20px] text-[#333333CC]'>{desc}</p>
            </MOTION.div>
            </AnimatePresence>
            <AnimatePresence>
            <MOTION.div
              ref={ref}
              initial={{ x: 50, opacity: 0 }} 
              animate={inView ? { x: 0, opacity: 1 } : {}}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='w-full sm:w-[50%]'>
                <img className='w-full' src={img} alt="image" />
            </MOTION.div>
            </AnimatePresence>
        </div>
    </section>
  )
}

export default FeaturesRight