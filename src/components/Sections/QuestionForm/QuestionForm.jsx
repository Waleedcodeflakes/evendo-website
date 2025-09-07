import React from 'react'
import mediaForm from '../../../assets/img/mediaLast.svg'

const QuestionForm = () => {
  return (
    <section className='w-[92%] m-auto my-25'>
      <div className='text-center'>
        <h3 className='my-1 poppins-semibold text-[26px] md:text-[36px] text-[#101828]'>Got a Question? We’re Here to Help!</h3>
        <p className='poppins-regular text-[18px] md:text-xl text-[#333333]'>Our team is here to answer your questions and guide you through getting started.</p>
      </div>
      <div className='flex w-[70%] m-auto justify-between mt-10'>
        <div className='w-full md:w-[40%]'>
            <form className="space-y-4">
                <label htmlFor="name" className="text-sm poppins-medium text-[#333333] pb-3">First Name</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <input 
                    type="text" 
                    placeholder="Enter first name" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    />
                </div>
                {/* last name */}
                <label htmlFor="name" className="text-sm poppins-medium text-[#333333] pb-3">Last Name</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <input 
                    type="text" 
                    placeholder="Enter last name" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    />
                </div>
                {/* messsage */}
                <label htmlFor="message" className="text-sm poppins-medium text-[#333333] pb-3">Message</label>
                <div className='mt-2 mb-6 border border-[#33333380] rounded-[20px] py-3 px-4 w-full'>
                    <textarea name="message" id="message" placeholder="Share your queries" rows="4" className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"></textarea>
                    {/* <input 
                    type="text" 
                    placeholder="Message" 
                    className="w-full border-none outline-none text-[#000000B0] placeholder:text-[#000000B0] text-sm"
                    /> */}
                </div>
                {/* vendors */}
                <button 
                type="submit" 
                className="w-fit bg-[#3182ED] text-white py-2  px-10 rounded-[48px] poppins-medium text-lg transition mt-2"
                >
                Submit
                </button>
            </form>
        </div>
        <div className='hidden md:block w-[40%]'>
            <img src={mediaForm} alt="image" />
        </div>
      </div>
    </section>
  )
}

export default QuestionForm