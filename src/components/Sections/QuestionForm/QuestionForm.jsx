import React, {useState} from 'react'
// import { motion as MOTION, AnimatePresence } from 'framer-motion';
// import { useInView } from "react-intersection-observer";
import mediaForm from '../../../assets/img/mediaLast.svg'
import axios from 'axios';

const QuestionForm = ({packageName}) => {

  const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  const api = 'https://aspbackend.hifahdevs.com/api/registerInterest/register-interest'

  // console.log({firstName, lastName, email, packageName});
      const handleSubmit = async (e) => {
          e.preventDefault();
          if(!firstName || !lastName || !email || !message) {
            alert("please fill out the fields!")
            return
          }
          try {
           const res  = await axios.post(api, {
              firstName: firstName,
              lastName: lastName,
              email: email,
              message: message,
              packageName: packageName,
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            alert("Query submitted! wait for response!")
            console.log("Response : ",res.data);
      
          } catch (error) {
            console.log( "Error : ",error.message);
          } finally {
      // Clear form fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }
        }

  return (
    <section className='w-[92%] m-auto my-20'>
      <div className='text-center'>
        <h3 className='my-1 poppins-semibold text-[26px] md:text-[36px] text-[#101828]'>Got a Question? We’re Here to Help!</h3>
        <p className='poppins-regular text-[18px] md:text-xl text-[#333333]'>Our team is here to answer your questions and guide you through getting started.</p>
      </div>
      <div className='flex w-full sm:w-[70%] m-auto justify-between mt-10'>
        {/* form animation */}
        <div
        // ref={ref}
        // animate={inView ? { x: 0, opacity: 1 } : {}}
        // transition={{ duration: 1, ease: "easeOut" }}
        // initial={{ x: -50, opacity: 0 }} 
        // exit={{ x: -50, opacity: 0 }}
        className='w-full md:w-[50%]'>
            <form className="space-y-4">
              <div className='block sm:flex items-center gap-4'>
                <div className='w-full sm:w-[50%]'>
                <label htmlFor="name" className="text-sm poppins-medium text-[#333333] pb-3">First Name</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <input 
                    value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    type="text" 
                    placeholder="First name" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    />
                </div>
                </div>
                <div className='w-full sm:w-[50%]'>
                  {/* last name */}
                <label htmlFor="name" className="text-sm poppins-medium text-[#333333] pb-3">Last Name</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <input 
                    value={lastName} onChange={(e) => setLastName(e.target.value)}
                    type="text" 
                    placeholder="Last name" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    />
                </div>
                </div>
              </div>
                
                {/* Email */}
                <label htmlFor="name" className="text-sm poppins-medium text-[#333333] pb-3">Email</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <input 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    />
                </div>
                {/* messsage */}
                <label htmlFor="message" className="text-sm poppins-medium text-[#333333] pb-3">Message</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" placeholder="Share your queries" rows="4" className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"></textarea>
                </div>
                {/* vendors */}
                <button 
                onClick={(e) => handleSubmit(e)}
                type="submit" 
                className="w-fit bg-[#3182ED] cursor-pointer text-white py-2  px-10 rounded-[48px] poppins-medium text-lg transition-all duration-300 ease-in-out mt-2 hover:shadow-2xl"
                >
                Free Early Sign up
                </button>
            </form>
        </div>
        {/* image animation */}
        <div
        className='hidden md:block w-[40%]'>
            <img src={mediaForm} alt="image" />
        </div>
      </div>
    </section>
  )
}

export default QuestionForm