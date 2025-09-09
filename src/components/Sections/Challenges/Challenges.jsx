import React from 'react'
import { motion as MOTION, useInView } from 'framer-motion';
import question from '../../../assets/icons/circle-ques.svg'
import tick from '../../../assets/icons/tick-circle.svg'
import curve from '../../../assets/icons/curveLine.svg'
import AnimatedCard from '../AnimatedCard/AnimatedCard';


const Challenges = ({setShowSignup}) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // animate only first time (optional)
        threshold: 0.2,    // 20% of the section visible = trigger
    });

    const challenges = [
        {
            id: 1,
            text: "Juggling between spreadsheets, emails, WhatsApp, and other tools to get your tasks streamlined.",
            type: 'meidium'
        },
        {
            id: 2,
            text: "Manually tracking which vendors confirmed, which need follow-up, and which payments are overdue.",
            type: 'meidium'
        },
        {
            id: 3,
            text: "Starting from scratch for every new event because vendor history is scattered everywhere.",
            type: 'danger'
        },
        {
            id: 4,
            text: "Multiple follow-ups to get full visibility of the budget.",
            type: 'success'
        },
        {
            id: 5,
            text: "Emails and spreadsheets to manage stakeholders and keep them informed of event progress.",
            type: 'success'
        },
    ]
    const solutions = [
        {
            id: 1,
            text: "Consolidated platform to track budget, invoices, maintain vendor profiles and manage seamless coordination.",
            type: 'meidium'
        },
        {
            id: 2,
            text: "Our platform streamlines your coordination with vendors with periodic notifications to keep you on track.",
            type: 'meidium'
        },
        {
            id: 3,
            text: "Easy handover between team members, as all vendor information is consolidated.",
            type: 'danger'
        },
        {
            id: 4,
            text: "Budget tracker with visibility to all relevant stakeholders to keep everyone on the same page.",
            type: 'success'
        },
        {
            id: 5,
            text: "Visibility of event progress via dashboard. Better transparency.",
            type: 'success'
        },
    ]
   
  return (
    <section className='w-[92%] m-auto relative py-30'>
        <div className=" w-full h-full overflow-x-hidden">
        <div className="absolute w-[393px] h-[281px] top-0 right-0 rounded-full bg-[#A465FD66] blur-[184px]"></div>
        </div>
        {/* channelges and solutions */}
        <div className='w-full block sm:flex items-center justify-between gap-4'>
            <div className='w-full sm:w-[43%]'>
                <h2 className='poppins-semibold text-center sm:text-left text-[32px] text-[#333]'>The Challenges You Face</h2>
                {challenges.map((challenge) => (
                    <AnimatedCard key={challenge.id} delay={challenge.id * 0.2}>
                    <div className={`rounded-[12px] min-h-[118px] px-4 py-3 flex items-start mt-7 justify-start ${challenge.type === 'meidium' ? 'bg-[#EAE7F9]' : challenge.type === 'danger' ? 'bg-[#ED00591F]' : 'bg-[#17C6661F]'}`}>
                        <div className='flex gap-2 items-start py-4'>
                            <img src={question} alt="icon" />
                        <p className='text-lg poppins-regular text-[#333333CC] w-[85%]'>{challenge.text}</p>
                        </div>
                    </div>
                    </AnimatedCard>
                ))} 
            </div>
            {/* vertical line with curve */}
            {/* <AnimatedCard delay={0.3}> */}
            <div className="w-[17%] hidden sm:flex flex-col justify-between mt-26" style={{ height: '-webkit-fill-available' }}>
  {[
                    { id: 1, src: curve },
                    { id: 2, src: curve },
                    { id: 3, src: curve },
                    { id: 4, src: curve },
                    { id: 5, src: curve },
                ].map((item, index) => (
                    <AnimatedCard key={item.id} delay={index * 0.2}>
                    <img className="h-[97px] w-[218px]" src={item.src} alt="curve line" />
                    </AnimatedCard>
                ))}
                </div>
            {/* </AnimatedCard> */}
            {/* solutions */}
            <div className='w-full sm:w-[43%] mt-10 sm:mt-0'>
                <h2 className='poppins-semibold text-center sm:text-left text-[32px] text-[#333]'>How VendComm Transforms Them</h2>
                {solutions.map((challenge) => (
                    <AnimatedCard key={challenge.id} delay={challenge.id * 0.2}>
                    <div 

                    ref={ref}
                        initial={{ x: -200, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}} // run when visible
                        transition={{ duration: 1, ease: "easeOut" }} 

                    key={challenge.id} className={`rounded-[12px] min-h-[118px] px-4 py-3 flex items-start mt-7 justify-start ${challenge.type === 'meidium' ? 'bg-[#EAE7F9]' : challenge.type === 'danger' ? 'bg-[#ED00591F]' : 'bg-[#17C6661F]'}`}>
                        <div className='flex gap-2 items-start py-4'>
                            <img src={tick  } alt="icon" />
                        <p className='text-lg poppins-regular text-[#333333CC]'>{challenge.text}</p>
                        </div>
                    </div>
                    </AnimatedCard>
                ))}
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center text-center my-5'>
            <button onClick={() => setShowSignup(true)} className='text-white poppins-semibold cursor-pointer text-[14px] md:text-[16px] py-3 rounded-[8px] w-full sm:w-[25%] mt-10 bg-[#3182ED]'>Sign up for waitlist</button>
        </div>
    </section>
  )
}

export default Challenges