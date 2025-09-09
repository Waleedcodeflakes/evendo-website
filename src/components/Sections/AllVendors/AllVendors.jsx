import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import FeaturesLeft from '../FeaturesLeft/FeaturesLeft'
import FeaturesRight from '../FeaturesRight/FeaturesRight'
import firstSection from '../../../assets/img/young-model.svg'
import chats from '../../../assets/img/chats.svg'
import invoices from '../../../assets/img/budget.svg'
import memoryBank from '../../../assets/img/memoryBank2.svg'
import handoffs from '../../../assets/img/handoffs.svg'

const AllVendors = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

  return (
    <div className='w-[92%] m-auto flex flex-col items-center justify-center'>
        <h2 className='poppins-semibold text-[32px] text-center text-[#333]'>Finally, All Your Vendors in One Platform</h2>
        <p className='poppins-medium text-lg text-[#333333CC] w-full sm:w-[50%] text-center'>Plan smarter, manage seamlessly, and deliver events with confidence. <br/> Our platform brings every tool you need into one place.</p>
        <section className='relative'>
        <div className='w-full block sm:flex items-center justify-between gap-[64px]'>
            <AnimatePresence>
                <MOTION.div
                ref={ref}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                initial={{ x: -50, opacity: 0 }} 
                exit={{ x: -50, opacity: 0 }}
               className='w-full sm:w-[50%] relative my-[2rem] sm:my-0'>
                    <div className='absolute right-0 top-0 sm:right-16 sm:top-12 z-10'>
                        <img className='w-full' src={chats} alt="image" />
                    </div>
                    <div className="absolute w-[278px] h-[208px] top-18 right-16 rounded-full bg-[#3A85FC9E] blur-[214px]"></div>
                    <img className='w-full' src={firstSection} alt="image" />
                </MOTION.div>
            </AnimatePresence>
            <AnimatePresence>
                <MOTION.div
                    ref={ref}
                    initial={{ x: 50, opacity: 0 }} 
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='w-full sm:w-[50%] flex flex-col justify-center relative'>
                    <div className="absolute w-[293px] h-[281px] top-0 right-5 rounded-full bg-[#A465FD66] blur-[144px]"></div>
                    <p className='poppins-medium text-sm text-[#3182ED]'>Seamless Vendor Communication</p>
                    <h3 className='poppins-semibold text-[30px] text-[#333]'>One Inbox, Zero Chaos</h3>
                    <p className='poppins-medium text-[20px] text-[#333333CC] w-[90%]'>Never lose another vendor message. Email, WhatsApp, calls, contracts - everything lives in one organized platform</p>
                </MOTION.div>
            </AnimatePresence>
        </div>
        </section>
        <div className='flex flex-col gap-[150px] my-[150px]'>
        {/* invoices */}
        <FeaturesRight
            img={invoices}
            smallText = "Smart Budget Management"
            title= "Budget Intelligence"
            desc="Automatically track payments, due dates, and vendor costs. See your entire event budget in real-time without switching spreadsheets. "
        />
        {/* memory bank */}
        <FeaturesLeft
            img={memoryBank}
            smallText = "Smart Vendor Management"
            title= "Vendor Memory Bank"
            desc="Every quote, conversation, and performance note saved forever. Plan your next event in minutes, not weeks, using your complete vendor history"
        />
        {/* handoffs */}
        <FeaturesRight
            img={handoffs}
            smallText = "Smart Vendor Management"
            title= "Seamless Handoffs"
            desc={`Share vendor relationships with your team instantly. Save time on onboarding and training new team members with a swift handover.`}
        />
        </div>
    </div>
  )
}

export default AllVendors