import React, {useState} from 'react'
import minus from '../../../assets/icons/minus-circle.svg'
import plus from '../../../assets/icons/plus-circle.svg'

const FAQs = () => {

   const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you and your team members and the listed vendors can use the app free up to 15 days. After that, you will be charged according to the plan and cancel the subscription at any time or change the plan accordingly."
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Our web development service includes custom design, responsive development, SEO optimization, performance optimization, security implementation, content management system setup, analytics integration, and 30 days of post-launch support."
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time from your account settings. Upon cancellation, you will retain access to the service until the end of your current billing cycle. We do not offer refunds for partial billing periods."
  },
  {
    question: "What if the vendor is listed by me but no longer actively working for me. Am I charged for it? ",
    answer:
      "You can always change your vendor list as per your campaigns."
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add your company name, address, and other details to the invoice from the account settings."
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is handled through our secure payment gateway. Invoices are generated automatically and sent to your registered email address."
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from the account settings. An email verification will be sent to the new email address to confirm the change."
  },
];

const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='w-[92%] m-auto my-30'>
      <div className='text-center'>
        <h3 className='my-1 poppins-semibold text-[26px] md:text-[36px] text-[#101828]'>Frequently asked questions</h3>
        <p className='poppins-regular text-[18px] md:text-xl text-[#475467]'>Everything you need to know about the product and billing.</p>
      </div>
      {/* faqs */}
         <div className="w-[95%] md:w-[65%] m-auto mt-8">
        {faqs.map((faq, index) => (
            <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`rounded-lg mb-2 cursor-pointer transition-colors duration-300 ${
                openIndex === index ? "bg-[#3182ED14]" : "bg-[#fff]"
            }`}
            >
            <div className="flex py-8 px-4 sm:px-8 items-start gap-6 sm:items-center text-black text-[18px] poppins-medium" style={{textAlign: 'left'}}>
                <span
                className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : "rotate-180"
                }`}
                >
                {openIndex === index ? <img src={plus} alt="icon" /> : <img src={minus} alt="icon" />}
                </span>
                <span>{faq.question}</span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                    ? "max-h-[500px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
            >
                <p style={{textAlign: 'left'}} className="text-[#475467] px-8 pb-9 pt-5 poppins-regular text-[16px] leading-relaxed">{faq.answer}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default FAQs