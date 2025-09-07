import React from 'react'
import clock from '../../../assets/icons/clock.svg'


const Adoption = () => {
  return (
        <section className='w-[92%] m-auto text-center py-[64px] bg-[#3182ED] my-30'>
        <div className='w-full flex justify-center'>
            <img src={clock} alt="icon" />
        </div>
        <h2 className='poppins-semibold text-[32px] text-[#fff] my-3'>No Extra Cost for Vendors! Easy Adoption</h2>
        <p className='poppins-medium text-[20px] text-[#FFFFFFCC] text-center'>Save up to 15+ hours per event by streamlining vendor communication and <br/> management.</p>
        <button className='text-[#3182ED] poppins-medium text-[20px] bg-[#FFFFFF] py-3 px-5 mt-[44px] rounded-[8px]'>See How it Works</button>
    </section>
  )
}

export default Adoption