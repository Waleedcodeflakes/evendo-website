import React from 'react'
import { motion as MOTION } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children, delay = 0 }) => {
     const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
  return (
     <MOTION.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </MOTION.div>
  )
}

export default AnimatedCard