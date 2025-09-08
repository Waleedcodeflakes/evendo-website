import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import minus from '../../../assets/icons/minus-circle.svg'
import plus from '../../../assets/icons/plus-circle.svg'

const FAQs = ({my}) => {

   const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you and your team members and the listed vendors can use the app free up to 15 days. After that, you will be charged according to the plan and cancel the subscription at any time or change the plan accordingly."
  },
  {
    question: "What if the vendor is listed by me but no longer actively working for me. Am I charged for it?",
    answer:
      "You can always change your vendor list as per your active campaigns and will be eligible to number of vendors as per your plan."
  },
  {
    question: "Is there a mobile app for this?",
    answer:
      "Yes, you can access the app on mobile. The communication Hub gives notifications and can be used to communicate with multiple vendors. The full functionality of the app will be available on the web version."
  },
];

const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className='w-[92%] m-auto' style={{marginTop: my ? my : 'my-30', marginBottom: my ? my : 'my-30'}}>
      <div className='text-center'>
        <h3 className='my-1 poppins-semibold text-[26px] md:text-[36px] text-[#101828]'>Frequently asked questions</h3>
        <p className='poppins-regular text-[18px] md:text-xl text-[#475467]'>Everything you need to know about the product and billing.</p>
      </div>
      {/* faqs */}
      <AnimatePresence>
         <MOTION.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         className="w-[95%] md:w-[65%] m-auto mt-8">
        {faqs.map((faq, index) => (
            <AnimatePresence key={index}>
            <MOTION.div
            ref={ref}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => toggleFAQ(index)}
            className={`rounded-lg mb-2 cursor-pointer transition-colors duration-300 ${
                openIndex === index ? "bg-[#3182ED14]" : "bg-[#fff]"
            }`}
            >
            <div className="flex py-8 px-4 sm:px-8 gap-6 sm:items-center text-black text-base sm:text-[18px] poppins-medium" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <span
                className={`transition-transform w-[8%] sm:w-fit duration-300 ${
                    openIndex === index ? "rotate-0" : "rotate-90"
                }`}
                >
                {openIndex === index ? <img className='w-[20px] h-[20px]' src={minus} alt="icon" /> : <img className='w-[20px] h-[20px]' src={plus} alt="icon" />}
                </span>
                <span className='w-[92%] sm:w-fit'>{faq.question}</span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
            >
                <p style={{textAlign: 'left'}} className="text-[#475467] px-8 pb-9 pt-5 poppins-regular text-sm sm:text-[16px] leading-relaxed">{faq.answer}</p>
            </div>
            </MOTION.div>
            </AnimatePresence>
        ))}
        </MOTION.div>
      </AnimatePresence>
    </section>
  )
}

export default FAQs