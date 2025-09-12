import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import hub from '../../../assets/icons/vendors.svg'
import finance from '../../../assets/icons/money-send.svg'
import marketing from '../../../assets/icons/task.svg'
import relationship from '../../../assets/icons/clock.svg'
import hubMockup from '../../../assets/img/communication.svg'
import financeMockup from '../../../assets/img/financeMockup.svg'
import taskMockup from '../../../assets/img/taskMockup.svg'
import relationshipMockup from '../../../assets/img/relationMockup.svg'

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            icon: hub,
            title: "Vendor Communication Hub",
            mockup: hubMockup,
            bullets: ["Unified inbox for all vendor conversations","Smart threading by event and vendor type","Alignment bucket to tag all agreed terms","Read receipts and approvals"]
        },
        {
            id: 2,
            icon: finance,
            title: "Financial Command Center",
            mockup: financeMockup,
            bullets: ["Real-time budget tracking per event","Centralized invoice organization","Payment deadline alerts","Vendor cost comparison tools within the same category "]
        },
        {
            id: 3,
            icon: marketing,
            title: "Task Management",
            mockup: taskMockup,
            bullets: ["Shared vendor contacts and notes","Task assignments and deadlines","Permission-based access control"]
        },
        {
            id: 4,
            icon: relationship,
            title: "Relationship History",
            mockup: relationshipMockup,
            bullets: ["Searchable vendor database","Performance ratings and notes","Past event collaboration records"]

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
    <section className='my-20'>
        <div className='w-[92%] m-auto flex flex-col items-center justify-center mb-[44px]'>
            <h2 className='poppins-semibold text-center text-[32px] text-[#333]'>Key Features to Streamline Your Events</h2>
            <p className='poppins-medium text-lg text-[#333333CC] w-full sm:w-[48%] text-center'>Plan smarter, manage seamlessly, and deliver events with confidence. Our platform brings every tool you need into one place.</p>
        </div>
        {/* features grid */}
        <AnimatePresence>
            <MOTION.div 
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            className='w-[92%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8 row-gap-30 mb-[100px]'>
                {features.map((feature) => (
                    <AnimatePresence key={feature.id}>
                    <MOTION.div
                    ref={ref}
                    variants={item}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                     className="relative flex flex-col items-start gap-6 py-8 pb-18 px-6 rounded-[12px] bg-[#3182ED] text-white mb-[180px]">
                        <img className='w-10 h-10' src={feature.icon} alt={feature.title} />
                        <h3 className='poppins-semibold text-[20px] text-[#fff]'>{feature.title}</h3>
                        <ul className='list-disc list-inside poppins-regular text-[#fff] text-base w-full sm:w-[60%]'>
                            {feature.bullets.map((bullet, index) => (
                                <li key={index} className='mb-2'>{bullet}</li>
                            ))}
                        </ul>
                        <div className='absolute bottom-[-120px] left-0 flex w-full justify-center'>
                            <img src={feature.mockup} alt="icon" />
                        </div>
                    </MOTION.div>
                    </AnimatePresence>
                ))}
            </MOTION.div>
        </AnimatePresence>
    </section>
  )
}

export default KeyFeatures