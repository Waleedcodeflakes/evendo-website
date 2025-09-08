import React from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import zap from '../../../assets/icons/zap.svg'
import layers from '../../../assets/icons/layers.svg'
import tickBlue from '../../../assets/icons/Check icon.svg'
// import tickGrey from '../../../assets/icons/icon-grey.svg'

const Pricing = ({bgColor}) => {
    
    const plans = [
        {
            id: 1,
            isActive: false,
            icon: zap,
            title:'Basic',
            price: '$15/month',
            desc: 'Our most popular plan.',
            plans: ["Access to all basic features","Manage up to 10 vendors portfolio ","User access for 5 users ","10 vendors do not pay anything extra to use the app"
                ],
        },
        {
            id: 2,
            isActive: true,
            icon: layers,
            title:'Pro',
            price: '$25/month',
            desc: 'Advanced features and reporting.',
            plans: ["Access to all basic features","Manage up to 20 vendors portfolio ","User access for 10 users ","20 vendors do not pay anything extra to use the app"
                ],
        },
        {
            id: 3,
            isActive: false,
            icon: layers,
            title:'Custom',
            price: 'Flexible',
            desc: 'Unlimited features.',
            plans: [
                    "Based on the number of vendors and team access usage.",
                    "Basic reporting and analytics",
                    "Up to 10 individual users",
                    "20GB individual data each user",
                    "Basic chat and email support",
                ],
        },
    ];

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
            hidden: { y: 100, opacity: 0 },
            visible: { y: 0, opacity: 1 },
        };

  return (
    <section className='w-[92%] m-auto my-30' style={{backgroundColor: bgColor ? bgColor : 'transparent'}}>
        <div className='text-center'>
            <p className='poppins-medium text-sm text-[#3182ED]'>Pricing</p>
            <h3 className='my-1 poppins-semibold text-[30px] md:text-[48px] text-[#333]'>Plans that fit your scale</h3>
            <p className='poppins-regular text-[18px] md:text-xl text-[#475467]'>Simple, transparent pricing that grows with you. Try any plan free for 15 days.</p>
        </div>
        <AnimatePresence>
        <MOTION.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center w-full justify-between my-15'>
            {plans.map((plan) => (
                <AnimatePresence key={plan.id}>
                <MOTION.div 
                    ref={ref}
                    variants={item}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                className={`rounded-[8px] w-full relative text-center p-8 ${plan.isActive ? 'bg-[#3182ED1F] border border-[#3182ED]' : 'bg-[#F9FAFB]'}`}>
                    <div className='flex justify-center'>
                        <div className='absolute top-[-22px] opacity-80 bg-white rounded-full flex items-center justify-center w-12 h-12 border-[8px] border-[#3182ED14]'>
                            <img src={plan.icon} alt={plan.title} />
                        </div>
                    </div>
                    <div className='mt-6 flex flex-col gap-3'>
                        <h3 className='text-[#3182ED] poppins-semibold text-lg'>{plan.title} Plan</h3>
                        <h2 className='poppins-semibold text-[30px] md:text-[48px] text-[#333]'>{plan.price}</h2>
                            <p className='poppins-regular text-[14px] md:text-[16px] text-[#475467]'>{plan.desc}</p>
                    </div>
                    <div className='mt-8 text-left'>
                        {plan.plans.map((plan) => (
                            <div className='flex items-start gap-3 mt-4'>
                            <img src={tickBlue} alt="icon tick" />
                            <p className='poppins-regular text-[14px] md:text-[16px] text-[#475467]'>{plan}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className='text-white poppins-semibold text-[14px] md:text-[16px] py-3 w-full rounded-[8px] mt-10 bg-[#3182ED]'>Get started</button>
                    </div>
                </MOTION.div>
                </AnimatePresence>
            ))}
        </MOTION.div>
        </AnimatePresence>
    </section>
  )
}

export default Pricing